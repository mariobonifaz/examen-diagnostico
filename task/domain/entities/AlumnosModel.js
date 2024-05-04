"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Sequelize_1 = require("../../../Database/Sequelize");
const AlumnosModel = Sequelize_1.sequelize.define('Alumnos', {
    Sch_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING,
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
exports.default = AlumnosModel;
