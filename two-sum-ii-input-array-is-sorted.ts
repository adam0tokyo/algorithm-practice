
//66 ms ~33%
//43.7 MB ~47%
// function twoSumTwo(nums: number[], target: number): number[] {
//     const hashMap: {[key:string]: number} = {};
//     let complement: number;
//     let output = [0,0];

//     for (let i = 0; i < nums.length; i++) {
//         complement = target - nums[i];
//         if (hashMap.hasOwnProperty(complement)) {
//             output = [hashMap[complement] + 1, i + 1]
//             break;
//         }
//         hashMap[nums[i]] = i;
//     }
//     return output;
// };


//63 ms ~44%
//43.7 MB ~47%
// This is a much more elegant solution, but it is od that performance isn't much different
function twoSumTwo(nums: number[], target: number): number[] {
    let left = 0;
    let right = nums.length -1;
    while(left < right) {
        if ((nums[left] + nums[right]) > target) right --;
        else if ((nums[left] + nums[right]) < target) left ++;
        else break;
    }
    return [left + 1, right + 1];
};

console.log(twoSumTwo([2,7,11,15], 9)) //[1,2]
console.log(twoSumTwo([3,2,4], 6)) //[2,3]
console.log(twoSumTwo([3,3], 6)) //[1,2]



