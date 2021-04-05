const modelos = [
  require('../rotas/fornecedores/ModeloTabelaFornecedor'),
  require('../rotas/fornecedores/produtos/ModeloTabelaProduto'),
  require('../rotas/filmes/ModeloTabelaFilme'),
  require('../rotas/fornecedores/produtos/reclamacoes/ModeloTabelaReclamacoes'),
];

async function criarTabelas() {
  // for (let i = 0; i < modelos.length; i++) {
  //   const modelo = modelos[i];
  //   await modelo.sync();
  // }

  modelos.forEach(async (modelo) => {
    await modelo.sync();
  });
}

criarTabelas();
