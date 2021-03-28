const roteador = require('express').Router();
const TabelaFilme = require('./TabelaFilme');

roteador.use('/', async (req, res) => {
  const resultado = await TabelaFilme.listar();

  res.send({
    id: 1,
    filme: 'Batman',
    categoria: 'Ação',
    diretor: 'Paulo Henrique Corrêa',
    duracao: 180,
    dataCriacao: '29/03/2021',
    dataAtualizacao: '29/03/2021',
    versao: '1',
  });
  //res.send(JSON.stringify(resultado));
});

module.exports = roteador;
