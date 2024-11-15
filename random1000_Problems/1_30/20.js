let ssort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        temp = arr[i];
      }
    }
  }
  return arr;
};
let arr = [5, 2, 9, 1, 5, 6];
console.log(ssort(arr));
