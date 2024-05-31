class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(val) {
    if (this.tail) {
      this.tail.next = { val: val, next: null };
      this.tail = this.tail.next;
    } else {
      const node = { val: val, next: null };
      this.tail = node;
      this.head = node;
    }
  }
  dequeue() {
    if (this.head) {
      const ret = this.head.val;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      return ret;
    } else {
      return undefined;
    }
  }
  empty() {
    return !this.head;
  }
}

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let done = false;
    let cur = this.root;
    if (!cur) {
      this.root = new Node(val);
      done = true;
    }
    while (!done) {
      if (val < cur.val) {
        if (cur.left) {
          cur = cur.left;
        } else {
          cur.left = new Node(val);
          done = true;
        }
      } else {
        if (cur.right) {
          cur = cur.right;
        } else {
          cur.right = new Node(val);
          done = true;
        }
      }
    }
    return this;
  }

  insertRecAtNode(val, node) {
    if (node == null) {
      const newNode = new Node(val);
      return newNode;
    }
    if (val < node.val) {
      node.left = this.insertRecAtNode(val, node.left);
    } else {
      node.right = this.insertRecAtNode(val, node.right);
    }
    return node;
  }
  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    this.root = this.insertRecAtNode(val, this.root);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let cur = this.root;
    while (cur) {
      if (val == cur.val) {
        return cur;
      }
      if (val < cur.val) {
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    }
    return undefined;
  }

  findRecAtNode(val, node) {
    if (!node) {
      return undefined;
    }
    if (val == node.val) {
      return node;
    }
    if (val < node.val) {
      return this.findRecAtNode(val, node.left);
    } else {
      return this.findRecAtNode(val, node.right);
    }
  }
  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    return this.findRecAtNode(val, this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrderRec(node) {
    if (node != null) {
      this.visited.push(node.val);
      this.dfsPreOrderRec(node.left);
      this.dfsPreOrderRec(node.right);
    }
  }

  dfsPreOrder() {
    this.visited = [];
    this.dfsPreOrderRec(this.root);
    return this.visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrderRec(node) {
    if (node != null) {
      this.dfsInOrderRec(node.left);
      this.visited.push(node.val);
      this.dfsInOrderRec(node.right);
    }
  }

  dfsInOrder() {
    this.visited = [];
    this.dfsInOrderRec(this.root);
    return this.visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrderRec(node) {
    if (node != null) {
      this.dfsPostOrderRec(node.left);
      this.dfsPostOrderRec(node.right);
      this.visited.push(node.val);
    }
  }

  dfsPostOrder() {
    this.visited = [];
    this.dfsPostOrderRec(this.root);
    return this.visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let cur;
    this.visited = [];
    const myQ = new Queue();
    myQ.enqueue(this.root);
    while (!myQ.empty()) {
      cur = myQ.dequeue();
      this.visited.push(cur.val);
      if (cur.left) {
        myQ.enqueue(cur.left);
      }
      if (cur.right) {
        myQ.enqueue(cur.right);
      }
    }
    return this.visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;

t = new BinarySearchTree();
t.insertRecursively(5);
t.insertRecursively(3);
t.insertRecursively(7);
t.insertRecursively(4);
t.insertRecursively(10);
t.insertRecursively(1);
t.insertRecursively(13);
t.insertRecursively(9);
t.insertRecursively(2);

q = new Queue();
q.enqueue(7);
q.enqueue(10);
q.enqueue(15);
q.enqueue(20);
q.enqueue(27);
