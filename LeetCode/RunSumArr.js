/*
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function(nums) {
    let sum=[];
    let run=0;
    for(let i in nums){
        run+=nums[i];
        sum.push(run)
    }
    return sum
};