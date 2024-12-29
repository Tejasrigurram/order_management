import db from '../database.js';

// Get all users
export const getAllUsers = (req, res) => {
  const query = 'SELECT * FROM users';

  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send('Error fetching users');
      return;
    }
    res.status(200).json(results);
  });
};

// Get a user by username
export const getUser = (req, res) => {
  const { username } = req.params;
  
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) {
      res.status(500).send('Error fetching user');
      return;
    }
    if (results.length === 0) {
      res.status(404).send('User not found');
      return;
    }
    res.status(200).json(results[0]);
  });
};

// Add a new user
export const addUser = (req, res) => {
  const { username, password, role } = req.body;
  const query = 'INSERT INTO users (username, password, role) VALUES (?, ?, ?)';
  
  db.query(query, [username, password, role], (err, results) => {
    if (err) {
      res.status(500).send('Error adding user');
      return;
    }
    res.status(201).send('User added successfully');
  });
};