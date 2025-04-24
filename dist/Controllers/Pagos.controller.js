"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executePayment = exports.createPayment = void 0;
const axios_1 = __importDefault(require("axios"));
const Pagos_model_1 = require("../Models/Pagos.model");
const auth = {
    username: process.env.CLIENT_ID || '',
    password: process.env.SECRET_KEY || ''
};
//Conversión de lempiras a dolares
const obtenerConversion = (from, to) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`https://api.exchangerate-api.com/v4/latest/${from}`);
        const rate = response.data.rates[to];
        if (!rate) {
            throw new Error('No se encontró una tasa de cambio');
        }
        return rate;
    }
    catch (error) {
        console.error("Error obteniendo la tasa de cambio:", error);
        throw new Error("No se pudo obtener la tasa de cambio");
    }
});
const convertirADolar = (montoHN) => __awaiter(void 0, void 0, void 0, function* () {
    const conversionRate = yield obtenerConversion('HNL', 'USD');
    return montoHN * conversionRate;
});
// Crear una orden de pago
const createPayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { amount, tripId } = req.body;
    console.log(tripId);
    if (!amount || isNaN(amount)) {
        return res.status(400).json({ error: 'Monto inválido o no proporcionado' });
    }
    try {
        const montoEnUSD = yield convertirADolar(amount);
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
        const response = yield axios_1.default.post(`${process.env.PAYPAL_API}/v2/checkout/orders`, body, {
            auth,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        res.json({ data: response.data });
    }
    catch (error) {
        const errorInfo = error && typeof error === 'object'
            ? JSON.stringify(error, null, 2)
            : (error === null || error === void 0 ? void 0 : error.toString()) || 'Error desconocido';
        console.error('Información del error: ', errorInfo);
        res.status(500).json({
            message: 'Información del error: ',
            error: errorInfo
        });
    }
});
exports.createPayment = createPayment;
// Capturar el dinero del pago
const executePayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tripIdp = Number(req.params.tripId);
    const amountp = Number(req.params.amount);
    const token = req.query.token;
    if (!token) {
        return res.status(400).json({ error: 'Token de orden no proporcionado' });
    }
    try {
        const response = yield axios_1.default.post(`${process.env.PAYPAL_API}/v2/checkout/orders/${token}/capture`, {}, {
            auth,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const paymentData = response.data;
        const paypalOrder = paymentData.id;
        const statusPayment = paymentData.status;
        const info = yield Pagos_model_1.Pagos.executePayment(tripIdp, amountp, paypalOrder, statusPayment);
        if (!info) {
            throw new Error('No se pudo guardar la información del pago en la base de datos');
        }
        //hola
        res.redirect('https://vero-6qby.vercel.app/journey/myroutes');
    }
    catch (error) {
        const errorInfo = error && typeof error === 'object'
            ? JSON.stringify(error, null, 2)
            : (error === null || error === void 0 ? void 0 : error.toString()) || 'Error desconocido';
        console.error('Información del error: ', errorInfo);
        res.status(500).json({
            message: 'Información del error: ',
            error: errorInfo
        });
    }
});
exports.executePayment = executePayment;
