import { Alumnos } from "../../domain/entities/Alumnos";

export interface AlumnosRepository {
    getAlumnoById(alumnoId: number): Promise<Alumnos | null>;
    createAlumnos(alumno: Alumnos): Promise<Alumnos>;
    getAllAlumnos(): Promise<Alumnos[]>;
}
