module.exports = class DoublyLinkedListNode {
  constructor(value) {
    this.value = (value !== undefined) ? value : null;
    this.prev = null;
    this.next = null;
  }
}