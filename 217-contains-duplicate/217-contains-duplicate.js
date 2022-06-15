/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    let record = {}
    
    for (let i = 0; i < nums.length; i++){
        if (record[nums[i]]) return true
        else record[nums[i]] = true
    }
    
    return false
}