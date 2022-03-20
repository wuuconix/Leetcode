import { MaxPriorityQueue } from '/root/.nvm/versions/node/v16.13.2/lib/node_modules/@datastructures-js/priority-queue/index.js'

/**
 * 6022. 将数组和减半的最少操作次数
 * 给你一个正整数数组 nums 。每一次操作中，你可以从 nums 中选择 任意 一个数并将它减小到 恰好 一半。（注意，在后续操作中你可以对减半过的数继续执行操作）

    请你返回将 nums 数组和 至少 减少一半的 最少 操作数。

    示例 1：

    输入：nums = [5,19,8,1]
    输出：3
    解释：初始 nums 的和为 5 + 19 + 8 + 1 = 33 。
    以下是将数组和减少至少一半的一种方法：
    选择数字 19 并减小为 9.5 。
    选择数字 9.5 并减小为 4.75 。
    选择数字 8 并减小为 4 。
    最终数组为 [5, 4.75, 4, 1] ，和为 5 + 4.75 + 4 + 1 = 14.75 。
    nums 的和减小了 33 - 14.75 = 18.25 ，减小的部分超过了初始数组和的一半，18.25 >= 33/2 = 16.5 。
    我们需要 3 个操作实现题目要求，所以返回 3 。
    可以证明，无法通过少于 3 个操作使数组和减少至少一半。
    示例 2：

    输入：nums = [3,8,20]
    输出：3
    解释：初始 nums 的和为 3 + 8 + 20 = 31 。
    以下是将数组和减少至少一半的一种方法：
    选择数字 20 并减小为 10 。
    选择数字 10 并减小为 5 。
    选择数字 3 并减小为 1.5 。
    最终数组为 [1.5, 8, 5] ，和为 1.5 + 8 + 5 = 14.5 。
    nums 的和减小了 31 - 14.5 = 16.5 ，减小的部分超过了初始数组和的一半， 16.5 >= 31/2 = 16.5 。
    我们需要 3 个操作实现题目要求，所以返回 3 。
    可以证明，无法通过少于 3 个操作使数组和减少至少一半。
     

    提示：

    1 <= nums.length <= 105
    1 <= nums[i] <= 107

 * @param {number[]} nums
 * @return {number}
 * 题目的思想很简单，就是贪心。
 * 因为要获得最少的操作次数，我们每次都去把最大的节点砍一半，肯定会就能最快到达target，也就能得到最少的操作次数。
 * 而如果我们需要每次排序，然后砍一半，这个时间复杂度会很大，然后导致超时。
 * 这个时候我们可以利用MaxPriorityQueue这个 大数优先级队列（它是Leetcode 内置的）来以O(1)的时间复杂度取出最大值。
 * 在实际操作中，dequeue返回的貌似一个普通的数，而是一个对象？至少是在Leetcode那里是这样的，可能是Leetcode哪里的版本不是最新的。
 * 最新版 @datastructures-js 直接enqueue 一个数即可，然后dequeue也会出一个数。
 * 需要用 let { element } = queue.dequeue() 取出那个值
*/
var halveArray = function(nums) {
    let sum = nums.reduce((a, b) => a + b) //求和骚操作
    let target = sum / 2
    let queue = new MaxPriorityQueue() //利用 大优先级队列来实现低时间复杂度找到队列中
    for (let num of nums) {
        queue.enqueue(num)
    }
    let ans = 0, temp = 0;
    while (temp < target ) {
        let element = queue.dequeue() //新版直接等于即可
        element /= 2
        temp += element
        queue.enqueue(element)
        ans += 1
    }
    return ans
};

let nums = [3,8,20]
// halveArray(nums)
console.log(halveArray(nums));