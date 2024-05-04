import { Request, Response } from 'express';
import { MateriasService } from "../../application/services/user-cases/MateriasService";

export const createMaterias = async (req: Request, res: Response, materiasService: MateriasService) => {
    try {
        const newMateria = await materiasService.createMaterias(req.body);
        res.status(201).json(newMateria);
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({error: err.message})
        } else {
            res.status(500).json({ error: "Internal server error" });
        }
    }
};

export const getAllMaterias = async (req: Request, res: Response, materiasService: MateriasService) => {
    try {
        const materias = await materiasService.getAllMaterias();
        res.status(200).json(materias);
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(500).json({ error: "Internal server error" });
        }
    }
};