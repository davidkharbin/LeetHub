/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
    let seen = new Set()
    let currentNode = head
    
    while(currentNode){
        if ( seen.has(currentNode) ){
            return true
        }
        
        seen.add(currentNode)
        currentNode = currentNode.next
    }
    
    return false
}