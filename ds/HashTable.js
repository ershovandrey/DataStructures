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
      this.data[index] = [];
    }
    this.data[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    if (this.data[index] !== undefined) {
      for (let i=0; i<this.data[index].length; i++) {
        if (this.data[index][i][0] === key) {
          return this.data[index][i][1];
        }
      }
    }
    return null;
  }

  keys() {
    const keys = [];
    for (let i = 0; i<this.data.length; i++) {
      if (this.data[i] !== undefined) {
        const bucket = this.data[i];
        for (let j=0; j<bucket.length; j++) {
          keys.push(bucket[j][0]);
        }
      }
    }
    return keys;
  }

  print() {
    console.log(this.data);
  }
}