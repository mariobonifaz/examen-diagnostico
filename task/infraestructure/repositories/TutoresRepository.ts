import { Tutores } from "../../domain/entities/Tutores";

export interface TutoresRepository {
    createTutores(tutores: Tutores): Promise<Tutores>;
    getAllTutores(): Promise<Tutores[]>;
}