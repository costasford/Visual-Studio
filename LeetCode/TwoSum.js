/*
@param {number[]} nums
@param {number} target
@return {number[]}
*/

var twoSum = function(nums, target) {
    let freq = {};
    let res = [];
    for(let i=0; i<nums.length; i++){
        let add = target - nums[i]
        if ((add in freq) && (freq[add] != i)){
            res.push(freq[add], i);
            break;
        }
        freq[nums[i]] = i;
    }
    return res;
}