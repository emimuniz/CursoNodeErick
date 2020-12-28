const axios = require('axios');
const URL = `https://swapi.dev/api/`;

async function getNomes(nome) {
  const url = `${URL}people/?search=${nome}&format=json`;
  const result = await axios.get(url);
  return result.data;
}
module.exports = {
  getNomes,
};
