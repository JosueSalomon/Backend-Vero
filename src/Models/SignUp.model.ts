import  supabase  from '../Utils/supabase';

export class Sign_up{
    static async VerifyCode(email: string, code: string){
        const{data, error} = await supabase.rpc('p_verify_code',{
            p_email: email,
            p_code: code
        });
        if(error){
            throw error;
        }
        return{
            codigo: data.code,
            mensaje: data.message,
        }
    }

    static async GenerateNewCode(email: string, code: string){
        const{data, error} = await supabase.rpc('p_generate_new_code',{
            p_email: email,
            p_code: code
        });
        if(error){
            throw error;
        }
        return{
            codigo: data.code,
            mensaje: data.message,
        }
    }
}