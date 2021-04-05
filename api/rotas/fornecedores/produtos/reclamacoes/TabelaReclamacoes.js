const Modelo = require('./ModeloTabelaReclamacoes');

module.exports = {
  listar(idProduto) {
    return Modelo.findAll({
      where: {
        produto: idProduto,
      },
    });
  },
};
