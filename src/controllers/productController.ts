import { Request, Response } from 'express';
import * as productService from '../services/productService';
import { InterfaceProduct } from '../interfaces/interfaceProduct';

export async function getProducts(_req: Request, res: Response) {
  const { status, result } = await productService.getProducts();

  return res.status(status).json(result);
}

export async function createProd(req: Request, res: Response) {
  const product = req.body as InterfaceProduct;
  const { status, result } = await productService.createProd(product);

  return res.status(status).json(result);
}