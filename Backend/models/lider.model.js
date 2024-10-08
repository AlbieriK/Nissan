import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const liderSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    departamento: { type: String, required: true },
    salario: { type: Number, required: true }
}, { timestamps: true });

export const Lider = model('Lider', liderSchema);
