import { Request, Response } from 'express';
import {Driver} from "../Models/Driver.model"

export const getDriverTrips = async (req: Request, res: Response) => {
    try{
        const {driverId} = req.params;

        const driverTrip = await Driver.getDriverTrips(Number(driverId));

        res.status(201).json({
            driverTrip
        })
    } catch (error) {
        const errorInfo = error && typeof error === 'object'
            ? JSON.stringify(error, null, 2)
            : error?.toString() || 'Unknown error';

        console.error('Error Information: ', errorInfo);
        res.status(500).json({
            message: 'Error Information: ', 
            error: errorInfo
        });
    }
}