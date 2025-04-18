import express from 'express';
import { VerifyCode, generate_new_code } from '../Controllers/Sign.controller';

const router = express.Router();

router.put('/code/verify',VerifyCode);
router.put('/code/generate/new',generate_new_code);

export default router;