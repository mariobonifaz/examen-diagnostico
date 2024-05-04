"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// Importar la configuración de Sequelize antes de cualquier controlador o servicio que utilice los modelos
require("./Database/Sequelize");
const AlumnosController_1 = require("./task/infraestructure/controllers/AlumnosController");
const MateriasController_1 = require("./task/infraestructure/controllers/MateriasController");
const TutoresController_1 = require("./task/infraestructure/controllers/TutoresController");
const PostgresAlumnosRepository_1 = require("./task/infraestructure/repositories/PostgresAlumnosRepository");
const PostgresMateriasRepository_1 = require("./task/infraestructure/repositories/PostgresMateriasRepository");
const PostgresTutoresRepository_1 = require("./task/infraestructure/repositories/PostgresTutoresRepository");
const AlumnosService_1 = require("./task/application/services/user-cases/AlumnosService");
const MateriasService_1 = require("./task/application/services/user-cases/MateriasService");
const TutoresService_1 = require("./task/application/services/user-cases/TutoresService");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
const alumnosRepository = new PostgresAlumnosRepository_1.PostgresAlumnosRepositoy();
const materiasRepository = new PostgresMateriasRepository_1.PostgresMateriasRepositoy();
const tutoresRepository = new PostgresTutoresRepository_1.PostgresTutoresRepositoy();
const alumnosService = new AlumnosService_1.AlumnosService(alumnosRepository, materiasRepository);
const materiasService = new MateriasService_1.MateriasService(materiasRepository);
const tutoresService = new TutoresService_1.TutoresService(tutoresRepository, alumnosRepository);
// Definición de rutas
app.post('/api/v2/alumnos/:alumnoId/materias', (req, res) => (0, AlumnosController_1.assignMateriasToAlumno)(req, res, alumnosService));
app.post('/api/v1/alumnos', (req, res) => (0, AlumnosController_1.createAlumnos)(req, res, alumnosService));
app.get('/api/v1/alumnos', (req, res) => (0, AlumnosController_1.getAllAlumnos)(req, res, alumnosService));
app.post('/api/v1/materias', (req, res) => (0, MateriasController_1.createMaterias)(req, res, materiasService));
app.get('/api/v1/materias', (req, res) => (0, MateriasController_1.getAllMaterias)(req, res, materiasService));
app.post('/api/v2/tutores/:tutorId/alumnos', (req, res) => (0, TutoresController_1.assignAlumnosToTutores)(req, res, tutoresService));
app.post('/api/v2/tutores', (req, res) => (0, TutoresController_1.createTutores)(req, res, tutoresService));
app.get('/api/v2/tutores', (req, res) => (0, TutoresController_1.getAllTutores)(req, res, tutoresService));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
