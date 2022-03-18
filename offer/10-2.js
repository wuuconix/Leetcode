/**
 * 剑指 Offer 10- II. 青蛙跳台阶问题
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
    答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
    示例 1：
    输入：n = 2
    输出：2
    示例 2：

    输入：n = 7
    输出：21
    示例 3：

    输入：n = 0
    输出：1
 * @param {number} n
 * @return {number}
 * 48 ms 99.28%
 * 41 MB 19.90%
 * 跳台阶就是菲布那旗数列
 */
var numWays = function(n) {
    let ans = [1, 1, 2]
    for (let i = 3; i <= 100; i++) {
        let next = (ans[i - 1] + ans[i - 2]) % 1000000007
        ans.push(next)
    }
    return ans[n]
};

console.log(numWays(3));