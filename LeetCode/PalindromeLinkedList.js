/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function(head) {
    let values = [];
    let block = head;
    
    while(block !== null) {
        values.push(block.val)
        block = block.next
    }
    
    for(let i = 0; i < values.length; i++) {
        if(values[i] !== values[values.length-1-i]) return false
    }
    
    return true
};