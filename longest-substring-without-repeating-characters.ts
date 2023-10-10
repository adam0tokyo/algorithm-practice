function lengthOfLongestSubstring(s: string): number {
    let left = 0;
    let longest = 0;
    const subString = new Set();

    for (let right of s) {
        while (subString.has(right)) {
            subString.delete(s[left]);
            left += 1;
        }
        subString.add(right)
        longest = Math.max(longest, subString.size)
    }
    return longest;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));