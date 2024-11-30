const sum = function (num) {
  let n = [];
  n.push(num);
  n = n.toString();
  n = [...n];
  console.log(n);

  let total = 0;
  for (let i = 0; i < n.length; i++) {
   // if (typeof n[i] == "string") {
      total += parseInt(n[i]);
  //  }
  }
  return total;
};
let num = 123;
console.log(sum(num));
