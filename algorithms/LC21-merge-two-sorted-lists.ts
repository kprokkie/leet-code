/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// linked list
var mergeTwoLinkedLists = function(l1, l2) {
  let head = { val: -1, next: null };
  ctr = head;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      ctr.next = l1;
      l1 = l1.next;
    } else {
      ctr.next = l2;
      l2 = l2.next;
    }
    ctr = ctr.next;
  }

  ctr.next = l1 || l2;
  return head.next;
};

const l1 = {
  val: 1,
  next: {
    val: 2, next:
      { val: 4, next: null }
  }
};
const l2 = {
  val: 1,
  next: {
    val: 3, next:
      { val: 4, next: null }
  }
};

/*
Runtime: 56 ms, faster than 94.29% of JavaScript online submissions for Merge Two Sorted Lists.
Memory Usage: 35.6 MB, less than 58.97% of JavaScript online submissions for Merge Two Sorted Lists.
*/
mergeTwoLinkedLists(l1, l2); // [1,1,2,3,4,4]

// array list 
var mergeTwoArrayLists = function(l1, l2) {
  let sortedList = [];
  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < l1.length && idx2 < l2.length) {
    if (l1[idx1] <= l2[idx2]) {
      sortedList.push(l1[idx1]);
      idx1++;
    } else {
      sortedList.push(l2[idx2]);
      idx2++;
    }
  }

  while (idx1 < l1.length) {
    sortedList.push(l1[idx1]);
    idx1++;
  }

  while (idx2 < l2.length) {
    sortedList.push(l2[idx2]);
    idx2++;
  }

  return sortedList;

};

const a1 = [1, 2, 4];
const a2 = [1, 3, 4];
//mergeTwoArrayLists(a1, a2);
