const express = require('express'); // Biblioteca Utilizada para criar uma API
const app = express(); // Instância do express para gerar a aplicação
const bodyParser = require('body-parser');
const config = require('config');

app.use(bodyParser.json());

app.listen(config.get('api.porta'), () => {
  console.log(`API Running at port ${config.get('api.porta')} !`);
});

app.get('/', (req, res) => {
  res.send('ok');
});
