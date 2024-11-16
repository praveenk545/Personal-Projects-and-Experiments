const flattenNestedArray = function (arr) {
  let res = [];
  const queue = [...arr]; // Initialize queue with a shallow copy of the array

  while (queue.length > 0) {
    const current = queue.shift(); // Dequeue an element from the front of the queue

    if (Array.isArray(current)) {
      // If the element is an array, enqueue its items (add to the back of the queue)
      queue.push(...current);
    } else {
      // If it's not an array, add it to the result
      res.push(current);
    }
  }

  return res;
};

const arr = [1, [2, [3, [4]]]];
console.log(flattenNestedArray(arr)); // [1, 2, 3, 4]
