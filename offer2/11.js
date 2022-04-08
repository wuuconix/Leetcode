/**
 * 剑指 Offer II 011. 0 和 1 个数相同的子数组
 * 中等
 * 给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。

示例 1:

输入: nums = [0,1]
输出: 2
说明: [0, 1] 是具有相同数量 0 和 1 的最长连续子数组。
示例 2:

输入: nums = [0,1,0]
输出: 2
说明: [0, 1] (或 [1, 0]) 是具有相同数量 0 和 1 的最长连续子数组。
 
提示：

1 <= nums.length <= 105
nums[i] 不是 0 就是 1
 * @param {number[]} nums
 * @return {number}
 * 这种题比较考验思路。大体有两大武器，前缀和 + 哈希表。
 * 我们看看怎么求哪些 0 和 1 相同的子数组。
 * 我们遍历nums的过程中记录下0和1的个数，这属于前缀和的思想。
 * 如果我们遍历到某个过程中发现 0  和 1相同了，这时候它肯定是最长的，因为它是从头开始的。
 * 然后如果我们到最后都没有遇到0和1的个数相同的情况怎么办呢？
 * 假设我们知道每个位置处"前缀和"，即0和1的个数
 * 如果此刻 的 0和1的个数分别是 x 和 x + 10。
 * 即1的个数比0多了10个，我们该如果根据之前下标的"前缀和" 来得到一个最长的 相同01个数的数组呢？
 * 实际是这样的，即然差了10，我们就去前面的下标里找到第一个 1和0也差10的，我们把它之前的 不取，这样剩下的就是0和1个数相同的。
 * 所以这里的关键是 1 和 0 的个数的差值diff。
 * 我们需要用哈希表记录下来，它的键就是 diff，它的下标就是第一个 取到diff的下标。
 * 92 ms 75.00%
 * 48 MB 75.83%
 * 看了一下官方题解，没有必要非要把0换成-1，关键的思想在于哈希表的键为1和0的差值，两个相同差值的下标之间的0和1数值必然是相等的。
 */
var findMaxLength = function(nums) {
    let hashTable = new Map() //键 num1 - num0 值： 下标
    let num0 = 0, num1 = 0
    let res = 0 //实时更新最长
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0)
            num0++
        else
            num1++
        if (num0 == num1) //直接开局到现在0和1相同 ，一定是最长的
            res = i + 1 //长度是下标加1
        else {
            let diff = num1 - num0
            res = Math.max(res, i - (hashTable.get(diff) ?? i))
            let key = num1 - num0
            if (!hashTable.has(key)) //只记录第一次，为之后获得最长的做准备
               hashTable.set(key, i)
        }
    }
    return res
};

let nums = [0,1,0]
console.log(findMaxLength(nums));