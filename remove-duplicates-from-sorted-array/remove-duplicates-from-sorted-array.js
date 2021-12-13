/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    let mySet = new Set(nums);
    let results = [];
  
    for (let num of mySet){
        results.push(num);
    }
    
    for (let i = 0; i < results.length; i++){
        nums[i] = results[i];
    }
    
    return results.length;
};