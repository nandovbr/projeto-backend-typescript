import * as orderModel from '../models/orderModel';
import { InterfaceOrder } from '../interfaces/interfaceOrder';

export async function getOrders() {
  const orders: InterfaceOrder[] = await orderModel.getOrders();

  if (!orders) {
    return { status: 400, message: 'Order not exists or invalid.' };
  }

  return { orders };
}

// Só para o lint não reclamar
export const getAll = async () => {};