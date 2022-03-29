/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
    let max = 0;
    
    let left = 0;
    let right = height.length - 1;
    
    while (left < right){
        let current = getTotal(Math.min(height[left], height[right]), left, right) ;
        if (current > max) max = current;
         (height[left] < height[right]) ? left++ : right--;
    }
    
    return max;
};

function getTotal(min, l, r){
    return min * (r - l);
}