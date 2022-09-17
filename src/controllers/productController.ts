import { Request, Response } from 'express';
import * as productService from '../services/productService';
// import  { InterfaceProduct } from '../interfaces/interfaceProduct';

export async function createProd(req: Request, res: Response) {
  const { product } = req.body;
  const { status, result } = await productService.createProd(product);

  return res.status(status).json(result);
}