/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func invertTree(node *TreeNode) *TreeNode {
    if node == nil {
        return node
    }
    
    var tempNode = node.Left
    
    node.Left = node.Right
    node.Right = tempNode
    
    invertTree(node.Left)
    invertTree(node.Right)
    
    return node
}
