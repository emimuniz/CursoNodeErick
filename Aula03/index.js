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

const usuarioPromise = obterUsuario();
//para manipular com sucesso usamos a função .then
// para manipular erros, usamos o .catch
// usuario => telefone => telefone
usuarioPromise
  .then(function (resultado) {
    const telefone = obterTelefone(resultado.id);
    return telefone.then(function (result) {
      return {
        usuario: {
          nome: resultado.nome,
          id: resultado.id,
        },
        telefone: result,
      };
    });
  })

  .then(function (resultado) {
    const endereco = obterEndereco(resultado.id);
    return endereco.then(function (result) {
      return {
        usuario: resultado.usuario,
        telefone: resultado.telefone,
        endereco: result,
      };
    });
  })
  .then(function (resultado) {
    console.log(`
        Nome: ${resultado.usuario.nome},
        Endereco: ${resultado.endereco.Endereco}
        Telefone: ${resultado.telefone.ddd} ${resultado.telefone.telefone}
    `);
  })
  .catch(function (erro) {
    console.error('DEU RUIM', erro);
  });
