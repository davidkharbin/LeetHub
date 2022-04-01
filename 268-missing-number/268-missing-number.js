/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = nums => {
    let expected = ( nums.length * (nums.length + 1) ) / 2;
    let total = nums.reduce((a, b) => (a + b), 0);
    return expected - total;
};