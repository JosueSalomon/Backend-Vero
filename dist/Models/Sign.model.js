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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUp = void 0;
const supabase_1 = __importDefault(require("../Utils/supabase"));
class SignUp {
    static VerifyCode(email, code) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_verify_code', {
                p_email: email,
                p_code: code
            });
            if (error) {
                throw error;
            }
            return {
                codigo: data.code,
                mensaje: data.message,
            };
        });
    }
    static GenerateNewCode(email, code) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_generate_new_code', {
                p_email: email,
                p_code: code
            });
            if (error) {
                throw error;
            }
            return {
                codigo: data.code,
                mensaje: data.message,
            };
        });
    }
}
exports.SignUp = SignUp;
