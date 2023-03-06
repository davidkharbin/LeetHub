const containsDuplicate = (nums: number[]): boolean => {
    // also could use hash map?
    const numSet = new Set()
    
    for ( const val of nums ){
        if ( numSet.has(val) ){
            return true
        } else {
            numSet.add( val )
        }
    }
    return false
};