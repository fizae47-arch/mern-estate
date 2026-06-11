import express from 'express'
import { deleteUser, test, updateUser, getUserListings, getUser } from '../controller/user.controller.js';
import { verifyToken } from '../Utils/verifyUser.js';

const router = express.Router();

router.get('/test', test);
router.put('/update/:id', verifyToken, updateUser)
router.delete('/delete/:id', verifyToken, deleteUser)
router.get('/listings/:id', verifyToken, getUserListings)
router.get('/:id', getUser)

export default router; 