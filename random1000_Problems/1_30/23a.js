// need to either write your own function or use a library like lodash.

// Example using lodash.merge():
// javascript
// Copy code
const _ = require("lodash");

const obj1 = { a: 1, b: { x: 2 } };
const obj2 = { b: { y: 3 }, c: 4 };

const mergedObj = _.merge({}, obj1, obj2);

console.log(mergedObj); // { a: 1, b: { x: 2, y: 3 }, c: 4 }
//In this case, lodash.merge() deep-merges the objects, meaning that it merges nested objects rather than overwriting them.
