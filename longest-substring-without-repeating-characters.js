function lengthOfLongestSubstring(s) {
    var left = 0;
    var longest = 0;
    var subString = new Set();
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var right = s_1[_i];
        while (subString.has(right)) {
            subString.delete(s[left]);
            left += 1;
        }
        subString.add(right);
        longest = Math.max(longest, subString.size);
    }
    return longest;
}
;
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
