const occurs = function (arr) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    // map[arr[i]]=(map[arr[i]]||0)+1;
    map.set(arr[i],(map.get(arr[i]) || 0)  + 1);
  }
  return map;
};
const arr = [1, 2, 2, 3, 3, 3, 4];
console.log(occurs(arr));

// const occurs = function (arr) {
//     const map = new Map();
  
//     for (let i = 0; i < arr.length; i++) {
//       // Correct the code to get the value for arr[i]
//       map.set(arr[i], (map.get(arr[i]) || 0) + 1);
//     }
    
//     return map;
//   };
  
//   const arr = [1, 2, 2, 3, 3, 3, 4];
//   console.log(occurs(arr));
  