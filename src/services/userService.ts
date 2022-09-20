import * as userModel from '../models/userModel';
import { InterfaceUser } from '../interfaces/interfaceUser';

export async function createUser(user: InterfaceUser) {
  await userModel.createUser(user);
  // console.log('userService: ', result);

  // if (!result) {
  //   return { status: 400, message: 'Invalid entries. Try again.' };
  // }

  return { status: 201 };
}