/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {

    function helper(p, q) {
        if (!p && !q) return true;
        if (!p || !q) return false;

        if (p.val !== q.val) return false;
        return helper(p.left, q.left) && helper(p.right, q.right);
    }

    return helper(p, q);
};

const root11 = {
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

const root12 = {
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

const root13 = {
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

console.log(isSameTree(root11, root13));