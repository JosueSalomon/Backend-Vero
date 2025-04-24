import { Request, Response } from 'express';
import axios from 'axios';
import { Pagos } from '../Models/Pagos.model'

const auth = {
    username: process.env.CLIENT_ID || '',
    password: process.env.SECRET_KEY || ''
};

//Conversión de lempiras a dolares
const obtenerConversion = async (from: string, to:string): Promise<number> => {
    try{
        const response = await axios.get(
            `https://api.exchangerate-api.com/v4/latest/${from}`
        );
        const rate = response.data.rates[to];

        if(!rate){
            throw new Error('No se encontró una tasa de cambio');
        }

        return rate;
    } catch (error) {
        console.error("Error obteniendo la tasa de cambio:", error);
        throw new Error("No se pudo obtener la tasa de cambio");
    }
};

const convertirADolar = async (montoHN: number): Promise<number> => {
    const conversionRate = await obtenerConversion('HNL', 'USD');
    return montoHN * conversionRate;
}

// Crear una orden de pago
export const createPayment = async (req: Request, res: Response) => {
    const { amount, tripId } = req.body;
    console.log(tripId);
    
    if (!amount || isNaN(amount)) {
        return res.status(400).json({ error: 'Monto inválido o no proporcionado' });
    }

    try {
        const montoEnUSD = await convertirADolar(amount);

    const body = {
        intent: 'CAPTURE',
        purchase_units: [
            {
                amount: {
                    currency_code: 'USD',
                    value: montoEnUSD.toFixed(2)
                }
            }
        ],
        application_context: {
            brand_name: 'Vero',
            landing_page: 'NO_PREFERENCE',
            user_action: 'PAY_NOW',
            return_url: `https://backend-vero.vercel.app/payment/get/${tripId}/${amount}`,
            cancel_url: 'https://vero-6qby.vercel.app/journey/myroutes'
        }
    };

        const response = await axios.post(
            `${process.env.PAYPAL_API}/v2/checkout/orders`,
            body,
            {
                auth,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        res.json({ data: response.data });
    } catch (error) {
        const errorInfo = error && typeof error === 'object'
            ? JSON.stringify(error, null, 2)
            : error?.toString() || 'Error desconocido';

        console.error('Información del error: ', errorInfo);
        res.status(500).json({
            message: 'Información del error: ', 
            error: errorInfo
        });
    }
};

// Capturar el dinero del pago
export const executePayment = async (req: Request, res: Response) => {
    const tripIdp = Number(req.params.tripId);
    const amountp = Number(req.params.amount);
    const token = req.query.token;
    
    if (!token) {
        return res.status(400).json({ error: 'Token de orden no proporcionado' });
    }
    
    try {
        const response = await axios.post(
            `${process.env.PAYPAL_API}/v2/checkout/orders/${token}/capture`,
            {},
            {
                auth,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        const paymentData = response.data;

        const paypalOrder= paymentData.id;
        const statusPayment= paymentData.status;

        const info = await Pagos.executePayment(
            tripIdp,
            amountp,
            paypalOrder,
            statusPayment
        );


        if (!info) {
            throw new Error('No se pudo guardar la información del pago en la base de datos');
        }
//hola
        res.redirect('vero-6qby.vercel.app/journey/myroutes');
    } catch (error) {
        const errorInfo = error && typeof error === 'object'
            ? JSON.stringify(error, null, 2)
            : error?.toString() || 'Error desconocido';

        console.error('Información del error: ', errorInfo);
        res.status(500).json({
            message: 'Información del error: ', 
            error: errorInfo
        });
    }
};