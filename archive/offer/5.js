/**
 * 剑指 Offer 05. 替换空格
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * 示例 1：

    输入：s = "We are happy."
    输出："We%20are%20happy."
 * @param {string} s
 * @return {string}
 * 本来想用escape/ encdoeURI的，结果它有一个输入有引号，encode后把引号也转意了。
 * replace(" ", "%20")的话只会替代第一个空格，需要用正则表达式/g修饰符来全局替换。
 * 56 ms 90.57%
 * 40.7 MB 46.88%
 */
 var replaceSpace = function(s) {
    return s.replace(/ /g, "%20")
};