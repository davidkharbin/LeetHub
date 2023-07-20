function search(nums: number[], target: number): number {
    let L = 0;
    let R = nums.length - 1;
 
    while (L <= R){
        let M = Math.floor((L + R) / 2);
        
        if (nums[M] === target){
            return M;
        }
        
        if (target > nums[M]){
            L = M + 1;
        } else {
            R = M - 1;
        } 
    }
    // test LH2.0 extension...
    return -1;
};