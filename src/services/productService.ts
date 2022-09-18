import * as productModel from '../models/productModel';
import { InterfaceProduct } from '../interfaces/interfaceProduct';

export async function getProducts() {
  const result = await productModel.getProducts();

  if (!result) {
    return { status: 400, message: 'Product not found.' };
  }

  return { status: 200, result };
}

export async function createProd(product: InterfaceProduct) {
  const result = await productModel.createProd(product);

  if (!result) {
    return { status: 400, message: 'Invalid entries. Try again.' };
  }

  return { status: 201, result };
}