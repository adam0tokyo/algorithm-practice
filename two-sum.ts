function twoSum(nums: number[], target: number): number[] {
    const hashMap: {[key:string]: number} = {};
    let complement: number;
    let output = [0,0];

    for (let i = 0; i < nums.length; i++) {
        complement = target - nums[i];
        if (hashMap.hasOwnProperty(complement)) {
            output = [i, hashMap[complement]]
            break;
        }
        hashMap[nums[i]] = i;
    }
    return output;
};

console.log(twoSum([2,7,11,15], 9)) //[0,1]
console.log(twoSum([3,2,4], 6)) //[1,2]
console.log(twoSum([3,3], 6)) //[0,1]