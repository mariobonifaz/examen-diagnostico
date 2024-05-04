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
exports.PostgresTutoresRepositoy = void 0;
const TutoresModel_1 = __importDefault(require("../../domain/entities/TutoresModel"));
class PostgresTutoresRepositoy {
    createTutores(tutores) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newTutores = yield TutoresModel_1.default.create({
                    Sch_id: tutores.Sch_id,
                    name: tutores.name,
                    last_name: tutores.last_name
                });
                return newTutores.toJSON();
            }
            catch (error) {
                throw new Error(`Error creating recipe: ${error.message}`);
            }
        });
    }
    assignAlumnosToTutores(tutorId, alumnoIds) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tutor = yield TutoresModel_1.default.findByPk(tutorId);
                if (!tutor) {
                    throw new Error(`Tutor with ID ${tutorId} not found`);
                }
                yield tutor.setAlumnos(alumnoIds);
            }
            catch (error) {
                throw new Error(`Error assigning Alumnos to Tutores: ${error.message}`);
            }
        });
    }
    getTutorById(tutorId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tutor = yield TutoresModel_1.default.findByPk(tutorId);
                return tutor; // Devuelve el modelo completo sin conversión a JSON
            }
            catch (error) {
                throw new Error(`Error getting tutor by ID: ${error.message}`);
            }
        });
    }
    getAllTutores() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tutores = yield TutoresModel_1.default.findAll();
                return tutores.map(tutores => tutores.toJSON());
            }
            catch (error) {
                throw new Error(`Error getting all recipes: ${error.message}`);
            }
        });
    }
}
exports.PostgresTutoresRepositoy = PostgresTutoresRepositoy;
