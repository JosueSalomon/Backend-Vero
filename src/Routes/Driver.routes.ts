import express from 'express';
import upload from '../Utils/upload'; 
import {
    uploadImage,
    RegisterDriver,
    getDriverTrips,
    CreateCounterOffers,
    UpdateDriver,
    GetDriverById,
    getDetailsRoute,
    updateBankInformation,
    AcceptRoute,
    getAvailableRoutes,
    getBanks
} from "../Controllers/Driver.controller";

const router = express.Router();

router.post('/upload', upload.single('file'), uploadImage);

router.post('/sign_up',RegisterDriver);
router.get("/get/:id/trips", getDriverTrips);
router.post('/:id/counteroffer',CreateCounterOffers);
router.put("/:id/update",UpdateDriver)
router.get("/:id",GetDriverById)
router.get("/route/:id", getDetailsRoute);
router.put("/bank/information/update", updateBankInformation);
router.post("/:id/accept/route", AcceptRoute);
router.get("/available/routes", getAvailableRoutes)
router.get("/banks", getBanks);
export default router;