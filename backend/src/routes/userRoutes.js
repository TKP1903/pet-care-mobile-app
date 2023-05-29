import { Router } from 'express';
import { registerUser,getAllUsers,loginUser,addPetDetails } from '../controllers/userController.js';

const router = Router();

router.post('/register', registerUser);
router.get('/allusers', getAllUsers);
router.post('/login',loginUser);
router.post('/addpetdetails',addPetDetails);

export default router;