//Nota Tecnicos y entrenadores deben de tener el mismo esquema
import { Schema, model } from "mongoose";

export const esquema = new Schema({
    nombre:{type:String},
    Apellido:{type:String},
    Rol:{type:String},
    Turno:{type:String},
    sueldo:{type:Number}
})

export const modeloTecnicos = new model('Tecnico',esquema)


