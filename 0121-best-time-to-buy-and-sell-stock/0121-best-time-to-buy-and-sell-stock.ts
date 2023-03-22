function maxProfit(prices: number[]): number {
    let L = 0
    let R = 1
    let max = 0
    
    while ( R < prices.length ){
        if ( prices[R] > prices[L] ){
            max = Math.max( prices[R] - prices[L], max )
        } else {
            L = R
        }
        
        R++
    }
    
    return max
}
