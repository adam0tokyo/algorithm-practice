function lengthOfLongestSubstring(str: string): number {
    let left = 0;
    let longest = 0;
    const subString = new Set();

    for (let right of str) {
        while (subString.has(right)) {
            subString.delete(str[left]);
            left += 1;
        }
        subString.add(right)
        longest = Math.max(longest, subString.size)
    }
    return longest;
};

console.log(lengthOfLongestSubstring("abcabcbb")); //3
console.log(lengthOfLongestSubstring("bbbbb")); //1
console.log(lengthOfLongestSubstring("pwwkew")); //3