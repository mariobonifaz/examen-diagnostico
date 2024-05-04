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
exports.PostgresMateriasRepositoy = void 0;
const MateriasModel_1 = __importDefault(require("../../domain/entities/MateriasModel")); // Asegurar la importación correcta
class PostgresMateriasRepositoy {
    getMateriaById(materiasId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const materia = yield MateriasModel_1.default.findByPk(materiasId);
                return materia ? materia.toJSON() : null;
            }
            catch (error) {
                throw new Error(`Error getting materia by ID: ${error.message}`);
            }
        });
    }
    createMaterias(materias) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newMaterias = yield MateriasModel_1.default.create({
                    name: materias.name,
                    quota: materias.quota
                });
                return newMaterias.toJSON();
            }
            catch (error) {
                throw new Error(`Error creating Materias: ${error.message}`);
            }
        });
    }
    getAllMaterias() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const materias = yield MateriasModel_1.default.findAll();
                return materias.map(materia => materia.toJSON()); // Cambiado materias a materia
            }
            catch (error) {
                throw new Error(`Error getting all Materias: ${error.message}`);
            }
        });
    }
}
exports.PostgresMateriasRepositoy = PostgresMateriasRepositoy;
