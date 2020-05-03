class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return (this.length > 0) ? this.top.value : null
  }

  push(value) {
    const newNode = new StackNode(value);
    if (this.length === 0) {
      this.bottom = newNode;
    }
    else {
      newNode.next = this.top;
    }
    this.top = newNode;
    this.length++;
    return this;
  }

  pop() {
    let value = null;
    if (this.length > 0) {
      value = this.top.value;
      this.top = this.top.next;
      this.length--;
    }
    return value;
  }

  isEmpty() {
    return this.length === 0;
  }

  toArray() {
    let output = [];
    let currNode = this.top;
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