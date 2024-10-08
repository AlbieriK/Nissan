import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import empleadoBecarioRoutes from './Backend/routes/empleadoBecario.routes.js';
import entrenadorTecnicoRoutes from './Backend/routes/entrenadorTecnico.routes.js';
import liderRoutes from './Backend/routes/lider.routes.js';
import nominaRoutes from './Backend/routes/nomina.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Conectado a la base de datos con éxito");
    })
    .catch((error) => {
        console.error("Error al conectar a la base de datos:", error.message);
    });

// Definir las rutas
app.use('/empleados-becarios', empleadoBecarioRoutes);
app.use('/entrenadores-tecnicos', entrenadorTecnicoRoutes);
app.use('/lideres', liderRoutes);
app.use('/nomina', nominaRoutes);

app.use((req, res, next) => {
    res.status(404).json({ error: 'no encontrado' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Error interno del servidor' });
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor funcionando correctamente en el puerto ${PORT}`);
});

