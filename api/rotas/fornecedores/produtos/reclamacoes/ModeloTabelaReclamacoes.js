const Sequelize = require('sequelize');
const instancia = require('../../../../banco-de-dados');

const colunas = {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  reclamacao: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  produto: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: require('../ModeloTabelaProduto'),
      key: 'id',
    },
  },
};

const opcoes = {
  freezeTableName: true,
  tableName: 'reclamacoes',
  timestamps: true,
  createdAt: 'dataCriacao',
  updatedAt: 'dataAtualizacao',
  version: 'versao',
};

module.exports = instancia.define('reclamacoes', colunas, opcoes);
