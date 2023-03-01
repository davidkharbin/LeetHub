/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// testing leethub extension for chrome (still not working with new LeetCode UI update?)
const twoSum = (nums, target) => {
    let visited = {}
    
    for ( let i = 0; i < nums.length; i++ ){
        let currentNumber = nums[i]
        let difference = target - currentNumber 

        if ( difference in visited ){
            return [visited[difference], i]
        } else {
            visited[currentNumber] = i 
        }
    }
    return null
}

