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
var isSymmetric = function (root) {
    if (!root)
        return true;

    let queue = [];
    queue.push(root.left); // L
    queue.push(root.right); // R

    while (queue.length) {
        let leftN = queue.shift(); // L
        let rightN = queue.shift(); // R

        if (!leftN && !rightN) continue;
        if (!leftN || !rightN) return false;
        if (leftN.val !== rightN.val) return false;

        queue.push(leftN.left);
        queue.push(rightN.right);
        queue.push(leftN.right);
        queue.push(rightN.left);
    }
    return true;
};

const root2 = {
    val: 1,
    left: {
        val: 2,
        left: { val: 3, left: null, right: null },
        right: { val: 4, left: null, right: null }
    },
    right: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: { val: 3, left: null, right: null }
    }
};

const root5 = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: { val: 4, left: null, right: null }
    },
    right: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: { val: 3, left: null, right: null }
    }
};

const root3 = null;
const root4 = { val: 3, left: null, right: null };

// isSymmetric(root2);
//console.log(isSymmetric(root3));
console.log(isSymmetric(root5));