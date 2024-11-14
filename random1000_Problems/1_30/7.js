const prime=(n)=>{
   if(n<=1){
    return false;
   }
   if(n===2){
    return true;
   }
   if(n%2===0){
    return false;
   }

   for(let i=3;i*i<=n;i+=2){
    console.log(i*i,"i-3 values")
       if(n%i===0){
        return false;
       }
   }
   return true;
}
console.log(prime(7));
console.log(prime(2));
console.log(prime(29));
console.log(prime(1));
console.log(prime(11));
console.log(prime(3));
console.log(5%5==0,"d");