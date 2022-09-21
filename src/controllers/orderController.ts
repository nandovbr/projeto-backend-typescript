import { Request, Response } from 'express';
import * as orderService from '../services/orderService';

export async function getOrders(_req: Request, res: Response) {
  const { orders } = await orderService.getOrders();

  return res.status(200).json(orders);
}

// Só para o lint não reclamar
export const getAll = async () => {};