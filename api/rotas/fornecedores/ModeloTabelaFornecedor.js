const Sequelize = require('sequelize');
const instanciaSequelize = require('../../banco-de-dados');

const colunas = {
  empresa: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  categoria: {
    type: Sequelize.ENUM('ração', 'brinquedos'),
    allowNull: false,
  },
};

const opcoes = {
  freezeTableName: true,
  tableName: 'fornecedores',
  timestamps: true,
  createdAt: 'dataCriacao',
  updatedAt: 'dataAtualizacao',
  version: 'versao',
};

module.exports = instanciaSequelize.define('fornecedor', colunas, opcoes);
