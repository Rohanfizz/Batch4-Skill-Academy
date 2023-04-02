class Node {
    val;
    next;
    constructor(val) {
        this.val = val;
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
            let result = this.head.val;
            this.head = null;
            this.tail = null;
            this.sz--;
            return result;
        } else {
            let result = this.head.val;
            this.head = this.head.next;
            this.sz--;
            return result;
        }
    };

    peek = function () {
        if (this.sz == 0) {
            console.log("Queue Underflow!");
            return null;
        } else return this.head.val;
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
}

let stack = new StackUsingQueue();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); //3
console.log(stack.top()); //2

stack.push(4);
console.log(stack.pop()); //4
console.log(stack.pop()); //2
console.log(stack.pop()); //1
console.log(stack.pop()); // underflow + null
 
