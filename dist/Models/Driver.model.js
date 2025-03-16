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
exports.Driver = void 0;
const supabase_1 = __importDefault(require("../Utils/supabase"));
class Driver {
    static RegisterDriver(first_names, last_names, dni, phone, email, password, gender, user_type_id, verification_code, front_license_img_url, front_license, back_license_img_url, back_license, front_revision_img_url, front_revision, back_revision_img_url, back_revision, car_img_url_1, car_1, car_img_url_2, car_2, car_img_url_3, car_3) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_register_driver', {
                p_first_names: first_names,
                p_last_names: last_names,
                p_dni: dni,
                p_phone: phone,
                p_email: email,
                p_password: password,
                p_gender: gender,
                p_user_type_id: user_type_id,
                p_verification_code: verification_code,
                // Nuevos parámetros de imágenes
                p_front_license_img_url: front_license_img_url,
                p_front_license: front_license,
                p_back_license_img_url: back_license_img_url,
                p_back_license: back_license,
                p_front_revision_img_url: front_revision_img_url,
                p_front_revision: front_revision,
                p_back_revision_img_url: back_revision_img_url,
                p_back_revision: back_revision,
                p_car_img_url_1: car_img_url_1,
                p_car_1: car_1,
                p_car_img_url_2: car_img_url_2,
                p_car_2: car_2,
                p_car_img_url_3: car_img_url_3,
                p_car_3: car_3
            });
            if (error) {
                throw new Error(`Error al registrar al conductor: ${error.message}`);
            }
            return {
                codigo: data.code,
                mensaje: data.message,
                conductorRegistrado: data.registered_driver
            };
        });
    }
}
exports.Driver = Driver;
