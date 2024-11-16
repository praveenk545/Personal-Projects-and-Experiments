const CelsiusTOFahrenheit = function (n) {
  let k = 9 / 5;
  return n * k + 32;

  //
  //   let k = 5 / 9;
  //   return (n - 32) * k;  // Apply Fahrenheit to Celsius formula
  //   let k = 5 / 9;
  //   let f = n - 32;
  //   return f * k;
};
//(32°F − 32) × 5/9 = 0°C
//Celsius to Fahrenheit:

//𝐹=(𝐶×9/5)+32 to C
// C=(F−32)× 5/9 to F
console.log(CelsiusTOFahrenheit(77));
console.log(CelsiusTOFahrenheit(25));
