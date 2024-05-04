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
    async getAllTutores(): Promise<Tutores[]> {
        try {
            const tutores = await TutoresModel.findAll();
            return tutores.map(tutores => tutores.toJSON()as Tutores)
        } catch (error) {
            throw new Error(`Error getting all recipes: ${(error as Error).message}`); 
        }
    }
}