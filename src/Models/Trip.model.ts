import supabase from '../Utils/supabase'

export class Trip {
    
    static async getTripDetails(tripId: number){
        const{data, error} = await supabase.rpc('p_get_trip_details',{
            p_trip_id: tripId
        });
        if(error){
            throw error;
        }
        return data;
    }

    static async cancelTripFromDriver(tripId: number, reportingUserTypeId: number){
        const{data, error} = await supabase.rpc('p_cancel_trip',{
            p_trip_id: tripId,
            p_reporting_user_type_id: reportingUserTypeId
        });
        if(error){
            throw error;
        }
        return data;
    }

    static async reportTripUser(
        tripId: number,
        reportStatusId: number,
        reportedUserId: number,
        reportingUserId: number,
        reportingUserTypeId: number,
        reportSubject: string,
        reportDescription: string,
        reporterDate: string,
        reportUrlImages: string[]
    ){
        const{data, error} = await supabase.rpc('p_report_trip',{
            p_trip_id: tripId,
            p_report_status_id: reportStatusId,
            p_reported_user_id: reportedUserId,
            p_reporting_user_id: reportingUserId,
            p_reporting_user_type_id: reportingUserTypeId,
            p_report_subject: reportSubject,
            p_report_description: reportDescription,
            p_reporter_date: reporterDate,
            p_report_url_image: reportUrlImages
        });
        if(error){
            throw error;
        }
        return data;
    }
}