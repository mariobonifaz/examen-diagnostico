import { Materias } from "../../domain/entities/Materias";

export interface MateriasRepository{
    getMateriaById(id: number): Promise<Materias | null>;
    createMaterias(materias: Materias): Promise<Materias>;
    getAllMaterias(): Promise<Materias[]>;
}
