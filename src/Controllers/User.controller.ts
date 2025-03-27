import { Request, Response } from 'express';
import {User} from '../Models/user.model'

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
        return_time,} = req.body;

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
            return_time
            );

            res.status(200).json(
                Response
            )

    } catch (error) {
        console.log("Error con creacion de la ruta", error);
        res.status(500).json({ message: 'Error con creacion de la ruta', error });
    }
}