const redesSociais = [
  'Instagram',
  'Youtube',
  'Facebook',
  'Tiktok',
  'Twitter',
  'Linkedin',
  'Pinterest',
];

// Forma de saber o indice de um elemento:
const indic_Tiktok = redesSociais.indexOf('Tiktok');
console.log(indic_Tiktok);

// Forma de saber se determinado item está no Array:
console.log(redesSociais.includes('Tumblr')); // False
console.log(redesSociais.includes('Youtube')); // True

// Percorrendo Arrays:
for (let i = 0; i < redesSociais.length; i++) {
  console.log(redesSociais[i]);
}
for (let i = 0; i < redesSociais.length; i++) {
  // Ou de uma forma mais bacana:
  console.log(`${i}: ${redesSociais[i]}`); // usa a crase ao inves de aspas simples :D
}
for (const i in redesSociais) {
  console.log(redesSociais[i]);
}
for (const valor of redesSociais) {
  console.log(valor);
}
redesSociais.forEach((valor, indice, redes) => {
  console.log(valor);
  console.log(indice);
  console.log(redes);
});
