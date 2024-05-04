"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const AlumnosController_1 = require("./task/infraestructure/controllers/AlumnosController");
const PostgresAlumnosRepository_1 = require("./task/infraestructure/repositories/PostgresAlumnosRepository");
const AlumnosService_1 = require("./task/application/services/user-cases/AlumnosService");
const AlumnosController_2 = require("./task/infraestructure/controllers/AlumnosController"); // Importar el nuevo controlador
const MateriasController_1 = require("./task/infraestructure/controllers/MateriasController");
const PostgresMateriasRepository_1 = require("./task/infraestructure/repositories/PostgresMateriasRepository");
const MateriasService_1 = require("./task/application/services/user-cases/MateriasService");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
const alumnosRepository = new PostgresAlumnosRepository_1.PostgresAlumnosRepositoy();
const materiasrepository = new PostgresMateriasRepository_1.PostgresMateriasRepositoy(); // Mover esta línea antes de inicializar alumnosService
const alumnosService = new AlumnosService_1.AlumnosService(alumnosRepository, materiasrepository);
const materiasService = new MateriasService_1.MateriasService(materiasrepository);
// Ruta para asignar materias a un alumno
app.post('/api/v1/alumnos/:alumnoId/materias', (req, res) => (0, AlumnosController_2.assignMateriasToAlumno)(req, res, alumnosService));
// Las rutas existentes para crear y obtener alumnos y materias siguen siendo válidas
app.post('/api/v1/alumnos', (req, res) => (0, AlumnosController_1.createAlumnos)(req, res, alumnosService));
app.get('/api/v1/alumnos', (req, res) => (0, AlumnosController_1.getAllAlumnos)(req, res, alumnosService));
app.post('/api/v1/materias', (req, res) => (0, MateriasController_1.createMaterias)(req, res, materiasService));
app.get('/api/v1/materias', (req, res) => (0, MateriasController_1.getAllMaterias)(req, res, materiasService));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
