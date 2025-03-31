"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SignUp_controller_1 = require("../Controllers/SignUp.controller");
const router = express_1.default.Router();
router.put('/code/verify', SignUp_controller_1.VerifyCode);
router.put('/code/generate/new', SignUp_controller_1.generate_new_code);
exports.default = router;
