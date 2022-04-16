/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (listNode1, listNode2) => {
  
    let head = new ListNode(0);
    let current = head;
    
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