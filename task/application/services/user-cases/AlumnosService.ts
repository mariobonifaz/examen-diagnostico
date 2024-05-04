import { Alumnos } from '../../../domain/entities/Alumnos';
import { Materia } from '../../../domain/entities/Materias';
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
            const alumno = await this.alumnosRepository.getAlumnoById(alumnoId);
            if (!alumno) {
                throw new Error(`Alumno with ID ${alumnoId} not found`);
            }
    
            const materias = await Promise.all(
                materiaIds.map(id => this.materiasRepository.getMateriaById(id))
            );
            const ids = materias.filter(materia => materia !== null).map(materia => materia!.id);
    
            if ('setMaterias' in alumno) {
                await alumno.setMaterias(ids);
            } else {
                throw new Error("setMaterias method not available on alumno object");
            }
        } catch (error: any) {
            throw new Error(`Error assigning materias to alumno: ${error.message}`);
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

