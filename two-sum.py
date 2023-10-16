from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash_map = {}
        complement: int
        for n in range(len(nums)):
            complement = target - nums[n]
            if nums[n] in hash_map:
                return list((hash_map.get(nums[n]), n))
            hash_map[complement] = n


solution = Solution()

print(solution.twoSum([2,7,11,15], 9)) #[0,1]
print(solution.twoSum([3,2,4], 6)) #[1,2]
print(solution.twoSum([3,3], 6)) #[0,1]
