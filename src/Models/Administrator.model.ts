import supabase from '../Utils/supabase';

export class Administrator {
    
    static async getReports(){
        const {data, error} = await supabase.rpc('p_get_reports');
        if(error){
            throw error;
        }
        return data;
    }

    static async reportDetail(reportId: number){
        const {data, error} = await supabase.rpc('p_report_detail',{
            p_report_id: reportId
        });
        if(error){
            throw error;
        };
        return data;
    }

    static async updateDriverStatus(
        userId: number,
        userStatusId: number 
    ){
        const {data, error} = await supabase.rpc('p_update_driver_status',{
            p_user_id: userId,
            p_user_status_id: userStatusId 
        });
        if(error){
            throw error;
        };
        return data;
    }

    static async getRequestDriver(
        driverID: number
    ){
        const {data, error} = await supabase.rpc('p_request_detail',{
            p_driver_id: driverID
        })
        if(error){
            throw error;
        }
        return data;
    }

    static async get_comissions_to_pay_for_driver(
        id_driver: number 
    ){
        const {data, error} = await supabase.rpc('p_get_comissions_to_pay_for_driver',{
            p_id_driver: id_driver
        });
        if(error){
            throw error;
        }
        return data;    
    }

    static async get_commission_detail(id_comisiones_pagar: number){
        const {data,error} = await supabase.rpc('p_get_comissions_to_pay_for_driver_by_id',{
            p_id_comisiones_pagar: id_comisiones_pagar
        })
        if(error){
            throw error;
        }
        return data;
    }

    static async drivers_to_pay(){
        const {data, error} = await supabase.rpc('p_drivers_to_pay');
        if(error){
            throw error;
        }
        return data;
    }

    static async get_drivers_applications(){
        const {data, error} = await supabase.rpc('p_get_drivers_applications');
        if(error){
            throw error;
        }
        return data;
    }

    static async register_payment_and_update_commission(
        id_comisiones_pagar: number,
        recibo_url: string,
    ){
        const {data, error} = await supabase.rpc('p_save_history_payment',{
            p_id_comisiones_pagar: id_comisiones_pagar,
            p_url_reciet: recibo_url
        });
        if(error){
            throw error;
        }
        if(data.code===1){
            return {
                message: 'Se guardo el registro de pago',
                code:1
            }
        }
        if(data.code=! 1){
            return {
                message: 'error del servido',
                code:2
            }
        }
    }


    static async updateReport(reportID: number, idStatus: number){
        const {data, error} = await supabase.rpc('p_update_report',{
            p_report_id: reportID,
            p_new_status: idStatus
    })
    if(error){
        throw error;
    }
    return data;
    }
}