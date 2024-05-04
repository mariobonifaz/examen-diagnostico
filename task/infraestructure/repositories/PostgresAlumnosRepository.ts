import { Alumnos } from "../../domain/entities/Alumnos";
import { AlumnosRepository } from "../repositories/AlumnosRepository";
import AlumnosModel from "../../domain/entities/AlumnosModel";

export class PostgresAlumnosRepositoy implements AlumnosRepository {
    async createAlumnos(alumno: Alumnos): Promise<Alumnos> {
        try{
            const newAlumno = await AlumnosModel.create({
                Sch_id: alumno.Sch_id,
                name: alumno.name,
                last_name: alumno.last_name                
            });
            return newAlumno.toJSON() as Alumnos;
        } catch (error){
            throw new Error(`Error creating recipe: ${(error as Error).message}`);
        }
    }

    async assignMateriasToAlumno(alumnoId: number, materiaIds: number[]): Promise<void> {
        try {
            const alumno: any = await AlumnosModel.findByPk(alumnoId);
            if (!alumno) {
                throw new Error(`Alumno with ID ${alumnoId} not found`);
            }

            await alumno.setMaterias(materiaIds);
        } catch (error) {
            throw new Error(`Error assigning materias to alumno: ${(error as Error).message}`);
        }
    }

    async getAlumnoById(alumnoId: number): Promise<Alumnos | null> {
        try {
            const alumno = await AlumnosModel.findByPk(alumnoId);
            return alumno ? (alumno.toJSON() as Alumnos) : null;
        } catch (error) {
            throw new Error(`Error getting alumno by ID: ${(error as Error).message}`);
        }
    }

    async getAllAlumnos(): Promise<Alumnos[]> {
        try {
            const alumnos = await AlumnosModel.findAll();
            return alumnos.map(alumno => alumno.toJSON() as Alumnos);
        } catch (error) {
            throw new Error(`Error getting all recipes: ${(error as Error).message}`); 
        }
    }
}