class DadosNaoFornecido extends Error {
  constructor() {
    const mensagem = 'Não foram fornecidos dados para atualização!';
    super(mensagem);
    this.name = 'DadosNaoFornecidos';
    this.idError = 2;
  }
}

module.exports = DadosNaoFornecido;
