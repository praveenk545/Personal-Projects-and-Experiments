const mergeObj = (obj1, obj2) => {
  const obj = { ...obj1, ...obj2 };
  return obj;
};
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
console.log(mergeObj(obj1, obj2));
