const roteador = require('express').Router();
const Fornecedor = require('./Fornecedor');
const TabelaFornecedor = require('./TabelaFornecedor');
const SerializadorFornecedor = require('../../Serializador')
  .SerializadorFornecedor;

roteador.options('/', (req, res) => {
  res.set('Access-Control-Allow-Methods', 'GET');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  res.status(204);
  res.end();
});

roteador.get('/', async (req, res) => {
  const resultado = await TabelaFornecedor.listar();
  res.status(200);
  const serializador = new SerializadorFornecedor(
    res.getHeader('Content-Type')
  );
  res.send(serializador.serializar(resultado));
});

roteador.post('/', async (req, res, proximo) => {
  try {
    const dadosRecebidos = req.body;
    const fornecedor = new Fornecedor(dadosRecebidos);
    await fornecedor.criar();
    res.status(201);
    const serializador = new SerializadorFornecedor(
      res.getHeader('Content-Type')
    );
    res.send(serializador.serializar(fornecedor));
  } catch (error) {
    proximo(error);
  }
});

module.exports = roteador;
