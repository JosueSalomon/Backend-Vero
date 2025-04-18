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
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_drivers_applications = exports.drivers_to_pay = exports.get_commission_detail = exports.getComissionsToPayDriver = exports.getRequestDriver = exports.updateDriverStatus = exports.getReportDetail = exports.getReports = void 0;
const Administrator_model_1 = require("../Models/Administrator.model");
const getReports = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reports = yield Administrator_model_1.Administrator.getReports();
        res.status(201).json({
            reports
        });
    }
    catch (error) {
        const errorInfo = error && typeof error === 'object'
            ? JSON.stringify(error, null, 2)
            : (error === null || error === void 0 ? void 0 : error.toString()) || 'Unknown error';
        console.error('Error Information: ', errorInfo);
        res.status(500).json({
            message: 'Error Information: ',
            error: errorInfo
        });
    }
});
exports.getReports = getReports;
const getReportDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const reportDetail = yield Administrator_model_1.Administrator.reportDetail(Number(id));
        res.status(201).json({
            reportDetail
        });
    }
    catch (error) {
        const errorInfo = error && typeof error === 'object'
            ? JSON.stringify(error, null, 2)
            : (error === null || error === void 0 ? void 0 : error.toString()) || 'Unknown error';
        console.error('Error Information: ', errorInfo);
        res.status(500).json({
            message: 'Error Information: ',
            error: errorInfo
        });
    }
});
exports.getReportDetail = getReportDetail;
const updateDriverStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, userStatusId } = req.body;
        const data = yield Administrator_model_1.Administrator.updateDriverStatus(userId, userStatusId);
        res.status(201).json({
            data
        });
    }
    catch (error) {
        const errorInfo = error && typeof error === 'object'
            ? JSON.stringify(error, null, 2)
            : (error === null || error === void 0 ? void 0 : error.toString()) || 'Unknown error';
        console.error('Error Information: ', errorInfo);
        res.status(500).json({
            message: 'Error Information: ',
            error: errorInfo
        });
    }
});
exports.updateDriverStatus = updateDriverStatus;
const getRequestDriver = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const requestDriver = yield Administrator_model_1.Administrator.getRequestDriver(Number(id));
        res.status(201).json({
            requestDriver
        });
    }
    catch (error) {
        const errorInfo = error && typeof error === 'object'
            ? JSON.stringify(error, null, 2)
            : (error === null || error === void 0 ? void 0 : error.toString()) || 'Unknown error';
        console.error('Error Information: ', errorInfo);
        res.status(500).json({
            message: 'Error Information: ',
            error: errorInfo
        });
    }
});
exports.getRequestDriver = getRequestDriver;
const getComissionsToPayDriver = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const Response = yield Administrator_model_1.Administrator.get_comissions_to_pay_for_driver(Number(id));
        res.status(200).json({
            Response
        });
    }
    catch (error) {
        const errorInfo = error && typeof error === 'object'
            ? JSON.stringify(error, null, 2)
            : (error === null || error === void 0 ? void 0 : error.toString()) || 'Unknown error';
        console.error('Error Information: ', errorInfo);
        res.status(500).json({
            message: 'Error Information: ',
            error: errorInfo
        });
    }
});
exports.getComissionsToPayDriver = getComissionsToPayDriver;
const get_commission_detail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const Response = yield Administrator_model_1.Administrator.get_commission_detail(Number(id));
        res.status(200).json({
            Response
        });
    }
    catch (error) {
        const errorInfo = error && typeof error === 'object'
            ? JSON.stringify(error, null, 2)
            : (error === null || error === void 0 ? void 0 : error.toString()) || 'Unknown error';
        console.error('Error Information: ', errorInfo);
        res.status(500).json({
            message: 'Error Information: ',
            error: errorInfo
        });
    }
});
exports.get_commission_detail = get_commission_detail;
const drivers_to_pay = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Response = yield Administrator_model_1.Administrator.drivers_to_pay();
        res.status(200).json({
            Response
        });
    }
    catch (error) {
        const errorInfo = error && typeof error === 'object'
            ? JSON.stringify(error, null, 2)
            : (error === null || error === void 0 ? void 0 : error.toString()) || 'Unknown error';
        console.error('Error Information: ', errorInfo);
        res.status(500).json({
            message: 'Error Information: ',
            error: errorInfo
        });
    }
});
exports.drivers_to_pay = drivers_to_pay;
const get_drivers_applications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Response = yield Administrator_model_1.Administrator.get_drivers_applications();
        res.status(200).json({
            Response
        });
    }
    catch (error) {
        const errorInfo = error && typeof error === 'object'
            ? JSON.stringify(error, null, 2)
            : (error === null || error === void 0 ? void 0 : error.toString()) || 'Unknown error';
        console.error('Error Information: ', errorInfo);
        res.status(500).json({
            message: 'Error Information: ',
            error: errorInfo
        });
    }
});
exports.get_drivers_applications = get_drivers_applications;
