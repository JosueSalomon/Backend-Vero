import jwt from 'jsonwebtoken'
import {NextFunction, Request, Response} from 'express'
import dotenv from 'dotenv'
dotenv.config()

export const createToken = (user_id: any, names:any, email:any, img:any): any => {
    const token = jwt.sign(
        {
            user_id,
            names, 
            email,
            img
        },
        process.env.SECRET_TOKEN || 'secure_token',
        {
            expiresIn: '24hr' //token valid for 24 hours
        }
    );

    return token;
}
