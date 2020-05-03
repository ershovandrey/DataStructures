const LinkedListNode = require('./LinkedListNode');

module.exports = class LinkedList {
  constructor(value) {
    this.length = 0;
    this.head = null;
    if (value !== undefined) {
      this.head = new LinkedListNode(value);
      this.length++;
    }
    this.tail = this.head;
  }

  append(value) {
    const newNode = new LinkedListNode(value);
    if (this.length === 0) {
      this.head = newNode;
    }
    else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value);
    if (this.length === 0) {
      this.tail = newNode;
    }
    else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
    return this;
  }

  nodeAt(index) {
    let currIndex = 0;
    let currNode = this.head;
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index === this.length - 1) {
      return this.tail;
    }
    while (currIndex < index) {
      currNode = currNode.next;
      currIndex++
    }
    return currNode;
  }

  insert(index, value) {
    let prevNode = this.head;
    if (index < 0) {
      return false;
    }
    if (index === 0) {
      // New Head node.
      return this.prepend(value);
    }
    if (index >= this.length) {
      // New Tail node.
      return this.append(value);
    }

    const newNode = new LinkedListNode(value);
    prevNode = this.nodeAt(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    let prevNode = this.head;
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      // Remove Head node.
      this.head = this.head.next;
    }
    else {
      prevNode = this.nodeAt(index-1);
      prevNode.next = prevNode.next.next;
      if (index === this.length - 1) {
        // Update Tail node.
        this.tail = prevNode;
      }
    }
    this.length--;
    return this;
  }

  reverse() {
    if (this.length < 2) {
      return this;
    }
    let first = this.head;
    let second = first.next;
    first.next = null;
    this.tail = this.head;
    while (second !== null) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head = first;
    return this;
  }

  shift() {
    let value = null;
    if (this.length > 0) {
      value = this.head.value;
      this.remove(0);
    }
    return value;
  }

  pop() {
    let value = null;
    if (this.length > 0) {
      value = this.tail.value;
      this.remove(this.length - 1);
    }
    return value;  
  }

  toArray() {
    let output = [];
    let currNode = this.head;
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