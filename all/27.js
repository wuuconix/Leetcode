/**
给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。

 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * splice 一把嗦
 * 68 ms 63.98%
 * 41.4 MB 5.90%
 */
 var removeElement = function(nums, val) {
    let i = 0
    while (i < nums.length) {
        if (nums[i] == val) {
            nums.splice(i, 1)
        } else {
            i += 1
        }
    }
    return nums
};

/* 用splice api做太作弊了。这才是正确的考点，利用双指针来实现数据的移动。
正常情况下 nums[slow] = nums[fast] 不会产生任何影响，因为slow 和 fast相等。
但是遇到 nums[fast] == val 的时候，我们就让 fast++
这样他们之间就有距离了，然后同样执行 nums[slow] = nums[fast] 实现覆盖之前的val */
var removeElement = function(nums, val) {
    let slow = 0, fast = 0
    while (fast < nums.length) {
        if (nums[fast] == val) {
            fast++
            continue
        }
        nums[slow++] = nums[fast++]
    }
    console.log(nums)
    return slow
};
let nums = [3,2,2,3], val = 3
console.log(removeElement(nums, val))