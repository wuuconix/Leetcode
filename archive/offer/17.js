/**
 * 剑指 Offer 17. 打印从1到最大的n位数
 * 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
    示例 1:

    输入: n = 1
    输出: [1,2,3,4,5,6,7,8,9]
 * @param {number} n
 * @return {number[]}
 * 没啥技术含量
 * 76 ms 98.79%
 * 51.4 MB 39.32%
 * 看了一下讨论区，这题在剑指offer上的原意让我们考虑大数问题，用字符串模拟数字。
 * leetcode里没有描述清楚要求。我不管了。
 */
var printNumbers = function(n) {
    let ans = []
    for (let i = 1; i < 10 ** n; i++) {
        ans.push(i)
    }
    return ans
};