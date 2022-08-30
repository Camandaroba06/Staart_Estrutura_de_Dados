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
const caras_Find = contas.find((valor) => valor > 30); // encontra a primeira maior que 30 e armazena
const caras_Find_Ind = contas.findIndex((valor) => valor > 30); //encontra o indice
console.table(caras_Find);
console.log(caras_Find_Ind);

// Reduce:
//const contas = [10, 20, 40, 100];
const totalAPagar = contas.reduce((valor, acumulador) => valor + acumulador, 0);
console.log(totalaPagar);
