/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

function mid(head){
    let slow = head;
    let fast = head;
    while(fast.next != null && fast.next.next!=null){
        fast= fast.next.next;
        slow = slow.next;
    }
    return slow;
}
var reverse=function(node){
    let prev = null;
    let curr  = node;
    let next = node.next;

    while(curr!=null){
        curr.next = prev;
        prev = curr;
        curr = next;
        if(next != null)next = next.next;
    }
    return prev;
}
var reorderList = function(head) {
    if(head == null || head.next==null) return null;

    let midNode= mid(head);
    let midNext = midNode.next;
    //detach from midNext
    midNode.next = null;
    midNext = reverse(midNext);
    let dummy = new ListNode(-1);
    let temp = dummy;

    let t1 = head;
    let t2 = midNext;

    while(temp != null){
        if(t1 == null)return dummy.next;
        temp.next = t1;
        t1 = t1.next;
        temp = temp.next;
        if(temp == null || t2 == null) return dummy.next;
        temp.next = t2;
        t2 = t2.next;
        temp=  temp.next;
    }
    return midNode.next;
};








