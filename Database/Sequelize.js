"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize('diagnosticoSOA', 'postgres', 'POSTGRES', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {}
});
const AlumnosModel_1 = __importDefault(require("../task/domain/entities/AlumnosModel")); // Asegúrate de ajustar la ruta
const MateriasModel_1 = __importDefault(require("../task/domain/entities/MateriasModel")); // Asegúrate de ajustar la ruta
// Establecer las relaciones
AlumnosModel_1.default.belongsToMany(MateriasModel_1.default, { through: 'AlumnosMaterias' });
MateriasModel_1.default.belongsToMany(AlumnosModel_1.default, { through: 'AlumnosMaterias' });
// Autenticación y sincronización de la base de datos
exports.sequelize.authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
    // Sincroniza todos los modelos con la base de datos
    exports.sequelize.sync().then(() => {
        console.log('Models are synchronized with the database.');
    });
})
    .catch(err => {
    console.error('Unable to connect to the database:', err);
});
