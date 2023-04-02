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

    remove = function(){
        if(this.sz == 0){
            console.log("Queue Underflow!");
            return null;
        }else if(this.sz == 1){
            let result = this.head.val;
            this.head = null;
            this.tail = null;
            this.sz--;
            return result;
        }else{
            let result = this.head.val;
            this.head = this.head.next;
            this.sz--;
            return result;
        }
    }

    peek = function(){
        if(this.sz == 0){
            console.log("Queue Underflow!");
            return null;
        }else return this.head.val;
    }
}

let q = new Queue();
q.add(5);
q.add(4);
console.log(q.remove());//5
q.add(3);
console.log(q.remove());//4
console.log(q.remove());//3
q.add(2);
console.log(q.peek()); //2
console.log(q.remove());//2
console.log(q.remove());// undeflow