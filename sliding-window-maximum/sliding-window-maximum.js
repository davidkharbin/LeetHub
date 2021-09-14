/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function(nums, k) {
  let i = 0
    let j = 0
    
    if (k === 1 && nums.length > 1) {
        return nums
    }

    const result = []
    
    let windowMax

    while (j < nums.length) {
        if (windowMax === undefined) {
            windowMax = nums[i]
        }

        if (j-i < k - 1) {
            // Grow the window
            j++
            if (nums[j] > windowMax) {
                windowMax = nums[j]
            }
        } else {
            // Slide the window   
            result.push(windowMax)
            j++
            if (nums[j] > windowMax) {
                windowMax = nums[j]
            }
            i++
            if (nums[i-1] === windowMax) {
                // scan for new max
                windowMax = -Infinity

                for (let p = i; p <= j; p++) {
                    if (nums[p] > windowMax) {
                        windowMax = nums[p]
                    }
                }   
            }
        }
    }
    
    return result
};