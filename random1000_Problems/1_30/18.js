const removeduplicate = function (arr) {
  const value = arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
  return value;
};
const arr = [1, 2, 2, 3, 4, 5, 5];
console.log(removeduplicate(arr));
