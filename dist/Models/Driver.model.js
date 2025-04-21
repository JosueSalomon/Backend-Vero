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
    static RegisterDriver(first_names, last_names, dni, phone, email, password, gender, user_type_id, verification_code, url_profile_pic, p_antecendetes_penales_img_url, p_antecendetes_penales, front_license_img_url, front_license, back_license_img_url, back_license, front_revision_img_url, front_revision, back_revision_img_url, back_revision, car_img_url_1, car_1, car_img_url_2, car_2, car_img_url_3, car_3, brand, year, color, plate) {
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
                p_url_profile_pic: url_profile_pic,
                p_antecendetes_penales_img_url: p_antecendetes_penales_img_url,
                p_antecendetes_penales: p_antecendetes_penales,
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
                p_car_3: car_3,
                p_brand: brand,
                p_year: year,
                p_color: color,
                p_plate: plate
            });
            if (error) {
                throw new Error(`Error al registrar al conductor: ${error.message}`);
            }
            if (!data) {
                throw new Error(`No se recibió respuesta del servidor`);
            }
            return {
                codigo: data.code,
                mensaje: data.message,
                conductorRegistrado: data.registered_driver
            };
        });
    }
    static getDriverTrips(driverId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_get_driver_trips', {
                p_driver_id: driverId
            });
            if (error) {
                throw error;
            }
            return data;
        });
    }
    ;
    static CreateCouterOffer(driver_id, route_id, counteroffer, comment) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_create_counteroffers', {
                p_driver_id: driver_id,
                p_route_id: route_id,
                p_counteroffer: counteroffer,
                p_comment: comment
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
                    message: "Error: la contraoferta ya existe"
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
                    message: "Error del servidor al crear la contraoferta"
                };
            }
            if (data.code === 1) {
                return {
                    code: 1,
                    message: "Contraoferta generada con éxito",
                    route: data.counteroffer
                };
            }
            if (error) {
                throw error;
            }
        });
    }
    static UpdateDriver(driver_id, phone, email) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_edit_person', {
                p_driver_id: driver_id,
                p_phone: phone,
                p_email: email,
            });
            if (!data) {
                return "null";
            }
            if (data.code === 2) {
                return {
                    code: 2,
                    message: "El usuario no existe "
                };
            }
            if (data.code === 3) {
                return {
                    code: 3,
                    message: "El email ya está en uso por otro usuario"
                };
            }
            if (data.code === 7) {
                return {
                    code: 4,
                    message: "El telefono ya está en uso por otro usuario"
                };
            }
            if (data.code === 5) {
                return {
                    code: 5,
                    message: "Error en los datos proporcionados"
                };
            }
            if (data.code === 6) {
                return {
                    code: 6,
                    message: "Error del servidor al actualizar la persona"
                };
            }
            if (data.code === 1) {
                return {
                    code: 1,
                    message: "Actualizacion con exito",
                    route: data.updated_driver
                };
            }
            if (error) {
                throw error;
            }
        });
    }
    static GetDriverById(driver_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_get_driver', {
                p_id_driver: driver_id
            });
            if (error) {
                throw error;
            }
            return data;
        });
    }
    static getDetailsRoute(routeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_get_details_route', {
                p_route_id: routeId
            });
            if (error) {
                throw error;
            }
            return data;
        });
    }
    ;
    static updateBankInformation(userId, bankInstitutionId, bankAccountNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_update_bank_information', {
                p_user_id: userId,
                p_bank_institution_id: bankInstitutionId,
                p_bank_account_number: bankAccountNumber
            });
            if (error) {
                throw error;
            }
            ;
            return data;
        });
    }
    static acceptRoute(route_id, driver_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_accept_trip_driver', {
                p_route_id: route_id,
                p_driver_id: driver_id
            });
            if (error) {
                console.error("Supabase RPC Error:", error);
                throw error;
            }
            if (!data) {
                return {
                    code: -1,
                    message: "No se recibió respuesta del servidor"
                };
            }
            switch (data.code) {
                case 0:
                    return {
                        code: 1,
                        message: "Viaje creado exitosamente"
                    };
                case 3:
                    return {
                        code: 3,
                        message: "No se encontró ruta"
                    };
                case 5:
                    return {
                        code: 5,
                        message: "Error al crear el viaje"
                    };
                default:
                    return {
                        code: data.code,
                        message: data.message || "Respuesta desconocida"
                    };
            }
        });
    }
    static availableRoutes(driverId, coordinateX, coordinateY) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_available_routes', {
                p_driver_id: driverId,
                p_coordinate_x: coordinateX,
                p_coordinate_y: coordinateY
            });
            if (error) {
                throw error;
            }
            ;
            return data;
        });
    }
}
exports.Driver = Driver;
