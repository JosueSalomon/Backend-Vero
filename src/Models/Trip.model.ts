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

    static async cancelTripFromDriver(tripId: number){
        const{data, error} = await supabase.rpc('p_cancel_trip_from_driver',{
            p_trip_id: tripId
        });
        if(error){
            throw error;
        }
        return data;
    }
}