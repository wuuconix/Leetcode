/* 剑指 Offer 20. 表示数值的字符串

请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。

数值（按顺序）可以分成以下几个部分：

若干空格
一个 小数 或者 整数
（可选）一个 'e' 或 'E' ，后面跟着一个 整数
若干空格
小数（按顺序）可以分成以下几个部分：

（可选）一个符号字符（'+' 或 '-'）
下述格式之一：
至少一位数字，后面跟着一个点 '.'
至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
一个点 '.' ，后面跟着至少一位数字
整数（按顺序）可以分成以下几个部分：

（可选）一个符号字符（'+' 或 '-'）
至少一位数字
部分数值列举如下：

["+100", "5e2", "-123", "3.1416", "-1E-16", "0123"]
部分非数值列举如下：

["12e", "1a3.14", "1.2.3", "+-5", "12e+5.4"]

----

题目不难，就是比较复杂。
88 ms 43.40%
43.3 MB 22.98%
看题解说应该用自动机的思路，逐位判断，我还是喜欢究极预处理+手动判断的方式。编译原理和形式语言白学家（
谈了评论区，感觉写出正则表达式来也是一个不错的方案？毕竟正则的本质就是自动机。
手写转移，狗都不屑
*/

const isArabic = (s) => { //判断字符串中是否全部为阿拉伯数字
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= "0" && s[i] <= "9") {
            if (i == s.length - 1)
                return true
        } else
            return false
    }
    return false //对应字符串为空的情况
}

var isInt = function(s) {
    if (s[0] == "+" || s[0] == "-")
        return isArabic(s.slice(1))
    else
        return isArabic(s)
}

var isDecimal_ = function(s) { //不考虑正负号，看是否时小数
    let pointCount = s.length - s.replace(/\./g, "").length //小数点的个数
    if (pointCount != 1)
        return false
    else {
        let pointIndex = s.indexOf(".")
        if (pointIndex == 0) //小数点在最开始
            return isArabic(s.slice(1))
        else if (pointIndex == s.length - 1) //小数点在最后
            return isArabic(s.slice(0, pointIndex))
        else //小数点在中间
            return isArabic(s.slice(0, pointIndex)) && isArabic(s.slice(pointIndex + 1)) //小数点两端都是阿拉伯数字
    }
}
var isDecimal = function(s) {
    if(s[0] == "+" || s[0] == "-")
        return isDecimal_(s.slice(1))
    else
        return isDecimal_(s)
}

/**
 * @param {string} s
 * @return {boolean}
*/
var isNumber = function(s) {
    s = s.trim() //去除头尾的空格
    let eCount = s.length - s.replace(/e/g, "").replace(/E/g, "").length //e和E的个数
    if (eCount == 0)
        return isInt(s) || isDecimal(s)
    else if (eCount == 1) {
        let eIndex = s.indexOf("e") == -1 ? s.indexOf("E") : s.indexOf("e") //得到e或者E的下标
        return (isInt(s.slice(0, eIndex)) || isDecimal(s.slice(0, eIndex))) && isInt(s.slice(eIndex + 1))
    } else
        return false
};

console.log(isNumber("2e0"));