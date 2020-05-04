const BinaryTreeNode = require('./BinaryTreeNode');

module.exports = class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new BinaryTreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    }
    else {
      let currNode = this.root;
      while(true) {
        if (value < currNode.value) {
          if (!currNode.left) {
            currNode.left = newNode;
            return this;
          }
          currNode = currNode.left;
        }
        else {
          if (!currNode.right) {
            currNode.right = newNode;
            return this;
          }
          currNode = currNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (this.root === null) {
      return false;
    }
    else {
      let currNode = this.root;
      while(currNode) {
        if (value < currNode.value) {
          currNode = currNode.left;
        }
        else if (value > currNode.value) {
          currNode = currNode.right;
        }
        else {
          return currNode;
        }
      }
      return false;
    }
  }

  remove(value) {
    if (this.root === null) {
      return false;
    }
    else {
      let currNode = this.root;
      let parentNode = null;
      while(currNode) {
        if (value < currNode.value) {
          parentNode = currNode;
          currNode = currNode.left;
        }
        else if (value > currNode.value) {
          parentNode = currNode;
          currNode = currNode.right;
        }
        else {
          // Found a matching node.
          // Option 1: no right child.
          if (currNode.right === null) {
            if (parentNode === null) {
              // Removing root node.
              this.root = currNode.left;
            }
            else {
              if (currentNode.value < parentNode.value) {
                // Left child become child of a parent.
                parentNode.left = currentNode.left;
              }
              else if (currNode.vale >= parentNode.value) {
                // Left child become right child of a parent.
                parentNode.right = currNode.left;
              }
            }
          }
          // Option 2: right child has no left child.
          else if (currNode.right.left === null) {
            if (parentNode === null) {
              // Removing root node.
              this.root = currNode.left;
            }
            else {
              currentNode.right.left = currNode.left;
              if (currNode.value < parentNode.value) {
                parentNode.left = currNode.right;
              }
              else if (currentNode.value >= parentNode.value) {
                parentNode.right = currNode.right;
              }
            }

          }
          // Option 3: right child has left child.
          else {
            let leftmost = currNode.right.left;
            let leftmostParent = currNode.right;
            while (leftmost.left !== null) {
              leftmostParent = leftmost;
              leftmost = leftmost.left;
            }

            leftmostParent.left = leftmost.right;
            leftmost.left = currNode.left;
            leftmost.right = currNode.right;

            if (parentNode === null) {
              this.root = leftmost;
            }
            else {
              if (currentNode.value < parentNode.value) {
                parentNode.left = leftmost;
              }
              else if (currNode.value >= parentNode.value) {
                parentNode.right = leftmost;
              }
            }
          }
          return true;
        }
      }
    }
    return false;
  }
  
}