const meuDicionario = new Map();
meuDicionario.set('oi', 'Oi tudo bem?');
meuDicionario.set('blz', 'beleza');
meuDicionario.set('vc', 'Você');
console.table(meuDicionario);
console.log(meuDicionario.get('vc'));

const indiceContatos = [
  ['Gabriel', '98821235'],
  ['Jorge', '984822352'],
  ['Alice', '983221235'],
];

meuDicionario.set(indiceContatos[0], { nascimento: '04/07/1980' });
meuDicionario.set(indiceContatos[1]);
meuDicionario.set(indiceContatos[2]);
console.table(meuDicionario);
meuDicionario.delete('vc');
console.table(meuDicionario);
meuDicionario.clear();
console.log(meuDicionario);
