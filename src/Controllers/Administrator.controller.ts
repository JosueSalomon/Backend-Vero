import { Request, Response } from 'express';
import { Administrator } from '../Models/Administrator.model'

export const getReports = async (req: Request, res: Response) => {
    try {
        const reports = await Administrator.getReports();

        res.status(201).json({
            reports
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

export const getReportDetail = async (req: Request, res: Response) => {
    try{
        
        const {id} = req.params;

        const reportDetail = await Administrator.reportDetail(Number(id));

        res.status(201).json({
            reportDetail
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

export const updateDriverStatus = async (req: Request, res: Response) => {
    try{
        
        const {userId,
            userStatusId} = req.body;

        const data = await Administrator.updateDriverStatus(userId,userStatusId);

        res.status(201).json({
            data
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