import { Request, Response } from 'express';
import express from 'express';
import imagekit from '../Utils/imageKitConfig';
import {sendVerificationEmail} from "../services/smtpService"
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
        car_3,
        brand,
        year,
        color,
        plate
    } = req.body;
    const Description = `¡Bienvenido a Vero! Nos alegra que quieras registrarte en nuestra plataforma. Para completar tu registro y asegurar tu identidad, es necesario ingresar el siguiente código de verificación. Si no realizaste esta solicitud, puedes ignorar este mensaje.`;
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
            car_3,
            brand,
            year,
            color,
            plate
        );

        
        res.status(200).json({
            Response,
        });

        if(Number(Response.codigo ===1)){
            console.log("Enviando correo a:", correo);
            await sendVerificationEmail(correo, verificationCode, Description);
            console.log("Correo enviado correctamente.");
        }
        console.log(Response.codigo)
    } catch (error: any) {
        console.log("Error con registro del conductor", error);
        res.status(500).json({ message: 'Error con registro del conductor', error });
    }
};

export const getDriverTrips = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        console.log(id);
        const driverTrip = await Driver.getDriverTrips(Number(id));

        res.status(201).json({
            driverTrip
        })
    } catch (error) {
        const errorInfo = error && typeof error === 'object'
            ? JSON.stringify(error, null, 2)
            : error?.toString() || 'Unknown error';

        console.error('Error Information: ', errorInfo);
        res.status(500).json({
            message: 'Error Information: ', 
            error: errorInfo
        });
    }
};

export const correo = async (req: Request, res: Response) =>{
    try{
        const{correo} = req.body
        const verificationCode = generarCodigoAleatorio();
        const Description = `¡Bienvenido a Vero! Nos alegra que quieras registrarte en nuestra plataforma. Para completar tu registro y asegurar tu identidad, es necesario ingresar el siguiente código de verificación. Si no realizaste esta solicitud, puedes ignorar este mensaje.`;


        await sendVerificationEmail(correo, verificationCode, Description);
        res.status(201).json({
            mensaje:"Cooreo enviando con exito :3"
        })
    } catch(error){
        console.log("Error ", error);
        res.status(500).json({ message: 'Error ', error });
    }
}