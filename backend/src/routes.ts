import {Router} from 'express';

import * as logController from './controllers/log.controller';
import * as welcomeController from './controllers/welcome.controller';

const router = Router();

router.get('/logs', logController.getLogs);
router.post('/logs/store', logController.createLog);

router.get('/', welcomeController.index);

export default router;
