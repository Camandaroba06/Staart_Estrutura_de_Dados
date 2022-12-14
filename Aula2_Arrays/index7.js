/*
    Aprendendo sobre Estrutura de Dados:
      -> Pilhas:
            - Elas seguem o principio de LIFO(Last In, First Out)
            - Nela só temos acesso a um único item, que é o último a ter sido colocado na pilha
            - O final é conhecido como TOPO
            - Ex.: Botão voltar do navegador e ctrl+z

                -> Principais Operações em PILHAS:
                    - push: Responsável por inserir um item na pilha
                    - pop: Responsável por remover um item na pilha
                    - top/peek: Retornar elementos
                    - isEmpty: Retorna um boleano se a pilha ta vazia ou n
                    - isFull: Retorna um boleano se a pilha ta cheia ou n
*/

// Pilha

class Pilha {
  constructor() {
    this.itens = [];
  }
  push(item) {
    this.itens.push(item);
  }
  pop() {
    this.itens.pop();
  }
  top() {
    return this.itens[this.itens.length - 1];
  }
  isEmpty() {
    return this.itens.length == 0;
  }
  isFull() {
    return this.itens.length != 0;
  }
}
pilha_01 = new Pilha();
pilha_01.push(10);
pilha_01.push(20);
pilha_01.push(30);
pilha_01.push(40);
console.table(pilha_01.itens);
pilha_01.pop();
console.table(pilha_01.itens);
console.log(pilha_01.top());
