function threeSum(nums: number[]): number[][] {
  const numsS = nums.sort((a, b) => a - b);
    let output: number[][] = [];
    let left = 0;
    let right = numsS.length -1;
  
    console.log("ARR", numsS)
    for (let i = 0; i < numsS.length; i++) {
      left = i + 1;
      if (i > 0 && numsS[i] == nums[i -1]) continue
      while (left < right) {
        if (numsS[i] + numsS[left] + numsS[right] > 0) {
          right--;
        } else if (numsS[i] + numsS[left] + numsS[right] < 0) {
          left++;
        } else if (numsS[i] + numsS[left] + numsS[right] === 0) {
            output.push([numsS[i], numsS[left], numsS[right]])
            left++;
            while (numsS[left] === nums[left -1] && left < right) {
              left++;
            }
          }
        }
    }
    return output
  };

console.log(threeSum([-1,0,1,2,-1,-4]));  //[[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1]));  //[]
console.log(threeSum([0,0,0]));  //[0,0,0]
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4])); //[[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]