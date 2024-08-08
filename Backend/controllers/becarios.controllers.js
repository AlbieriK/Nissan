import { modeloBecario } from "../models/becarios.model.js";

const test = () => {
    console.log("Conexión a becario exitosa");
};

// Ejecutar la operación de creación con manejo de errores
const crearBecario = () => {
    modeloBecario.create({
        nombre: "Alfonsosaurio",
        Apellido: "Velazques",
        Rol: "Becario en mecatrónica",
        Turno: "Matutino",
        sueldo: 6000
    }).then(() => {
        console.log("Becario creado con éxito");
    }).catch(error => {
        console.error("Error al crear becario:", error);
    });
};

// Exportar la función `test` y `crearBecario`
export { test, crearBecario };


