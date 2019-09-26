/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTreeIterative = function (root) {
    if (!root)
        return null;

    let queue = [];
    queue.push(root);

    while (queue.length) {
        // pop
        let curr = queue.shift();
        // swap
        let temp = curr.left;
        curr.left = curr.right;
        curr.right = temp;

        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
    }
    return root;
};

var invertTree = function (root) {
    if (!root)
        return null;

    let queue = [];
    queue.push(root);

    function helper(queue) {
        if (!queue.length)
            return;

        // pop
        let curr = queue.shift();
        // swap
        let temp = curr.left;
        curr.left = curr.right;
        curr.right = temp;

        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);

        helper(queue);
    }

    helper(queue);
    return root;
};

const root1 = {
    val: 4,
    left: {
        val: 2,
        left: { val: 1, right: null, left: null },
        right: { val: 3, right: null, left: null }
    },
    right: {
        val: 7,
        left: { val: 6, right: null, left: null },
        right: { val: 9, right: null, left: null }
    }
};

console.log(invertTree(root1));