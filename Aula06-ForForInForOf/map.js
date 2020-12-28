const service = require('./services');

async function main() {
  try {
    const result = await service.getNomes('a');
    const names = [];

    // result.results.forEach((item) => {
    //   names.push(item.name);
    // });

    // result.results.map((item) => {
    //   names.push(item.name);
    // });

    console.log(`names`, names);
  } catch (error) {
    console.error(`error interno`, error);
  }
}

main();
