import { Request, Response } from 'express';
import { Trip } from '../Models/Trip.model';


export const getTripDetails = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const tripDetails = await Trip.getTripDetails(Number(id));

        res.status(201).json({
            tripDetails
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
};

    export const cancelTripFromDriver = async (req: Request, res: Response) => {
        try{
            const {id} = req.params;
            const {reportingUserTypeId} = req.body;
            const data = await Trip.cancelTripFromDriver(Number(id), reportingUserTypeId);
    
            res.status(201).json({
                data
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
    };

    export const reportTripUser = async (req: Request, res: Response) => {
        try{
            
            const {
                tripId,
                reportStatusId,
                reportedUserId,
                reportingUserId,
                reportingUserTypeId,
                reportSubject,
                reportDescription,
                reporterDate,
                reportUrlImages
            } = req.body;
            
            const data = await Trip.reportTripUser(
                tripId,
                reportStatusId,
                reportedUserId,
                reportingUserId,
                reportingUserTypeId,
                reportSubject,
                reportDescription,
                reporterDate,
                reportUrlImages
                            );
    
            res.status(201).json({
                data
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
    };


export const RateTrips = async (req: Request, res: Response) => {
    const {id} = req.params;
    const {user_Rating_id, calificacion, comment} = req.body;

    try{
        const Response = await Trip.RateTrip(user_Rating_id,calificacion, Number(id), comment);
        res.status(201).json({
            Response
        })
    }catch(error){
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