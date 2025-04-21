import express from 'express';
import { CreateRoute,
            getCounteroffersUser,
            getCounterofferDetail,
            RegisterUser,
            AcceptTrip,
            getRoutes,
            getUserTripDetail
} from '../Controllers/User.controller';

const router = express.Router();
router.post('/:user_id/new/route',CreateRoute);
router.get('/counteroffers/route/:id', getCounteroffersUser);
router.get('/counteroffer/:id', getCounterofferDetail);
router.post('/sign_up',RegisterUser);
router.post('/accept/counteroffer/:id',AcceptTrip);
router.get('/:id/routes', getRoutes);
router.get('/routes/:id', getUserTripDetail);

export default router;