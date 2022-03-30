/**
 * 剑指 Offer 60. n个骰子的点数
 * 中等
 * 把n个骰子扔在地上，所有骰子朝上一面的点数之和为s。输入n，打印出s的所有可能的值出现的概率。

你需要用一个浮点数数组返回答案，其中第 i 个元素代表这 n 个骰子所能掷出的点数集合中第 i 小的那个的概率。

示例 1:

输入: 1
输出: [0.16667,0.16667,0.16667,0.16667,0.16667,0.16667]
示例 2:

输入: 2
输出: [0.02778,0.05556,0.08333,0.11111,0.13889,0.16667,0.13889,0.11111,0.08333,0.05556,0.02778]
 
限制：

1 <= n <= 11
 * @param {number} n
 * @return {number[]}
 * 动态规划。
 * 要求概率，我们可以先求个数，最后除以 6 ** n即可。
 * 个数怎么求呢？
 * 当骰子个数为1时， 1 ~ 6 的次数都是 1.
 * 现在我们看两个骰子，情况就比较复杂了。
 * 我们实际上可以利用骰子为1的情况下的数值。
 * 比如两个骰子投出来的总数为2的情况，即 两个骰子都投了1，这种情况实际上时 第一轮情况下 1 的情况下 又投了 1导致的。
 * 我们看第一轮投出1后可能对第二轮的哪些总数可能有影响，很显然，2 ~ 7 都有可能从 1 通过再透出 1 ~ 6 产生。
 * 然后第一轮的 2 会 贡献 第二轮的 3 ~ 8总数。
 * 所以我们实际上可以通过遍历这一轮的数值从而产生第二轮所有 数字 可能的个数。
 * 最后得到概率即可。
 * 72 ms 29.13%
 * 41.2 MB 58.82%
 */
var dicesProbability = function(n) {
    let dp = new Array(n)
    dp[0] = new Array(6).fill(1)
    for (let i = 0; i < n - 1; i++) {
        if (dp[i + 1] == undefined) {
            dp[i + 1] = new Array(5 * (i + 1) + 6).fill(0)
        }
        for (let j = 0; j < dp[i].length; j++) { //遍历每一个筛子，让它对下一轮的筛子数量产生影响
            for (let k = 0; k < 6; k++) { //最多可以影响到下一轮的6个筛子，k = 0表示 此个骰子 加上 1 对下一轮骰子产生的影响
                dp[i + 1][j + k] += dp[i][j] //为下一轮贡献自己的可能性
            }
        }
    }
    let res = dp[n - 1]
    for (let i = 0; i < res.length; i++) {
        res[i] = res[i] / (6 ** n)
    }
    return res
};

console.log(dicesProbability(11));