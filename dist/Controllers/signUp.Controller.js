"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate_new_code = exports.VerifyCode = void 0;
const SignUp_model_1 = require("../Models/SignUp.model");
const VerifyCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, code } = req.body;
        const Response = yield SignUp_model_1.SignUp.VerifyCode(email, code);
        res.status(201).json({
            Response
        });
    }
    catch (error) {
        const errorInfo = error && typeof error === 'object'
            ? JSON.stringify(error, null, 2)
            : (error === null || error === void 0 ? void 0 : error.toString()) || 'Unknown error';
        console.error('Error Information: ', errorInfo);
        res.status(500).json({
            message: 'Error Information: ',
            error: errorInfo
        });
    }
});
exports.VerifyCode = VerifyCode;
const generate_new_code = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, code } = req.body;
        const Response = yield SignUp_model_1.SignUp.GenerateNewCode(email, code);
        res.status(201).json({
            Response
        });
    }
    catch (error) {
        const errorInfo = error && typeof error === 'object'
            ? JSON.stringify(error, null, 2)
            : (error === null || error === void 0 ? void 0 : error.toString()) || 'Unknown error';
        console.error('Error Information: ', errorInfo);
        res.status(500).json({
            message: 'Error Information: ',
            error: errorInfo
        });
    }
});
exports.generate_new_code = generate_new_code;
