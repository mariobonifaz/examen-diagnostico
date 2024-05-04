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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnosService = void 0;
class AlumnosService {
    constructor(alumnosRepository, materiasRepository) {
        this.alumnosRepository = alumnosRepository;
        this.materiasRepository = materiasRepository;
    }
    createAlumnos(alumno) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.alumnosRepository.createAlumnos(alumno);
            }
            catch (error) {
                throw new Error(`Error creating recipe: ${error.message}`);
            }
        });
    }
    assignMateriasToAlumno(alumnoId, materiaIds) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const alumno = yield this.alumnosRepository.getAlumnoById(alumnoId);
                if (!alumno) {
                    throw new Error(`Alumno with ID ${alumnoId} not found`);
                }
                const materias = yield Promise.all(materiaIds.map(id => this.materiasRepository.getMateriaById(id)));
                yield alumno.setMaterias(materias);
            }
            catch (error) {
                throw new Error(`Error assigning materias to alumno: ${error.message}`);
            }
        });
    }
    getAllAlumnos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.alumnosRepository.getAllAlumnos();
            }
            catch (error) {
                throw new Error(`Error getting all recipes: ${error.message}`);
            }
        });
    }
}
exports.AlumnosService = AlumnosService;
