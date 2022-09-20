import connection from './connection';
import { InterfaceOrder } from '../interfaces/interfaceOrder';

export async function getOrders()
: Promise<InterfaceOrder[]> {
  const [orders] = await connection.execute(
    `SELECT ord.id, ord.userId, JSON_ARRAYAGG(prod.id) AS productsIds
    FROM Trybesmith.Orders AS ord
    INNER JOIN Trybesmith.Products AS prod
    ON prod.orderId = ord.id
    GROUP BY ord.id
    ORDER BY ord.userId`,
  );
  return orders as InterfaceOrder[];
}