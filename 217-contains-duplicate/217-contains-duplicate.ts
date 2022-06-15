const containsDuplicate = (nums: number[]): boolean => {
    let record = {}
    
    for (let i:number = 0; i < nums.length; i++){
        if (record[nums[i]]) return true
        else record[nums[i]] = true
    }
    
    return false
}