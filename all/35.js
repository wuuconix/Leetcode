/**
 * 35. 搜索插入位置
 * 简单
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

    请必须使用时间复杂度为 O(log n) 的算法。

    示例 1:

    输入: nums = [1,3,5,6], target = 5
    输出: 2
    示例 2:

    输入: nums = [1,3,5,6], target = 2
    输出: 1
    示例 3:

    输入: nums = [1,3,5,6], target = 7
    输出: 4
     
    提示:

    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums 为 无重复元素 的 升序 排列数组
    -104 <= target <= 104
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 对二分查找条件的简单调整。
 * 如果target在数组中，就是正常的二分。
 * 如果target不在数组中，我们可以根据 nums[m - 1] < target && nums[m] > target确定 target应该插入的位置。
 * 60 ms 77.28%
 * 41.4 MB 13.93%
 */
var searchInsert = function(nums, target) {
    if (target <= nums[0])
        return 0
    if (target > nums[nums.length - 1])
        return nums.length
    let l = 0, r = nums.length - 1
    while (l <= r) {
        let m = Math.floor((l + r) / 2)
        if (nums[m] == target || nums[m - 1] < target && nums[m] > target)
            return m
        else if (nums[m] > target)
            r = m - 1
        else
            l = m + 1
    }
    return -1
};

let nums = [1,3,5,6], target = 7
console.log(searchInsert(nums, target));