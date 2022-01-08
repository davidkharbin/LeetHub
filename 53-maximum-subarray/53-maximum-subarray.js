/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
  let maxSum = nums[0];
  let sum = 0;
    
  for(let i = 0; i < nums.length; i++){
    if (sum < 0) sum = 0;     
      sum += nums[i];

      maxSum = Math.max(sum, maxSum);
    }
    
    return maxSum;
};

