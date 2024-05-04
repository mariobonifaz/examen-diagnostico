import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('diagnosticoSOA', 'postgres', 'POSTGRES', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {}
});

import AlumnosModel from '../task/domain/entities/AlumnosModel'; // Asegúrate de ajustar la ruta
import MateriasModel from '../task/domain/entities/MateriasModel'; // Asegúrate de ajustar la ruta
import TutoresModel from '../task/domain/entities/TutoresModel';

// Establecer las relaciones
AlumnosModel.belongsToMany(MateriasModel, { through: 'AlumnosMaterias' });
MateriasModel.belongsToMany(AlumnosModel, { through: 'AlumnosMaterias' });

AlumnosModel.belongsToMany(TutoresModel, { through: 'TutoresAlumnos' });
TutoresModel.belongsToMany(AlumnosModel, {through: 'TutoresAlumnos'});

// Autenticación y sincronización de la base de datos
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        // Sincroniza todos los modelos con la base de datos
        sequelize.sync().then(() => {
            console.log('Models are synchronized with the database.');
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });