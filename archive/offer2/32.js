/**
 * 剑指 Offer II 032. 有效的变位词
 * 简单
 * 给定两个字符串 s 和 t ，编写一个函数来判断它们是不是一组变位词（字母异位词）。

注意：若 s 和 t 中每个字符出现的次数都相同且字符顺序不完全相同，则称 s 和 t 互为变位词（字母异位词）。

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
示例 3:

输入: s = "a", t = "a"
输出: false

提示:

1 <= s.length, t.length <= 5 * 104
s and t 仅包含小写字母

进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 哈希表一把梭
 * 68 ms 89.43%
 * 42 MB 72.51%
 */
var isAnagram = function(s, t) {
    if ((s.length != t.length) || (s == t)) {
        return false
    }
    let hashTableS = new Map()
    let hashTableT = new Map()
    for (let i = 0; i < s.length; i++) {
        hashTableS.set(s[i], (hashTableS.get(s[i]) ?? 0) + 1)
        hashTableT.set(t[i], (hashTableT.get(t[i]) ?? 0) + 1)
    }
    for (let i = 0; i < 26; i++) {
        let chr = String.fromCharCode(i + 97)
        if ((hashTableS.get(chr) ?? 0) != (hashTableT.get(chr) ?? 0))
            return false
    }
    return true
};

let s = "anagram", t = "nagaram1"
console.log(isAnagram(s, t));