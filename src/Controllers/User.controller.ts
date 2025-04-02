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
        return_time,
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
            days_id
            );

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
        console.log("Error con creacion de la ruta", error);
        res.status(500).json({ message: 'Error con creacion de la ruta', error });
    }
}