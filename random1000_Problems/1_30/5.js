const largestNumber=(nums)=>{
    let max=0;
    for(let i=0;i<nums.length;i++){
        // max=Math.max(max , nums[i])
        if(nums[i]>max){
           max=nums[i];
        }
    }
    return max;
}
let nums=[1, 5, 3, 9, 2];
let nums2=[1, 51, 13, 19, 2];
let nums3=[1, 51, 33, 91, 2];
console.log(largestNumber(nums))
console.log(largestNumber(nums2))
console.log(largestNumber(nums3))