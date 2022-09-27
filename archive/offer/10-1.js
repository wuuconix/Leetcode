/**
 * 剑指 Offer 10- I. 斐波那契数列
 * 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：
    F(0) = 0,   F(1) = 1
    F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
    斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。
    答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

    示例 1：
    输入：n = 2
    输出：1
 * @param {number} n
 * @return {number}
 * 直接干，没啥技术含量
 * 60 ms 80.52%
 * 41.1 MB 14.52%
 */
var fib = function(n) {
    let ans = [0, 1]
    for (let i = 2; i < 101; i++) {
        let next = (ans[i - 1] + ans[i - 2]) % 1000000007
        ans.push(next)
    }
    return ans[n]
};

console.log(fib(5))