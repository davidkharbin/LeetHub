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
const reverseList = (head) => {
    let prevNode = null
    
    while (head){
        let nextNode = head.next
        head.next = prevNode
        prevNode = head
        head = nextNode
    }
    
    return prevNode
}
