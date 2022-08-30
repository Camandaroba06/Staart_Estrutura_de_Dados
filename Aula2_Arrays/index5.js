// Map:

const aPagarEmReais = [10, 20, 40, 100];
const cotacaoDolar = 5;
const aPagarEmDolar = aPagarEmReais.map((valor) => valor * cotacaoDolar);

console.table(aPagarEmDolar);

// Filter:

const contas = [10, 20, 40, 100];
const caras = contas.filter((valor) => valor > 30);
console.table(caras);

// Find:
//const contas = [10, 20, 40, 100];
const caras_find = contas.find((valor) => valor > 30); // encontra a primeira maior que 30 e armazena
console.table(caras_find);
