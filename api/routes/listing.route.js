import express from 'express';
import {createListing, deleteListing, updateListing} from '../controller/listing.controller.js';
import { verifyToken } from '../Utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update', verifyToken, updateListing);

export default router;