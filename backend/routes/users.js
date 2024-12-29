import { Router } from 'express';
import { getUser, addUser,getAllUsers } from '../controllers/userController.js'; // Ensure this path is correct

const router = Router();

// Route to get a user by username
router.get('/:username', getUser);
router.get('/', getAllUsers);
// Route to add a new user
router.post('/', addUser);

export default router;