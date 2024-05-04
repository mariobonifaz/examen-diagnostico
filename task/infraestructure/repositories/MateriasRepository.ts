import { Materia } from "../../domain/entities/Materias";

export interface MateriasRepository{
    getMateriaById(id: number): Promise<Materia | null>;
    createMaterias(materias: Materia): Promise<Materia>;
    getAllMaterias(): Promise<Materia[]>;
}
