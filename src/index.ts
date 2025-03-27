import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUI from "swagger-ui-express"
import specs from "./Utils/swagger"


//rutass ola
import conductorRouter from './Routes/Driver.routes'
import authRoutes from './Routes/Auth.routes'
import signupRoutes from './Routes/SignUp.routes'
import tripRoutes from './Routes/Trip.routes'
import userRoutes from './Routes/user.routes'

dotenv.config();
require('dotenv').config();
const app: Express = express();
const port = process.env.PORT;
app.use("/api-docs",swaggerUI.serve, swaggerUI.setup(specs));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rutas
app.use('/driver',conductorRouter);
app.use('/auth', authRoutes);
app.use('/sign_up', signupRoutes);
app.use('/trip', tripRoutes);
app.use('/user',userRoutes)

// app.use('/producto', productoRouter);
// app.use('/factura', facturaRouter)
// app.use('/pago', pagoRouter)

//Servidor Raiz.
app.get('/', (req: Request, res: Response) => {
    res.send('Root server is on siuuuuuuuuu todo funciona bien ');
});

//Mensaje de consola que dice que funciona.
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
});