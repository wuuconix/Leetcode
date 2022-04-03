/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    while (nums.length > 1) {
        let newNums = new Array(nums.length - 1).fill(0)
        for (let i = 0; i < newNums.length; i++) {
            newNums[i] = (nums[i] + nums[i + 1]) % 10
        }
        nums = newNums
    }
    return nums
};

let nums = [5]
console.log(triangularSum(nums));
