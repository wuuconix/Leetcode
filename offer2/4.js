/**
 * 剑指 Offer II 004. 只出现一次的数字 
 * 中等
 * 给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。

示例 1：

输入：nums = [2,2,3,2]
输出：3
示例 2：

输入：nums = [0,1,0,1,0,1,100]
输出：100
 
提示：

1 <= nums.length <= 3 * 104
-231 <= nums[i] <= 231 - 1
nums 中，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次
 
进阶：你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * @param {number[]} nums
 * @return {number}
 * 这道题和之前offer1的有道题目一样，那些出现3次的元素因为出现了3次，把他们看成二进制的话，每一位都会加上3次，
 * 如果我们统计这些所有数字的各个二进制位的和，得到一个bitCount，比如bitCount[0]就记录了所有数字的第0位二进制位的个数之和。
 * 之后我们把这些和进行 %3， 这样那么出现过3次的数的二进制位就会消失，剩下的二进制就代表着只出现过一次的数字的二进制们。
 * 但是之前那道题貌似不需要考虑负数，这里需要考虑负数，我们统计各位二进制是0还是1的时候用到了移位运算 ，目前负数的移位令人难以理解
 * 所以我把负数全部转化为正数，然后再加了一个sign来统计负数的个数。最后也 %3， 如果最后是1，说明出现过一次的是负数，
 * 然后再通过bitCount求出值就行了。
 * 这道题还 需要注意负数情况下 会出现 -2147483648 它超过了我们能够模拟的32位二进制，需要单独考虑。
 * 时间复杂度O(n)
 * 72 m 50.69%
 * 41.7 MB 50.93%
 */
var singleNumber = function(nums) {
    let bitCount = new Array(32).fill(0)
    let sign = 0 //模拟正负符号位
    let overflow = 0 //记录-2147483648的个数
    for (let num of nums) {
        if (num == -2147483648) {
            overflow = (overflow + 1) % 3
            continue
        }
        let i = 0
        if (num < 0) {
            sign = (sign + 1) % 3
            num = -num //由于js里负数右移失效，转化为正数
        }
        while (num) {
            bitCount[i] = (bitCount[i] + (num & 1)) % 3
            num >>= 1
            i++
        }
    }
    if (overflow) {
        return -2147483648
    } else {
        return parseInt(bitCount.reverse().join(""), 2) * (sign == 1 ? -1 : 1)
    }
};

let nums = [43,16,45,89,45,-2147483648,45,2147483646,-2147483647,-2147483648,43,2147483647,-2147483646,-2147483648,89,-2147483646,89,-2147483646,-2147483647,2147483646,-2147483647,16,16,2147483646,43]
console.log(singleNumber(nums));