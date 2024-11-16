function mergeObjects(obj1, obj2) {
  // Create a new object to hold the merged result
  const result = {};

  // Copy all properties from obj1 to result
  for (let key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      result[key] = obj1[key];
    }
  }

  // Copy all properties from obj2 to result
  for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      result[key] = obj2[key];
    }
  }

  return result;
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = mergeObjects(obj1, obj2);

console.log(mergedObj); // { a: 1, b: 3, c: 4 }
