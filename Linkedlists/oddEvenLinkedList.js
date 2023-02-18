/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    let dummyOdd = new ListNode(-1);
    let tempOdd = dummyOdd;

    let dummyEven = new ListNode(-1);
    let tempEven = dummyEven;

    let curr = head;
    let idx = 1;
    while(curr != null){
        if(idx %2 == 0){
            //even
            tempEven.next = curr;
            curr = curr.next;
            tempEven = tempEven.next;
            idx++;
        }else{
            // odd
            tempOdd.next = curr;
            curr = curr.next;
            tempOdd = tempOdd.next;
            idx++;
        }
    }
     tempEven.next = null;
     tempOdd.next = null;
     
     let headOdd = dummyOdd.next;
     let headEven = dummyEven.next;

    if(headOdd == null) return null;
    if(headEven == null) return headOdd;

    tempOdd.next = headEven;
    return headOdd;

};














