import express from 'express';
import { createPayment, executePayment } from '../Controllers/Pagos.controller'
import { Request, Response } from 'express';

const router = express.Router();

router.post('/create', async (req: Request, res: Response) => {
    try {
        await createPayment(req, res);
    } catch (error) {
    res.status(500).send("Error en el pago");
    }
});

router.get('/get/:tripId/:amount', async (req: Request, res: Response) => {
    try {
    await executePayment(req, res);
    } catch (error) {
    res.status(500).send("Error al obtener el pago");
    }
});



export default router;