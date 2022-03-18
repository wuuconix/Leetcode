/**
    26. 删除有序数组中的重复项
    给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。
    由于在某些语言中不能改变数组的长度，所以必须将结果放在数组nums的第一部分。更规范地说，如果在删除重复项之后有 k 个元素，那么 nums 的前 k 个元素应该保存最终结果。
    将最终结果插入 nums 的前 k 个位置后返回 k 。
    不要使用额外的空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
    输入：nums = [0,0,1,1,1,2,2,3,3,4]
    输出：5, nums = [0,1,2,3,4]
    解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 直接用js中数据最强删除函数splice了
 * 84 ms 58.71%
 * 43.6 MB 28.71%
 */
var removeDuplicates = function(nums) {
    const lookAhead = (i, nums) => {
        while (nums[i + 1] == nums[i])
            i += 1
        return i
    }
    let i = 0
    while (i < nums.length) {
        nums.splice(i, lookAhead(i, nums) - i)
        i += 1
    }
    return nums
};

nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))