import  supabase  from '../Utils/supabase';

export class User{

    static async create_prueba(nombre: string){
        const{data, error} = await supabase.rpc('create_prueba',{
            p_nombre: nombre
        });
        if(error){
            throw error;
        }
        return data;
    }

        
    static async read_pruebas(){
        const{data, error} = await supabase.rpc('read_pruebas',{
        });
        if(error){
            throw error;
        }
        return data;
    }

        
    static async read_prueba_by_id(id: number){
        const{data, error} = await supabase.rpc('read_prueba_by_id',{
            p_id: id
        });
        if(error){
            throw error;
        }
        return data;
    }

    static async update_prueba(id: number, nombre: string){
        const{data, error} = await supabase.rpc('update_prueba',{
            p_id: id,
            p_nombre: nombre
        });
        if(error){
            throw error;
        }
        return data;
    }

    static async delete_prueba(id: number){
        const{data, error} = await supabase.rpc('delete_prueba',{
            p_id: id,
        });
        if(error){
            throw error;
        }
        return data;
    }
}