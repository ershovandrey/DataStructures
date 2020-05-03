module.exports = class CustomArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length > 0) {
      const value = this.data[this.length-1];
      delete this.data[this.length-1];
      this.length--;
      return value;
    }
    return null;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return this.length;
  }

  shiftItems(fromIndex) {
    for (let i = fromIndex; i<this.length-1; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

