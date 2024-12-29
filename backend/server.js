// import express from 'express';
// import cors from 'cors';
// import path from 'path';

// const app = express();
// const port = 5000;

// // Import routes
// import orderRoutes from './routes/orders.js';
// import userRoutes from './routes/users.js';

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Serve static files from the "public" directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Use routes
// app.use('/api/orders', orderRoutes);
// app.use('/api/users', userRoutes);

// // Start server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// // Debugging
// console.log('Server setup complete');

import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 5000;

// Get __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import routes
import orderRoutes from './routes/orders.js';
import userRoutes from './routes/users.js';

// Middleware
app.use(express.json());
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Debugging
console.log('Server setup complete');