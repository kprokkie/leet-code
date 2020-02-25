/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
    if (!s || !t) return false;
    
    let queue = [];
    queue.push(s);

    while (queue.length) {
        let curr = queue.pop();

        if (isEqualTree(curr, t)) return true;

        // check for other
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
    }
    return false;
};

var isEqualTree = function (s, t) {
    if (!s && !t) return true; 

    if (!s || !t) return false;
    if (s.val !== t.val) return false;
    return isEqualTree(s.left, t.left) && isEqualTree(s.right, t.right);
}

const rootS = {
    val: 3,
    left: {
        val: 4,
        left: { val: 1, left: null, right: null },
        right: { val: 2, left: null, right: null }
    },
    right: {
        val: 5,
        left: null,
        right: null
    }
};

const rootT = {
    val: 4,
    left: { val: 1, left: null, right: null },
    right: { val: 2, left: null, right: null }
};

console.log('SubTree: ', isSubtree(rootS, rootT));

const rootS1 = {
    val: 4,
    left: { val: 1, left: null, right: null },
    right: { val: 2, left: null, right: null }
};
const rootT1 = {
    val: 4,
    left: { val: 1, left: null, right: null },
    right: { val: 2, left: null, right: null }
};

console.log('EqualTree: ', isEqualTree(rootS1, rootT1));