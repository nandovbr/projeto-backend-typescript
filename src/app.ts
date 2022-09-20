import express from 'express';
import productRoute from './routers/productRoute';
import userRoute from './routers/userRoute';

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/users', userRoute);

export default app;
