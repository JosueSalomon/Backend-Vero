import express from 'express';
import {
    FuncionPrueba,
    createPrueba,
    readPruebas,
    readPruebaById,
    updatePrueba,
    deletePrueba
} from "../Controllers/User.controller";

const router = express.Router();

/**
 * @swagger
 * /user/saludo:
 *   get:
 *     description: Retorna un saludo.
 *     responses:
 *       200:
 *         description: Saludo exitoso
 */
router.get('/saludo', FuncionPrueba);

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
router.post('/crear', createPrueba);


/**
 * @swagger
 * /user/get:
 *   get:
 *     description: Retorna todas las entradas de prueba.
 *     responses:
 *       200:
 *         description: Lista de entradas de prueba
 */
router.get("/get", readPruebas);

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
router.get("/get/:id", readPruebaById);
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
router.put("/put/:id", updatePrueba);

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
router.delete("/del/:id", deletePrueba);

export default router;
