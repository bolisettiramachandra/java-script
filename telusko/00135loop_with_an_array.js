let nums = []

nums[0] = 5
nums[99]=9

console.log(nums, nums.length)

//for of loop
for(let n of nums){
 
    console.log(n);
}
// you can use for in loop but it dosen't print undefined values
for(let key in nums){
 
    console.log(nums[key]);
}