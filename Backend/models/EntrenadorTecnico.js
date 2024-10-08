import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const entrenadorTecnicoSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    rol: { type: String, required: true }, // Entrenador o Técnico
    turno: { type: String },
    sueldo: { type: Number }
}, { timestamps: true });

export const EntrenadorTecnico = model('EntrenadorTecnico', entrenadorTecnicoSchema);

