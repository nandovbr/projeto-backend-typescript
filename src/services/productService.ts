import * as productModel from '../models/productModel';
import { InterfaceProduct } from '../interfaces/interfaceProduct';

export default async function createProd(product: InterfaceProduct) {
  const result = await productModel.createProd(product);

  if (!result) {
    return { status: 400, message: 'Invalid entries. Try again.' };
  }

  return { status: 201, result };
}