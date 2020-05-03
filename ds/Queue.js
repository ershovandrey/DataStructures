class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  length() {
    return this.length;
  }

  enqueue(value) {
    const newNode = new QueueNode(value);
    if (this.length === 0) {
      this.first = newNode;
    }
    else {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.length++;
    return this;
  }

  dequeue() {
    let value = null;
    if (this.length > 0) {
      value = this.first.value;
      this.first = this.first.next;
      this.length--;
    }
    return value;
  }

  peek() {
    return (this.length > 0) ? this.first.value : null;
  }

  isEmpty() {
    return this.length === 0;
  }

  toArray() {
    let output = [];
    let currNode = this.first;
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