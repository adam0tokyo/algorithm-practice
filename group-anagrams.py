from typing import List

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = {}

        for str in strs:
            sorted_str = ''.join(sorted(str))
            if sorted_str not in anagrams:
                anagrams[sorted_str] = []
            anagrams[sorted_str].append(str)
        
        return list(anagrams.values())


solution = Solution()

print(solution.groupAnagrams(["eat","tea","tan","ate","nat","bat"]))