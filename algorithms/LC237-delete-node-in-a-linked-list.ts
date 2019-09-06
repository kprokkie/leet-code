/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(head, node) {
  if (!head) {
    return null;
  }

  let currentNode = head;
  let tempNode;

  while (currentNode && currentNode.val !== node.val) {
    tempNode = currentNode;
    currentNode = currentNode.next;
  }
  tempNode.next = currentNode && currentNode.next;
  node.next = null;

  return head;
};


let head = {
  val: 4,
  next: {
    val: 5,
    next: {
      val: 1,
      next: { val: 9, next: null }
    }
  }
};

let node = {
  val: 5,
  next: {
    val: 1,
    next: { val: 9, next: null }
  }
};

deleteNode(head, node);

// excepted in Leet Code
var deleteNode2 = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
