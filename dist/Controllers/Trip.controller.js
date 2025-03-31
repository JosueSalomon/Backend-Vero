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
exports.reportTripUser = exports.cancelTripFromDriver = exports.getTripDetails = void 0;
const Trip_model_1 = require("../Models/Trip.model");
const getTripDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tripDetails = yield Trip_model_1.Trip.getTripDetails(Number(id));
        res.status(201).json({
            tripDetails
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
exports.getTripDetails = getTripDetails;
const cancelTripFromDriver = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { reportingUserTypeId } = req.body;
        const data = yield Trip_model_1.Trip.cancelTripFromDriver(Number(id), reportingUserTypeId);
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
exports.cancelTripFromDriver = cancelTripFromDriver;
const reportTripUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { tripId, reportStatusId, reportedUserId, reportingUserId, reportingUserTypeId, reportSubject, reportDescription, reporterDate, reportUrlImages } = req.body;
        const data = yield Trip_model_1.Trip.reportTripUser(tripId, reportStatusId, reportedUserId, reportingUserId, reportingUserTypeId, reportSubject, reportDescription, reporterDate, reportUrlImages);
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
exports.reportTripUser = reportTripUser;
