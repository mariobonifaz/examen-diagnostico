"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumnos = void 0;
const sequelize_1 = require("sequelize");
const Sequelize_1 = require("../../../Database/Sequelize"); // Asegúrate de ajustar la ruta según tu estructura de proyecto
class Alumnos extends sequelize_1.Model {
}
exports.Alumnos = Alumnos;
Alumnos.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Sch_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize: Sequelize_1.sequelize,
    tableName: 'alumnos'
});
