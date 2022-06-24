function search(nums: number[], target: number): number {
    let L: number = 0
    let R: number = nums.length - 1
    
    while (L <= R){
        let midpoint = Math.floor( (L + R) / 2 )
        
        if ( nums[midpoint] > target ){
            R = midpoint - 1
            
        } else if (  nums[midpoint] < target ){
            L = midpoint + 1
            
        } else {
           return midpoint 
        }
        
    }
    
    return -1
};