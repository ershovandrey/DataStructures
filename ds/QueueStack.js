const StackArray = require("./StackArray");

module.exports = class QueueStack {
  constructor() {
    this.first = new StackArray();
    this.last = new StackArray();
  }

  length() {
    return this.first.items.length + this.last.items.length;
  }

  enqueue(value) {
    const length = this.first.items.length;
    for (let i = 0; i < length;  i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.items.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    return this.first.pop();
  }

  peek() {
    if (this.last.items.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.items.length - 1];
  }

  isEmpty() {
    return this.length() === 0;
  }

  print(prefix) {
    var prefix = (prefix === undefined) ? "" : prefix;
    const first = this.first.items;
    const last = this.last.items;
    console.log(prefix + "\t\t" + "(" + this.length() + ") [" + first.join(' , ') + "] | [" + last.join(' , ') + "]");
    return this;
  }
}