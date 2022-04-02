/**
 * 剑指 Offer 67. 把字符串转换成整数
 * 中等
 * 写一个函数 StrToInt，实现把字符串转换成整数这个功能。不能使用 atoi 或者其他类似的库函数。

首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。

当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号；假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。

该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。

注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。

在任何情况下，若函数不能进行有效的转换时，请返回 0。

说明：

假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−231,  231 − 1]。如果数值超过这个范围，请返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。

示例 1:

输入: "42"
输出: 42
示例 2:

输入: "   -42"
输出: -42
解释: 第一个非空白字符为 '-', 它是一个负号。
     我们尽可能将负号与后面所有连续出现的数字组合起来，最后得到 -42 。
示例 3:

输入: "4193 with words"
输出: 4193
解释: 转换截止于数字 '3' ，因为它的下一个字符不为数字。
示例 4:

输入: "words and 987"
输出: 0
解释: 第一个非空字符是 'w', 但它不是数字或正、负号。
     因此无法执行有效的转换。
示例 5:

输入: "-91283472332"
输出: -2147483648
解释: 数字 "-91283472332" 超过 32 位有符号整数范围。 
     因此返回 INT_MIN (−231) 。
 * @param {string} str
 * @return {number}
 * 简单模拟。没啥难度。
 * 其他语言貌似会有类似越界的问题，由于js的数字范围比较大，没有这个问题。
 * 76 ms 65.30%
 * 44.4 MB 11.83%
 */
var strToInt = function(str) {
    str = str.trim() //删除前后空字符
    let neg = false
    if (str[0] != "+" && str[0] != "-" && (str[0] < "0" || str[0] > "9")) //第一个字符不对
        return 0
    else if (["-", "+"].includes(str[0]) && (str[1] < "0" || str[1] > "9")) //正负号后面就不是数值
        return 0
    else if (str[0] == "-")
        neg = true //是一个负数
    let start = ["-", "+"].includes(str[0]) ? 1 : 0
    let num = 0
    for (let i = start; i < str.length; i++) {
        if (str[i] >= "0" && str[i] <= "9")
            num = num * 10 + Number(str[i])
        else
            break
        if (num > 2 ** 31 - 1 && !neg)
            return 2 ** 31 - 1
        else if (num > 2 ** 31 && neg)
            return -1 * (2 ** 31)
    }
    return num * (neg ? -1 : 1)
};

console.log(strToInt("words and 987"))