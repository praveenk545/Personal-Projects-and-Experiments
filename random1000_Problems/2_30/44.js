// binary tree you remember
// Steps to Solve the Problem:
// Base Case: If the tree is empty (i.e., the root node is null), the depth is 0.
// Recursive Case: For each node:
// Recursively find the depth of its left and right subtrees.
// The depth of the current node will be the maximum depth of the left or right subtree, 
  //plus one for the current node.
// Return the Maximum Depth: The depth of the binary tree is the 
//maximum of the left and right subtree depths, incremented by one.

function findDepth(root) {
    if (root === null) {
      return 0; // Base case: empty tree has depth 0
    }
    
    // Recursively find the depth of the left and right subtrees
    const leftDepth = findDepth(root.left);
    const rightDepth = findDepth(root.right);
    
    // Return the maximum depth of the two subtrees, plus 1 for the current node
    return Math.max(leftDepth, rightDepth) + 1;
  }
  
//   1
//   / \
//  2   3
// / \
// 4  5
// Example input: binary tree [1, 2, 3, 4, 5]
const tree = {
    val: 1,
    left: {
      val: 2,
      left: { val: 4, left: null, right: null },
      right: { val: 5, left: null, right: null }
    },
    right: { val: 3, left: null, right: null }
  };
  
  console.log(findDepth(tree)); // Output: 3
  