function flattenObject(obj, prefix = "") {
  let result = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;

      if (typeof obj[key] === "object" && obj[key] !== null) {
        // Recursively flatten the nested object
        Object.assign(result, flattenObject(obj[key], newKey));
      } else {
        result[newKey] = obj[key];
      }
    }
  }

  return result;
}
const input = {
  a: 1,
  b: { c: 2, d: { e: 3 } },
};
console.log(input);

const flattened = flattenObject(input);
console.log(flattened);
