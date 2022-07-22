/*
 * @param {number} k
 * @param {number[]} nums
 */

var KthLargest = function(k, nums) {
    this.nums = nums;
    this.k = k;
};

/*
 * @param {number} val
 * @return {number}
 */

KthLargest.prototype.add = function(val) {
    this.nums.push(val);
    let sorted = this.nums.sort((a,b)=>b-a);
    return sorted[this.k-1]
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */