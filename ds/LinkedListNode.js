module.exports = class LinkedListNode {
  constructor(value) {
    this.value = (value !== undefined) ? value : null;
    this.next = null;
  }
}