import supabase from '../Utils/supabase'


export class User{
    static async CreateRoute(
        user_id: number , 
        departure_point: string,
        arrival_point: string,
        departure_time: string,
        start_date: string,
        end_date: string,
        estimated_price: number,
        comment: string,
        return_time: string,
        id_days_array: number[]){
        const{data, error} = await supabase.rpc('p_create_route',{
            p_user_id: user_id,
            p_departure_point: departure_point,
            p_arrival_point: arrival_point,
            p_departure_time: departure_time,
            p_start_date: start_date,
            p_end_date: end_date,
            p_estimated_price: estimated_price,
            p_comment: comment,
            p_return_time: return_time,
            p_days_id: id_days_array
        });
        if (!data){
            return "null";
        }

        if(data.code===2){
            return{
                code: 2,
                message: "El usuario no se encuentra o no tiene el tipo adecuado"
            };
        }

        if(data.code ===3){
            return{
                code: 3,
                message: "Error: la ruta ya existe"
            }
        }

        if(data.code ===4){
            return{
                code: 4,
                message: "Error en los datos proporcionados"
            }
        }

        if(data.code === 5){
            return{
                code: 5,
                message: "Error del servidor al crear la ruta"
            }
        }

        if(data.code ===1){
            return{
                code: 1,
                message: "Ruta creada con exito",
                route: data.route
            }
        }

        if(error){
            throw error;
        }
    }

    static async getCounteroffersUser (routeId: number){
        
        const{data,error} = await supabase.rpc('p_get_counteroffers_user',{
            p_route_id: routeId
        });
        if(error){
            throw error;
        }
        return data;
    }

    static async getCounterofferDetail (counterofferId: number) {
        
        const {data, error} = await supabase.rpc('p_get_counteroffer_detail',{
            p_counteroffer_id: counterofferId
        });

        if(error){
            throw error;
        }

        return data;

    }
}