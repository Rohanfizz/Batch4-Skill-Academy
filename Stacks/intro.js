class Node {
    val;
    next;
    constructor(v) {
        this.val = v;
        this.next = null;
    }
}
class Stack {
    head;
    constructor(a) {
        if(a.length == 0){
            this.head = null;
            return;
        }
        this.head = new Node(a[0]);
        let temp = this.head;
        let i = 1;
        while (i < a.length) {
            temp.next = new Node(a[i]);
            temp = temp.next;
            i++;
        }
}

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

    size = function () {
        // if(this.head == null) return 0;
        let temp = this.head;
        let cnt = 0;
        while (temp != null) {
            cnt++;
            temp = temp.next;
        }
        return cnt;
    };

    push = function (val) {
        if (this.size() == 0) {
            this.head = new Node(val);
            return;
        }
        let nn = new Node(val);
        nn.next = this.head;
        this.head = nn;
    };

    top = function  (){
        if(this.head == null) return -1;
        return this.head.val;
    }

    pop = function () {
        if (this.head == null) {
            console.log("linkedlist already empty");
            return -1;
        }
        let retVal = this.head.val;
        this.head = this.head.next;
        return retVal;
    };

}

function nger(arr){
    let st = new  Stack([]);
    let ans = new Array(arr.length);
    
    for(let i = arr.length-1;i>=0;i--){
        while(st.size()>0 && st.top()<=arr[i]) st.pop();

        if(st.size() == 0){
            ans[i] = -1;
        }else{
            ans[i] = st.top();
        }

        st.push(arr[i]);
    }
    return ans;
}
console.log(nger([1,5,5,6,2,1,5,3,4]));

