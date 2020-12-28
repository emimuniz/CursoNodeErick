/* 
    0 - Obter um usuario
    1- Obter o numero de telefone de um usuario a partir de seu id
    2 - Obter o endereço do usuario pelo id
*/

//importamos um modulo interno do node.js
const util = require('util');

function obterUsuario() {
  // quando der algum problema => reject(ERRO)
  // quando der sucesso => Resolve
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      return resolve({
        id: 1,
        nome: 'Aladin',
        dataNascimento: new Date(),
      });
    }, 1000);
  });
}

function obterTelefone(id) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      return resolve({
        telefone: '12123223',
        ddd: '11',
      });
    }, 2000);
  });
}

function obterEndereco(id) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      return resolve({
        Endereco: 'Av. Thiago Ferreira',
        Bairro: 'Santos Dummont',
        Cidade: 'Santos',
      });
    }, 2000);
  });
}

main();
async function main() {
  const usuario = await obterUsuario();
  //   const telefone = await obterTelefone(usuario.id);
  //   const endereco = await obterEndereco(usuario.id);

  const resultado = await Promise.all([
    obterTelefone(usuario.id),
    obterEndereco(usuario.id),
  ]);

  console.log('Telefone', resultado[0]);
  console.log('Endereco', resultado[1]);

  //   console.log(`
  //         Nome: ${usuario.nome},
  //         Endereco: ${endereco.Endereco} - ${endereco.Bairro} - ${endereco.Cidade}
  //         Telefone: ${telefone.ddd} ${telefone.telefone}
  //     `);
}
