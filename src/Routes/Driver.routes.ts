import express from 'express';
import { getDriverTrips } from "../Controllers/Driver.controller";

const router = express.Router();

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