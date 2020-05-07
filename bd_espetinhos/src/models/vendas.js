const Sequelize = require('sequelize');
const sequelize = require('../database/database.js');
const config = require('../config/config.js');


const Vendas = sequelize.define("vendas", {
    id_vendas: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    qtd_vendida: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },
    id_valores: {
        allowNull: false,
        type: Sequelize.INTEGER,
    }
}

);

module.exports = Vendas;