from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        lowest = prices[0]
        bestProfit = 0

        for current in prices:
            if lowest > current:
                lowest = current
            bestProfit = (max(bestProfit, current - lowest))
        return bestProfit

solution = Solution()

print(solution.maxProfit([7,1,5,3,6,4]))  #5
print(solution.maxProfit([7,6,4,3,1]))  #0