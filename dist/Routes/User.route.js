"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_controller_1 = require("../Controllers/User.controller");
const router = express_1.default.Router();
/**
 * @swagger
 * /user/saludo:
 *   get:
 *     description: Retorna un saludo.
 *     responses:
 *       200:
 *         description: Saludo exitoso
 */
router.get('/saludo', User_controller_1.FuncionPrueba);
/**
 * @swagger
 * /user/crear:
 *   post:
 *     summary: Crear una nueva entrada de prueba
 *     description: Crea una nueva entrada en la tabla TBL_PRUEBA.
 *     operationId: createPrueba
 *     tags:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: El nombre de la entrada de prueba.
 *                 example: 'Prueba 1'
 *     responses:
 *       201:
 *         description: Registro creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 nombre:
 *                   type: string
 *                   example: 'Prueba 1'
 *       400:
 *         description: Error de validación o parámetros incorrectos
 *       500:
 *         description: Error interno del servidor
 */
router.post('/crear', User_controller_1.createPrueba);
/**
 * @swagger
 * /user/get:
 *   get:
 *     description: Retorna todas las entradas de prueba.
 *     responses:
 *       200:
 *         description: Lista de entradas de prueba
 */
router.get("/get", User_controller_1.readPruebas);
/**
 * @swagger
 * /user/get/{id}:
 *   get:
 *     description: Retorna una entrada de prueba por su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la entrada de prueba.
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Entrada de prueba encontrada
 *       404:
 *         description: Entrada no encontrada
 */
router.get("/get/:id", User_controller_1.readPruebaById);
/**
 * @swagger
 * /user/put/{id}:
 *   put:
 *     summary: Actualiza una entrada de prueba por su ID
 *     description: Actualiza el nombre de una entrada de prueba en la base de datos usando su ID.
 *     operationId: updatePrueba
 *     tags:
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la entrada de prueba que se desea actualizar.
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *       - name: nombre
 *         in: body
 *         description: El nuevo nombre de la entrada de prueba.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             nombre:
 *               type: string
 *               example: 'Nuevo nombre de prueba'
 *     responses:
 *       200:
 *         description: Entrada de prueba actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 nombre:
 *                   type: string
 *                   example: 'Nuevo nombre de prueba jiiji'
 *       400:
 *         description: Error de validación o parámetros incorrectos
 *       404:
 *         description: Entrada de prueba no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.put("/put/:id", User_controller_1.updatePrueba);
/**
 * @swagger
 * /user/del/{id}:
 *   delete:
 *     description: Elimina una entrada de prueba por su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la entrada de prueba.
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Entrada de prueba eliminada
 *       404:
 *         description: Entrada no encontrada
 */
router.delete("/del/:id", User_controller_1.deletePrueba);
exports.default = router;
