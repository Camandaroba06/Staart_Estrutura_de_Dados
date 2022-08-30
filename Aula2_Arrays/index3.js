let meuArray1 = ['Camandaroba', 'Vanessa', 'Jorge'];
let meuArray2 = new Array();
let meuArray3 = new Array('Ricardo');

console.log(meuArray1);
console.log(meuArray2);
console.log(meuArray3);

console.table(meuArray1);
console.table(meuArray2);
console.table(meuArray3);

// Adicionando e retirando itens:

let frutas = new Array('abacaxi', 'morango');
console.table(frutas);

frutas.push('Banana', 'Pêssego', 'Laranja'); // Add ao final do Array
console.table(frutas);

frutas.unshift('Tomate'); // Add no começo do Array
console.table(frutas);

console.log(frutas.length); // Monstra o tamanho(quantidade de indices) do Array

frutas.pop(); // Remove o último termo do Array
console.table(frutas);

frutas.shift(); // Remove o primeiro termo do Array
console.table(frutas);
