"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const upload_1 = __importDefault(require("../Utils/upload"));
const Conductor_controller_1 = require("../Controllers/Conductor.controller");
const router = express_1.default.Router();
router.post('/upload', upload_1.default.single('file'), Conductor_controller_1.uploadImage);
router.post('/registro', Conductor_controller_1.RegistroConductor);
exports.default = router;
