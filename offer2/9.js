/**
 * 剑指 Offer II 009. 乘积小于 K 的子数组
 * 中等
 * 给定一个正整数数组 nums和整数 k ，请找出该数组内乘积小于 k 的连续的子数组的个数。

    示例 1:

    输入: nums = [10,5,2,6], k = 100
    输出: 8
    解释: 8 个乘积小于 100 的子数组分别为: [10], [5], [2], [6], [10,5], [5,2], [2,6], [5,2,6]。
    需要注意的是 [10,5,2] 并不是乘积小于100的子数组。
    示例 2:

    输入: nums = [1,2,3], k = 0
    输出: 0
     
    提示: 

    1 <= nums.length <= 3 * 104
    1 <= nums[i] <= 1000
    0 <= k <= 106
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 这道题看起来也能用双指针，但是说实话我觉得它不配叫双指针。
 * 双指针应该是那种可以把时间复杂度降到O(n)的办法。
 * 不然两层for循环不也是双指针？那啥都能扯到双指针了。
 * 这道题实际上就是两层循环。
 * 第一层循环遍历左边界。
 * 第二层循环找到它第一个乘机大于k的点。
 * 然后每次贡献 j - i 个个数。
 * 比如 nums = [10,5,2,6], k = 100
 * 先固定10，然后第二层循环开始， 10 < 100, 50 < 100 , 100 = 100。
 * ok，记录下 j 的下标，即2，然后它就会贡献两个符合条件的子连续串。
 * 即 [10], [10, 5]
 * 然后左边界变成5，可以得到 [5], [5, 2], [5, 2, 6]
 * 然后是2， [2], [2, 6]
 * 最后一个6, [6]
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let ans = 0
    for (let i = 0; i < nums.length; i++) {
        let mul = nums[i]
        let j = i
        while (mul < k && j < nums.length) {
            j++
            mul *= nums[j]
        }
        ans += (j - i)
    }
    return ans
};

let nums = [10,9,10,4,3,8,3,3,6,2,10,10,9,3], k = 19
console.log(numSubarrayProductLessThanK(nums, k));