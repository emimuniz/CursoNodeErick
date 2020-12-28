/* 
    0 - Obter um usuario
    1- Obter o numero de telefone de um usuario a partir de seu id
    2 - Obter o endereço do usuario pelo id
*/

function obterUsuario(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      nome: 'Aladin',
      dataNascimento: new Date(),
    });
  }, 1000);
}

function obterTelefone(id, callback) {
  setTimeout(function () {
    return callback(null, {
      telefone: '12123223',
      ddd: '11',
    });
  }, 2000);
}

function obterEndereco(id, callback) {
  setTimeout(function () {
    return callback(null, {
      Endereco: 'Av. Thiago Ferreira',
      Bairro: 'Santos Dummont',
      Cidade: 'Santos',
    });
  }, 2000);
}

obterUsuario(function resolverUsuario(erro, usuario) {
  if (erro) {
    console.error('Deu ruim em Usuario', erro);
    return;
  }

  obterTelefone(usuario.id, function resolverTelefone(erro1, telefone) {
    if (erro1) {
      console.error('Deu ruim em Telefone', erro1);
      return;
    }

    obterEndereco(usuario.id, function resolverEndereco(erro2, endereco) {
      if (erro2) {
        console.error('Deu ruim em Endereco', erro2);
        return;
      }

      console.log(
        `
        Nome: ${usuario.nome},
        Endereco: ${endereco.Endereco} ${endereco.Bairro}
        Telefone: ${telefone.ddd} ${telefone.telefone}
        `,
      );
    });
  });
});
