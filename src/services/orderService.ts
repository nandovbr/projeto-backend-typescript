import * as orderModel from '../models/orderModel';
import { InterfaceOrder } from '../interfaces/interfaceOrder';

export default async function getOrders() {
  const orders: InterfaceOrder[] = await orderModel.getOrders();

  if (!orders) {
    return { status: 400, message: 'Order not exists or invalid.' };
  }

  return { orders };
}