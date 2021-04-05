const roteador = require('express').Router({ mergeParams: true });
const TabelaReclamacoes = require('./TabelaReclamacoes');

roteador.get('/', async (req, res) => {
  const reclamacoes = await TabelaReclamacoes.listar(req.params.idProduto);
  res.send(JSON.stringify(reclamacoes));
});

module.exports = roteador;
