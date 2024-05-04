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
exports.assignAlumnosToTutores = exports.getAllTutores = exports.createTutores = void 0;
const createTutores = (req, res, tutoresService) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newTutor = yield tutoresService.createTutores(req.body);
        res.status(201).json(newTutor);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: "Internal server error" });
        }
    }
});
exports.createTutores = createTutores;
const getAllTutores = (req, res, tutoresService) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tutores = yield tutoresService.getAllTutores();
        res.status(200).json(tutores);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: "Internal server error" });
        }
    }
});
exports.getAllTutores = getAllTutores;
const assignAlumnosToTutores = (req, res, tutoresService) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tutorId = parseInt(req.params.tutorId, 10);
        const { alumnoIds } = req.body;
        if (!Array.isArray(alumnoIds)) {
            throw new Error('materiaIds must be an array');
        }
        yield tutoresService.assignAlumnosToTutores(tutorId, alumnoIds);
        res.status(200).json({ message: 'alumnos assigned successfully' });
    }
    catch (err) {
        if (err instanceof Error) {
            if (err.message === 'alumnosIds must be an array') {
                res.status(400).json({ error: err.message });
            }
            else {
                res.status(500).json({ error: err.message });
            }
        }
        else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});
exports.assignAlumnosToTutores = assignAlumnosToTutores;
