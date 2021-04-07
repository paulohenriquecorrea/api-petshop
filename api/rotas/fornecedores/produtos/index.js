const roteador = require('express').Router({ mergeParams: true });
const TabelaProduto = require('./TabelaProduto');
const Produto = require('./Produto');

roteador.get('/', async (req, res) => {
  const produtos = await TabelaProduto.listar(req.fornecedor.id);
  res.send(JSON.stringify(produtos));
});

roteador.post('/', async (req, res, proximo) => {
  try {
    const idFornecedor = req.fornecedor.id;
    const corpo = req.body;
    const dados = Object.assign({}, corpo, { fornecedor: idFornecedor });
    const produto = new Produto(dados);
    await produto.criar();
    res.status(201);
    res.send(produto);
  } catch (error) {
    proximo(error);
  }
});

roteador.delete('/:id', async (req, res) => {
  const dados = {
    id: req.params.id,
    fornecedor: req.fornecedor.id,
  };

  const produto = new Produto(dados);
  await produto.apagar();
  res.status(204);
  res.end();
});
const roteadorReclamacoes = require('./reclamacoes');
roteador.use('/:idProduto/reclamacoes', roteadorReclamacoes);

module.exports = roteador;
