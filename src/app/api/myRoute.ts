// src/app/api/myRoute.ts
import { NextApiRequest, NextApiResponse } from 'next';
import mysql, {
  Connection,
  ConnectionOptions,
  RowDataPacket,
} from 'mysql2/promise';

const connectionConfig: ConnectionOptions = {
  host: 'fitconnect.cl6ixe9fyzqb.us-west-1.rds.amazonaws.com',
  port: 3306,
  user: 'admin',
  password: 'e46Jm!2!1sjc',
  database: 'fitconnect',
};

async function establishConnection(): Promise<Connection> {
  const connection = await mysql.createConnection(connectionConfig);
  console.log('Connected to MySQL server');
  return connection;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const usernameToSearch = 'jerrin'; // The username to search in the user_data table
  const passwordToSearch = '1234'; // The password to search in the user_data table

  let connection: Connection | null = null;

  try {
    // Connect to MySQL server
    connection = await establishConnection();

    // Query the user_data table for the hardcoded username and password
    const [rows] = await connection.query<RowDataPacket[]>(
      'SELECT * FROM user_data WHERE username = ? AND password = ?',
      [usernameToSearch, passwordToSearch]
    );

    // Check if the query result has any rows
    if (rows.length > 0) {
      console.log('User found:', rows[0]);
      res.status(200).json({ success: true });
    } else {
      console.log('User not found');
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    if (connection) {
      connection.end(); // Close the MySQL connection
    }
  }
}
