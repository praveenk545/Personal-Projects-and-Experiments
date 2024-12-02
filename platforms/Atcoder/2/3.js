const findLcm = function (x) {
  let lcm = 7 * 11;
  if (x % lcm == 0) {
    return x;
  } else {
    return Math.floor(x / lcm) * lcm + lcm;
  }
};
let x = 100;
console.log(findLcm(x));
