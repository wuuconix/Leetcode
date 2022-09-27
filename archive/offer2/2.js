/**
 * 剑指 Offer II 002. 二进制加法
 * 简单
 * 给定两个 01 字符串 a 和 b ，请计算它们的和，并以二进制字符串的形式输出。

    输入为 非空 字符串且只包含数字 1 和 0。

    示例 1:

    输入: a = "11", b = "10"
    输出: "101"
    示例 2:

    输入: a = "1010", b = "1011"
    输出: "10101"
     
    提示：

    每个字符串仅由字符 '0' 或 '1' 组成。
    1 <= a.length, b.length <= 10^4
    字符串如果不是 "0" ，就都不含前导零。
 * @param {string} a
 * @param {string} b
 * @return {string}
 * 这道和之前做过的用位运算模拟加法不同。
 * 这里给的是字符串，
 * 我们需要进行手动模拟进位，一位一位算。
 * 因为二进制长度会非常长，如果直接转化为十进制会损失精度，所以只能这么做。
 * 68 ms 65.73%
 * 42.2 MB 51.95%
 */

/* 这样做不太行，因为它给的二进制字符非常长，可能会超时safe interget的范围，最后的结果就会不准确。 */
var addBinary = function(a, b) {
    a = parseInt(a, 2)
    b = parseInt(b, 2)
    let res = a + b
    return res.toString(2)
};

/*  */
var addBinary = function(a, b) {
    let res = []
    let c = 0 //记录进位
    let len = Math.min(a.length, b.length)
    let biggerOne = a.length > b.length ? a : b //记录更长的那个字符串
    let i = 0
    while (i < len) {
        let bitSum = Number(a[a.length - 1 - i] == "1") + Number(b[b.length - 1 - i] == "1") + c
        if (bitSum >= 2)
            c = 1
        else
            c = 0
        res.unshift(bitSum % 2)
        i++
    }
    while (i < biggerOne.length) { //剩下的
        let bitSum = Number(biggerOne[biggerOne.length - 1 - i] == "1") + c
        if (bitSum >= 2)
            c = 1
        else 
            c = 0
        res.unshift(bitSum % 2)
        i++
    }
    if (c)
        res.unshift(1)
    return res.join("")
};

let a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
// let a = "1010", b = "1011"
console.log(addBinary(a, b));