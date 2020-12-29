const axios = require('axios');
const URL = `https://swapi.dev/api/`;

async function getNomes(nome) {
  const url = `${URL}people/?search=${nome}&format=json`;
  const result = await axios.get(url);
  return result.data.results.map(mapResultado);
}

function mapResultado(item) {
  return {
    nome: item.name,
    peso: item.height,
  };
}

module.exports = {
  getNomes,
};
