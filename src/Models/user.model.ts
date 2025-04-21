import supabase from '../Utils/supabase'


export class User{
    static async RegisterUser(
        p_first_names: string,
        p_last_names: string,
        p_dni : string,
        p_phone     : string,
        p_email    : string,
        p_password : string,
        p_gender : string,
        p_url_profile_pic : string,
        p_verification_code : string,
    ){
        const {data,error} = await supabase.rpc('p_register_user',{
            p_first_names: p_first_names,
            p_last_names: p_last_names,
            p_dni: p_dni,
            p_phone: p_phone,
            p_email: p_email,
            p_password: p_password,
            p_gender: p_gender,
            p_url_profile_pic: p_url_profile_pic,
            p_verification_code: p_verification_code,
        });
        if (error) {
            throw new Error(`Error al registrar al usuarii: ${error.message}`);
        }
    
        return {
            codigo: data.code,
            mensaje: data.message,
            usuarioRegistrado: data.registered_driver
        };
    }


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
        id_days_array: number[],
        departure_coordinate_x: number,
        departure_coordinate_y: number,
        arrival_coordinate_x: number,
        arrival_coordinate_y: number,){
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
            p_days_id: id_days_array,
            p_departure_coordinate_x: departure_coordinate_x,
            p_departure_coordinate_y: departure_coordinate_y,
            p_arrival_coordinate_x: arrival_coordinate_x,
            p_arrival_coordinate_y: arrival_coordinate_y,
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

    static async getCounteroffersUser (userId: number){
        
        const{data,error} = await supabase.rpc('p_get_counteroffers_user',{
            p_user_id: userId
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


    static async acceptRoute(route_id: number) {
        const { data, error } = await supabase.rpc('p_accept_trip_user', {
            p_counteroffer_id: route_id,
        });
    
        if (error) {
            console.error("Supabase RPC Error:", error);
            throw error;
        }
    
        if (!data) {
            return {
                code: -1,
                message: "No se recibió respuesta del servidor"
            };
        }
    
        switch (data.code) {
            case 0:
                return {
                    code: 1,
                    message: "Viaje creado exitosamente"
                };
            case 3:
                return {
                    code: 3,
                    message: "No se encontró contraoferta para la ruta"
                };
            case 5:
                return {
                    code: 5,
                    message: "Error al aceptar el viaje"
                };
            default:
                return {
                    code: data.code,
                    message: data.message || "Respuesta desconocida"
                };
        }
    }

    static async getRoutes (userId: number) {
        const {data, error } = await supabase.rpc('p_get_routes', {
            p_user_id: userId
        });
        if (error) {
            throw error;
        };
        return data;
    }

}