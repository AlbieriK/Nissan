//LIBRERIAS
import mongoose from 'mongoose'
import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
//DIRECTORIOS
import testEmpleados from './backend/controllers/Empleados.controller.js'
import testBecarios from './backend/controllers/becarios.controllers.js'
import testEntrenadores from './backend/controllers/entrenadores.controllers.js'
import testLideres from './backend/controllers/lideres.controllers.js'
import testNomina from './backend/controllers/nomina.controllers.js'
import testTecnico from './backend/controllers/tecnicos.controllers.js'
//pendiente falta añadir 2

dotenv.config()
mongoose.connect(process.env.url)

.then(()=> {
    console.log("Servidor en ascendencia")
})
.catch((error)=>{
    console.log("Servidor en decadencia")
})

const app =express()
app.use(cors())

app.listen(4500,()=>{
    console.log("Servidor funcionando")
})

testEmpleados()
testBecarios()
testEntrenadores()
testLideres()
testNomina()
testTecnico()
