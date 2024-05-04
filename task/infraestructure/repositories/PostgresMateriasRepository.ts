// postgresmateriasrepository.ts
import { Materias } from "../../domain/entities/Materias";
import MateriasModel from "../../domain/entities/MateriasModel"; // Asegurar la importación correcta
import { MateriasRepository } from "./MateriasRepository";

export class PostgresMateriasRepositoy implements MateriasRepository {

    async getMateriaById(materiasId: number): Promise<Materias | null> {
        try {
            const materia = await MateriasModel.findByPk(materiasId);
            return materia ? (materia.toJSON() as Materias) : null;
        } catch (error) {
            throw new Error(`Error getting materia by ID: ${(error as Error).message}`);
        }
    }

    async createMaterias(materias: Materias): Promise<Materias> {
        try{
            const newMaterias = await MateriasModel.create({
                name: materias.name,
                quota: materias.quota
            });
            return newMaterias.toJSON() as Materias;
        } catch (error){
            throw new Error(`Error creating Materias: ${(error as Error).message}`);
        }
    }

    async getAllMaterias(): Promise<Materias[]> {
        try {
            const materias = await MateriasModel.findAll();
            return materias.map(materia => materia.toJSON() as Materias); // Cambiado materias a materia
        } catch (error) {
            throw new Error(`Error getting all Materias: ${(error as Error).message}`); 
        }
    }
}
