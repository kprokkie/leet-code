/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    return inorder(root, []);
};

function inorder (root, list) {
    if (root != null) {
        if (root.left) {
            inorder(root.left, list);
        }

        // inorder
        list.push(root.val);

        if (root.right) {
            inorder(root.right, list);
        }
    }
    return list;
    
}