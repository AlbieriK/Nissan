import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const nominaSchema = new Schema({
    empleadoId: { type: Schema.Types.ObjectId, ref: 'EmpleadoBecario', required: true },
    periodo: { type: String, required: true },
    cantidad: { type: Number, required: true }
}, { timestamps: true });

export const Nomina = model('Nomina', nominaSchema);
