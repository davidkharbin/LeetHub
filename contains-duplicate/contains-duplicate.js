/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    if (nums.length <= 1) return false;
    
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] === nums[j]){
                return true;
            }
        }
    }
    
    return false;
};