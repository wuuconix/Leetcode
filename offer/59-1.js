/**
 * 剑指 Offer 59 - I. 滑动窗口的最大值
 * 困难
 * 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

    示例:

    输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
    输出: [3,3,5,5,6,7] 
    解释: 

    滑动窗口的位置                最大值
    ---------------               -----
    [1  3  -1] -3  5  3  6  7       3
    1 [3  -1  -3] 5  3  6  7       3
    1  3 [-1  -3  5] 3  6  7       5
    1  3  -1 [-3  5  3] 6  7       5
    1  3  -1  -3 [5  3  6] 7       6
    1  3  -1  -3  5 [3  6  7]      7

    提示：

    你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 这道题没有给数据范围。
 * 我直接api暴力解。结果过了。。。。
 * 148 ms 29.87%
 * 51.4 MB 8.51%
 */
var maxSlidingWindow = function(nums, k) {
    if (nums.length == 0)
        return []
    let res = []
    let j = k
    while (j <= nums.length) {
        let max = Math.max(...nums.slice(j - k, j))
        res.push(max)
        j++
    }
    return res
};

/* 这道题K神的题解不是很清楚，建议看这个动画演示
https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/solution/dong-hua-yan-shi-dan-diao-dui-lie-jian-z-unpy/
实际上我们每次滑动窗口往后移动一个的时候，我们就跟新一个问题，之前的最大值是不是已经滑到外面了。
然后接下来的最大值应该是谁。
我们可以利用单调队列来达成这个目的。
首先，单调队列保持非递增。即类似于这种 5 5 4 3 3 0 这个队列。
然后这个单调队列里面应该存 nums里的下标，这样方便我们判断最大值是否已经在滑动窗口外面了。
除了去处理最大值，我们还要考虑新的值得下标放哪里，我们可以直接把队尾小于这个值得元素全部删除，因为它们比这个元素都小，接下去得情况已经没有用了。
可以这样想，我们把新加入的值 叫做 x。它现在被放在某个位置，之前队列中比它小的已经被删除了，而不是像排序一样排在它后面。
我们考虑极限情况，之前的元素是否会发生作用。我们直到，这个队列的存在意义在于获取当前滑动窗口的最大值。既然 x 比那些比他小的前辈都大，
那么在 它 仍然处理 滑动窗口中的时期内，它可能会称为最大值，但是那些前辈不会。
那你会像，万一在某个时刻 x 已经在滑动窗口外面，它不再是最大值了，现在可能会让它的前辈充当下一个最大值了，但是前辈已经很久之前被删除了怎么办呢？
我们要注意，x 的前辈肯定是在 x 的前面，现在 x 都已经出队列，已经在滑动窗口外面了，前辈们也早就 溜溜球了，不用他们来承担滑动窗口最大值的重任了。
综上所述，我们可以把 x 小的元素都删除掉。
80 ms 88.84%
46.3 MB 54.43% */
var maxSlidingWindow = function(nums, k) {
    if (nums.length == 0)
        return []
    let res = []
    let queue = [] //单调队列（单调递减），用来获取最大值，对头就是最大值 记录下标
    for (let i = 0; i < k; i++) { //滑动窗口未形成时不用考虑对头元素是否需要移除
        while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[i]) { //队列中有值并且最后一个比nums[i]小
            queue.pop()
        }
        queue.push(i)
    }
    res.push(nums[queue[0]]) //第一个滑动窗口的最大值
    for (let i = k; i < nums.length; i++) { //滑动窗口形成后，需要判断两个条件
        if (queue[0] <= i - k) { //最大值已经在滑动窗口的外面
            queue.shift()
        }
        while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[i]) { //队列中有值并且最后一个比nums[i]小
            queue.pop()
        }
        queue.push(i)
        res.push(nums[queue[0]])
    }
    return res
};
let nums = [1,3,-1,-3,5,3,6,7],  k = 3

console.log(maxSlidingWindow(nums, k));