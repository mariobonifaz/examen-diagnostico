import { DataTypes } from 'sequelize';
import { sequelize } from '../../../Database/Sequelize';

const TutoresModel = sequelize.define('Tutores', {
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
})
TutoresModel.sync()
.then(() => {
  console.log('Tabla de tutores creada correctamente.');
})
.catch(error => {
  console.error('Error al crear la tabla de tutores:', error);
});

export default TutoresModel