import { createConnection } from 'mysql2';

// MySQL connection details
const db = createConnection({
  host: 'localhost',
  user: 'root',  // replace with your MySQL username
  password: 'tejasri@13', // yessssss
  database: 'order_management'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to MySQL database');
});

export default db;
