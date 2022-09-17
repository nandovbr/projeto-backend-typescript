import { Router } from 'express';
import * as productController from '../controllers/productController';

const router = Router();

router.post('/', productController.createProd);

export default router;
