import { Request, Response } from 'express';
import {SignUp} from '../Models/Sign.model'
import {sendVerificationEmail} from "../services/smtpService"
import { generarCodigoAleatorio } from './Driver.controller';


export const VerifyCode = async (req: Request, res: Response) => {
    try{
            const {email, code} = req.body;
            const Response = await SignUp.VerifyCode(email, code);
            
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
    const {email} = req.body;
    try{
        const Description = `¡Bienvenido a Vero! Nos alegra que quieras registrarte en nuestra plataforma. Para completar tu registro y asegurar tu identidad, es necesario ingresar el siguiente código de verificación. Si no realizaste esta solicitud, puedes ignorar este mensaje.`;
        const verificationCode = generarCodigoAleatorio();
        const Response = await SignUp.GenerateNewCode(email, verificationCode);
        await sendVerificationEmail(email, verificationCode, Description);
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