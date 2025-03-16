import { Request, Response } from 'express';
import express from 'express';
import imagekit from '../Utils/imageKitConfig';
import {Driver} from "../Models/Driver.model"

interface MulterRequest extends Request {
    file?: Express.Multer.File; 
}

function generarCodigoAleatorio() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';
    for (let i = 0; i < 6; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        codigo += caracteres[indiceAleatorio];
    }
    return codigo;
}

export const uploadImage = async (req: MulterRequest, res: Response): Promise<void> => {
    try {
        const file = req.file; 
        const fileName = file?.originalname; 
        if (!file) {
        res.status(400).json({ error: 'No se proporcionó ninguna imagen' });
        return;  
    }

      // Convertir el archivo a base64
    const base64File = file.buffer.toString('base64');
    const folderPath = '/Vero'; // 

    const response = await imagekit.upload({
        file: base64File, // Archivo en base64
        fileName: fileName || 'default_image_name.jpg', // Nombre del archivo
        folder: folderPath, // Carpeta donde se almacenará la imagen
    });

      const imageUrl = response.url; // La URL de la imagen almacenada

    console.log('Imagen subida con éxito. URL:', imageUrl); 
    res.status(200).json({ imageUrl: imageUrl });

    } catch (error) {
    console.error('Error al subir la imagen:', error);
    res.status(500).json({ error: 'Error al subir la imagen' });
    }
};

export const RegisterDriver = async (req: Request, res: Response) => {
    const {
        nombres,
        apellidos,
        dni,
        telefono,
        correo,
        contrasena,
        genero,
        id_tipo_usuario,
        front_license_img_url,
        front_license,
        back_license_img_url,
        back_license,
        front_revision_img_url,
        front_revision,
        back_revision_img_url,
        back_revision,
        car_img_url_1,
        car_1,
        car_img_url_2,
        car_2,
        car_img_url_3,
        car_3
    } = req.body;

    const verificationCode = generarCodigoAleatorio();

    try {
        const Response = await Driver.RegisterDriver(
            nombres,
            apellidos,
            dni,
            telefono,
            correo,
            contrasena,
            genero,
            id_tipo_usuario,
            verificationCode,
            front_license_img_url,
            front_license,
            back_license_img_url,
            back_license,
            front_revision_img_url,
            front_revision,
            back_revision_img_url,
            back_revision,
            car_img_url_1,
            car_1,
            car_img_url_2,
            car_2,
            car_img_url_3,
            car_3
        );

        
        res.status(200).json({
            Response,
        });
    } catch (error: any) {
        console.log("Error con registro del conductor", error);
        res.status(500).json({ message: 'Error con registro del conductor', error });
    }
};
