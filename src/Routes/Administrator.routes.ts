import express from 'express';
import { getReports, getReportDetail, updateDriverStatus,getRequestDriver,
    getComissionsToPayDriver,get_commission_detail,drivers_to_pay,get_drivers_applications
 } from '../Controllers/Administrator.controller';

const router = express.Router();

router.get("/reports", getReports);
router.get("/report/:id", getReportDetail);
router.put("/status/driver/update", updateDriverStatus);
router.get("/driver/:id/request", getRequestDriver);
router.get("/comissions/driver/:id", getComissionsToPayDriver);
router.get("/comission/:id", get_commission_detail);
router.get("/drivers/pay", drivers_to_pay);
router.get("/drivers/applications", get_drivers_applications);


export default router;