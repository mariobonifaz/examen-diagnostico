"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Materia = void 0;
// Materias.ts
const sequelize_1 = require("sequelize");
const Sequelize_1 = require("../../../Database/Sequelize"); // Asegúrate de ajustar la ruta según tu estructura de proyecto
class Materia extends sequelize_1.Model {
}
exports.Materia = Materia;
Materia.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    quota: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize: Sequelize_1.sequelize,
    modelName: 'Materias',
    tableName: 'materias' // Asegúrate de que el nombre de la tabla coincida con tu base de datos
});
