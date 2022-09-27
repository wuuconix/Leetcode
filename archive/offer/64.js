/**
 * 剑指 Offer 64. 求1+2+…+n
 * 中等
 * 求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

    示例 1：
    输入: n = 3
    输出: 6

    示例 2：
    输入: n = 9
    输出: 45
     
    限制：
    1 <= n <= 10000
 * @param {number} n
 * @return {number}
 * js reduce 一把梭
 * 64 ms 53.95%
 * 41.4 MB 54.63%
 */
var sumNums = function(n) {
    return new Array(n).fill(1).reduce((prev, cur, index) => prev + index + 1)
};

/* 利用 或运算符实现短路，当 n == 1的时候，结果就是1了，所以不会执行后面的语句。
实现递归的终止。
60 ms 74.59%
41.7 MB 22.88% */
var sumNums = function(n) {
    return Number(n == 1) || n + sumNums(n - 1)
};

console.log(sumNums(5));