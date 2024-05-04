"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Sequelize_1 = require("../../../Database/Sequelize");
const TutoresModel = Sequelize_1.sequelize.define('Tutores', {
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
TutoresModel.sync()
    .then(() => {
    console.log('Tabla de tutores creada correctamente.');
})
    .catch(error => {
    console.error('Error al crear la tabla de tutores:', error);
});
exports.default = TutoresModel;
