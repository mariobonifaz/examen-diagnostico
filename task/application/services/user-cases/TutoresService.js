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
exports.TutoresService = void 0;
class TutoresService {
    constructor(tutoresRepository, alumnosRepository) {
        this.tutoresRepository = tutoresRepository;
        this.alumnosRepository = alumnosRepository;
    }
    createTutores(tutores) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.tutoresRepository.createTutores(tutores);
            }
            catch (error) {
                throw new Error(`Error creating recipe: ${error.message}`);
            }
        });
    }
    assignAlumnosToTutores(tutorId, alumnoIds) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tutor = yield this.tutoresRepository.getTutorById(tutorId);
                if (!tutor) {
                    throw new Error(`Alumno with ID ${tutorId} not found`);
                }
                const alumnos = yield Promise.all(alumnoIds.map(id => this.alumnosRepository.getAlumnoById(id)));
                const ids = alumnos.filter(alumno => alumno !== null).map(alumno => alumno.id);
                if ('setAlumnos' in tutor) {
                    yield tutor.setAlumnos(ids);
                }
                else {
                    throw new Error("setAlumnos method not available on alumno object");
                }
            }
            catch (error) {
                throw new Error(`Error assigning alumnos to materias: ${error.message}`);
            }
        });
    }
    getAllTutores() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.tutoresRepository.getAllTutores();
            }
            catch (error) {
                throw new Error(`Error getting all recipes: ${error.message}`);
            }
        });
    }
}
exports.TutoresService = TutoresService;
