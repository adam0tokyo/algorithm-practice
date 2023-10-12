function productExceptSelf(nums: number[]): number[] {
    const output:number[] = Array(nums.length).fill(1)
    let prefix = 1;
    let postfix = 1;
  
    for (let i = 0; i < nums.length; i++) {
      output[i] = prefix;
      prefix = prefix * nums[i];
    }

    for (let i = output.length -1; i >= 0; i--) {
        output[i] = postfix * output[i];
        postfix = postfix * nums[i];
    }
    
    return output;
  };

console.log(productExceptSelf([1,2,3,4]))  //[24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3]))  //[0,0,9,0,0]
