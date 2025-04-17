"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_controller_1 = require("../Controllers/User.controller");
const router = express_1.default.Router();
router.post('/:user_id/new/route', User_controller_1.CreateRoute);
router.get('/counteroffers/route/:id', User_controller_1.getCounteroffersUser);
router.get('/counteroffer/:id', User_controller_1.getCounterofferDetail);
router.post('/sign_up', User_controller_1.RegisterUser);
router.post('/accept/counteroffer/:id', User_controller_1.AcceptTrip);
exports.default = router;
