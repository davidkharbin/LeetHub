/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    let L = 0
    let R = nums.length - 1
    while ( L <= R ){
        
        let mid = Math.floor( (L + R) / 2 )
        if ( nums[mid] > target ){
            R = mid - 1
        } else if ( nums[mid] < target ){
            L = mid + 1
        } else {
            return mid
        }
    }
    
    return -1
}