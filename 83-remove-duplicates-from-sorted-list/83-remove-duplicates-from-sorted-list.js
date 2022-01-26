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
const deleteDuplicates = (head) => {
    if (!head) return head;
    
    let node1 = head;
    let node2 = head.next;
    
    while (node1 && node2){
        if (node1.val === node2.val){
            node2 = node2.next;
            continue;
        }
        
        node1.next = node2;
        node1 = node1.next;
    }
    node1.next = null;
    return head;
};
