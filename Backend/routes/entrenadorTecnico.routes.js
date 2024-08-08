import express from 'express';
import { createEntrenadorTecnico, getEntrenadoresTecnicos } from '../controllers/EntrenadorTecnico.controller.js';

const router = express.Router();

router.post('/', createEntrenadorTecnico);
router.get('/', getEntrenadoresTecnicos);

export default router;