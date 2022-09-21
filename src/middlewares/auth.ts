import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { InterfaceUser } from '../interfaces/interfaceUser';

const JWT_SECRET = 'trybe';

if (!JWT_SECRET) {
  const error = new Error();
  error.message = 'Token not found';
  throw error;
}

export const createToken = (username: InterfaceUser) => {
  const token = jwt.sign({ username }, JWT_SECRET);
  return token;
};

export const validToken = (req: Request, res: Response) => {
  const { username } = req.body;
  // console.log('password: ', username)

  if (!username) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  const token = createToken(username);
  // console.log('token: ', token)

  res.status(201).json({ token });
};