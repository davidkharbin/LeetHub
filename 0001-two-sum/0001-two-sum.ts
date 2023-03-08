function twoSum(nums: number[], target: number): number[] {
    const hashMap = new Map()
    
    for (const i in nums) {
        const n = target - nums[i]
        
        if ( hashMap.has(n) ){
            return [i, hashMap.get(n)]
        }
        
        hashMap.set(nums[i], i)
    }   
}
