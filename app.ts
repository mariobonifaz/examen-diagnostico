import express from 'express';
import bodyParser from 'body-parser';
// Importar la configuración de Sequelize antes de cualquier controlador o servicio que utilice los modelos
import './Database/Sequelize';

import { createAlumnos, getAllAlumnos, assignMateriasToAlumno } from "./task/infraestructure/controllers/AlumnosController";
import { createMaterias, getAllMaterias } from "./task/infraestructure/controllers/MateriasController";
import { createTutores, getAllTutores, assignAlumnosToTutores } from "./task/infraestructure/controllers/TutoresController";
import { PostgresAlumnosRepositoy } from "./task/infraestructure/repositories/PostgresAlumnosRepository";
import { PostgresMateriasRepositoy } from "./task/infraestructure/repositories/PostgresMateriasRepository";
import { PostgresTutoresRepositoy } from "./task/infraestructure/repositories/PostgresTutoresRepository";
import { AlumnosService } from "./task/application/services/user-cases/AlumnosService";
import { MateriasService } from "./task/application/services/user-cases/MateriasService";
import { TutoresService } from './task/application/services/user-cases/TutoresService';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const alumnosRepository = new PostgresAlumnosRepositoy();
const materiasRepository = new PostgresMateriasRepositoy();
const tutoresRepository = new PostgresTutoresRepositoy();

const alumnosService = new AlumnosService(alumnosRepository, materiasRepository);
const materiasService = new MateriasService(materiasRepository);
const tutoresService = new TutoresService(tutoresRepository, alumnosRepository);

// Definición de rutas
app.post('/api/v2/alumnos/:alumnoId/materias', (req, res) => assignMateriasToAlumno(req, res, alumnosService));
app.post('/api/v1/alumnos', (req, res) => createAlumnos(req, res, alumnosService));
app.get('/api/v1/alumnos', (req, res) => getAllAlumnos(req, res, alumnosService));

app.post('/api/v1/materias', (req, res) => createMaterias(req, res, materiasService));
app.get('/api/v1/materias', (req, res) => getAllMaterias(req, res, materiasService));

app.post('/api/v2/tutores/:tutorId/alumnos', (req, res) => assignAlumnosToTutores(req, res, tutoresService));
app.post('/api/v2/tutores', (req,res) => createTutores(req,res, tutoresService));
app.get('/api/v2/tutores', (req, res) => getAllTutores(req,res, tutoresService));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

