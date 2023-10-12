# class Solution:
#     def topKFrequent(self, nums: List[int], k: int) -> List[int]:
#         numCount = {}

#         def larger_sort(a, b):
#             return lambda b[1] - a[1]

#         for num in nums:
#             if num not in numCount:
#                 numCount[num] = [0]
#             numCount[num] += 1

#         result = numCount.items()
#         result.sort(larger_sort)
#         print(result)
#         return [1]