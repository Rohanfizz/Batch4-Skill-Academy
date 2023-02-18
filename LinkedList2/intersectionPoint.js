/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

function getSize(head){
    let temp = head;
    let sz = 0;
    while(temp != null){
        temp = temp.next;
        sz++;
    }
    return sz;
}

var getIntersectionNode = function(headA, headB) {
    let sz1 = getSize(headA);
    let sz2 = getSize(headB);

    if(sz1>sz2){
        while(sz1>sz2){
            headA = headA.next;
            sz1--;
        }
    }else if(sz2>sz1){
        while(sz2>sz1){
            headB = headB.next;
            sz2--;
        }
    }
    while(headA != headB){
        headA = headA.next;
        headB = headB.next;
    }
    return headA;
};















