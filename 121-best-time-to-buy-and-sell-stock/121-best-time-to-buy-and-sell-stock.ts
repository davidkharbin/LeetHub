function maxProfit(prices: number[]): number {
    let lowestPrice: number = Infinity
    let maxProfit: number = 0
    
    for (let todaysPrice of prices){
        let todaysProfit: number = todaysPrice - lowestPrice
        
        if (todaysPrice < lowestPrice){
            lowestPrice = todaysPrice
            continue
        }
        
        if ( todaysProfit > maxProfit ){
            maxProfit = todaysProfit
        }
    }
    return maxProfit
};