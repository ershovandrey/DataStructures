module.exports = class StackArray {
  constructor() {
    this.items = new Array();
  }

  peek() {
    return this.items.length > 0 ? this.items[this.items.length - 1] : null;
  }

  push(value) {
    this.items.push(value);
    return this;
  }

  pop() {
    return this.items.length > 0 ? this.items.pop() : null;
  }

  isEmpty() {
    return this.items.length === 0;
  }


  print(prefix) {
    var prefix = (prefix === undefined) ? "" : prefix + "\t";
    console.log(prefix + "[" + this.items.length + "] " + this.items.join(', '));
    return this;
  }

}