import express from 'express';
import { CreateRoute,
            getCounteroffersUser,
            getCounterofferDetail,
            RegisterUser
} from '../Controllers/User.controller';

const router = express.Router();
router.post('/:user_id/new/route',CreateRoute);
router.get('/counteroffers/route/:id', getCounteroffersUser);
router.get('/counteroffer/:id', getCounterofferDetail);
router.post('/sign_up',RegisterUser);

export default router;