import { Lider } from '../models/Lider.model.js';

// Crear un nuevo líder
export const createLider = async (req, res) => {
    try {
        const lider = new Lider(req.body);
        await lider.save();
        res.status(201).json(lider);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todos los líderes
export const getLideres = async (req, res) => {
    try {
        const lideres = await Lider.find();
        res.status(200).json(lideres);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
