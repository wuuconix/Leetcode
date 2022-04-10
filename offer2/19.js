/**
 * 剑指 Offer II 019. 最多删除一个字符得到回文
 * 简单
 * 给定一个非空字符串 s，请判断如果 最多 从字符串中删除一个字符能否得到一个回文字符串。
 
给定一个非空字符串 s，请判断如果 最多 从字符串中删除一个字符能否得到一个回文字符串。

示例 1:

输入: s = "aba"
输出: true
示例 2:

输入: s = "abca"
输出: true
解释: 可以删除 "c" 字符 或者 "b" 字符
示例 3:

输入: s = "abc"
输出: false
 
提示:

1 <= s.length <= 105
s 由小写英文字母组成
* @param {string} s
* @return {boolean}
这道简单的双指针干了许久。。
原因是我一开始我的思路变成了判断字符们是否都是偶数个。如果有两个以上奇数字符的话，它肯定不是回文了。
但是问题在于0个奇数、1个奇数、2个奇数的情况都很复杂，导致代码没法考虑到全部的情况，一直错误。
实际上直接用双指针然后从两边开始看就行，如果相同则一起往里。如果不一样了，则试图删掉一个后查看剩下的是否为回文数。
不需要考虑字符们的奇偶。
340 ms 5%
70.2 MB 5%
 */
var validPalindrome = function(s) {
    s = s.split("") //开局变成数组 方便计算
    let letterCount = new Map()
    for (let letter of s) {
        letterCount.set(letter, (letterCount.get(letter) ?? 0) + 1)
    }
    let oddNum = 0 //记录s字符中数量为奇数的字符的个数
    for (let [k, v] of letterCount) {
        if (v % 2 == 1)
            oddNum++
    }
    if (oddNum > 2) { //两个以上奇数，不可能时回文数
        return false
    } else { //头指针尾指针一次检查，发现不匹配的，试图删掉左边一个或者右边一个
        for (let i = 0; i < Math.floor(s.length / 2); i++) {
            if (s[i] == s[s.length - 1 - i])
                continue
            else {
                let try1 = [...s], try2 = [...s]
                try1.splice(i, 1)
                try2.splice(s.length - 1 - i, 1)
                return judge(try1) || judge(try2)
            }
        }
        return judge(s)
    }
};

const judge = (s) => { //传入的是字符数组
    let temp = [...s].reverse()
    return s.join("") == temp.join("")
}

/* 276 ms 5.13%
   68.6MB 5.12% 
   要注意数组最强方法splice是直接修改原数组的，它的返回值是删除的那些元素的值，而不是删除后的数组。*/
var validPalindrome = function(s) {
    s = s.split("")
    for (let i = 0; i <= Math.floor(s.length / 2); i++) {
        if (s[i] == s[s.length - 1 - i])
            continue
        else {
            let try1 = [...s]
            try1.splice(i, 1)
            let try2 = [...s]
            try2.splice(s.length - 1 - i, 1)
            if (try1.join("") == try1.reverse().join("") || try2.join("") == try2.reverse().join(""))
                return true
            else
                return false
        }
    }
    return true
};

let s = "abc"
console.log(validPalindrome(s));