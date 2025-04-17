"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const upload_1 = __importDefault(require("../Utils/upload"));
const Driver_controller_1 = require("../Controllers/Driver.controller");
const router = express_1.default.Router();
router.post('/upload', upload_1.default.single('file'), Driver_controller_1.uploadImage);
router.post('/sign_up', Driver_controller_1.RegisterDriver);
router.get("/get/:id/trips", Driver_controller_1.getDriverTrips);
router.post('/:id/counteroffer', Driver_controller_1.CreateCounterOffers);
router.put("/:id/update", Driver_controller_1.UpdateDriver);
router.get("/:id", Driver_controller_1.GetDriverById);
router.get("/route/:id", Driver_controller_1.getDetailsRoute);
router.put("/bank/information/update", Driver_controller_1.updateBankInformation);
router.post("/:id/accept/route", Driver_controller_1.AcceptRoute);
exports.default = router;
