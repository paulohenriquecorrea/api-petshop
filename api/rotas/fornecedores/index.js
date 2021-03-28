const roteador = require('express').Router();
const TabelaFornecedor = require('./TabelaFornecedor');

roteador.use('/', async (req, res) => {
  const resultado = await TabelaFornecedor.listar();

  res.send(JSON.stringify(resultado));
});

module.exports = roteador;
