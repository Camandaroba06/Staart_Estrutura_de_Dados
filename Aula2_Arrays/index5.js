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
console.log(caras_Find); // 40
console.log(caras_Find_Ind); // 2

// Reduce:
//const contas = [10, 20, 40, 100];
const totalAPagar = contas.reduce((valor, acumulador) => valor + acumulador, 0);
console.log(totalAPagar); // 170

// Every:
//const contas = [10, 20, 40, 100];
const contasBaixas = contas.every((valor) => valor < 10); // Verifica se ta tudo de acordo com a situação, se n retorna false
console.log(contasBaixas); // False
const contasBaixas2 = contas.every((valor) => valor < 101);
console.log(contasBaixas2); // True

// Some:     -> Mesma coisa que o Every só que precisa que ao menos um indice seja verdadeiro para ele retornar True
//const contas = [10, 20, 40, 100];
const valorBaixo = contas.some((valor) => valor > 10);
console.log(valorBaixo);

// Concat:
const contaDoCamandaroba = [10, 20, 30, 40, 50];
const contaDaOutra = [5, 6, 7, 8, 9];
const contaDosDois = contaDoCamandaroba.concat(contaDaOutra);
console.table(contaDosDois);

// Fill:
const contaZerada = contaDoCamandaroba.fill(0);
console.table(contaZerada);

// Flat:       -> Juntar Array com subArray:
const contaComSub = [10, 20, 30, 40, 50, [1, 2, 3, 4]];
const novaContaSemSub = contaComSub.flat();
console.table(novaContaSemSub);
