import { Router } from 'express';
import { registerUser,getAllUsers } from '../controllers/userController.js';

const router = Router();

router.post('/register', registerUser);
router.get('/allusers', getAllUsers);

export default router;