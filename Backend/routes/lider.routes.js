import express from 'express';
import { createLider, getLideres } from '../controllers/Lider.controller.js';

const router = express.Router();

router.post('/', createLider);
router.get('/', getLideres);

export default router;
