"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Driver_controller_1 = require("../Controllers/Driver.controller");
const router = express_1.default.Router();
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
router.get("/get/:id/trips", Driver_controller_1.getDriverTrips);
exports.default = router;
