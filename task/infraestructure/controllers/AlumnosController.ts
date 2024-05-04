import { Request, Response } from 'express';
import { AlumnosService } from "../../application/services/user-cases/AlumnosService";

export const createAlumnos = async (req: Request, res: Response, alumnosService: AlumnosService) => {
    try {
        const newAlumno = await alumnosService.createAlumnos(req.body);
        res.status(201).json(newAlumno);
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({error: err.message})
        } else {
            res.status(500).json({ error: "Internal server error" });
        }
    }
};

export const getAllAlumnos = async (req: Request, res: Response,alumnosService: AlumnosService) => {
    try {
        const alumnos = await alumnosService.getAllAlumnos();
        res.status(200).json(alumnos);
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(500).json({ error: "Internal server error" });
        }
    }
};

export const assignMateriasToAlumno = async (req: Request, res: Response, alumnosService: AlumnosService) => {
    try {
        const alumnoId: number = parseInt(req.params.alumnoId, 10);
        const { materiaIds } = req.body;

        if (!Array.isArray(materiaIds)) {
            throw new Error('materiaIds must be an array');
        }

        await alumnosService.assignMateriasToAlumno(alumnoId, materiaIds);

        res.status(200).json({ message: 'Materias assigned successfully' });
    } catch (err) {
        if (err instanceof Error) {
            if (err.message === 'materiaIds must be an array') {
                res.status(400).json({ error: err.message });
            } else {
                res.status(500).json({ error: err.message });
            }
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};
