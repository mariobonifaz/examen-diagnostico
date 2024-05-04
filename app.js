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
const PostgresAlumnosRepository_1 = require("./task/infraestructure/repositories/PostgresAlumnosRepository");
const PostgresMateriasRepository_1 = require("./task/infraestructure/repositories/PostgresMateriasRepository");
const AlumnosService_1 = require("./task/application/services/user-cases/AlumnosService");
const MateriasService_1 = require("./task/application/services/user-cases/MateriasService");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
const alumnosRepository = new PostgresAlumnosRepository_1.PostgresAlumnosRepositoy();
const materiasRepository = new PostgresMateriasRepository_1.PostgresMateriasRepositoy();
const alumnosService = new AlumnosService_1.AlumnosService(alumnosRepository, materiasRepository);
const materiasService = new MateriasService_1.MateriasService(materiasRepository);
// Definición de rutas
app.post('/api/v1/alumnos/:alumnoId/materias', (req, res) => (0, AlumnosController_1.assignMateriasToAlumno)(req, res, alumnosService));
app.post('/api/v1/alumnos', (req, res) => (0, AlumnosController_1.createAlumnos)(req, res, alumnosService));
app.get('/api/v1/alumnos', (req, res) => (0, AlumnosController_1.getAllAlumnos)(req, res, alumnosService));
app.post('/api/v1/materias', (req, res) => (0, MateriasController_1.createMaterias)(req, res, materiasService));
app.get('/api/v1/materias', (req, res) => (0, MateriasController_1.getAllMaterias)(req, res, materiasService));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
