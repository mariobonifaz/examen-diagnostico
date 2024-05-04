import { Tutores } from "../../domain/entities/Tutores";

export interface TutoresRepository {
    getTutorById(tutorId: number): Promise<Tutores | null>;
    createTutores(tutores: Tutores): Promise<Tutores>;
    getAllTutores(): Promise<Tutores[]>;
}