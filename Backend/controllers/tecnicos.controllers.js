//Tecnico y entrenadores
import { modelotecnicos } from "../models/becarios.model.js";

const test = () => {
    console.log("Conexion a entrenador exitosa")
}
export default test

modelotecnicos.create({
    nombre:"Pancho",
    Apellido:"Velazques",
    Rol:"entrenador",
    Turno:"Matutino",
    sueldo:16000
})