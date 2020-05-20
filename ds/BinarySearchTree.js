const BinaryTreeNode = require('./BinaryTreeNode');
const Queue = require('./QueueLL');
const Stack = require('./StackArray');

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
              else if (currNode.value >= parentNode.value) {
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

  bfs() {
    let current;
    const list = [];
    let queue = new Queue();
    if (this.root !== null) {
      queue.enqueue(this.root);
      while(queue.length() > 0) {
        current = queue.dequeue();
        list.push(current.value);
        if (current.left !== null) {
          queue.enqueue(current.left);
        }
        if (current.right !== null) {
          queue.enqueue(current.right);
        }
      }
    }
    return list;
  }
  
  bfsRecursive() {
    let queue = new Queue();
    if (this.root !== null) {
      queue.enqueue(this.root)
    }
    return this._bfsR(queue, []);
  }

  _bfsR(queue, list) {
    if (queue.length() === 0) {
      return list;
    }
    let current = queue.dequeue();
    list.push(current.value);
    if (current.left !== null) {
      queue.enqueue(current.left);
    }
    if (current.right !== null) {
      queue.enqueue(current.right);
    }
    return this._bfsR(queue, list);
  }

  // Parent -> Left -> Right
  dfsPreOrder() {
    if (this.root === null) {
      return [];
    }
    return this.traversePreOrder(this.root, []);
  }

  traversePreOrder(current, list) {
    list.push(current.value);
    if (current.left !== null) {
      this.traversePreOrder(current.left, list);
    }
    if (current.right !== null) {
      this.traversePreOrder(current.right, list);
    }
    return list;
  }

  // Left -> Parent -> Right
  dfsInOrder() {
    if (this.root === null) {
      return [];
    }
    return this.traverseInOrder(this.root, []);
  }

  traverseInOrder(current, list) {
    if (current.left !== null) {
      this.traverseInOrder(current.left, list);
    }
    list.push(current.value);
    if (current.right !== null) {
      this.traverseInOrder(current.right, list);
    }
    return list;
  }

  // Left -> Right -> Parent
  dfsPostOrder() {
    if (this.root === null) {
      return [];
    }
    return this.traversePostOrder(this.root, []);
  }

  traversePostOrder(current, list) {
    if (current.left !== null) {
      this.traversePostOrder(current.left, list);
    }
    if (current.right !== null) {
      this.traversePostOrder(current.right, list);
    }
    list.push(current.value);
    return list;
  }
  
  // Parent -> Left -> Right
  dfsPreOrderStack() {
    const list = [];
    let current = this.root;
    const stack = new Stack();
    if (current === null) {
      return list;
    }
    stack.push(current);
    while (!stack.isEmpty()) {
      current = stack.pop();
      list.push(current.value);
      if (current.right !== null) {
        stack.push(current.right);
      }
      if (current.left !== null) {
        stack.push(current.left);
      }
    }
    return list;
  }

  // Left -> Parent -> Right
  dfsInOrderStack() {
    const list = [];
    let current = this.root;
    const stack = new Stack();
    if (current === null) {
      return list;
    }
    while (current !== null || !stack.isEmpty()) {
      if (current !== null) {
        stack.push(current);
        current = current.left;
      }
      else {
        current = stack.pop();
        list.push(current.value);
        current = current.right;
      }
    }
    return list;
  }

  // Left -> Right -> Parent
  dfsPostOrderOneStack() {
    const list = [];
    let current = this.root;
    const stack = new Stack();
    if (current === null) {
      return list;
    }
    while (current !== null || !stack.isEmpty()) {
      while (current !== null) {
        if (current.right !== null) {
          stack.push(current.right);
        }
        stack.push(current);
        current = current.left;
      }
      current = stack.pop();
      if (current.right !== null && current.right === stack.peek()) {
        let tmp = stack.pop();
        stack.push(current);
        current = tmp;
      }
      else {
        list.push(current.value);
        current = null;
      }
    }
    return list;
  }

  dfsPostOrderOneStack2() {
    const stack = new Stack();
    const list = [];
    let lastVisitedNode = null;
    let current = this.root;
    if (current === null) {
      return list;
    }
    while (!stack.isEmpty() || current !== null) {
      if (current !== null) {
        stack.push(current);
        current = current.left;
      }
      else {
        let peekNode = stack.peek();
        // if right child exists and traversing node from left child, then move right
        if (peekNode.right !== null && lastVisitedNode !== peekNode.right) {
          current = peekNode.right;
        }
        else {
          list.push(peekNode.value);
          lastVisitedNode = stack.pop();
        }
      }
    }
    return list;
  }

  // Left -> Right -> Parent
  dfsPostOrderTwoStacks() {
    const list = [];
    let current = this.root;
    const stack1 = new Stack();
    const stack2 = new Stack();
    if (current === null) {
      return list;
    }
    stack1.push(current);
    while (!stack1.isEmpty()) {
      current = stack1.pop();
      stack2.push(current);
      if (current.left !== null) {
        stack1.push(current.left);
      }
      if (current.right !== null) {
        stack1.push(current.right);
      }
    }
    while(!stack2.isEmpty()) {
      list.push(stack2.pop().value);
    }
    return list;
  }
}