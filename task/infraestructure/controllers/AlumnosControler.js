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
exports.getAllAlumnos = exports.createAlumnos = void 0;
const createAlumnos = (req, res, alumnosService) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newAlumno = yield alumnosService.createAlumnos(req.body);
        res.status(201).json(newAlumno);
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
exports.createAlumnos = createAlumnos;
const getAllAlumnos = (req, res, alumnosService) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const alumnos = yield alumnosService.getAllAlumnos();
        res.status(200).json(alumnos);
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
exports.getAllAlumnos = getAllAlumnos;
