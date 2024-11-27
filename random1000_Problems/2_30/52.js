const FindMode = function (arr) {
  const map = {};
  let max = 0;
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(i)
    //map.set(arr[i],(map.get(arr[i]) || 0)  + 1);
    map[arr[i]] = (map[arr[i]] || 0) + 1;
    //    const {key,value}=map[arr[i]];
    //    console.log(key)
  }
  // const[key,value]=map;
  //console.log(key)

  for (const [key, value] of Object.entries(map)) {
    // max=Math.max(max,value)
    if (value > max) {
      max = value;
      ans = key;
    }
  }
  return ans;
};
let arr = [1, 1, 1, 1, 1, 2, 3, 3, 4, 5, 5, 5];
console.log(FindMode(arr));
