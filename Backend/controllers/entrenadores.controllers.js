//Tecnico y entrenadores
import { modeloEntrenadores } from "../model/becarios.model.js";

const test = () => {
    console.log("Conexion a entrenadores exitosa")
}
export default test

modeloEntrenadores.create({
    nombre:"Alfonso",
    Apellido:"Velazques",
    Rol:"entrenador",
    Turno:"Matutino",
    sueldo:16000
})
