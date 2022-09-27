/**
 * 剑指 Offer II 017. 含有所有字符的最短字符串
 * 困难
 * 给定两个字符串 s 和 t 。返回 s 中包含 t 的所有字符的最短子字符串。如果 s 中不存在符合条件的子字符串，则返回空字符串 "" 。

如果 s 中存在多个符合条件的子字符串，返回任意一个。

注意： 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。

示例 1：

输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC" 
解释：最短子字符串 "BANC" 包含了字符串 t 的所有字符 'A'、'B'、'C'
示例 2：

输入：s = "a", t = "a"
输出："a"
示例 3：

输入：s = "a", t = "aa"
输出：""
解释：t 中两个字符 'a' 均应包含在 s 的子串中，因此没有符合条件的子字符串，返回空字符串。
 
提示：

1 <= s.length, t.length <= 105
s 和 t 由英文字母组成
 
进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？
 * @param {string} s
 * @param {string} t
 * @return {string}
 * 这道题还是滑动数组的思想。
 * 考虑左边界和右边界的移动情况。
 * 右边界一直往右移动即可，如果 窗口里的字符 还不能包含t中的字符。
 * 如果发现窗口中的字符已经包含了t中的字符，则让左边界去试图移动，
 * 如果左边界遇到一些无关字符直接++，如果发现有关字符的数量大于t中字符的数量，也可以进行移动。
 * 如果发现不能再移动了。则让右边界继续移动。
 * 在这一过程中不断更新res，即最短的 包含t的字符串。
 * 208 ms 7.81%
 * 50.8 MB 5.37%
 * 这里的滑动窗口不是对冲的，时间 复杂度趋向于 O(n^2),所以耗时比较久。
 */
var minWindow = function(s, t) {
    if (s.length < t.length)
        return ""
    let tCount = new Map() //键为祖父，值为个数，记录 t中各个字符的个数
    for (let letter of t)
        tCount.set(letter, (tCount.get(letter) ?? 0) + 1)
    let hashTable = new Map() //键为字符，值为一个下标数组
    let left = 0 //窗口的左界
    let res = ""
    while (!tCount.has(s[left]) && left < t.length) //如果s一开始有一堆不属于t的字符，直接跳过。
        left++
    for (let i = left; i < s.length; i++) { //这个for循环模拟窗口右界，右界一往无前即可。
        if (tCount.has(s[i]) && !hashTable.has(s[i]))
            hashTable.set(s[i], [i])
        else if (tCount.has(s[i]) && hashTable.has(s[i]))
            hashTable.get(s[i]).push(i)
        if (isBigger(hashTable, tCount)) {
            while (left <= i) {
                if (res == "")
                    res = s.slice(left, i + 1)
                else
                    res = i - left + 1 < res.length ? s.slice(left, i + 1) : res
                if (!tCount.has(s[left]))
                    left++
                else if (hashTable.get(s[left]).length > tCount.get(s[left])) {
                    hashTable.get(s[left]).shift(0)
                    left++
                } else {
                    break
                }
            }
        }
    }
    return res
};

let isBigger = (hashTable, tCount) => { //返回hashTable是否已经包含了tCount里所有的字符
    for (let [k, v] of tCount) {
        if (!hashTable.has(k) || hashTable.get(k).length < v)
            return false
    }
    return true
}

// let s = "ADOBECODEBANC", t = "ABC"
let s = "aa", t = "aa"
console.log(minWindow(s, t));