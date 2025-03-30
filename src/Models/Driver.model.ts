import  supabase  from '../Utils/supabase';


export class Driver {
    static async RegisterDriver(
        first_names: string,
        last_names: string,
        dni: string,
        phone: string,
        email: string,
        password: string,
        gender: string,
        user_type_id: number,
        verification_code: string,
        url_profile_pic: string,
    
        front_license_img_url: string,
        front_license: string,
        back_license_img_url: string,
        back_license: string,
    
        front_revision_img_url: string,
        front_revision: string,
        back_revision_img_url: string,
        back_revision: string,
    
        car_img_url_1: string,
        car_1: string,
        car_img_url_2: string,
        car_2: string,
        car_img_url_3: string,
        car_3: string,

        brand: string,
        year: number,
        color: string,
        plate: string
    ) {
        const { data, error } = await supabase.rpc('p_register_driver', {
            p_first_names: first_names,
            p_last_names: last_names,
            p_dni: dni,
            p_phone: phone,
            p_email: email,
            p_password: password,
            p_gender: gender,
            p_user_type_id: user_type_id,
            p_verification_code: verification_code,
            p_url_profile_pic: url_profile_pic,
            // Nuevos parámetros de imágenes
            p_front_license_img_url: front_license_img_url,
            p_front_license: front_license,
            p_back_license_img_url: back_license_img_url,
            p_back_license: back_license,
    
            p_front_revision_img_url: front_revision_img_url,
            p_front_revision: front_revision,
            p_back_revision_img_url: back_revision_img_url,
            p_back_revision: back_revision,
    
            p_car_img_url_1: car_img_url_1,
            p_car_1: car_1,
            p_car_img_url_2: car_img_url_2,
            p_car_2: car_2,
            p_car_img_url_3: car_img_url_3,
            p_car_3: car_3,

            p_brand: brand,
            p_year: year, 
            p_color: color,
            p_plate: plate
        });
    
        if (error) {
            throw new Error(`Error al registrar al conductor: ${error.message}`);
        }
    
        return {
            codigo: data.code,
            mensaje: data.message,
            conductorRegistrado: data.registered_driver
        };
    }
    
    static async getDriverTrips(driverId: number){
        const{data, error} = await supabase.rpc('p_get_driver_trips',{
            p_driver_id: driverId
        });
        if(error){
            throw error;
        }
        return data;
    };


    static async CreateCouterOffer(
        driver_id: number,
        route_id: number,
        counteroffer: string,
        comment: string        
    ){
        const{data,error} = await supabase.rpc('p_create_counteroffers',{
            p_driver_id:driver_id ,
            p_route_id:route_id ,
            p_counteroffer: counteroffer ,
            p_comment:comment 
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

    if(data.code===3){
        return{
            code: 3,
            message: "Error: la contraoferta ya existe"
        };
    }

    if(data.code===4){
        return{
            code: 4,
            message: "Error en los datos proporcionados"
        };
    }

    if(data.code===5){
        return{
            code: 5,
            message: "Error del servidor al crear la contraoferta"
        };
    }

    if(data.code ===1){
        return{
            code: 1,
            message: "Contraoferta generada con éxito",
            route: data.counteroffer
        }
    }

    if(error){
        throw error;
    }

    }

    static async UpdateDriver(
        driver_id: number,
        phone: string,
        email: string,

    ){
        const{data,error} = await supabase.rpc('p_edit_person',{
            p_driver_id: driver_id,
            p_phone: phone,
            p_email: email,

    });
    if (!data){
        return "null";
    }

    if(data.code===2){
        return{
            code: 2,
            message: "El usuario no existe "
        };
    }

    if(data.code===3){
        return{
            code: 3,
            message: "El email ya está en uso por otro usuario"
        };
    }

    if(data.code===7){
        return{
            code: 4,
            message: "El telefono ya está en uso por otro usuario"
        };
    }

    if(data.code===5){
        return{
            code: 5,
            message: "Error en los datos proporcionados"
        };
    }

    if(data.code===6){
        return{
            code: 6,
            message: "Error del servidor al actualizar la persona"
        };
    }

    if(data.code ===1){
        return{
            code: 1,
            message: "Actualizacion con exito",
            route: data.updated_driver
        }
    }

    if(error){
        throw error;
    }

}

}