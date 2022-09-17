import express from 'express';
import productRoute from './routers/productRoute';

const app = express();

app.use(express.json());

app.use('/products', productRoute);

export default app;
