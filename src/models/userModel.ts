import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { InterfaceUser } from '../interfaces/interfaceUser';

export async function createUser(user: InterfaceUser)
  : Promise<void> {
  const { username, classe, level, password } = user;
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );
}