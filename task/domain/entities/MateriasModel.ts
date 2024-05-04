// materiasModel.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../../Database/Sequelize';
import AlumnosModel from "./AlumnosModel"; 

class MateriasModel extends Model {}

MateriasModel.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quota: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Materias',
});

MateriasModel.belongsTo(AlumnosModel, { as: 'alumno' });

MateriasModel.sync()
.then(() => {
  console.log('Tabla de materias creada correctamente.');
})
.catch(error => {
  console.error('Error al crear la tabla de materias:', error);
});

export default MateriasModel;
