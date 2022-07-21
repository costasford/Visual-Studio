/*
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function(nums) {
    let right = nums.reduce((a,b)=>a+b), left=0,i=0;
    while(i<nums.length){
        right-=nums[i];
        if(left==right)return i;
        left+=nums[i];
        i+=1
    }return -1;
};