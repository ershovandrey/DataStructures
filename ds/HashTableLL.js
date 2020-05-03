const LinkedList = require('./LinkedList');

module.exports = class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);
    if (this.data[index] === undefined) {
      this.data[index] = new LinkedList();
    }
    this.data[index].append([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    if (this.data[index] !== undefined) {
      let currNode = this.data[index].head;
      while(currNode) {
        if (currNode.value[0] === key) {
          return currNode.value[1];
        }
        currNode = currNode.next;
      }
    }
    return null;
  }

  keys() {
    const keys = [];
    for (let i = 0; i<this.data.length; i++) {
      if (this.data[i] !== undefined) {
        const bucket = this.data[i];
        let currNode = bucket.head;
        while(currNode) {
          keys.push(currNode.value[0]);
          currNode = currNode.next;
        }
      }
    }
    return keys;
  }

  print() {
    const output = [];
    for (let i = 0; i<this.data.length; i++) {
      output[i] = [];
      if (this.data[i] !== undefined) {
        const bucket = this.data[i];
        let currNode = bucket.head;
        while(currNode) {
          output[i].push(currNode.value);
          currNode = currNode.next;
        }
      }
    }
    console.log(output);
  }
}