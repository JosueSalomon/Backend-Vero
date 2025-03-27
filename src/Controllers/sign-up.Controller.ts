import { Request, Response } from 'express';
import { Sign_up } from '../Models/sign-up.model'

export const VerifyCode = async (req: Request, res: Response) => {
    try{
            const {email, code} = req.body;
            const Response = await Sign_up.VerifyCode(email, code);
            
            res.status(201).json({
                Response
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

export const generate_new_code = async (req: Request, res: Response) => {
    try{
            const {email, code} = req.body;
            const Response = await Sign_up.GenerateNewCode(email, code);
            
            res.status(201).json({
                Response
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