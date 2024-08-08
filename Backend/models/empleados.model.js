import { Schema, model } from "mongoose";


export const esquema1 = new Schema({
    nombre: { type: String },
    Apellido: { type: String },
    Rol: { type: String },
    Turno: { type: String },
    sueldo: { type: Number }
});

// Crear el modelo utilizando el esquema
export const modeloEmpleados = model('Empleado', esquema1);

