// Definition for singly-linked list.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// Function to merge two sorted linked lists
const mergeTwoLists = function (l1, l2) {
  // Create a dummy node to simplify the merging process
  let dummy = new ListNode(-1);
  let current = dummy;

  // Traverse both lists while both are non-empty
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1; // Link current node to l1
      l1 = l1.next; // Move l1 pointer to the next node
    } else {
      current.next = l2; // Link current node to l2
      l2 = l2.next; // Move l2 pointer to the next node
    }
    current = current.next; // Move the current pointer to the next node
  }

  // If one of the lists is not empty, link it directly to the merged list
  if (l1 !== null) {
    current.next = l1;
  } else if (l2 !== null) {
    current.next = l2;
  }

  // Return the merged list, which starts from dummy.next
  return dummy.next;
};

// Helper function to convert an array to a linked list
function arrayToList(arr) {
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to print a linked list
function printList(node) {
  let result = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  console.log(result);
}

// Example usage:
let l1 = arrayToList([1, 3, 5]);
let l2 = arrayToList([2, 4, 6]);
let mergedList = mergeTwoLists(l1, l2);
printList(mergedList); // Output: [1, 2, 3, 4, 5, 6]
