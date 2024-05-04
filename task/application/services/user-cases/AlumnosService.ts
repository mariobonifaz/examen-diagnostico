import { Alumnos } from '../../../domain/entities/Alumnos';
import { AlumnosRepository } from '../../../infraestructure/repositories/AlumnosRepository';
import { MateriasRepository } from '../../../infraestructure/repositories/MateriasRepository';

export class AlumnosService {
    constructor(
        private alumnosRepository: AlumnosRepository,
        private materiasRepository: MateriasRepository
    ) {}

    async createAlumnos(alumno: Alumnos): Promise<Alumnos> {
        try {
            return await this.alumnosRepository.createAlumnos(alumno);
        } catch (error) {
            throw new Error(`Error creating recipe: ${(error as Error).message}`);
        }
    }

    async assignMateriasToAlumno(alumnoId: number, materiaIds: number[]): Promise<void> {
        try {
            const alumno: any = await this.alumnosRepository.getAlumnoById(alumnoId);
            if (!alumno) {
                throw new Error(`Alumno with ID ${alumnoId} not found`);
            }

            const materias = await Promise.all(materiaIds.map(id => this.materiasRepository.getMateriaById(id)));
            await alumno.setMaterias(materias);
        } catch (error) {
            throw new Error(`Error assigning materias to alumno: ${(error as Error).message}`);
        }
    }

    async getAllAlumnos(): Promise<Alumnos[]> {
        try {
            return await this.alumnosRepository.getAllAlumnos();
        } catch (error) {
            throw new Error(`Error getting all recipes: ${(error as Error).message}`);
        }
    }
}

