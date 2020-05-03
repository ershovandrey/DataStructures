const LinkedListNode = require('./LinkedListNode');

module.exports = class LinkedList {
  constructor(value) {
    this.head = new LinkedListNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new LinkedListNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value);
    newNode.next = this.head;
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
    if (this.length === 1) {
      return this;
    }
    let first = this.head;
    let second = first.next;
    this.tail = this.head;
    while (second !== null) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
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
    var prefix = prefix + "\t" || "";
    const output = this.toArray();
    console.log(prefix + "[" + this.length + "] " + output.join(' --> '));
    return this;
  }

}