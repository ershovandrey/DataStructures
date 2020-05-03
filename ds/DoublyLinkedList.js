const DoublyLinkedListNode = require('./DoublyLinkedListNode');

module.exports = class DoublyLinkedList {
  constructor(value) {
    this.head = new DoublyLinkedListNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new DoublyLinkedListNode(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new DoublyLinkedListNode(value);
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
    console.log(prefix + "[" + this.length + "] " + output.join(' <-> '));
    return this;
  }

}