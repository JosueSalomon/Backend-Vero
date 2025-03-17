import { Request, Response } from 'express';
import express from 'express';
import { Auth } from '../Models/Auth.model'

export const Login = async (req: Request, res: Response) => {
    try{
            const {email, password} = req.body;
            const data = await Auth.login(email, password);
            
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
} 