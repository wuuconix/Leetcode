/**
 * 剑指 Offer 14- I. 剪绳子
 * 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
    示例 2:

    输入: 10
    输出: 36
    解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36
    2 <= n <= 58
 * @param {number} n
 * @return {number}
 * 找规律。
 * 之后的乘机和之前的乘机有联系。
 * 看了一下题解，这种思路应该属于动态规划。
 * dp[i] = max(dp[i], max(j, dp(j)) * max(i - j, dp(i - j)))
 * 64 ms 65.80%
 * 41.3 MB 8.68%
 */
var cuttingRope = function(n) {
    let record = {0: 0, 1: 1, 2: 1}
    for (let i = 3; i <= 58; i++) {
        let max = 0
        for (let j = 1; j < i; j++)
            max = Math.max(max, Math.max(j, record[j]) * Math.max(i - j, record[i - j]))
        record[i] = max
    }
    return record[n]
};

//贪心法。数学可以证明把绳子尽可能分成长度为3的小段，这时候乘机最大。因为3离e 2.718最近。
//但是n = 4的时候应该取 2 * 2或者直接取4。不能取为3 * 1。其他的情况都取出3就行了。
// 56 ms 92.92%
// 41.2 MB 10.79%
var cuttingRope = function(n) {
    if (n < 4)
        return n - 1
    let ans = 1
    while (n > 4) {
        n -= 3
        ans *= 3
    }
    return ans * n
};
console.log(cuttingRope(4)); 