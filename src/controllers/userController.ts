import { Request, Response } from 'express';
// import { InterfaceUser } from '../interfaces/interfaceUser';
import * as userService from '../services/userService';
// import { createToken } from '../middlewares/auth';

export default async function createUser(req: Request, res: Response) {
  const { username, classe, level, password } = req.body;
  const { status, token } = await userService.createUser({ username, classe, level, password });

  res.status(status).json({ token });
}