const DoublyLinkedListNode = require('./DoublyLinkedListNode');

module.exports = class DoublyLinkedList {
  constructor(value) {
    this.length = 0;
    this.head = null;
    if (value !== undefined) {
      this.head = new DoublyLinkedListNode(value);
      this.length++;
    }
    this.tail = this.head;
  }

  append(value) {
    const newNode = new DoublyLinkedListNode(value);
    if (this.length === 0) {
      this.head = newNode;
    }
    else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new DoublyLinkedListNode(value);
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
    if (Math.ceil(this.length / 2) <= index) {
      currIndex = this.length - 1;
      currNode = this.tail;
      while (currIndex > index) {
        currNode = currNode.prev;
        currIndex--;
      }
    }
    else {
      while (currIndex < index) {
        currNode = currNode.next;
        currIndex++
      }
    }
    return currNode;
  }

  insert(index, value) {
    let prevNode, nextNode;
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

    const newNode = new DoublyLinkedListNode(value);
    nextNode = this.nodeAt(index);
    prevNode = nextNode.prev;

    // Set relation to prevNode.
    prevNode.next = newNode;
    newNode.prev = prevNode;

    // Set relation to nextNode.
    nextNode.prev = newNode;
    newNode.next = nextNode;

    this.length++;
    return this;
  }

  remove(index) {
    let prevNode, deletedNode, nextNode;
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      // Remove Head node.
      this.head = this.head.next;
    }
    else {
      deletedNode = this.nodeAt(index);
      prevNode = deletedNode.prev;
      nextNode = deletedNode.next;
      prevNode.next = nextNode;
      if (nextNode !== null) {
        nextNode.prev = prevNode;
      }
      else {
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
    this.tail = this.head;
    this.tail.prev = second;
    while (second !== null) {
      let temp = second.next;
      second.prev = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    this.head.prev = null;
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
    var prefix = (prefix === undefined) ? "" : prefix + "\t";
    const output = this.toArray();
    console.log(prefix + "[" + this.length + "] " + output.join(' <-> '));
    return this;
  }

}