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
    static RegisterUser(p_first_names, p_last_names, p_dni, p_phone, p_email, p_password, p_gender, p_url_profile_pic, p_verification_code) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_register_user', {
                p_first_names: p_first_names,
                p_last_names: p_last_names,
                p_dni: p_dni,
                p_phone: p_phone,
                p_email: p_email,
                p_password: p_password,
                p_gender: p_gender,
                p_url_profile_pic: p_url_profile_pic,
                p_verification_code: p_verification_code,
            });
            if (error) {
                throw new Error(`Error al registrar al usuarii: ${error.message}`);
            }
            return {
                codigo: data.code,
                mensaje: data.message,
                usuarioRegistrado: data.registered_driver
            };
        });
    }
    static CreateRoute(user_id, departure_point, arrival_point, departure_time, start_date, end_date, estimated_price, comment, return_time, id_days_array, departure_coordinate_x, departure_coordinate_y, arrival_coordinate_x, arrival_coordinate_y) {
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
                p_days_id: id_days_array,
                p_departure_coordinate_x: departure_coordinate_x,
                p_departure_coordinate_y: departure_coordinate_y,
                p_arrival_coordinate_x: arrival_coordinate_x,
                p_arrival_coordinate_y: arrival_coordinate_y,
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
    static getCounteroffersUser(routeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_get_counteroffers_user', {
                p_route_id: routeId
            });
            if (error) {
                throw error;
            }
            return data;
        });
    }
    static getCounterofferDetail(counterofferId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_get_counteroffer_detail', {
                p_counteroffer_id: counterofferId
            });
            if (error) {
                throw error;
            }
            return data;
        });
    }
}
exports.User = User;
