import { Model, DataTypes, BelongsToManyAddAssociationsMixin } from 'sequelize';
import { Materia } from './Materias'
import { sequelize } from '../../../Database/Sequelize'; // Asegúrate de ajustar la ruta según tu estructura de proyecto

export class Alumnos extends Model {
    public id!: number;
    public Sch_id!: number;
    public name!: string;
    public last_name!: string;

    // Método para establecer materias, asegurando que TypeScript reconozca el método
    public setMaterias!: BelongsToManyAddAssociationsMixin<Materia, number>;

}

Alumnos.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Sch_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    tableName: 'alumnos'
});
