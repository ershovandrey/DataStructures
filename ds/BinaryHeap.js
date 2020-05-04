module.exports = class BinaryHeap {
  constructor(maxType = true) {
    this.data = [];
    this.maxType = maxType;
    this.minType = !maxType;
  }

  size() {
    return this.data.length;
  }

  _parent(index) {
    if (index <= 0) {
      return -1;
    }
    return Math.floor((index - 1) / 2);
  }

  _leftChildIndex(index) {
    if (index < 0) {
      return -1;
    }
    return 2 * index + 1;
  }

  _rightChildIndex(index) {
    if (index < 0) {
      return -1;
    }
    return 2 * index + 2;
  }

  add(value) {
    const index = this.data.length;
    this.data.push(value);
    this._bubbleUp(index);
    return this;
  }

  _swap(i, j) {
    let tempValue = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = tempValue;
  }

  _bubbleUp(index) {
    const value = this.data[index];
    const parentIndex = this._parent(index);
    if (parentIndex >= 0) {
      let parentValue = this.data[parentIndex];
      if ((this.maxType && value > parentValue)
      || (!this.maxType && value < parentValue)
      ) {
        this._swap(parentIndex, index);
        this._bubbleUp(parentIndex);
      }
    }
    return;
  }

  _sinkDown(index) {
    const value = this.data[index];
    while (index < this.data.length) {
      const leftChildIndex = this._leftChildIndex(index);
      const rightChildIndex = this._rightChildIndex(index);
      const leftChild = this.data[leftChildIndex];
      const rightChild = this.data[rightChildIndex];
      
      if (this.minType) {
        // Min Heap.
        if ((!rightChild || leftChild < rightChild)
          && (value > leftChild)
        ) {
          this._swap(leftChildIndex, index);
          this._sinkDown(leftChildIndex);
        }
        else if (rightChild && (value > rightChild)) {
          this._swap(rightChildIndex, index);
          this._sinkDown(rightChildIndex);
        }
      }
      else {
        // Max Heap.
        if ((!rightChild || leftChild > rightChild)
          && (value < leftChild)
        ) {
          this._swap(leftChildIndex, index);
          this._sinkDown(leftChildIndex);
        }
        else if (rightChild && (value < rightChild)) {
          this._swap(rightChildIndex, index);
          this._sinkDown(rightChildIndex);
        }
      }
      
      return;
    }
  }

  peek() {
    return this.data[0]; 
  }

  extract() {
    const value = this.data[0];
    this.data[0] = this.data.pop();
    this._sinkDown(0);
    return value;
  }

  print(prefix) {
    var prefix = (prefix === undefined) ? "" : prefix + " =\t";
    console.log(prefix, this.data);
    return this;
  }
}