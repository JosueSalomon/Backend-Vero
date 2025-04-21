import { Request, Response } from 'express';
import {User} from '../Models/user.model'
import { sendVerificationEmail } from '../services/smtpService';
import { generarCodigoAleatorio } from './Driver.controller';

export const CreateRoute = async (req: Request, res:Response) =>{
    const {user_id} = req.params;
    const {
        departure_point,
        arrival_point,
        departure_time,
        start_date,
        end_date,
        estimated_price,
        comment,
        return_time,
        departure_coordinate_x,
        departure_coordinate_y,
        arrival_coordinate_x,
        arrival_coordinate_y,
        days_id} = req.body;

    try{
        console.log("User ID recibido:", user_id); // <-- Agregar esto
        const Response = await User.CreateRoute(
            Number(user_id),
            departure_point,
            arrival_point, 
            departure_time, 
            start_date, 
            end_date, 
            estimated_price, 
            comment, 
            return_time,
            days_id,
            departure_coordinate_x,
            departure_coordinate_y,
            arrival_coordinate_x,
            arrival_coordinate_y);

            res.status(200).json(
                Response
            )

    } catch (error) {
        console.log("Error con creacion de la ruta", error);
        res.status(500).json({ message: 'Error con creacion de la ruta', error });
    }
}

export const getCounteroffersUser = async (req: Request, res: Response) => {

    try {
        
        const {id} = req.params;

        const data = await User.getCounteroffersUser(Number(id));

        res.status(200).json(data);
    } catch (error: any) {
        console.log("Error con creacion de la ruta", error);
        res.status(500).json({ message: 'Error con creacion de la ruta', error });
    }
};

export const getCounterofferDetail = async (req: Request, res: Response) => {
    try {
        
        const {id} = req.params;

        const data = await User.getCounterofferDetail(Number(id));

        res.status(200).json(data);

    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: 'Error', error });
    }
}

export const RegisterUser = async (req: Request, res: Response) => {    
    const {
        nombres,
        apellidos,
        dni,
        telefono,
        correo,
        contrasena,
        genero,
        url_profile_pic,
    } = req.body;
    const Description = `¡Bienvenido a Vero! Nos alegra que quieras registrarte en nuestra plataforma. Para completar tu registro y asegurar tu identidad, es necesario ingresar el siguiente código de verificación. Si no realizaste esta solicitud, puedes ignorar este mensaje.`;
    const verificationCode = generarCodigoAleatorio();
    try {
        const Response = await User.RegisterUser(
            nombres,
            apellidos,
            dni,
            telefono,
            correo,
            contrasena,
            genero,
            url_profile_pic,
            verificationCode
        );

        
        res.status(200).json({
            Response,
        });

        if(Response.codigo ===1 ){
            console.log("Enviando correo a:", correo);
            await sendVerificationEmail(correo, verificationCode, Description);
            console.log("Correo enviado correctamente.");
        }

    } catch (error: any) {
        console.log("Error con registro del conductor", error);
        res.status(500).json({ message: 'Error con registro del conductor', error });
    }

}


export const AcceptTrip = async (req: Request, res: Response) => {
    const {id} = req.params;

    try{
        const Response = await User.acceptRoute(Number(id));

        res.status(200).json({
            Response
        })
    }catch(error: any){
        console.log("Error con AcceptRoute", error);
        res.status(500).json({
            message: 'Error con AcceptRoute', error
        })
    }

}

export const getRoutes = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;

        const data = await User.getRoutes(Number(id));

        res.status(200).json(data);
    } catch (error) {
        console.log("Error get routes", error);
        res.status(500).json({
            message: 'Error get routes', error
        });
    };
};

export const getUserTripDetail = async (req: Request, res: Response) => {
    try {
        
        const {id} = req.params;

        const data = await User.getUserTripDetail(Number(id));

        res.status(200).json(data);

    } catch (error) {
        console.log("Error con obtener detalles de ruta", error);
        res.status(500).json({ message: 'Error con obtener detalles de ruta', error });
    };
};