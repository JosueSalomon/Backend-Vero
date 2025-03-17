import express from 'express';
import { Login } from '../Controllers/Auth.controller';

const router = express.Router();

router.post('/login',Login);

export default router;