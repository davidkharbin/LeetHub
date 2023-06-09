/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    let prevNode: ListNode = null;
    
    while (head){
        let currentNode: ListNode = head.next;
        head.next = prevNode;
        prevNode = head;
        head = currentNode;
    }
    
    return prevNode;
};
