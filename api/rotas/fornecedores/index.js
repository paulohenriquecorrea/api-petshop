const roteador = require('express').Router();
const TabelaFornecedor = require('./TabelaFornecedor');
const Fornecedor = require('./Fornecedor');

roteador.get('/', async (req, res) => {
  const resultado = await TabelaFornecedor.listar();

  res.send(JSON.stringify(resultado));
});

roteador.get('/:idFornecedor', async (req, res) => {
  try {
    const id = req.params.idFornecedor;
    const fornecedor = new Fornecedor({ id: id });
    await fornecedor.carregar();
    res.send(JSON.stringify(fornecedor));
  } catch (error) {
    res.send(
      JSON.stringify({
        mensagem: error.message,
      })
    );
  }
});

roteador.post('/', async (req, res) => {
  const dadosRecebidos = req.body;
  const fornecedor = new Fornecedor(dadosRecebidos);
  await fornecedor.criar();
  res.send(JSON.stringify(fornecedor));
});

roteador.put('/:idFornecedor', async (req, res) => {
  try {
    const id = req.params.idFornecedor;
    const dadosRecebidos = req.body;
    const dados = Object.assign({}, dadosRecebidos, { id: id });
    const fornecedor = new Fornecedor(dados);
    await fornecedor.atualizar();
    res.end();
  } catch (erro) {
    res.send(
      JSON.stringify({
        mensagem: erro.message,
      })
    );
  }
});

module.exports = roteador;
