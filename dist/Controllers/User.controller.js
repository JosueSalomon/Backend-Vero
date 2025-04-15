"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUser = exports.getCounterofferDetail = exports.getCounteroffersUser = exports.CreateRoute = void 0;
const user_model_1 = require("../Models/user.model");
const smtpService_1 = require("../services/smtpService");
const Driver_controller_1 = require("./Driver.controller");
const CreateRoute = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id } = req.params;
    const { departure_point, arrival_point, departure_time, start_date, end_date, estimated_price, comment, return_time, departure_coordinate_x, departure_coordinate_y, arrival_coordinate_x, arrival_coordinate_y, days_id } = req.body;
    try {
        console.log("User ID recibido:", user_id); // <-- Agregar esto
        const Response = yield user_model_1.User.CreateRoute(Number(user_id), departure_point, arrival_point, departure_time, start_date, end_date, estimated_price, comment, return_time, days_id, departure_coordinate_x, departure_coordinate_y, arrival_coordinate_x, arrival_coordinate_y);
        res.status(200).json(Response);
    }
    catch (error) {
        console.log("Error con creacion de la ruta", error);
        res.status(500).json({ message: 'Error con creacion de la ruta', error });
    }
});
exports.CreateRoute = CreateRoute;
const getCounteroffersUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield user_model_1.User.getCounteroffersUser(Number(id));
        res.status(200).json(data);
    }
    catch (error) {
        console.log("Error con creacion de la ruta", error);
        res.status(500).json({ message: 'Error con creacion de la ruta', error });
    }
});
exports.getCounteroffersUser = getCounteroffersUser;
const getCounterofferDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield user_model_1.User.getCounterofferDetail(Number(id));
        res.status(200).json(data);
    }
    catch (error) {
        console.log("Error con creacion de la ruta", error);
        res.status(500).json({ message: 'Error con creacion de la ruta', error });
    }
});
exports.getCounterofferDetail = getCounterofferDetail;
const RegisterUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombres, apellidos, dni, telefono, correo, contrasena, genero, url_profile_pic, } = req.body;
    const Description = `¡Bienvenido a Vero! Nos alegra que quieras registrarte en nuestra plataforma. Para completar tu registro y asegurar tu identidad, es necesario ingresar el siguiente código de verificación. Si no realizaste esta solicitud, puedes ignorar este mensaje.`;
    const verificationCode = (0, Driver_controller_1.generarCodigoAleatorio)();
    try {
        const Response = yield user_model_1.User.RegisterUser(nombres, apellidos, dni, telefono, correo, contrasena, genero, url_profile_pic, verificationCode);
        res.status(200).json({
            Response,
        });
        if (Response.codigo === 1) {
            console.log("Enviando correo a:", correo);
            yield (0, smtpService_1.sendVerificationEmail)(correo, verificationCode, Description);
            console.log("Correo enviado correctamente.");
        }
    }
    catch (error) {
        console.log("Error con registro del conductor", error);
        res.status(500).json({ message: 'Error con registro del conductor', error });
    }
});
exports.RegisterUser = RegisterUser;
