
import { modeloLideres } from "../model/lideres.model.js";

const test = () => {
    console.log("Conexion a entrenador exitosa")
}
export default test

modeloLideres.create({
    nombre:"Alfonso",
    Apellido:"Velazques",
    Rol:"entrenador",
    Turno:"Matutino",
    sueldo:16000
})