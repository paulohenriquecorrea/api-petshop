const ModeloTabelaFornecedor = require('../rotas/fornecedores/ModeloTabelaFornecedor');
const ModeloTabelaFilmes = require('../rotas/filmes/ModeloTabelaFilme');

ModeloTabelaFornecedor.sync()
  .then(() => console.log('Tabela Fornecedor criada com sucesso!'))
  .catch(console.log);

ModeloTabelaFilmes.sync()
  .then(() => console.log('Tabela Filmes criada com sucesso!'))
  .catch(console.log);
