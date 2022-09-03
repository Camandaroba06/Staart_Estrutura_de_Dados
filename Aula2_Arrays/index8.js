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
        - Combina a ideia da fila com pilha
          -> Principais Operações com Deques:
            - insertFront: Insere um elemento na frente
            - insertLast: Insere um item na cauda
            - deleteFront: Remove o elemento da frente
            - deleteLast: Remove o elemento da cauda
            - front: Retorna o elemento da frente
            - rear: Retorna o elemento da cauda
            - isEmpty: Retorna o booleano se está vazio ou n
            - isFull: Retorna o booleano se está cheio
*/
// Fila:
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
const fila_01 = new Fila();
fila_01.enqueue('Ferrari');
fila_01.enqueue('Fusca');
fila_01.enqueue('Da li');
fila_01.enqueue('HB20');
console.table(fila_01.itens);
fila_01.dequeue();
console.table(fila_01.itens);
console.log(fila_01.front());
console.log(fila_01.rear());

class Deque {
  constructor() {
    this.itens = [];
  }
  insertFront(item) {
    return this.itens.unshift(item);
  }
  insertLast(item) {
    return this.itens.push(item);
  }
  deleteFront() {
    return this.itens.shift();
  }
  deleteLast() {
    return this.itens.pop();
  }
  isEmpty() {
    return this.itens.length == 0;
  }
  front() {
    return this.itens[0];
  }
  rear() {
    return this.itens[this.itens.length - 1];
  }
}
const deque = new deque();
