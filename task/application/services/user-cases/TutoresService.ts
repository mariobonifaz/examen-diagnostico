import { Tutores } from '../../../domain/entities/Tutores';
import { TutoresRepository } from '../../../infraestructure/repositories/TutoresRepository';
import { AlumnosRepository } from "../../../infraestructure/repositories/AlumnosRepository";

export class TutoresService {
    constructor(
        private tutoresRepository: TutoresRepository,
        private alumnosRepository: AlumnosRepository
    ) {}

    async createTutores(tutores: Tutores): Promise<Tutores> {
        try {
            return await this.tutoresRepository.createTutores(tutores);
        } catch (error) {
            throw new Error(`Error creating recipe: ${(error as Error).message}`);
        }
    }

async assignAlumnosToTutores(tutorId: number, alumnoIds: number[]): Promise<void> {
    try {
        const tutor = await this.tutoresRepository.getTutorById(tutorId);
        if (!tutor) {
            throw new Error(`Alumno with ID ${tutorId} not found`);
        }

        const alumnos = await Promise.all(
            alumnoIds.map(id => this.alumnosRepository.getAlumnoById(id))
        );
        const ids = alumnos.filter(alumno => alumno !== null).map(alumno => alumno!.id);

        if ('setAlumnos' in tutor) {
            await tutor.setAlumnos(ids);
        } else {
            throw new Error("setAlumnos method not available on alumno object");
        }
    } catch (error: any) {
        throw new Error(`Error assigning alumnos to materias: ${error.message}`);
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