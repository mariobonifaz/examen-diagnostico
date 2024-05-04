// Materias.ts
import { Model, DataTypes} from 'sequelize';
import { sequelize } from '../../../Database/Sequelize'; // Asegúrate de ajustar la ruta según tu estructura de proyecto

export class Materia extends Model {
    public id!: number;
    public name!: string;
    public quota!: number;
}

Materia.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quota: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Materias',
    tableName: 'materias' // Asegúrate de que el nombre de la tabla coincida con tu base de datos
});

