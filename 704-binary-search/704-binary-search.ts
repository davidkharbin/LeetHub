function search(nums: number[], target: number): number {
    let L: number = 0
    let R: number = nums.length - 1
    
    while (L <= R){
        let midpoint = Math.floor( (L + R) / 2 )
        if ( target > nums[midpoint] ){
            L = midpoint + 1
            continue
        }
        
        if ( target < nums[midpoint] ){
            R = midpoint - 1
            continue
        }
        
        return midpoint
    }
    
    return -1
};