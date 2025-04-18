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


export const getRequestDriver = async (req: Request, res: Response) => {   
    const {id} = req.params;
    try{
        const requestDriver = await Administrator.getRequestDriver(Number(id));
        res.status(201).json({
            requestDriver
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


export const getComissionsToPayDriver = async (req: Request, res: Response) => {
    const {id} = req.params;
    try{
        const Response = await Administrator.get_comissions_to_pay_for_driver(Number(id));

        res.status(200).json({
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


export const get_commission_detail = async (req: Request, res: Response) => {
    const {id} = req.params;   
    try{
        const Response = await Administrator.get_commission_detail(
            Number(id)
        );

        res.status(200).json({
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


export const drivers_to_pay = async (req: Request, res: Response) => {
    try{
        const Response = await Administrator.drivers_to_pay();

        res.status(200).json({
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