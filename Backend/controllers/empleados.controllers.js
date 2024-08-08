// Importar el modelo de empleados con la ruta y nombre correcto
import { modeloEmpleados } from "../models/empleados.model.js"; // Asegúrate de que esta ruta sea correcta

// Función para probar la conexión
const test = () => {
    console.log("Conexión a empleados exitosa");
};

// Función para crear un empleado
const crearEmpleado = () => {
    modeloEmpleados.create({
        nombre: "Alfonso",
        Apellido: "Velazques",
        Rol: "Ingeniero en mecatrónica",
        Turno: "Matutino",
        sueldo: 15000
    }).then(() => {
        console.log("Empleado creado con éxito");
    }).catch(error => {
        console.error("Error al crear empleado:", error);
    });
};

// Exportar las funciones para su uso en otros módulos
export { test, crearEmpleado };


