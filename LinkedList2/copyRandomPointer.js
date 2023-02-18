/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let temp = head;
    while(temp != null){
        let nn = new ListNode(temp.val,null,null);
        nn.next = temp.next;
        temp.next = nn;
        temp = temp.next.next;
    }

    //setting up random pointers
    temp = head;
    while(temp != null){
        let nn = temp.next;
        if(temp.random == null){
            nn.random = null;
        }else{
            nn.random = temp.random.next;
        }
        temp = temp.next.next;
    }

    //separating the linkedlists
    let dummy1 = new ListNode(-1);
    let dummy2 = new ListNode(-1);
    let t1 = dummy1;
    let t2 = dummy2;
    temp = head;

    while(temp != null){
        t1.next = temp;
        temp = temp.next;
        t1 = t1.next;

        t2.next = temp;
        temp = temp.next;
        t2 = t2.next;
    }
    t1.next = null;
    return dummy2.next;
};












