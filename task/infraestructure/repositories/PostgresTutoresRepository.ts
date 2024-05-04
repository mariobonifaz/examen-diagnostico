import { Tutores } from "../../domain/entities/Tutores";
import { TutoresRepository } from "../repositories/TutoresRepository";
import TutoresModel from "../../domain/entities/TutoresModel";

export class PostgresTutoresRepositoy implements TutoresRepository {
    async createTutores(tutores: Tutores): Promise<Tutores> {
        try{
            const newTutores = await TutoresModel.create({
                Sch_id: tutores.Sch_id,
                name: tutores.name,
                last_name: tutores.last_name                
            });
            return newTutores.toJSON() as Tutores;
        } catch (error){
            throw new Error(`Error creating recipe: ${(error as Error).message}`);
        }
    }

    async assignAlumnosToTutores(tutorId: number, alumnoIds: number[]): Promise<void> {
        try {
            const tutor: any = await TutoresModel.findByPk(tutorId);
            if (!tutor) {
                throw new Error(`Tutor with ID ${tutorId} not found`);
            }

            await tutor.setAlumnos(alumnoIds);
        } catch (error) {
            throw new Error(`Error assigning Alumnos to Tutores: ${(error as Error).message}`);
        }
    }

    async getTutorById(tutorId: number): Promise<any | null> {
        try {
            const tutor = await TutoresModel.findByPk(tutorId);
            return tutor; // Devuelve el modelo completo sin conversión a JSON
        } catch (error) {
            throw new Error(`Error getting tutor by ID: ${(error as Error).message}`);
        }
    }

    async getAllTutores(): Promise<Tutores[]> {
        try {
            const tutores = await TutoresModel.findAll();
            return tutores.map(tutores => tutores.toJSON()as Tutores)
        } catch (error) {
            throw new Error(`Error getting all recipes: ${(error as Error).message}`); 
        }
    }
}