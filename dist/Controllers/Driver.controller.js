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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDriver = exports.CreateCounterOffers = exports.getDriverTrips = exports.RegisterDriver = exports.uploadImage = void 0;
const imageKitConfig_1 = __importDefault(require("../Utils/imageKitConfig"));
const smtpService_1 = require("../services/smtpService");
const Driver_model_1 = require("../Models/Driver.model");
function generarCodigoAleatorio() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';
    for (let i = 0; i < 6; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        codigo += caracteres[indiceAleatorio];
    }
    return codigo;
}
const uploadImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const file = req.file;
        const fileName = file === null || file === void 0 ? void 0 : file.originalname;
        if (!file) {
            res.status(400).json({ error: 'No se proporcionó ninguna imagen' });
            return;
        }
        // Convertir el archivo a base64
        const base64File = file.buffer.toString('base64');
        const folderPath = '/Vero'; // 
        const response = yield imageKitConfig_1.default.upload({
            file: base64File, // Archivo en base64
            fileName: fileName || 'default_image_name.jpg', // Nombre del archivo
            folder: folderPath, // Carpeta donde se almacenará la imagen
        });
        const imageUrl = response.url; // La URL de la imagen almacenada
        console.log('Imagen subida con éxito. URL:', imageUrl);
        res.status(200).json({ imageUrl: imageUrl });
    }
    catch (error) {
        console.error('Error al subir la imagen:', error);
        res.status(500).json({ error: 'Error al subir la imagen' });
    }
});
exports.uploadImage = uploadImage;
const RegisterDriver = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombres, apellidos, dni, telefono, correo, contrasena, genero, id_tipo_usuario, front_license_img_url, front_license, back_license_img_url, back_license, front_revision_img_url, front_revision, back_revision_img_url, back_revision, car_img_url_1, car_1, car_img_url_2, car_2, car_img_url_3, car_3, brand, year, color, plate } = req.body;
    const Description = `¡Bienvenido a Vero! Nos alegra que quieras registrarte en nuestra plataforma. Para completar tu registro y asegurar tu identidad, es necesario ingresar el siguiente código de verificación. Si no realizaste esta solicitud, puedes ignorar este mensaje.`;
    const verificationCode = generarCodigoAleatorio();
    try {
        const Response = yield Driver_model_1.Driver.RegisterDriver(nombres, apellidos, dni, telefono, correo, contrasena, genero, id_tipo_usuario, verificationCode, front_license_img_url, front_license, back_license_img_url, back_license, front_revision_img_url, front_revision, back_revision_img_url, back_revision, car_img_url_1, car_1, car_img_url_2, car_2, car_img_url_3, car_3, brand, year, color, plate);
        res.status(200).json({
            Response,
        });
        if (Number(Response.codigo === 1)) {
            console.log("Enviando correo a:", correo);
            yield (0, smtpService_1.sendVerificationEmail)(correo, verificationCode, Description);
            console.log("Correo enviado correctamente.");
        }
        console.log(Response.codigo);
    }
    catch (error) {
        console.log("Error con registro del conductor", error);
        res.status(500).json({ message: 'Error con registro del conductor', error });
    }
});
exports.RegisterDriver = RegisterDriver;
const getDriverTrips = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const driverTrip = yield Driver_model_1.Driver.getDriverTrips(Number(id));
        res.status(201).json({
            driverTrip
        });
    }
    catch (error) {
        const errorInfo = error && typeof error === 'object'
            ? JSON.stringify(error, null, 2)
            : (error === null || error === void 0 ? void 0 : error.toString()) || 'Unknown error';
        console.error('Error Information: ', errorInfo);
        res.status(500).json({
            message: 'Error Information: ',
            error: errorInfo
        });
    }
});
exports.getDriverTrips = getDriverTrips;
const CreateCounterOffers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { route_id, counteroffer, comment } = req.body;
    try {
        const Response = yield Driver_model_1.Driver.CreateCouterOffer(Number(id), route_id, counteroffer, comment);
        res.status(200).json({
            Response
        });
    }
    catch (error) {
        console.log("Error con creacio de contraoferta", error);
        res.status(500).json({
            message: 'Error con creacio de contraoferta', error
        });
    }
});
exports.CreateCounterOffers = CreateCounterOffers;
const UpdateDriver = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { phone, email, url_photo } = req.body;
    try {
        const Response = yield Driver_model_1.Driver.UpdateDriver(Number(id), phone, email);
        res.status(200).json({
            Response
        });
    }
    catch (error) {
        console.log("Error con actualizar el usuario", error);
        res.status(500).json({
            message: 'Error con actualizar el usuario', error
        });
    }
});
exports.UpdateDriver = UpdateDriver;
