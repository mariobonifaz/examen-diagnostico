"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresAlumnosRepositoy = void 0;
const AlumnosModel_1 = __importDefault(require("../../domain/entities/AlumnosModel"));
class PostgresAlumnosRepositoy {
    createAlumnos(alumno) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newAlumno = yield AlumnosModel_1.default.create({
                    Sch_id: alumno.Sch_id,
                    name: alumno.name,
                    last_name: alumno.last_name
                });
                return newAlumno.toJSON();
            }
            catch (error) {
                throw new Error(`Error creating recipe: ${error.message}`);
            }
        });
    }
    assignMateriasToAlumno(alumnoId, materiaIds) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const alumno = yield AlumnosModel_1.default.findByPk(alumnoId);
                if (!alumno) {
                    throw new Error(`Alumno with ID ${alumnoId} not found`);
                }
                yield alumno.setMaterias(materiaIds);
            }
            catch (error) {
                throw new Error(`Error assigning materias to alumno: ${error.message}`);
            }
        });
    }
    getAlumnoById(alumnoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const alumno = yield AlumnosModel_1.default.findByPk(alumnoId);
                return alumno ? alumno.toJSON() : null;
            }
            catch (error) {
                throw new Error(`Error getting alumno by ID: ${error.message}`);
            }
        });
    }
    getAllAlumnos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const alumnos = yield AlumnosModel_1.default.findAll();
                return alumnos.map(alumno => alumno.toJSON());
            }
            catch (error) {
                throw new Error(`Error getting all recipes: ${error.message}`);
            }
        });
    }
}
exports.PostgresAlumnosRepositoy = PostgresAlumnosRepositoy;
