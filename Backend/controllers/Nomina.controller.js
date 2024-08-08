import { Nomina } from '../models/Nomina.model.js';

// Crear una nueva entrada de nómina
export const createNomina = async (req, res) => {
    try {
        const nomina = new Nomina(req.body);
        await nomina.save();
        res.status(201).json(nomina);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todas las entradas de nómina
export const getNominas = async (req, res) => {
    try {
        const nominas = await Nomina.find().populate('empleadoId');
        res.status(200).json(nominas);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};