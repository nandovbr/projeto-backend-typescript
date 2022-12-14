import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { InterfaceProduct } from '../interfaces/interfaceProduct';

export async function getProducts(): Promise<InterfaceProduct[]> {
  const [result] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return result as InterfaceProduct[];
}

export async function createProd(product: InterfaceProduct)
  : Promise<InterfaceProduct> {
  const { name, amount } = product;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  return { id: result.insertId, name, amount };
}