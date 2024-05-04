import express from 'express';
import bodyParser from 'body-parser';
import { createAlumnos, getAllAlumnos } from "./task/infraestructure/controllers/AlumnosController";
import { PostgresAlumnosRepositoy } from "./task/infraestructure/repositories/PostgresAlumnosRepository";
import { AlumnosService } from "./task/application/services/user-cases/AlumnosService";
import { assignMateriasToAlumno } from "./task/infraestructure/controllers/AlumnosController"; // Importar el nuevo controlador

import { createMaterias, getAllMaterias } from "./task/infraestructure/controllers/MateriasController";
import { PostgresMateriasRepositoy } from "./task/infraestructure/repositories/PostgresMateriasRepository";
import { MateriasService } from "./task/application/services/user-cases/MateriasService";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const alumnosRepository = new PostgresAlumnosRepositoy();
const materiasrepository = new PostgresMateriasRepositoy(); // Mover esta línea antes de inicializar alumnosService

const alumnosService = new AlumnosService(alumnosRepository, materiasrepository);
const materiasService = new MateriasService(materiasrepository);

// Ruta para asignar materias a un alumno
app.post('/api/v1/alumnos/:alumnoId/materias', (req, res) => assignMateriasToAlumno(req, res, alumnosService));

// Las rutas existentes para crear y obtener alumnos y materias siguen siendo válidas
app.post('/api/v1/alumnos', (req, res) => createAlumnos(req, res, alumnosService));
app.get('/api/v1/alumnos', (req, res) => getAllAlumnos(req, res, alumnosService));

app.post('/api/v1/materias', (req, res) => createMaterias(req, res, materiasService));
app.get('/api/v1/materias', (req, res) => getAllMaterias(req, res, materiasService));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
