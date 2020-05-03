const LinkedList = require("./LinkedList");

module.exports = class StackLL {
  constructor() {
    this.items = new LinkedList();
  }
  
  peek() {
    return (this.items.length > 0) ? this.items.head.value : null;
  }

  push(value) {
    this.items.prepend(value);
    return this;
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }


  print(message) {
    this.items.print(message);
    return this;
  }
}