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
class StackUsingQueue {
    q1;
    q2;
    constructor() {
        this.q1 = new Queue();
        this.q2 = new Queue();
    }

    push = function (x) {
        // remove all elements from this.q1 and add them to this.q2
        while (this.q1.size() > 0) {
            this.q2.add(this.q1.remove());
        }

        // add x to this.q1
        this.q1.add(x);

        //bring all elements back from this.q2 to this.q1
        while (this.q2.size() > 0) {
            this.q1.add(this.q2.remove());
        }
    };

    pop = function () {
        if (this.q1.size() == 0) {
            console.log("Stack Underflow");
            return null;
        }
        return this.q1.remove();
    };

    top = function () {
        if (this.q1.size() == 0) {
            console.log("Stack Underflow");
            return null;
        }
        return this.q1.peek();
    };
    size=function(){
        return this.q1.size();
    }
}

// let tree = [1,3,4,-1,-1,2,8,-1,-1,-1,5,6,-1,9,-1,-1,7,-1,-1];
let tree = [1, 2, 4, -1, 5, -1, -1, -1, 3, 6, -1, -1, 7, -1, -1];
let root = serialize(tree);

function zigZag(root){
    let currLevel = new StackUsingQueue();
    let nextLevel = new StackUsingQueue();
    let l2r = true;
    let s ="";
    currLevel.push(root);

    while(currLevel.size() > 0 || nextLevel.size()>0){
        while(currLevel.size()>0){
            //remove
            let node = currLevel.pop();

            //do work
            s +=node.val+", ";

            //add children
            if(l2r){
                if(node.left != null) nextLevel.push(node.left);
                if(node.right!= null) nextLevel.push(node.right);
            }else{
                if(node.right!= null) nextLevel.push(node.right);
                if(node.left != null) nextLevel.push(node.left);
            }
        }
        //switching
        currLevel = nextLevel;
        nextLevel = new StackUsingQueue();
        l2r = !l2r; // if(lr2==true) l2r= false, else lr2 = true
    }
    console.log(s);
}
zigZag(root);

