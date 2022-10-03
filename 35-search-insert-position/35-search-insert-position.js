/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = 0;
    
    for(i; i<nums.length; i++){
        if(nums[i] >= target)
            return i;
    }
    
    return nums.length;
    
};