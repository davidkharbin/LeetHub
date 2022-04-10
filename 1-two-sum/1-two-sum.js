/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  let result = [];
  let map = {};
      
  for (let i=0; i<nums.length; i++) {
    
    let difference = target - nums[i];
    console.log(difference);
    if (map[difference] !== undefined) {
      result.push(map[difference]);
      result.push(i);
      return result;
    }
    
    map[nums[i]] = i;
  }
  
  return [];
};