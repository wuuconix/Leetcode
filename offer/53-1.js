/**
 * 剑指 Offer 53 - I. 在排序数组中查找数字 I
 * 简单
 * 统计一个数字在排序数组中出现的次数。
    示例 1:
    输入: nums = [5,7,7,8,8,10], target = 8
    输出: 2

    示例 2:
    输入: nums = [5,7,7,8,8,10], target = 6
    输出: 0
     
    提示：
    0 <= nums.length <= 105
    -109 <= nums[i] <= 109
    nums 是一个非递减数组
    -109 <= target <= 109
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 统计次数，按理说直接遍历一遍O(n)好像已经挺快了。
 * 但是这道题的数据量极大，最大会 10 ^ 105次方。
 * 让我们被迫只能选择O(logn)的算法。
 * 这道题是排序数组，很显然，我们可以使用二分查找的算法。
 * 我的思路是先二分查找出第一个target所在位置，
 * 然后二分查找最后一个target所在位置，
 * 两个位置一计算，我们就知道target有多少个了。但是实际上边界不好判断，然后
 * 判断条件也比较难写，个人感觉这道题还是有难度的。
 * 60ms 82.3%
 */
var search = function(nums, target) {
    if (target < nums[0] || target > nums[nums.length - 1])
        return 0
    let left = 0, right = nums.length - 1, start = 0, end = nums.length - 1, mid = 0
    while (left <= right) { //这一步需要找到第一个target的起始位置 特征 左边比target小
        mid = Math.floor((left + right) / 2)
        if (nums[mid] == target && (mid == 0 || nums[mid - 1] < target))
            break
        else if (nums[mid] >= target)
            right = mid - 1
        else if (nums[mid] < target && nums[mid + 1] == target) {
            mid++
            break
        } else if (nums[mid] < target)
            left = mid + 1
    }
    if (nums[mid] == target)
        start = mid
    else  //说明没有target
        return 0
    left = 0, right = nums.length - 1
    while (left <= right) { //找到最后一个target的位置 特征 右边比target大
        mid = Math.floor((left + right) / 2)
        if (nums[mid] == target && (mid == nums.length - 1 || nums[mid + 1] > target))
            break
        else if (nums[mid] <= target)
            left = mid + 1
        else if (nums[mid] > target && nums[mid - 1] == target) {
            mid--
            break
        } else if (nums[mid] > target) {
            right = mid - 1
        }
    }
    end = mid
    return end - start + 1
};

/* 看了k神的题解，发现自己对二分不太掌握，调节写的太冗余了。
实际上while内部只要有两条判断语句就行，一条判断小于，一条判断大于，置于等于，会根据你要找左边界还是有边界放到对应上去。
如果你要找左边界，让遇到nums[mid] == target的时候，你选择的肯定是 j = m - 1。
因为正确的左边界应该在左边
48 ms 99.33%
41.6 MB 35.49% */
var search = function(nums, target) {
    let i = 0, j = nums.length - 1, left, right
    while (i <= j) { //找左边界
        let m = Math.floor((i + j) / 2)
        if (nums[m] < target)
            i = m + 1
        else
            j = m - 1
    }
    if (nums[i] != target) //可以肯定没有target这个数，直接返回0
        return 0
    left = j
    j = nums.length - 1 //右边界回到最右边，左边界不用动了，因为有边界肯定在左边界右边
    while (i <= j) { //找有边界
        let m = Math.floor((i + j) / 2)
        if (nums[m] <= target)
            i = m + 1
        else
            j = m - 1
    }
    right = i //为什么等于i不等于j，应该看边界情况下等于下，给哪个加了 1.
    return right - left - 1
};

let nums = [1, 2, 2], target = 2
console.log(search(nums, target))