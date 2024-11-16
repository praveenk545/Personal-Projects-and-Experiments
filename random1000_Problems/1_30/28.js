// Deep Clone of an Object
function deepClone(obj) {
  // Handle primitive types and null
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Create a new object or array
  const clone = Array.isArray(obj) ? [] : {};

  // Recursively copy all properties
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

const obj = { a: 1, b: { c: 2 }, d: [1, 2, 3] };
const deepCloneObj = deepClone(obj);

console.log(deepCloneObj); // { a: 1, b: { c: 2 }, d: [1, 2, 3] }
console.log(deepCloneObj !== obj); // true
console.log(deepCloneObj.b !== obj.b); // true (nested object is cloned)
console.log(deepCloneObj.d !== obj.d); // true (array is cloned)
