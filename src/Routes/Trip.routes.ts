import express from 'express';
import { getTripDetails, cancelTripFromDriver, reportTripUser } from '../Controllers/Trip.controller';

const router = express.Router();


router.get("/get/trips/:id", getTripDetails);
router.put("/:id/cancel/driver", cancelTripFromDriver);
router.post("/report", reportTripUser);



export default router;