//Nota Becarios y empleados deben de tener el mismo esquema
import mongoose from 'mongoose';
import { esquema1 } from "./empleados.model.js"; // Asegúrate de que esto coincida exactamente


export const modeloBecario = mongoose.model('Becario', esquema1);

