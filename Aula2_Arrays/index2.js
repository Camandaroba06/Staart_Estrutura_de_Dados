/*
    Imagine agr várias e vc queira somar tudo

*/
const saldoContas = [100, 200, 4000, 1.9, 220, 1111, 9.99];

const total = saldoContas.reduce((acumulador, valor) => acumulador + valor);

console.log(total);

const contas = [
  ['banco 1', 100],
  ['banco 2', 200],
  ['banco 3', 4000],
  ['banco 4', 1.9],
  ['banco 5', 10],
  ['banco 6', 10000],
  ['banco 7', 1],
];

const bandeiras = [
  ['Brasil', ['Verde', 'Amarelo', 'Azul','Branco 11']],
  ['Canadá', ['Vermelho', 'Branco' ]],
  ['México',['Verde', 'Branco', 'Vermelho' ]],
  ['EUA', ['Azul','Branco', 'Vermelho']]
];

console.log(bandeiras[2][1][1]);

