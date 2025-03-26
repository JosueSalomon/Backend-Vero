"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Trip_controller_1 = require("../Controllers/Trip.controller");
const router = express_1.default.Router();
router.get("/get/trips/:id", Trip_controller_1.getTripDetails);
router.put("/:id/cancel/driver", Trip_controller_1.cancelTripFromDriver);
exports.default = router;
