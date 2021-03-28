const express = require('express'); // Biblioteca Utilizada para criar uma API
const app = express(); // Instância do express para gerar a aplicação
const bodyParser = require('body-parser');
const config = require('config');
const roteadorFornecedores = require('./rotas/fornecedores');
const roteadorFilmes = require('./rotas/filmes');

app.use(bodyParser.json());

app.use('/api/fornecedores', roteadorFornecedores);
app.use('/api/filmes', roteadorFilmes);

app.listen(config.get('api.porta'), () => {
  console.log(`API Running at port ${config.get('api.porta')} !`);
});

// app.get('/', (req, res) => {
//   res.send('ok');
// });
