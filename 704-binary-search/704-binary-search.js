/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
   
    let L = 0
    let R = nums.length - 1
    
    while (L <= R){
        let M = Math.floor( (L + R) / 2 )
        
        if ( nums[M] > target ){
            R = M - 1
        } else if (  nums[M] < target ){
            L = M + 1
        } else {
            return M 
        }
        
    }
    
    return -1
}