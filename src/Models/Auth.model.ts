import  supabase  from '../Utils/supabase';
import jwt from 'jsonwebtoken'
import { createToken } from '../services/jwt'


export class Auth {
    static async login(email: string, password: string): Promise<any> {
        try {
            
        const { data, error } = await supabase.rpc('p_login', {
            p_email: email,
            p_password: password
        });
        
        if (!data) {
            return "null";
        }

        if (data.code === 2) {
            return {
                code: 2,
                message: "Usuario no existente"
            };
        }

        if (data.code === 3) {
            return {
                code: 3,
                message: "Usuario no validado"
            };
        }

        if (data.code === 4) {
            return {
                code: 4,
                message: "Credenciales incorrectas"
            };
        };

        if (!data || !data.user_id || !data.names || !data.email || !data.profile_img_url) {
            console.error("Error: Insufficient data to generate the token", data);
            return "Insufficient data to generate the token";
        }
    
        const token = createToken(data.user_id, data.names, data.email, data.profile_img_url);
        const result = await this.insertUserToken(email, password, token);

        data.token = token;

            
        return data;
        } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("Unknown error");
        }
        }
    }
    
    static async insertUserToken(email: any, password: any, token: any): Promise<any> {
    try {
        const { data, error } = await supabase.rpc('p_insert_token', {
        p_email: email,
        p_password: password,
        p_token: token
        });

        if (error) {
            console.log(error)
        throw new Error(`Error: ${error.message}`)
        }
        
        console.log(data);

    } catch (error: unknown) {
        if (error instanceof Error) {
        throw new Error(error.message);
        } else {
        throw new Error("Unknown error");
        }
    }
    }
}