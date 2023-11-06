// foreach method version
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const output: number[][] = [];

  nums.forEach((val, i): void => {
    if (i > 0 && nums[i] == nums[i - 1]) return;
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = val + nums[left] + nums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        output.push([val, nums[left], nums[right]]);
        left++;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
      }
    }
  });
  return output;
}

//for loop version
// function threeSum(nums: number[]): number[][] {
//   const numsS = nums.sort((a, b) => a - b);
//     let output: number[][] = [];

//     for (let i = 0; i < numsS.length; i++) {
//       if (i > 0 && numsS[i] == nums[i -1]) continue
//       let left = i + 1;
//       let right = numsS.length -1;
//       while (left < right) {
//         if (numsS[i] + numsS[left] + numsS[right] > 0) {
//           right--;
//         } else if (numsS[i] + numsS[left] + numsS[right] < 0) {
//           left++;
//         } else {
//             output.push([numsS[i], numsS[left], numsS[right]])
//             left++;
//             while (left < right && numsS[left] === nums[left -1]) {
//               left++;
//             }
//           }
//         }
//     }
//     return output
//   };

console.log(threeSum([-1, 0, 1, 2, -1, -4])); //[[-1,-1,2],[-1,0,1]]
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4])); //[[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
[];
