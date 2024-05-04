// postgresmateriasrepository.ts
import { Materia } from "../../domain/entities/Materias";
import MateriasModel from "../../domain/entities/MateriasModel"; // Asegurar la importación correcta
import { MateriasRepository } from "./MateriasRepository";

export class PostgresMateriasRepositoy implements MateriasRepository {

    async getMateriaById(materiasId: number): Promise<Materia | null> {
        try {
            const materia = await MateriasModel.findByPk(materiasId);
            return materia ? (materia.toJSON() as Materia) : null;
        } catch (error) {
            throw new Error(`Error getting materia by ID: ${(error as Error).message}`);
        }
    }

    async createMaterias(materias: Materia): Promise<Materia> {
        try{
            const newMaterias = await MateriasModel.create({
                name: materias.name,
                quota: materias.quota
            });
            return newMaterias.toJSON() as Materia;
        } catch (error){
            throw new Error(`Error creating Materias: ${(error as Error).message}`);
        }
    }

    async getAllMaterias(): Promise<Materia[]> {
        try {
            const materias = await MateriasModel.findAll();
            return materias.map(materia => materia.toJSON() as Materia); // Cambiado materias a materia
        } catch (error) {
            throw new Error(`Error getting all Materias: ${(error as Error).message}`); 
        }
    }
}
