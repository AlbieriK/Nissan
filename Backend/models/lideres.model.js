import { Schema, model } from "mongoose";
export const esquema1 = new Schema({
    nombre:{type:String},
    Apellido:{type:String},
    Rol:{type:String},
    Turno:{type:String},
    sueldo:{type:Number}
})

export const modeloLideres = new model('Lideres',esquema1)
