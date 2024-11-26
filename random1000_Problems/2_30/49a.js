// Definition for singly-linked list.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// Function to reverse a linked list
const reverseList = function (head) {
  let prev = null;
  let current = head;

  // Traverse the list
  while (current !== null) {
    let next = current.next; // Store the next node
    current.next = prev; // Reverse the link
    prev = current; // Move prev and current one step forward
    current = next;
  }

  // When we reach the end, prev will be the new head
  return prev;
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
let head = arrayToList([1, 2, 3, 4, 5]);
let reversedHead = reverseList(head);
printList(reversedHead); // Output: [5, 4, 3, 2, 1]
