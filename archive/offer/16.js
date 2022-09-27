/**
 * 剑指 Offer 16. 数值的整数次方
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。
    示例 1：

    输入：x = 2.00000, n = 10
    输出：1024.00000

    示例 3：

    输入：x = 2.00000, n = -2
    输出：0.25000
    解释：2-2 = 1/22 = 1/4 = 0.25

    提示：

    -100.0 < x < 100.0
    -231 <= n <= 231-1
    -104 <= xn <= 104
 * @param {number} x
 * @param {number} n
 * @return {number}
 * 用递归的思想，然后每次n可以减半，但是超出了时间限制。
 */
var myPow = function(x, n) {
    if (n < 0)
        return 1 / myPow(x, -n)
    if (n == 0)
        return 1
    if (n == 1)
        return x
    if (n % 2 == 0)
        return myPow(x, n / 2) * myPow(x, n / 2)
    else
        return myPow(x, Math.floor(n / 2)) * myPow(x, Math.floor(n / 2)) * x
};

/* 快速幂
把n即幂不断右移，即不断除2，从而快速缩小。
而底数则需要不断平方。
当n在不断右移的过程中最低位为1时，说明我们最后的答案需要乘上底数 
我个人感觉我上面用递归的方式思想类似，但是由于递归的时间复杂度较高而超时了。
而位运算很快。
这一由于实例中 n 可能会取到 -2147483648。这是js的合法范围里，但是相反数就不是了。
而普通的 >> 是逻辑移位，这里就会遇到问题。我们需要用 >>> 来解决这个问题 */
var myPow = function(x, n) {
    if (n < 0)
        return 1 / myPow(x, -n)
    let ans = 1
    while (n) {
        if (n & 1)
            ans *= x
        x *= x
        n >>>= 1 //算数移位。普通的逻辑移位在2147483648这里会遇到问题
    }
    return ans
};
console.log(myPow(1, -2147483648));