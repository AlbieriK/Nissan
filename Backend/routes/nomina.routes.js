import express from 'express';
import { createNomina, getNominas } from '../controllers/Nomina.controller.js';

const router = express.Router();

router.post('/', createNomina);
router.get('/', getNominas);

export default router;
