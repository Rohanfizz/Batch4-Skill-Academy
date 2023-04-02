class TreeNode {
    left;
    right;
    val;
    constructor(v) {
        this.val = v;
        this.left = null;
        this.right = null;
    }
}

function serialize(tree) {
    let idx = 0;
    function solve(tree) {
        if (idx == tree.length) return null;
        if (tree[idx] == -1) {
            idx++;
            return null;
        }
        let nn = new TreeNode(tree[idx]);
        idx++;
        nn.left = solve(tree);
        nn.right = solve(tree);
        return nn;
    }

    let root = solve(tree);
    return root;
}

class Node {
    node;
    next;
    constructor(node) {
        this.node = node;
        this.next = null;
    }
}

class Queue {
    head;
    tail;
    sz;

    constructor() {
        this.head = null;
        this.tail = null;
        this.sz = 0;
    }

    size = function () {
        return this.sz;
    };

    add = function (x) {
        if (this.sz == 0) {
            this.head = new Node(x);
            this.tail = this.head;

            this.sz++;
        } else {
            // this means queue is not empty
            let nn = new Node(x);
            this.tail.next = nn;
            this.tail = nn;

            this.sz++;
        }
    };

    remove = function () {
        if (this.sz == 0) {
            console.log("Queue Underflow!");
            return null;
        } else if (this.sz == 1) {
            let result = this.head.node;
            this.head = null;
            this.tail = null;
            this.sz--;
            return result;
        } else {
            let result = this.head.node;
            this.head = this.head.next;
            this.sz--;
            return result;
        }
    };

    peek = function () {
        if (this.sz == 0) {
            console.log("Queue Underflow!");
            return null;
        } else return this.head.node;
    };
}

// let tree = [1,3,4,-1,-1,2,8,-1,-1,-1,5,6,-1,9,-1,-1,7,-1,-1];
let tree = [1, 2, 4, -1, 5, -1, -1, -1, 3, 6, -1, -1, 7, -1, -1];
let root = serialize(tree);

function bfs(root) {
    let q = new Queue();
    q.add(root);
    // console.log(q.peek());
    let s = "";

    while (q.size() > 0) {
        //remove
        let node = q.remove();

        //do work
        s += node.val + ", ";

        //add children
        if (node.left != null) q.add(node.left);
        if (node.right != null) q.add(node.right);
    }
    console.log(s);
}
bfs(root);
