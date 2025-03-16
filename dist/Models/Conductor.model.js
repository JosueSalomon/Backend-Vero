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
exports.Conductor = void 0;
const supabase_1 = __importDefault(require("../Utils/supabase"));
class Conductor {
    static RegistroConductor(nombres, apellidos, dni, telefono, correo, contrasena, genero, id_tipo_usuario, id_institucion_bancaria, numero_cuenta_bancaria, codigo_verificacion) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_registro_conductor', {
                p_nombres: nombres,
                p_apellidos: apellidos,
                p_dni: dni,
                p_telefono: telefono,
                p_correo: correo,
                p_contrasena: contrasena,
                p_genero: genero,
                p_id_tipo_usuario: id_tipo_usuario,
                p_id_institucion_bancaria: id_institucion_bancaria,
                p_numero_cuenta_bancaria: numero_cuenta_bancaria,
                p_codigo_verificacion: codigo_verificacion
            });
            if (error) {
                throw new Error(`Error al crear el producto: ${error.message}`);
            }
            return {
                codigo: data.codigo,
                mensaje: data.mensaje,
                conductorRegistrado: data.conductor_registrado
            };
        });
    }
}
exports.Conductor = Conductor;
