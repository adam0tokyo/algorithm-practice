function threeSum(nums: number[]): number[][] {
    const numsS = nums.sort((a, b) => a - b);
      let output: number[][] = [];
      let left = 0;
      let right = numsS.length -1;
    
      for (let i = 0; i < numsS.length; i++) {
        left = i + 1;
        if (i > 0 && numsS[i] == nums[i -1]) continue
        while (left < right) {
          if (numsS[i] + numsS[left] + numsS[right] > 0) {
            right--;
          } else if (numsS[i] + numsS[left] + numsS[right] < 0) {
            left++;
          } else {
              output.push([numsS[i], numsS[left], numsS[right]])
              left++;
              while (left < right && numsS[left] === nums[left -1]) {
                left++;
              }
            }
          }
      }
      return output
    };