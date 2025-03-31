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
exports.Trip = void 0;
const supabase_1 = __importDefault(require("../Utils/supabase"));
class Trip {
    static getTripDetails(tripId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_get_trip_details', {
                p_trip_id: tripId
            });
            if (error) {
                throw error;
            }
            return data;
        });
    }
    static cancelTripFromDriver(tripId, reportingUserTypeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_cancel_trip', {
                p_trip_id: tripId,
                p_reporting_user_type_id: reportingUserTypeId
            });
            if (error) {
                throw error;
            }
            return data;
        });
    }
    static reportTripUser(tripId, reportStatusId, reportedUserId, reportingUserId, reportingUserTypeId, reportSubject, reportDescription, reporterDate, reportUrlImages) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield supabase_1.default.rpc('p_report_trip', {
                p_trip_id: tripId,
                p_report_status_id: reportStatusId,
                p_reported_user_id: reportedUserId,
                p_reporting_user_id: reportingUserId,
                p_reporting_user_type_id: reportingUserTypeId,
                p_report_subject: reportSubject,
                p_report_description: reportDescription,
                p_reporter_date: reporterDate,
                p_report_url_image: reportUrlImages
            });
            if (error) {
                throw error;
            }
            return data;
        });
    }
}
exports.Trip = Trip;
