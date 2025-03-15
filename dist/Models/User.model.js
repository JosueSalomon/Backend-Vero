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
    static create_prueba(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('create_prueba', {
                p_nombre: nombre
            });
            if (error) {
                throw error;
            }
            return data;
        });
    }
    static read_pruebas() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('read_pruebas', {});
            if (error) {
                throw error;
            }
            return data;
        });
    }
    static read_prueba_by_id(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('read_prueba_by_id', {
                p_id: id
            });
            if (error) {
                throw error;
            }
            return data;
        });
    }
    static update_prueba(id, nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('update_prueba', {
                p_id: id,
                p_nombre: nombre
            });
            if (error) {
                throw error;
            }
            return data;
        });
    }
    static delete_prueba(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('delete_prueba', {
                p_id: id,
            });
            if (error) {
                throw error;
            }
            return data;
        });
    }
}
exports.User = User;
