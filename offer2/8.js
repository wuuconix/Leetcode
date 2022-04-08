/**
 * 剑指 Offer II 008. 和大于等于 target 的最短子数组
 * 中等
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

示例 1：

输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
示例 2：

输入：target = 4, nums = [1,4,4]
输出：1
示例 3：

输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0
 
提示：

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 105

进阶：

如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * 滑动窗口。在滑动的过程中不断记录窗口内部的和。
 * 如果和大于了target，说明我们可以减掉一点缩减窗口长度，这个时候我们窗口的左边界往右移动1
 * 如果和小于target，说明我们需要再多一点值，这个时候窗口右边界移动1
 * 在满足大于等于target的那些条件里，我们不断更新最短长度。
 * 最后返回即可
 * O(n)
 * 64 ms 70.76%
 * 41.8 MB 38.44%
 */
var minSubArrayLen = function(target, nums) {
    let min = Number.POSITIVE_INFINITY
    let left = 0, right = 0
    let sum = nums[0]
    while (right <= nums.length - 1) {
        if (sum >= target) {
            min = Math.min(min, right - left + 1)
            sum -= nums[left] //删除窗口的左边界的值缩小窗口的长度
            left++
        } else {
            if (right == nums.length - 1) //right不嫩吧再加了
                break
            right++
            sum += nums[right] //窗口右边界往右移动1位
        }
    }
    if (Number.isFinite(min))
        return min
    else
        return 0
};

/* 这道题的还可以用前缀和思想 + 二分来做。
但是时间复杂度比直接滑动窗口高。O(nlogn)
首先我们遍历左边界，然后用二分来找到满足条件的最小的右边界。
在这一过程中不断更新 min 即最短的长度 */
var minSubArrayLen = function(target, nums) {
    let prefixSum = [] //前缀和
    let temp = 0
    for (let num of nums) {
        temp += num
        prefixSum.push(temp)
    }
    let min = Number.POSITIVE_INFINITY //记录最短的长度
    for (let i = 0; i <= prefixSum.length - 1; i++) { //由于区间包含左边界和有边界，这里线性遍历左边界
        let left = i, right = prefixSum.length - 1 //右边界由于prefixSum的递增性，我们可以用二分查找找到满足条件的最小的有边界
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if ((i == 0 && prefixSum[mid] >= target) || (i > 0 && prefixSum[mid] - prefixSum[i - 1] >= target)) {
                min = Math.min(min, mid - i + 1)
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }
    if (Number.isFinite(min))
        return min
    else
        return 0
};
let target = 7, nums = [1,1,1,1,7]
console.log(minSubArrayLen(target, nums));