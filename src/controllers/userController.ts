import { Request, Response, NextFunction } from 'express';
// import { InterfaceUser } from '../interfaces/interfaceUser';
import * as userService from '../services/userService';
import { createToken } from '../middlewares/auth';


export async function createUser(req: Request, res: Response, next: NextFunction) {
  const { username, classe, level, password } = req.body;
  const { status, result } = await userService.createUser({ username, classe, level, password });

  if (!username) {
    return res.status(401).json({ message: 'Username invalid or not exists' });
  }

  const token = createToken(username);
  // console.log('token: ', token)

  res.status(status).json(result);

  next();
}