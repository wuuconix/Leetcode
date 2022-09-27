/**
 * 剑指 Offer II 016. 不含重复字符的最长子字符串
 * 中等
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长连续子字符串 的长度。

示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子字符串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子字符串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
示例 4:

输入: s = ""
输出: 0
 
提示：
0 <= s.length <= 5 * 10^4
 * @param {string} s
 * @return {number}
 * 同样是滑动窗口的思想。
 * 滑动窗口我们需要思考两个边界如何移动的问题。
 * 因为要找到不重复的连续字符串，我们右边界就一直移动，看下一个字符是否和之前的某个字符重复了。
 * 如果没有重复，那很好，我们继续移动右边界。如果重复了呢？
 * 这个时候我们简单朴素的思路就是直接把左边界放到现在的右边界，这样就能去掉重复，但是这样可能会损失一些可能性。
 * 经过思考，我觉得应该把左边界放到和下一个字符重复的那个字符的+1位置。
 * 比如 abcdbefg
 * 如何 abcd 后面的 b和 b重复了。
 * 这个时候我们把左边界放到 c的位置，
 * 这样 cdbefg 就成为了最后的答案，不会损失可能性。
 * 如果我们直接把左边界放到b后面，得到 efg ，比之前的abcd小，我们会返回 abcd，这显然是不对的。
 * 因为下标的位置十分重要，我们可以直接把哈希表设计为，键是字符，值是下标。
 * 这样我们也可以利用哈希表来判断是否重复。
 * 172 ms 12.66%
 * 47.7 MB 12.65% 
 */
var lengthOfLongestSubstring = function(s) {
    let hashTable = new Map() //直接字符做键，值为下标。
    let start = 0 //记录窗口的左边界
    let res = 0
    for (let i = 0; i < s.length; i++) {
        if (!hashTable.has(s[i])) {
            hashTable.set(s[i], i)
        } else {
            res = Math.max(res, [...hashTable].length) //遇到重复的就说明它之前的是无重复的，查看长度
            let index = s.slice(start, i).indexOf(s[i]) + start
            for (let j = start; j <= index; j++) { //删除index,即重复的那个字符及其前面的的字符在哈希表中记录
                hashTable.delete(s[j])
            }
            start = index + 1 //新的起点
            hashTable.set(s[i], i) //新的坐标
        }
    }
    res = Math.max(res, [...hashTable].length) //防止字符没有遇到过重复就结束了
    return res
};

let s = "au"
console.log(lengthOfLongestSubstring(s));