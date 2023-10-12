// this question is poorly explained
// first attempt
function topKFrequent(nums: number[], k: number): number[] {
    const numCount: {[key: number]: number} = {}

    // make hashmap
    for (const num of nums) {
        if (!numCount[num]) numCount[num] = 0;
        numCount[num] += 1;
    }

    //convert hasmap to array, sort, crop and remove keys
    return Object.entries(numCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0,k)
    .map((e) => Number(e[0]))
}

//// second (following neetcode python)
// function topKFrequent(nums: number[], k: number): number[] {
//     const numCount: Map<number, number> = new Map();
//     const freqCount: number[][] = new Array(nums.length);
//     const result = [];

//     //make hashmap
//     for (const num of nums) {
//         if (!numCount.has(num)) numCount.set(num, 0);
//         numCount.set(num, (numCount.get(num) || 0) + 1);
//     }

//     //bucket sort
//     numCount.forEach((freq, num) => {
//         if (!freqCount[freq]) freqCount[freq] = [];
//         freqCount[freq].push(num);
//     });

//     //iterate through bucket from largest numbers, adding to result k times
//     for (let i = nums.length; i > 0; i--) {
//         if (result.length === k) break;
//         if (Array.isArray(freqCount[i])) {
//             for (let num of freqCount[i]) {
//                 result.push(num);
//                 if (result.length === k) break;
//             }
//         }  
//     }
//     return result;
// }

console.log(topKFrequent([1,1,1,2,2,3], 3));