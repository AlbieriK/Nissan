import { EmpleadoBecario } from '../models/EmpleadoBecario.model.js';

// Crear un nuevo empleado o becario
export const createEmpleadoBecario = async (req, res) => {
    try {
        const empleadoBecario = new EmpleadoBecario(req.body);
        await empleadoBecario.save();
        res.status(201).json(empleadoBecario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todos los empleados y becarios
export const getEmpleadosBecarios = async (req, res) => {
    try {
        const empleadosBecarios = await EmpleadoBecario.find();
        res.status(200).json(empleadosBecarios);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
