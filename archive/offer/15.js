/**
 * 剑指 Offer 15. 二进制中1的个数
 * 编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为 汉明重量).）。
    提示：
    请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
    在 Java 中，编译器使用 二进制补码 记法来表示有符号整数。因此，在上面的 示例 3 中，输入表示有符号整数 -3。
    示例 1：
    输入：n = 11 (控制台输入 00000000000000000000000000001011)
    输出：3
    解释：输入的二进制串 00000000000000000000000000001011 中，共有三位为 '1'。

    提示：
    输入是长度为 32 的 二进制串 。
 * @param {number} n - a positive integer
 * @return {number}
 * 用toString(2)将数字转化为二进制字符。
 * 由于js中没有直接在字符串中统计相关字符的数量的方法。
 * 我便想到了一个骚操作。
 * 68 ms 67.71%
 * 41.4 MB 29.50%
 */
var hammingWeight = function(n) {
    let bin = n.toString(2) //转化为二进制字符
    return bin.length - bin.replace(/1/g, '').length //把1全部换成空，减少的个数就是1的个数
};

// 68 ms 67.71%
// 41.3 MB 41.17%
// 用与运算的方式计算出有多少个1。
// 比如你要看最低位是不是1，你就 n & 1
// 最低第二位是不是1，就是 n & 2
var hammingWeight = function(n) {
    let ans = 0
    for (let i = 0; i < 32; i++) {
        if (n & 1 << i)
            ans++
    }
    return ans
};

// n & (n - 1) 将使n最右边的1变为0。
// 比如 n = 10，即 1010
// 9 = 1001。
// 10 & 9 = 1010 & 1001 = 1000。
//即把1010的最后一个1变为了0。
//如此循环直至n为1，循环的个数就是n二进制中1的个数。
// 60 ms 91.81%
// 41.1 MB 51.22%
var hammingWeight = function(n) {
    let ans = 0
    while(n) {
        n &= (n - 1)
        ans += 1
    }
    return ans
};

console.log(hammingWeight(10));