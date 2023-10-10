
// (m*nlogn)
function groupAnagrams(strs: string[]): string[][] {
    const anagrams: {[key: string]: string[]} = {};
    
    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');
        if (!anagrams[sortedStr]) anagrams[sortedStr] = [];
        anagrams[sortedStr].push(str);
    }
    return Object.values(anagrams);
}

// O(m*n)
// function groupAnagrams(strs: string[]): string[][] {
//     const anagrams: {[key: string]: string[]} = {};

//     function keySorter(str: string): string {
//         const baseKey = new Array(26).fill("0");
//         for (let c of str) {
//             baseKey[(c.charCodeAt(0) - 97)] += 1
//         }
//         return baseKey.toString();
//     }
    
//     for (let str of strs) {
//         let sortedStr = keySorter(str)
//         if (!anagrams[sortedStr]) anagrams[sortedStr] = [];
//         anagrams[sortedStr].push(str);
//     }
//     return Object.values(anagrams);
// }

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));