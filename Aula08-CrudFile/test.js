const { deepEqual, ok } = require('assert');
const database = require('./database');
const DEFAULT_ITEM_CADASTRAR = {
  nome: 'Flash',
  poder: 'Speed',
  id: 1,
};

const DEFAULT_ITEM_ATUALIZAR = {
  nome: 'Lanterna Verde',
  poder: 'Poder do Anel',
  id: 2,
};

describe('Suite de manipulação de Herois', () => {
  before(async () => {
    await database.escreverHeroi(DEFAULT_ITEM_CADASTRAR);
    await database.escreverHeroi(DEFAULT_ITEM_ATUALIZAR);
  });

  it('Deve pesquisar um heroi usando os arquivos ', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    const [dados] = await database.listar(expected.id);

    deepEqual(dados, expected);
  });

  it('Cadastrar um heroi no arquivo', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    await database.escreverHeroi(DEFAULT_ITEM_CADASTRAR);
    const [atual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id);

    deepEqual(atual, expected);
  });

  it('Removendo um heroi do arquivo', async () => {
    const expected = true;
    const dados = await database.remover(DEFAULT_ITEM_CADASTRAR.id);
    deepEqual(dados, expected);
  });

  it('Alterando um heroi do arquivo', async () => {
    const expected = {
      ...DEFAULT_ITEM_ATUALIZAR,
      nome: 'Batman',
      poder: 'Dinheiro',
    };

    const dadoAtualizado = {
      nome: 'Batman',
      poder: 'Dinheiro',
    };
    await database.alterar(DEFAULT_ITEM_ATUALIZAR.id, dadoAtualizado);
    const [atual] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id);

    deepEqual(atual, expected);
  });
});
