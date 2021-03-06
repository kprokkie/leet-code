/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

  if (!head) {
    return null;
  }

  let firstNode = head;
  let secondNode = firstNode.next;

  while (secondNode) {
    let tempNode = secondNode.next;
    secondNode.next = firstNode;
    firstNode = secondNode;
    secondNode = tempNode; 
  }

  head.next = null;
  head = firstNode;

  return head;

};

// 2
var reverseList2 = function(head) {
  if (!head) {
    return null;
  }

  let previousNode = null;
  let currentNode = head;

  while (currentNode) {
    let tempNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = tempNode; 
  }

  head = previousNode;
  return head;
};

const head = {
  val: 1, next: {
    val: 2, next: {
      val: 3, next: {
        val: 4, next: {
          val: 5, next: null
        }
      }
    }
  }
};

reverseList(head);
reverseList(null);
