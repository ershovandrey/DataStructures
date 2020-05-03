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
    let value = null;
    if (this.items.length > 0) {
      value = this.items.head.value;
      this.items.remove(0);
    }
    return value;
  }

  print(message) {
    this.items.print(message);
  }
}