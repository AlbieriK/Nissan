
import { modeloNomina } from "../model/nomina.model.js";

const test = () => {
    console.log("Conexion a entrenador exitosa")
}
export default test

modeloNomina.create({
    Fecha:251025,
    Nombre_Completo:"Pablo San Juan",
    Rol:"Administrador",
    Turno:"Matutino",
    Pago:26000
})
