import { modeloEmpleados } from '../models/empleados.model.js';

export const crearEmpleado = async (req, res) => {
    try {
        const empleado = await modeloEmpleados.create(req.body);
        res.status(201).json(empleado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
