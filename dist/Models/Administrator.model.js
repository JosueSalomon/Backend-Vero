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
exports.Administrator = void 0;
const supabase_1 = __importDefault(require("../Utils/supabase"));
class Administrator {
    static getReports() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_get_reports');
            if (error) {
                throw error;
            }
            return data;
        });
    }
    static reportDetail(reportId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_report_detail', {
                p_report_id: reportId
            });
            if (error) {
                throw error;
            }
            ;
            return data;
        });
    }
    static updateDriverStatus(userId, userStatusId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_update_driver_status', {
                p_user_id: userId,
                p_user_status_id: userStatusId
            });
            if (error) {
                throw error;
            }
            ;
            return data;
        });
    }
    static getRequestDriver(driverID) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_request_detail', {
                p_driver_id: driverID
            });
            if (error) {
                throw error;
            }
            return data;
        });
    }
    static get_comissions_to_pay_for_driver(id_driver) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_get_comissions_to_pay_for_driver', {
                p_id_driver: id_driver
            });
            if (error) {
                throw error;
            }
            return data;
        });
    }
    static get_commission_detail(id_comisiones_pagar) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_get_comissions_to_pay_for_driver_by_id', {
                p_id_comisiones_pagar: id_comisiones_pagar
            });
            if (error) {
                throw error;
            }
            return data;
        });
    }
    static drivers_to_pay() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_drivers_to_pay');
            if (error) {
                throw error;
            }
            return data;
        });
    }
    static get_drivers_applications() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_get_drivers_applications');
            if (error) {
                throw error;
            }
            return data;
        });
    }
}
exports.Administrator = Administrator;
