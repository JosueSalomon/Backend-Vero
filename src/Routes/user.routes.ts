import express from 'express';
import { CreateRoute,
            getCounteroffersUser,
            getCounterofferDetail
} from '../Controllers/User.controller';

const router = express.Router();
router.post('/:user_id/new/route',CreateRoute);
router.get('/counteroffers/route/:id', getCounteroffersUser);
router.get('/counteroffer/:id', getCounterofferDetail);

export default router;