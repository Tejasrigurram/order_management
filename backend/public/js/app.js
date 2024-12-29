import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// import ordersRouter from './routes/orders.js';
// import usersRouter from './routes/users.js';
import ordersRouter from '../../routes/orders.js';
import usersRouter from '../../routes/users.js';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use('/api/orders', ordersRouter); // Routes for orders
app.use('/api/users', usersRouter);   // Routes for users

// Base route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the Customer Order Management API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
