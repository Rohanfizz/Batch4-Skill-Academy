class node {
    next = null;
    val;
    constructor(val) {
        this.val = val;
    }
}

function print(head) {
    if (head == null) return;
    console.log(head.val);
    print(head.next);
}

function reverse(head) {
    if (head.next == null) return head;
    let newHead = reverse(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}

let arr = [1, 2, 3, 4, 5];
let dummy = new node(-1);
let temp = dummy;
for (let x of arr) {
    temp.next = new node(x);
    temp = temp.next;
}
let head = dummy.next;
print(head);
head = reverse(head);
console.log("------------");
print(head);
