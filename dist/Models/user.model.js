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
exports.User = void 0;
const supabase_1 = __importDefault(require("../Utils/supabase"));
class User {
    static CreateRoute(user_id, departure_point, arrival_point, departure_time, start_date, end_date, estimated_price, comment, return_time) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_create_route', {
                p_user_id: user_id,
                p_departure_point: departure_point,
                p_arrival_point: arrival_point,
                p_departure_time: departure_time,
                p_start_date: start_date,
                p_end_date: end_date,
                p_estimated_price: estimated_price,
                p_comment: comment,
                p_return_time: return_time,
            });
            if (!data) {
                return "null";
            }
            if (data.code === 2) {
                return {
                    code: 2,
                    message: "El usuario no se encuentra o no tiene el tipo adecuado"
                };
            }
            if (data.code === 3) {
                return {
                    code: 3,
                    message: "Error: la ruta ya existe"
                };
            }
            if (data.code === 4) {
                return {
                    code: 4,
                    message: "Error en los datos proporcionados"
                };
            }
            if (data.code === 5) {
                return {
                    code: 5,
                    message: "Error del servidor al crear la ruta"
                };
            }
            if (data.code === 1) {
                return {
                    code: 1,
                    message: "Ruta creada con exito",
                    route: data.route
                };
            }
            if (error) {
                throw error;
            }
        });
    }
}
exports.User = User;
