import express from 'express';
import productRoute from './routers/productRoute';
import userRoute from './routers/userRoute';
import orderRoute from './routers/orderRoute';

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);

export default app;
