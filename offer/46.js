/**
 * 剑指 Offer 46. 把数字翻译成字符串
 * 中等
 * 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

示例 1:

输入: 12258
输出: 5
解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
 
提示：
0 <= num < 2^31

 * @param {number} num
 * @return {number}
 * 普普通通dfs。
 * 每次可能取一个数字来翻译，也可能取两个数字来翻译。
 * 注意两个数字的时候 必须在 10~25 之间，00~09这种只能翻译为两个数字。
 * 最后不断递归，超出num的长度就直接return。
 * 正好是num长度时就判断，如果符合条件就res ++
 * 64 ms 57.28%
 * 40.9 MB 53.59%
 */
var translateNum = function(num) {
    let res = 0
    num = num.toString()
    let dfs = (i, l) => {
        if (i + l > num.length)
            return
        if (i + l == num.length) { //刚好到达长度
            if (l == 1)
                res++
            else { //长度为二
                if (num.slice(i, i + 2) <= "25" && num.slice(i, i + 2) >= "10")  //09这种不能翻译为 9
                    res++
            }
            return
        }
        if (l == 1 || (l == 2 && num.slice(i, i + 2) <= "25" && num.slice(i, i + 2) >= "10")) {
            dfs(i + l, 1)
            dfs(i + l, 2)
        }
    }
    dfs(0, 1)
    dfs(0, 2)
    return res
};

/* 看了题解大佬，发现这道题可以用动态规划，和跳楼梯类似。
貌似这样时间复杂度比递归低一些？不太懂。
这里用了dp数组，时间复杂度O(n)
56 ms 89.08%
41 MB 48.76% */
var translateNum = function(num) {
    let dp = [1, 1] //动态规划数组
    num = num.toString()
    for (let i = 2; i <= num.length; i++) {
        let s = num.slice(i - 2, i)
        if (s >= "10" && s <= "25")
            dp.push(dp[i - 1] + dp[i - 2])  //代表可以i-2后面翻译两个字符 和 i - 1后面翻译一个字符。即这个位置的可能性就是两者之和
        else
            dp.push(dp[i - 1]) //不能翻译两个字符，只能翻译一个字符，所以当前的可能性就是dp[i - 1]的可能性
    }
    return dp[num.length]
};

console.log(translateNum(25));