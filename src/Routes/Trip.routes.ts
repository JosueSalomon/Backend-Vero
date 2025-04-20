import express from 'express';
import { getTripDetails, cancelTripFromDriver, reportTripUser,
    RateTrips
 } from '../Controllers/Trip.controller';

const router = express.Router();


router.get("/get/trips/:id", getTripDetails);
router.put("/:id/cancel/driver", cancelTripFromDriver);
router.post("/report", reportTripUser);
router.post("/:id/rate", RateTrips);



export default router;