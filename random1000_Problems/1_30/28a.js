function deepClone(obj) {
  if (obj !== null || typeof obj !== "object") {
    return obj;
  }
  const clone = Array.isArray(obj) ? [] : {};
  for (let char in obj) {
    if (obj.hasOwnProperty(char)) {
      clone[char] = deepClone(obj[char]);
    }
  }
  return clone;
}
const obj = { a: 1, b: { c: 2 } };
// output: {a: 1, b: {c: 2}}

console.log(deepClone(obj));
