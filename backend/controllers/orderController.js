import db from '../database.js';

// Get all orders
export const getAllOrders = (req, res) => {
  db.query('SELECT * FROM orders', (err, results) => {
    if (err) {
      res.status(500).send('Error fetching orders');
      return;
    }
    res.status(200).json(results);
  });
};

// Add a new order
export const addOrder = (req, res) => {
  const { customer_name, status } = req.body;
  const query = 'INSERT INTO orders (customer_name, status) VALUES (?, ?)';
  
  db.query(query, [customer_name, status], (err, results) => {
    if (err) {
      res.status(500).send('Error adding order');
      return;
    }
    res.status(201).json({ id: results.insertId, customer_name, status });
  });
};