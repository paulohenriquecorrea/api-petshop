const express = require('express'); // Biblioteca Utilizada para criar uma API
const app = express(); // Instância do express para gerar a aplicação
const bodyParser = require('body-parser'); // Plugin
const config = require('config');
const roteadorFornecedores = require('./rotas/fornecedores');
const roteadorFilmes = require('./rotas/filmes');
const NaoEncontrado = require('./erros/NaoEncontrado');
const CampoInvalido = require('./erros/CampoInvalido');
const DadosNaoFornecidos = require('./erros/DadosNaoFornecidos');
const ValorNaoSuportado = require('./erros/ValorNaoSuportado');
const formatosAceitos = require('./Serializador').formatosAceitos;
const SerializadorErro = require('./Serializador').SerializadorErro;

app.use(bodyParser.json()); //Recebe os dados da requisição como JSON

app.use((req, res, proximo) => {
  let formatoRequisitado = req.header('Accept');

  if (formatoRequisitado === '*/*') {
    formatoRequisitado = 'application/json';
  }
  if (formatosAceitos.indexOf(formatoRequisitado) === -1) {
    res.status(406);
    res.end();
    return;
  }
  res.setHeader('Content-Type', formatoRequisitado);
  proximo();
});

app.use('/api/fornecedores', roteadorFornecedores);
app.use('/api/filmes', roteadorFilmes);

app.use((erro, req, res, proximo) => {
  let status = 500;
  if (erro instanceof NaoEncontrado) {
    satatus = 404;
  }
  if (erro instanceof CampoInvalido || erro instanceof DadosNaoFornecidos) {
    status = 400;
  }

  if (erro instanceof ValorNaoSuportado) {
    status = 406;
  }

  const serializador = new SerializadorErro(res.getHeader('Content-Type'));
  res.status(status);
  res.send(
    serializador.serializar({
      mensagem: erro.message,
      idErro: erro.idErro,
    })
  );
});

app.listen(config.get('api.porta'), () => {
  console.log(`API Running at port ${config.get('api.porta')} !`);
});
