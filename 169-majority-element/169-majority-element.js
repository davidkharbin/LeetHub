/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
  let majority = Math.round(nums.length / 2);
  let counts = {};
  
  for (let i = 0; i < nums.length; i++){
    if (counts[nums[i]]) {
      counts[nums[i]]++;
    }
    else {
      counts[nums[i]] = 1;
    }
    
    if (counts[nums[i]] === majority) return nums[i]
  }
   
};