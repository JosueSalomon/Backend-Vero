import express from 'express';
import { CreateRoute } from '../Controllers/User.controller';

const router = express.Router();
router.post('/:user_id/new/route',CreateRoute);


export default router;