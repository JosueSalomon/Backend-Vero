import express from 'express';
import { getReports, getReportDetail, updateDriverStatus } from '../Controllers/Administrator.controller';

const router = express.Router();

router.get("/reports", getReports);
router.get("/report/:id", getReportDetail);
router.put("/status/driver/update", updateDriverStatus);


export default router;