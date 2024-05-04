"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// materiasModel.ts
const sequelize_1 = require("sequelize");
const Sequelize_1 = require("../../../Database/Sequelize");
const AlumnosModel_1 = __importDefault(require("./AlumnosModel"));
class MateriasModel extends sequelize_1.Model {
}
MateriasModel.init({
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    quota: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: Sequelize_1.sequelize,
    modelName: 'Materias',
});
MateriasModel.belongsTo(AlumnosModel_1.default, { as: 'alumno' });
MateriasModel.sync()
    .then(() => {
    console.log('Tabla de materias creada correctamente.');
})
    .catch(error => {
    console.error('Error al crear la tabla de materias:', error);
});
exports.default = MateriasModel;
