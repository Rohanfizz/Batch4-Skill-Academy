/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let t1 = l1;
    let t2 = l2;
    let carry = 0;
    let sum = 0;
    let dummy = new ListNode(-1);
    let temp = dummy;

    while(carry != 0 || t1 != null || t2!=null){
        let x = t1==null?0:t1.val;
        let y = t2==null?0:t2.val;
        sum = x+y+carry;
        carry = parseInt(sum/10);
        sum = sum%10;
        temp.next = new ListNode(sum);
        temp = temp.next;

        if(t1 != null) t1 = t1.next;
        if(t2 != null) t2 = t2.next;
    }
    return dummy.next;
};















    