class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        subStr = set()
        left = 0
        longest = 0

        for right in range(len(s)):
            while s[right] in subStr:
                subStr.remove(s[left])
                left += 1
            subStr.add(s[right])
            longest = max(longest, right - left + 1)
        return longest

solution = Solution()

print(solution.lengthOfLongestSubstring("abcabcbb"))  #3
print(solution.lengthOfLongestSubstring("bbbbb"))  #1
print(solution.lengthOfLongestSubstring("pwwkew")) #3