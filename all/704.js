/**
 * 704. 二分查找
 * 简单
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
    示例 1:

    输入: nums = [-1,0,3,5,9,12], target = 9
    输出: 4
    解释: 9 出现在 nums 中并且下标为 4
    示例 2:

    输入: nums = [-1,0,3,5,9,12], target = 2
    输出: -1
    解释: 2 不存在 nums 中因此返回 -1

    提示：

    你可以假设 nums 中的所有元素是不重复的。
    n 将在 [1, 10000]之间。
    nums 的每个元素都将在 [-9999, 9999]之间。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 二分查找模板。
 * 76 ms 25.28%
 * 43.6 MB 68.05%
 * 根据代码随想录，这种写法属于 左闭右闭的写法。 left == right 是有意义的，所以 while的条件需要写为 while(left <= right)
 */
var search = function(nums, target) {
    let l = 0, r = nums.length - 1
    while (l <= r) {
        let m = Math.floor((l + r) / 2)
        if (nums[m] == target)
            return m
        else if (nums[m] > target)
            r = m - 1
        else
            l = m + 1
    }
    return -1
};

/* 这是二分的第二种写法，即左闭右开的写法，[left ,right) 那个时候因为右边的取不到，所以 while (left < right)。
    而且一开始 right 的初始值应该是 nums.length 而不是 num.length - 1
    最后r变小的情况下，不能写为 r = m - 1，因为这种写法下r的值会代表一个取不到的右边界，而 m - 1可能就是target，而因为 m 这个点
    已经被确定不是target了，所以右边界应该被更新为 m */
var search = function(nums, target) {
    let l = 0, r = nums.length //区别1
    while (l < r) { //区别2
        let m = Math.floor((l + r) / 2)
        if (nums[m] == target)
            return m
        else if (nums[m] > target)
            r = m //区别3
        else
            l = m + 1
    }
    return -1
};

let nums = [-1,0,3,5,9,12], target = 9
console.log(search(nums, target));