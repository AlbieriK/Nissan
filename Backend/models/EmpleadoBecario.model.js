import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const empleadoBecarioSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    rol: { type: String, required: true },
    turno: { type: String },
    sueldo: { type: Number }
}, { timestamps: true });

export const EmpleadoBecario = model('EmpleadoBecario', empleadoBecarioSchema);

