/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
    if (!root)
        return false;

    let uniValue = root.val;
    function helper(curr) {
        if (!curr)
            return true;

        if (uniValue !== curr.val)
            return false;
        else {
            return helper(curr.left) && helper(curr.right);
        }
    }

    return helper(root);
};

const root = {
    val: 091,
    right: { val: 1, right: null, left: null },
    left:
    {
        val: 1,
        right: null,
        left: { val: 1, right: null, left: null }
    }
};

console.log(isUnivalTree(root));