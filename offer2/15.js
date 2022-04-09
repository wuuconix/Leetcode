/**
 * 剑指 Offer II 015. 字符串中的所有变位词
 * 中等
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 变位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

变位词 指字母相同，但排列不同的字符串。

示例 1:

输入: s = "cbaebabacd", p = "abc"
输出: [0,6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的变位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的变位词。
 示例 2:

输入: s = "abab", p = "ab"
输出: [0,1,2]
解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的变位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的变位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的变位词。
 
提示:

1 <= s.length, p.length <= 3 * 104
s 和 p 仅包含小写字母
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * 这道题和之前的14题一样，都是变位词。
 * 同样的，我们利用定长的滑动窗口，在遍历s的过程中统计和p的字符情况相同的坐标。
 * 248 ms 19.93%
 * 48.3 MB 34.71%
 */
var findAnagrams = function(s, p) {
    if (s.length < p.length)
        return []
    let pCount = new Array(26).fill(0)
    let winCount = new Array(26).fill(0)
    for (let i = 0; i < p.length; i++) { //计算pCount 和 初始化winCount
        pCount[p[i].charCodeAt() - 97]++
        winCount[s[i].charCodeAt() - 97]++
    }
    let res = []
    if (pCount.toString() == winCount.toString())
        res.push(0)
    for (let i = p.length; i < s.length; i++) {
        winCount[s[i - p.length].charCodeAt() - 97]--
        winCount[s[i].charCodeAt() - 97]++
        if (winCount.toString() == pCount.toString())
            res.push(i - p.length + 1)
    }
    return res
};

let s = "abab", p = "ab"
console.log(findAnagrams(s, p));