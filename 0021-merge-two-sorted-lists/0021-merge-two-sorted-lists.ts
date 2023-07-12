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

function mergeTwoLists(listNode1: ListNode | null, listNode2: ListNode | null): ListNode | null {  
    const head: ListNode = new ListNode();
    let current: ListNode = head;
    
    while( listNode1 && listNode2 ){
        if( listNode1.val < listNode2.val ){
            current.next = listNode1;
            listNode1 = listNode1.next;
        } else {
            current.next = listNode2;
            listNode2 = listNode2.next
        }
        
        current = current.next
    }
    
    
    if( listNode1 ){
        current.next = listNode1;
    }
    
    if( listNode2 ){
        current.next = listNode2;
    }
    
    return head.next;
};