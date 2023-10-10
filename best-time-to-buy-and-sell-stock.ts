function maxProfit(prices: number[]): number {
    let lowest = prices[0];
    let bestProfit = 0;

    for (let current of prices) {
        if (lowest > current) lowest = current;
        bestProfit = (Math.max(bestProfit, current - lowest))
    }
    return bestProfit;
};


console.log(maxProfit([7,1,5,3,6,4])); //5
console.log(maxProfit([7,6,4,3,1])); //0