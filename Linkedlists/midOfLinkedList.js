class Node {
    val;
    next;
    constructor(v) {
        this.val = v;
        this.next = null;
    }
}

class LinkedList {
    head;
    constructor(a) {
        this.head = new Node(a[0]);
        let temp = this.head;
        let i = 1;
        while (i < a.length) {
            temp.next = new Node(a[i]);
            temp = temp.next;
            i++;
        }
    }

    isEmpty = function () {
        return this.head == null;
    };

    displayLinkedList = function () {
        if (this.isEmpty()) {
            console.log("Linkedlist is empty!");
            return;
        }
        let temp = this.head;
        let s = "";
        while (temp != null) {
            s += temp.val + " -> ";
            temp = temp.next;
        }
        console.log(s);
    };

    sizeOfLinkedlist = function () {
        let temp = this.head;
        let cnt = 0;
        while (temp != null) {
            cnt++;
            temp = temp.next;
        }
        return cnt;
    };

    addNodeToLast = function (val) {
        if (this.head == null) {
            this.head = new Node(val);
            return;
        }
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        //temp will be standing on the tail node
        let nn = new Node(val);
        temp.next = nn;
    };

    addNodeFirst = function (val) {
        if (this.sizeOfLinkedlist() == 0) {
            this.head = new Node(val);
            return;
        }
        let nn = new Node(val);
        nn.next = this.head;
        this.head = nn;
    };

    addNodeAt = function (val, idx) {
        if (idx == 0) {
            this.addNodeFirst(val);
            return;
        } else if (idx == this.sizeOfLinkedlist()) {
            this.addNodeToLast(val);
            return;
        }
        let temp = this.getNodeAt(idx - 1);
        let nn = new Node(val);
        nn.next = temp.next;
        temp.next = nn;
    };

    removeFirst = function () {
        if (this.head == null) {
            console.log("linkedlist already empty");
            return -1;
        }
        let retVal = this.head.val;
        this.head = this.head.next;
        return retVal;
    };

    removeLast = function () {
        if (this.isEmpty()) {
            console.log("linkedlist already empty");
            return;
        } else if (this.sizeOfLinkedlist() == 1) {
            this.head = null;
            return -1;
        }
        let temp = this.head;
        while (temp.next.next != null) {
            temp = temp.next;
        }
        //temp is at the second last node
        let retVal = temp.next.val;
        temp.next = null;
        return retVal;
    };

    removeNodeAt = function (idx) {
        if (idx == 0) {
            return removeFirst();
        } else if (idx == this.sizeOfLinkedlist() - 1) {
            return removeLast();
        }
        let temp = this.getNodeAt(idx - 1);
        let retVal = temp.next.val;
        temp.next = temp.next.next;
        return retVal;
    };

    getNodeAt = function (idx) {
        if (idx >= this.sizeOfLinkedlist()) {
            console.log("Linkedlist Overflow!");
            return null;
        }
        if (idx < 0) {
            console.log("Linkedlist Underflow!");
            return null;
        }
        let temp = this.head;
        let cidx = 0;
        while (cidx < idx) {
            temp = temp.next;
            cidx++;
        }
        return temp;
    };
}

function getMid(head){
    let slow = head;
    let fast = head;
    while(fast.next != null && fast.next.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
let ll = new LinkedList([10,20,30,40]);

console.log(getMid(ll.head).val);
