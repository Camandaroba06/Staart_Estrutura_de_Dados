// Objetos e JSON
const Programador = {
  nome: 'Camandaroba',
  nascimento: '04/06/2003',
  Universidade: 'UFJF',
  grupoFavorito: 'PET Elétrica UFJF',
  Linguagens_Favoritas: ['Python', 'Javascript'],
};
console.table(Programador);
console.log(Programador.nome);
console.log(Programador.grupoFavorito);

//Classes

class Class_programador {
  constructor(
    nome,
    nascimento,
    Universidade,
    grupoFavorito,
    Linguagens_Favoritas = []
  ) {
    this.nome = nome;
    this.nascimento = nascimento;
    this.Universidade = Universidade;
    this.grupoFavorito = grupoFavorito;
    this.Linguagens_Favoritas = Linguagens_Favoritas;
  }
}
const Camandaroba = new Class_programador(
  'Camandaroba06',
  '04/06/03',
  'UFJF',
  'PET',
  ['JS', 'PY']
);
console.table(Camandaroba);
for (const conteudo in Camandaroba) {
  console.log(`${conteudo}: ${Camandaroba[conteudo]}`);
}
