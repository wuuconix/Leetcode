/**
 * 5236. 美化数组的最少删除数
 * 给你一个下标从 0 开始的整数数组 nums ，如果满足下述条件，则认为数组 nums 是一个 美丽数组 ：

nums.length 为偶数
对所有满足 i % 2 == 0 的下标 i ，nums[i] != nums[i + 1] 均成立
注意，空数组同样认为是美丽数组。

你可以从 nums 中删除任意数量的元素。当你删除一个元素时，被删除元素右侧的所有元素将会向左移动一个单位以填补空缺，而左侧的元素将会保持 不变 。

返回使 nums 变为美丽数组所需删除的 最少 元素数目。

示例 1：
输入：nums = [1,1,2,3,5]
输出：1
解释：可以删除 nums[0] 或 nums[1] ，这样得到的 nums = [1,2,3,5] 是一个美丽数组。可以证明，要想使 nums 变为美丽数组，至少需要删除 1 个元素。

示例 2：
输入：nums = [1,1,2,2,3,3]
输出：2
解释：可以删除 nums[0] 和 nums[5] ，这样得到的 nums = [1,2,2,3] 是一个美丽数组。可以证明，要想使 nums 变为美丽数组，至少需要删除 2 个元素。
 
提示：
1 <= nums.length <= 10^5
0 <= nums[i] <= 10^5
 * @param {number[]} nums
 * @return {number}
 * 数据量比较大，如果直接O(n^2)暴力肯定会超时，所以需要选择一个时间复杂度为O(n)的算法。
 * 这是我在比赛时想出来的，利用了双指针，个人感觉比较优美。
 * 满指针指向0，快指针指向1。如果 nums[fast] == nums[slow] 则我们把fast位置的值删掉，
 * 但是我们不用实际去删除，我们直接res += 1。表示删除的数量+1
 * 然后fast往后移，如果还是相同，则应该继续删，然后继续往后。直到遇到一个不一样的。
 * 这个时候我们 我们得到了美丽数组中的一对 slow  与 fast
 * 然后 slow = fast + 1。
 * 继续如上操作。
 * 88 ms 51.3 MB
 */
var minDeletion = function(nums) {
    if (nums.length == 1)
        return 1
    let res = 0, slow = 0, fast = 1
    while (slow <= nums.length && fast <= nums.length) {
        if (nums[slow] == nums[fast]) {
            res++
            fast++
        } else {
            slow = fast + 1
            fast += 2
        }
    }
    if ((nums.length - res) % 2 == 1)
    res++
    return res
};

let nums = [8]
console.log(minDeletion(nums));