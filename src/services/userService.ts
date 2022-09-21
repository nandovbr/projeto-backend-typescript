import * as userModel from '../models/userModel';
import { InterfaceUser } from '../interfaces/interfaceUser';
import { createToken } from '../middlewares/auth';

export default async function createUser(user: InterfaceUser) {
  await userModel.createUser(user);
  const token: string = createToken(user);
  // console.log('userService: ', result);

  // if (!result) {
  //   return { status: 400, message: 'Invalid entries. Try again.' };
  // }

  return { status: 201, token };
}