import  supabase  from '../Utils/supabase';

export class Pagos {

    static async executePayment(
        tripId: number,
        amount: number,
        paypalOrder: string,
        statusPayment: string
    ){
        const { data, error } = await supabase.rpc('p_user_payments', {
            p_trip_id: tripId,
            p_amount: amount,
            p_paypal_order: paypalOrder,
            p_status: statusPayment
        });
        if (error) {
            throw error;
        }
        return data;
    }
}