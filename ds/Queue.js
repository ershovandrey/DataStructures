class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


module.exports = class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  length() {
    return this.length;
  }

  enqueue(value) {
    const newNode = new QueueNode(value);
    if (this.length === 0) {
      this.head = newNode;
    }
    else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  dequeue() {
    let value = null;
    if (this.length > 0) {
      value = this.head.value;
      this.head = this.head.next;
      this.length--;
    }
    return value;
  }

  peek() {
    return (this.length > 0) ? this.head.value : null;
  }

  toArray() {
    let output = [];
    let currNode = this.head;
    while(currNode !== null) {
      output.push(currNode.value);
      currNode = currNode.next;
    }
    return output;
  }

  print(prefix) {
    var prefix = (prefix === undefined) ? "" : prefix + "\t";
    const output = this.toArray();
    console.log(prefix + "[" + this.length + "] " + output.join(' --> '));
    return this;
  }
}