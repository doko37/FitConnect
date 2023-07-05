import { NextApiRequest, NextApiResponse } from 'next';
import { createConnection, Connection } from 'mysql2/promise';
import jwt from 'jsonwebtoken';

const loginHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { username, password } = req.body;

  // Perform database connection using AWS RDS details
  const connection: Connection = createConnection({
    host: 'ENDPOINT',
    user: 'USERNAME',
    password: 'PASSWORD',
    database: 'fitconnect',
  });

  // Perform login authentication logic
  // Query the database to validate the username and password

  // Close the database connection
  connection.end();

  // Login success response
  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ username }, 'secret_key', { expiresIn: '1h' }); // Create JWT token for later use.
    return res.status(200).json({ token });
  }

  // Login failure response
  return res.status(401).json({ message: 'Invalid Username/Password' });
};

export default loginHandler;
