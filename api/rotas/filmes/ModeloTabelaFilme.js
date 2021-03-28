const Sequelize = require('sequelize');
const instanciaSequelize = require('../../banco-de-dados');

const colunas = {
  filme: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  categoria: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  diretor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  duracao: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
};

const opcoes = {
  freezeTableName: true,
  tableName: 'filmes',
  timestamps: true,
  createdAt: 'dataCriacao',
  updatedAt: 'dataAtualizacao',
  version: 'versao',
};

module.exports = instanciaSequelize.define('filmes', colunas, opcoes);
