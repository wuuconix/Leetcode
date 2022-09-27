/**
 * 剑指 Offer 42. 连续子数组的最大和
 * 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

    要求时间复杂度为O(n)。

    示例1:

    输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
    输出: 6
    解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
     
    提示：

    1 <= arr.length <= 10^5
    -100 <= arr[i] <= 100
 * @param {number[]} nums
 * @return {number}
 * 之前大二下学算法的时候记得点动态规划的知识。
 * 思路就是记录当前位置可能的最大值。
 * 然后下一个位置的最大值就用两种情况，一种是 max[i - 1] + nums[i]，另一种是nums[i]。
 * 时间复杂度应该是O(n)。遍历时O(n)，最后用Math.max(...max)也是O(n)
 * 哦对了，Math.max() 不支持直接 Math.max(array)。需要用省略符把数组展开。
 * 72 ms 60.52%
 * 48 MB 5.02%
 */
var maxSubArray = function(nums) {
    let max = [] //记录对应位置上的最大值
    let m = 0
    for (let i = 0; i < nums.length; i++) {
        if (i == 0)
            max.push(nums[i])
        else
            max.push(Math.max(max[i - 1] + nums[i], nums[i]))
    }
    return Math.max(...max)
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));