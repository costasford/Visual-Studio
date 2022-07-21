/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let head=new ListNode(0);
    let temp=head;
    let carry=0;
    
    while(l1||l2||carry){
        let v1=l1?l1.val:null;
        let v2=l2?l2.val:null;
        let total=v1+v2+carry;
        carry=total>=10?1:0;
        temp.next=new ListNode(total%10);
        temp=temp.next;
        l1=l1?l1.next:null;
        l2=l2?l2.next:null;
    }
    return head.next;
};