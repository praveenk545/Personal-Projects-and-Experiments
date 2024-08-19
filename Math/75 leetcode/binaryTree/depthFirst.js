// import { Node } from ".";

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
const depthFirstValues = (root) => {
  if (root === null) {
    return [];
  }
  let result = [];
  const stack = [root]; //[null]
  while (stack.length > 0) {
    const currnt = stack.pop();
    console.log(stack,"stack");
    result.push(currnt.val);
    if (currnt.right) stack.push(currnt.right);
    if (currnt.left) stack.push(currnt.left);
  }
  return result;
};
console.log(depthFirstValues(a));
