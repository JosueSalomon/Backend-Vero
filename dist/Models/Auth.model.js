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
exports.Auth = void 0;
const supabase_1 = __importDefault(require("../Utils/supabase"));
const jwt_1 = require("../services/jwt");
class Auth {
    static login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, error } = yield supabase_1.default.rpc('p_login', {
                    p_email: email,
                    p_password: password
                });
                if (!data) {
                    return "null";
                }
                if (data.code === 2) {
                    return {
                        code: 2,
                        message: "Usuario no existente"
                    };
                }
                if (data.code === 3) {
                    return {
                        code: 3,
                        message: "Usuario no validado"
                    };
                }
                if (data.code === 4) {
                    return {
                        code: 4,
                        message: "Credenciales incorrectas"
                    };
                }
                ;
                if (!data || !data.user_id || !data.names || !data.email || !data.profile_img_url) {
                    console.error("Error: Insufficient data to generate the token", data);
                    return "Insufficient data to generate the token";
                }
                const token = (0, jwt_1.createToken)(data.user_id, data.names, data.email, data.profile_img_url, data.user_type_id);
                const result = yield this.insertUserToken(email, password, token);
                data.token = token;
                return data;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                else {
                    throw new Error("Unknown error");
                }
            }
        });
    }
    static insertUserToken(email, password, token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, error } = yield supabase_1.default.rpc('p_insert_token', {
                    p_email: email,
                    p_password: password,
                    p_token: token
                });
                if (error) {
                    console.log(error);
                    throw new Error(`Error: ${error.message}`);
                }
                console.log(data);
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                else {
                    throw new Error("Unknown error");
                }
            }
        });
    }
}
exports.Auth = Auth;
