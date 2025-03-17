import express from 'express';
import upload from '../Utils/upload'; 
import {
    uploadImage,
    RegisterDriver,
    getDriverTrips
} from "../Controllers/Driver.controller";

const router = express.Router();

router.post('/upload', upload.single('file'), uploadImage);

/**
 * @swagger
 * tags:
 *  - driver
 * /driver/sign_up:
 *   post:
 *     summary: Registra un nuevo conductor
 *     description: Registra un nuevo conductor en el sistema con todos sus datos, incluyendo su información personal, licencia de conducir y detalles del automóvil.
 *     operationId: registerDriver
 *     requestBody:
 *       description: Datos completos del conductor a registrar.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombres
 *               - apellidos
 *               - dni
 *               - telefono
 *               - correo
 *               - contrasena
 *               - genero
 *               - id_tipo_usuario
 *               - front_license_img_url
 *               - front_license
 *               - back_license_img_url
 *               - back_license
 *               - front_revision_img_url
 *               - front_revision
 *               - back_revision_img_url
 *               - back_revision
 *               - car_img_url_1
 *               - car_1
 *               - car_img_url_2
 *               - car_2
 *               - car_img_url_3
 *               - car_3
 *             properties:
 *               nombres:
 *                 type: string
 *                 description: Nombre(s) del conductor.
 *                 example: "Juan"
 *               apellidos:
 *                 type: string
 *                 description: Apellido(s) del conductor.
 *                 example: "Pérez"
 *               dni:
 *                 type: string
 *                 description: Documento Nacional de Identidad del conductor.
 *                 example: "12345678"
 *               telefono:
 *                 type: string
 *                 description: Número de teléfono del conductor.
 *                 example: "987654321"
 *               correo:
 *                 type: string
 *                 format: email
 *                 description: Correo electrónico del conductor.
 *                 example: "juan.perez@example.com"
 *               contrasena:
 *                 type: string
 *                 description: Contraseña del conductor.
 *                 example: "Contrasena123!"
 *               genero:
 *                 type: string
 *                 description: Género del conductor.
 *                 example: "Masculino"
 *               id_tipo_usuario:
 *                 type: integer
 *                 description: ID del tipo de usuario del conductor.
 *                 example: 2
 *               front_license_img_url:
 *                 type: string
 *                 description: URL de la imagen de la parte frontal de la licencia de conducir.
 *                 example: "https://example.com/front_license.jpg"
 *               front_license:
 *                 type: string
 *                 description: Número de la licencia de conducir (frontal).
 *                 example: "AB1234567"
 *               back_license_img_url:
 *                 type: string
 *                 description: URL de la imagen de la parte trasera de la licencia de conducir.
 *                 example: "https://example.com/back_license.jpg"
 *               back_license:
 *                 type: string
 *                 description: Número de la licencia de conducir (trasera).
 *                 example: "XYZ987654"
 *               front_revision_img_url:
 *                 type: string
 *                 description: URL de la imagen de la parte frontal de la revisión técnica del vehículo.
 *                 example: "https://example.com/front_revision.jpg"
 *               front_revision:
 *                 type: string
 *                 description: Número de la revisión técnica del vehículo (frontal).
 *                 example: "RT123456"
 *               back_revision_img_url:
 *                 type: string
 *                 description: URL de la imagen de la parte trasera de la revisión técnica del vehículo.
 *                 example: "https://example.com/back_revision.jpg"
 *               back_revision:
 *                 type: string
 *                 description: Número de la revisión técnica del vehículo (trasera).
 *                 example: "RT987654"
 *               car_img_url_1:
 *                 type: string
 *                 description: URL de la primera imagen del automóvil del conductor.
 *                 example: "https://example.com/car_img_1.jpg"
 *               car_1:
 *                 type: string
 *                 description: Descripción o detalle del primer automóvil del conductor.
 *                 example: "Toyota Corolla 2020"
 *               car_img_url_2:
 *                 type: string
 *                 description: URL de la segunda imagen del automóvil del conductor.
 *                 example: "https://example.com/car_img_2.jpg"
 *               car_2:
 *                 type: string
 *                 description: Descripción o detalle del segundo automóvil del conductor.
 *                 example: "Honda Civic 2018"
 *               car_img_url_3:
 *                 type: string
 *                 description: URL de la tercera imagen del automóvil del conductor.
 *                 example: "https://example.com/car_img_3.jpg"
 *               car_3:
 *                 type: string
 *                 description: Descripción o detalle del tercer automóvil del conductor.
 *                 example: "Ford Focus 2019"
 *     responses:
 *       200:
 *         description: Conductor registrado con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 codigo:
 *                   type: integer
 *                   description: Código de respuesta, 1 significa éxito.
 *                   example: 1
 *                 mensaje:
 *                   type: string
 *                   description: Mensaje de respuesta, 'Conductor registrado con éxito' cuando el registro es exitoso.
 *                   example: "Conductor registrado con éxito"
 *                 conductorRegistrado:
 *                   type: object
 *                   description: Datos del conductor registrado, como nombre, correo, etc.
 *                   properties:
 *                     user_id:
 *                       type: integer
 *                       description: ID único del usuario.
 *                     first_names:
 *                       type: string
 *                       description: Nombre(s) del conductor.
 *                     last_names:
 *                       type: string
 *                       description: Apellido(s) del conductor.
 *                     dni:
 *                       type: string
 *                       description: Documento Nacional de Identidad.
 *                     phone:
 *                       type: string
 *                       description: Teléfono del conductor.
 *                     email:
 *                       type: string
 *                       description: Correo electrónico del conductor.
 *                     gender:
 *                       type: string
 *                       description: Género del conductor.
 *                     user_type_id:
 *                       type: integer
 *                       description: Tipo de usuario asignado al conductor.
 *       500:
 *         description: Error al registrar el conductor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error.
 *                   example: "error con registro del conductor"
 *                 error:
 *                   type: string
 *                   description: Detalles del error.
 *                   example: "Error al registrar el conductor"
 *       2:
 *         description: El correo electrónico ya está registrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje indicando que el correo ya está en uso.
 *                   example: "El email ya está registrado"
 *       3:
 *         description: Error de violación única, normalmente al intentar registrar un conductor con datos duplicados.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje indicando el error de duplicado.
 *                   example: "Error: el usuario ya existe"
 *       4:
 *         description: Error en los datos proporcionados (por ejemplo, formatos incorrectos).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje indicando que los datos proporcionados son incorrectos.
 *                   example: "Error en los datos proporcionados"
 *       5:
 *         description: Error genérico al registrar el conductor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje indicando que ocurrió un error no especificado.
 *                   example: "Error al registrar el conductor"
 */
router.post('/sign_up',RegisterDriver);

/**
 * @swagger
 * /driver/get/{id}/trips:
 *   get:
 *     description: Return driver trips information.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Driver ID.
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Succesful.
 *       404:
 *         description: Error.
 */
router.get("/get/:id/trips", getDriverTrips);

export default router;