"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sign_up_Controller_1 = require("../Controllers/sign-up.Controller");
const router = express_1.default.Router();
router.put('/code/verify', sign_up_Controller_1.VerifyCode);
router.put('/code/generate/new', sign_up_Controller_1.generate_new_code);
exports.default = router;
