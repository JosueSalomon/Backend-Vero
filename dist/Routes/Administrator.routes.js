"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Administrator_controller_1 = require("../Controllers/Administrator.controller");
const router = express_1.default.Router();
router.get("/reports", Administrator_controller_1.getReports);
router.get("/report/:id", Administrator_controller_1.getReportDetail);
router.put("/status/driver/update", Administrator_controller_1.updateDriverStatus);
router.get("/driver/:id/request", Administrator_controller_1.getRequestDriver);
router.get("/comissions/driver/:id", Administrator_controller_1.getComissionsToPayDriver);
router.get("/comission/:id", Administrator_controller_1.get_commission_detail);
router.get("/drivers/pay", Administrator_controller_1.drivers_to_pay);
router.get("/drivers/applications", Administrator_controller_1.get_drivers_applications);
router.post('/save/payment/commision/:id', Administrator_controller_1.register_payment_and_update_commission);
exports.default = router;
