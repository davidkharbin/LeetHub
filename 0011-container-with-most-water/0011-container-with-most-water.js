/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = heights => {
    let maxVol = 0, left = 0, right = heights.length - 1;
    
    while (left < right) {
        let width = right - left;
        let minHeight = Math.min(heights[left], heights[right]);
        let currVol = width * minHeight;
        
        maxVol = Math.max(maxVol, currVol);
        
        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxVol;
};