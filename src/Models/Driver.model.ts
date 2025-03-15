import  supabase  from '../Utils/supabase';

export class Driver {

    static async getDriverTrips(driverId: number){
        const{data, error} = await supabase.rpc('p_get_driver_trips',{
            p_driver_id: driverId
        });
        if(error){
            throw error;
        }
        return data;
    }
}