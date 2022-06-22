/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices){
    let L = 0
    let R = 1
    let maxProfit = 0
    
    while (R < prices.length){
        
        if (prices[L] < prices[R]){
            let profit = prices[R] - prices[L]
            maxProfit = Math.max(maxProfit, profit)
        } else {
            L = R
        }
        
        R++
    }
    
    return maxProfit
}