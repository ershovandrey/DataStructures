const LinkedList = require("./LinkedList");

module.exports = class QueueLL {
  constructor() {
    this.items = new LinkedList();
  }

  length() {
    return this.items.length;
  }

  enqueue(value) {
    this.items.append(value);
    return this;
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return (this.items.length > 0) ? this.items.head.value : null;
  }

  print(message) {
    this.items.print(message);
    return this;
  }
}