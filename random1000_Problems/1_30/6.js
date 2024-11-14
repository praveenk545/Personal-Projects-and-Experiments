const smallestNumber=(nums)=>{
  let min=nums[0];
  for(let i=0;i<nums.length;i++){
    // min=Math.min(min,nums[i])
    if(nums[i]<min){
        min=nums[i];
    }
  }
  return min;

}
let nums=[1, 5, 3, 9, 2,0];
let nums2=[1, 51, 13, 19, 2];
let nums3=[1, 51, 33, 91, 2,-1];
console.log(smallestNumber(nums))
console.log(smallestNumber(nums2))
console.log(smallestNumber(nums3))