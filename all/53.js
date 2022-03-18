/**
 * 53. 最大子数组和
给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
子数组 是数组中的一个连续部分。
示例 1：

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 看了官方题解后写出的动态规划代码
 * 76 ms 94.93%
 * 51.3 MB 14.86%
*/
var maxSubArray = function(nums) {
    let f = new Array(nums.length)
    f[0] = nums[0]
    let ans = f[0]
    for (let i = 1; i < nums.length; i++) {
        f[i] = Math.max(nums[i], f[i - 1] + nums[i])
        ans = Math.max(ans, f[i])
    }
    return ans
};