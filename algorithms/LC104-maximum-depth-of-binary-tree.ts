/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const root = {
    val: 3,
    right:
    {
        val: 20,
        right: { val: 7, right: null, left: null },
        left: {
            val: 15,
            right: { val: 27, right: null, left: null },
            left: { val: 35, right: null, left: null }
        }
    },
    left: {
        val: 9,
        right: { val: 13, right: null, left: null },
        left: { val: 25, right: null, left: null }
    }
};

var maxDepth = function (root) {
    function helper(root) {
        if (!root) {
            return 0;
        } else {
            let leftDepth = helper(root.left);
            let rightDepth = helper(root.right);
            // return leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1; // 57.56%
            return Math.max(leftDepth, rightDepth) + 1; // 91.50%
        }
    }
    return helper(root);
};

console.log(maxDepth(root));