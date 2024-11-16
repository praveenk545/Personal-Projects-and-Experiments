const flattenNestedArray = function (arr) {
  let res = [];
  const stack = [...arr];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current, "current");
    //if (Array.isArray(current))
    if (current instanceof Array) {
      stack.push(...current);
    } else {
      res.push(current);
    }

    // console.log(arr[start]);
  }
  console.log(res);
  return res.reverse();
};
const arr = [1, [2, [3, [4]]]];
console.log(flattenNestedArray(arr));
