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
var isValidBST = function(root) {
    return validateNode(root);
};

function validateNode(root) {
    if (!root) {
        return true;
    }
    let currentNode = root;
    return checkLeft(currentNode) && checkRight(currentNode);
}

function checkLeft(currentNode) {
    if (currentNode.left) {
        if (!(currentNode.val > currentNode.left.val)) {
            return false;
        } else {
            return validateNode(currentNode.left);
        }
    }
    return true;
}

function checkRight(currentNode) {
    if (currentNode.right) {
        if (!(currentNode.val < currentNode.right.val)) {
            return false;
        } else {
            return validateNode(currentNode.right);
        }
    }
    return true;
}
