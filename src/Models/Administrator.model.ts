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
}