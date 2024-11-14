const sum=function(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        count+=arr[i];
    }
    return count;

}
let arr=[1, 2, 3, 4, 5];
console.log(sum(arr));