import { Router } from 'express';
import * as userController from '../controllers/userController';
// import { validToken } from '../middlewares/auth';

const router = Router();

router.post('/', userController.createUser);

export default router;
