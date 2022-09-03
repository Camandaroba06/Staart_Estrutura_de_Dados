/*
    -> Aprendendo sobre FILAS:
        - Basicamente segue a ideia de FIFO (First In, First Out)
        - O primeiro a chegar na fila é o front e o último é o rear/tale/etc
            
          -> Principais Operações com Filas:
            - enqueue: Insere um elemento
            - dequeue: Remove um elemento
            - front/peek: Retorna o primeiro elemento
            - isEmpty: Retorna um booleano se está vazia
            - isFull: Retorna um booleano se está cheia
    -> Aprendendo sobre Deques:
*/

class Fila {
  constructor() {
    this.itens = [];
  }
  enqueue(item) {
    this.itens.push(item);
  }
  isEmpty() {
    this.itens.length == 0;
  }
  dequeue() {
    if (this.isEmpty()) return undefined;
    this.itens.shift();
  }
  front() {
    return this.itens[0];
  }
  rear() {
    return this.itens[this.itens.length - 1];
  }
}
fila_01 = new Fila();
fila_01.enqueue('Ferrari');
fila_01.enqueue('Fusca');
fila_01.enqueue('Da li');
fila_01.enqueue('HB20');
console.table(fila_01.itens);
fila_01.dequeue();
console.table(fila_01.itens);
console.log(fila_01.front());
console.log(fila_01.rear());
