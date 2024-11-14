const factorial=(f)=>{
    let count=1;
    for(let i=1;i<=f;i++){
        // count=i*count;
        count*=i;
    }
    return count;
}
console.log(factorial(5))
console.log(factorial(8))
console.log(factorial(6))