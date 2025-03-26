"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("./Utils/swagger"));
//rutass ola
const Driver_route_1 = __importDefault(require("./Routes/Driver.route"));
const Auth_routes_1 = __importDefault(require("./Routes/Auth.routes"));
const Trip_routes_1 = __importDefault(require("./Routes/Trip.routes"));
dotenv_1.default.config();
require('dotenv').config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//Rutas
app.use('/driver', Driver_route_1.default);
app.use('/auth', Auth_routes_1.default);
app.use('/trip', Trip_routes_1.default);
// app.use('/producto', productoRouter);
// app.use('/factura', facturaRouter)
// app.use('/pago', pagoRouter)
//Servidor Raiz.
app.get('/', (req, res) => {
    res.send('Root server is on siuuuuuuuuu todo funciona bien ');
});
//Mensaje de consola que dice que funciona.
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
});
