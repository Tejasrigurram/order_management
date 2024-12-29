import { Router } from 'express';
import { getAllOrders, addOrder } from '../controllers/orderController.js'; // Ensure this path is correct

const router = Router();

// Route to get all orders
router.get('/', getAllOrders);

// Route to add a new order
router.post('/', addOrder);

export default router;