/**
 * 剑指 Offer II 018. 有效的回文
 * 简单
 * 给定一个字符串 s ，验证 s 是否是 回文串 ，只考虑字母和数字字符，可以忽略字母的大小写。

本题中，将空字符串定义为有效的 回文串 。
 
示例 1:

输入: s = "A man, a plan, a canal: Panama"
输出: true
解释："amanaplanacanalpanama" 是回文串
示例 2:

输入: s = "race a car"
输出: false
解释："raceacar" 不是回文串

提示：

1 <= s.length <= 2 * 105
字符串 s 由 ASCII 字符组成

 * @param {string} s
 * @return {boolean}
 * 我直接API库函数一把梭
 * 反正怎么做事件复杂度都是O(n)
 * 不如简单来
 * 72 ms 46.8 MB
 */
var isPalindrome = function(s) {
    s = s.split("").map((x) => {
        let code = x.charCodeAt()
        if (code >= 97 && code <= 122 || (code >= 48 && code <= 57))
            return x
        else if (code >= 65 && code <= 90)
            return x.toLowerCase()
        else
            return ""
    })
    if (s.join("") == s.reverse().join(""))
        return true
    else
        return false
};

let s =  ""
console.log(isPalindrome(s));