import express from 'express';
import upload from '../Utils/upload'; 
import {
    uploadImage,
    RegisterDriver,
    getDriverTrips,
    correo
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
 *               -brand
 *               -year
 *               -color
 *               -plate
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
 *                               brand:
 *                     description: Marca del vehículo.
 *                 example: "Ford"
 *               year:
 *                   type: integer
 *                   description: Año del vehículo.
 *                  example: 2019
 *              color:
 *                   type: string
 *                   description: Color del vehículo.
 *                  example: "Rojo"
 *               plate:
 *                   type: string
 *                  description: Placa del vehículo.
 *                   example: "AC234Gh"
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
 * tags:
 *   - Driver
 * /driver/get/{id}/trips:
 *   get: 
 *     summary: Get a driver's current trips
 *     description: Retrieves the current trips of a driver, including relevant details based on their ID.
 *     operationId: getDriverTrips
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique identifier of the driver.
 *     responses:
 *       200:
 *         description: Successfully retrieved driver trip information.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 driverTrip:
 *                   type: object
 *                   description: Driver trip information.
 *                   properties:
 *                     user_name:
 *                       type: string
 *                       description: Driver's full name.
 *                     start_date:
 *                       type: string
 *                       format: date
 *                       description: Trip start date.
 *                     end_date:
 *                       type: string
 *                       format: date
 *                       description: End date of the trip.
 *                     departure_point:
 *                       type: string
 *                       description: Departure location for daily trips.
 *                     arrival_point:
 *                       type: string
 *                       description: Arrival location for daily trips.
 *                     departure_time:
 *                       type: string
 *                       description: Daily departure time.
 *                     return_time:
 *                       type: string
 *                       description: Daily return time.
 *                     travel_days:
 *                       type: array
 *                       items:
 *                         type: string
 *                       description: Array of days when the driver operates (e.g., ["Monday", "Wednesday", "Friday"]).
 */
router.get("/get/:id/trips", getDriverTrips);
router.post('/correo',correo);


export default router;