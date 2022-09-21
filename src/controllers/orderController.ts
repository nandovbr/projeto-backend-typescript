import { Request, Response } from 'express';
import * as orderService from '../services/orderService';

export default async function getOrders(_req: Request, res: Response) {
  const { orders } = await orderService.getOrders();

  return res.status(200).json(orders);
}