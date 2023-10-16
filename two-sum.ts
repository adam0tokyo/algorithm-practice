function twoSum(nums: number[], target: number): number[] {
    const hashMap: {[key:string]: number} = {};
    let complement: number;
    let output = [0,0];

    for (let i = 0; i > nums.length; i++) {
        complement = target - nums[i];
        if (hashMap.hasOwnProperty(complement)) {
            output = [i, hashMap[complement]]
            break;
        }
        hashMap[nums[i]] = i;
    }
    return output;
};