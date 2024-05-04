import { DataTypes } from 'sequelize';
import { sequelize } from '../../../Database/Sequelize';

const AlumnosModel = sequelize.define('Alumnos', {
    Sch_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

AlumnosModel.sync()
.then(() => {
  console.log('Tabla de alumnos creada correctamente.');
})
.catch(error => {
  console.error('Error al crear la tabla de alumnos:', error);
});

export default AlumnosModel;
