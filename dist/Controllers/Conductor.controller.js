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
exports.RegistroConductor = exports.uploadImage = void 0;
const imageKitConfig_1 = __importDefault(require("../Utils/imageKitConfig"));
const Conductor_model_1 = require("../Models/Conductor.model");
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
const RegistroConductor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombres, apellidos, dni, telefono, correo, contrasena, genero, id_tipo_usuario, id_institucion_bancaria, numero_cuenta_bancaria, } = req.body;
    const verificationCode = generarCodigoAleatorio();
    try {
        const Response = yield Conductor_model_1.Conductor.RegistroConductor(nombres, apellidos, dni, telefono, correo, contrasena, genero, id_tipo_usuario, id_institucion_bancaria, numero_cuenta_bancaria, verificationCode);
        res.status(200).json({
            Response
        });
    }
    catch (error) {
        console.log("error con registro del conductor", error);
        res.status(500).json({ message: 'error con registro del conductor', error });
    }
});
exports.RegistroConductor = RegistroConductor;
