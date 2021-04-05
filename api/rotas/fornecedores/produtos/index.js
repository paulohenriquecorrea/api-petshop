const roteador = require('express').Router({ mergeParams: true });
const TabelaProduto = require('./TabelaProdutos');

roteador.get('/', async (req, res) => {
  const produtos = await TabelaProduto.listar(req.params.idFornecedor);
  res.send(JSON.stringify(produtos));
});

const roteadorReclamacoes = require('./reclamacoes');
roteador.use('/:idProduto/reclamacoes', roteadorReclamacoes);

module.exports = roteador;
