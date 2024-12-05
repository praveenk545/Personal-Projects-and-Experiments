function maskedArraySum(n, integers, booleans) {
  let total=0;
  
  for( let i=0;i<integers.length;i++){
   // console.log(integers[i])
    if(booleans[i]!==false){
        total+=integers[i]
    }
  }
  return total;
}


const n = 5;
const integers = [1, 2, 3, 4, 5];
const booleans = [true, false, true, false, true];

console.log(maskedArraySum(n,integers,booleans))
