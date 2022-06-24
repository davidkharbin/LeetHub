function search(nums: number[], target: number): number {
    let L: number = 0
    let R: number = nums.length - 1
    
    while (L <= R){
        let M: number = Math.floor( (L + R) / 2 )
        
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