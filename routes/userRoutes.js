import express from 'express';
const router = express.Router();
import { authUser, getUsers } from '../controller/userController.js';

router.get('/', getUsers);
router.post('/login', authUser);

export default router;
