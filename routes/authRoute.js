import express from 'express';
import { deleteUser, Login, signup, } from '../controllers/authController.js';

const router = express.Router()

router.post('/login', Login)
router.post('/signup', signup)
router.delete('/users/:id', deleteUser)
export default router;