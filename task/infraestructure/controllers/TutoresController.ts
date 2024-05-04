import { Request, Response } from 'express';
import { TutoresService } from "../../application/services/user-cases/TutoresService";

export const createTutores = async (req: Request, res: Response, tutoresService: TutoresService) => {
    try {
        const newTutor = await tutoresService.createTutores(req.body);
        res.status(201).json(newTutor);
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({error: err.message})
        } else {
            res.status(500).json({ error: "Internal server error" });
        }
    }
};

export const getAllTutores = async (req: Request, res: Response,tutoresService: TutoresService) => {
    try {
        const tutores = await tutoresService.getAllTutores();
        res.status(200).json(tutores);
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(500).json({ error: "Internal server error" });
        }
    }
};