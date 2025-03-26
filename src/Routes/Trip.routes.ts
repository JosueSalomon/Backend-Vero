import express from 'express';
import { getTripDetails, cancelTripFromDriver } from '../Controllers/Trip.controller';

const router = express.Router();


router.get("/get/trips/:id", getTripDetails);
router.put("/:id/cancel/driver", cancelTripFromDriver);


export default router;