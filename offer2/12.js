/**
 * 剑指 Offer II 012. 左右两边子数组的和相等
 * 简单
 * 给你一个整数数组 nums ，请计算数组的 中心下标 。

数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。

如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。

如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。

示例 1：

输入：nums = [1,7,3,6,5,6]
输出：3
解释：
中心下标是 3 。
左侧数之和 sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11 ，
右侧数之和 sum = nums[4] + nums[5] = 5 + 6 = 11 ，二者相等。
示例 2：

输入：nums = [1, 2, 3]
输出：-1
解释：
数组中不存在满足此条件的中心下标。
示例 3：

输入：nums = [2, 1, -1]
输出：0
解释：
中心下标是 0 。
左侧数之和 sum = 0 ，（下标 0 左侧不存在元素），
右侧数之和 sum = nums[1] + nums[2] = 1 + -1 = 0 。

提示：
1 <= nums.length <= 10^4
-1000 <= nums[i] <= 1000
 * @param {number[]} nums
 * @return {number}
 * 简简单单前后缀并用。
 * 如果 i 是一个中心下标。
 * 那么 prefix[i - 1] == suffix[i + 1]。
 * 当然了，如果i = 0 或者 i = nums.length - 1 需要特殊考虑。
 * 60 ms 98.00%
 * 43.9 MB 23.51%
 */
var pivotIndex = function(nums) {
    let prefix = new Array(nums.length).fill(0)
    let suffix = new Array(nums.length).fill(0)
    let temp = 0
    for (let i = 0; i < nums.length; i++) {
        temp += nums[i]
        prefix[i] = temp
    }
    temp = 0
    for (let i = nums.length - 1; i >= 0; i--) {
        temp += nums[i]
        suffix[i] = temp
    }
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            if (suffix[1] == 0)
                return 0
        } else if (i == nums.length - 1) {
            if (prefix[nums.length - 2] == 0)
                return nums.length - 1
        } else {
            if (prefix[i - 1] == suffix[i + 1])
                return i
        }
    }
    return -1
};

/* 我以为我用前缀和+后缀和的思路已经无敌了
结果发现题解一片 只用前缀和的，空间复杂度省下了一半。
思路就是先得到nums的总和 total。
然后去遍历nums，如果前缀和 2 * sum + nums[i] == total ，说明 i 就是中心下标。
时间复杂度和我的一样，空间复杂度实际也一样，全都是O(n)
但是不可否认的是我的空间复杂度是 O (2n)，题解是O(n) 
80 ms 45.90%
43.1 MB  62.53%
这里耗时异常高，怀疑是数组reduce归并求和操作效率不高，于是重新手写求和。*/
var pivotIndex = function(nums) {
    let total = nums.reduce((a, b) => a + b) //求和
    let sum = 0 //记录前缀和。
    for (let i = 0; i < nums.length; i++) {
        if (2 * sum + nums[i] == total)
            return i
        sum += nums[i]
    }
    return -1
};

/* 72 ms 78.05%
43.4 MB 39.69%
这下正常些了。 */
var pivotIndex = function(nums) {
    let total = 0
    for (let num of nums) {
        total += num
    }
    let sum = 0 //记录前缀和。
    for (let i = 0; i < nums.length; i++) {
        if (2 * sum + nums[i] == total)
            return i
        sum += nums[i]
    }
    return -1
};
let nums = [1,7,3,6,5,6]
console.log(pivotIndex(nums));