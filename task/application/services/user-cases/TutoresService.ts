import { Tutores } from '../../../domain/entities/Tutores';
import { TutoresRepository } from '../../../infraestructure/repositories/TutoresRepository';

export class TutoresService {
    constructor(private tutoresRepository: TutoresRepository) {}

    async createTutores(tutores: Tutores): Promise<Tutores> {
        try {
            return await this.tutoresRepository.createTutores(tutores);
        } catch (error) {
            throw new Error(`Error creating recipe: ${(error as Error).message}`);
        }
    }


    async getAllTutores(): Promise<Tutores[]> {
        try {
            return await this.tutoresRepository.getAllTutores();
        } catch (error) {
            throw new Error(`Error getting all recipes: ${(error as Error).message}`);
        }
    }
}