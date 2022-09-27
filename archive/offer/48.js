/**
 * 剑指 Offer 48. 最长不含重复字符的子字符串
 * 中等
 * 请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

    示例 1:
    输入: "abcabcbb"
    输出: 3 
    解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

    示例 2:
    输入: "bbbbb"
    输出: 1
    解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

    示例 3:
    输入: "pwwkew"
    输出: 3
    解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
         请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
     
    提示：
    s.length <= 40000
 * @param {string} s
 * @return {number}
 * 普通的动态规划。
 * 这里我在dp表里存了该位置上能够实现的最长的字符串。
 * 由于要确保字符不重复，我们 i位置在继承i - 1位置的字符串，变成 b[i - 1] + s[i]时，需要查看是否有重复的元素。
 * 有的话需要去掉重复元素 dp[i] = dp[i - 1].slice(dp[i - 1].indexOf(s[i]) + 1) + s[i]
 */
var lengthOfLongestSubstring = function(s) {
    if (s == "")
        return 0
    let dp = new Array(s.length).fill(0) //数组每个位置记录一个字符串
    let max = 1
    for (let i = 0; i < s.length; i++) {
        if (i == 0)
            dp[i] = s[i]
        else if (i != 0 && dp[i - 1].indexOf(s[i]) != -1)
            dp[i] = dp[i - 1].slice(dp[i - 1].indexOf(s[i]) + 1) + s[i]
        else
            dp[i] = dp[i - 1] + s[i], max = Math.max(dp[i].length, max)
    }
    return max
};

/* 看了题解，发现我那样写时间复杂度应该会比较高，因为每次还需要用indexOf()来判断是否重复。
这样的时间复杂度应该是 O(n^ 2)。空间复杂度也会比较大，因为存了一堆字符串。
用哈希表存储对应字符上次出现的位置，比较 偏移 和 dp[i - 1]的长度。
如果 之前出现的位置到 当前i的距离 大于 dp[i - 1]，就说明dp[i -1]中没有s[i]，就可以进行 dp[i] = dp[i - 1] + 1
这样时间复杂度是O(n)，空间复杂度也会下降一些，因为存的是数字。
实际上还可以用两个变量把dp[]给干掉，那时候空间复杂度就是O(1)了。
84 ms 65.77%
45.2 MB 36.19%
 */
var lengthOfLongestSubstring = function(s) {
    if (s == "")
        return 0
    let hashTable = new Map() //记录每个字符上次出现的位置
    let dp = new Array(s.length).fill(0) //存放长度
    let max = 1
    dp[0] = 1
    hashTable.set(s[0], 0)
    for (let i = 1; i < s.length; i++) {
        if (!hashTable.has(s[i]) || (i - hashTable.get(s[i])) > dp[i - 1]) //没有出现过这个字符或者 距离大于dp[i - 1]，即dp[i - 1]对应的字符中没有s[i]，不重复
            dp[i] = dp[i - 1] + 1
        else
            dp[i] = i - hashTable.get(s[i])
        hashTable.set(s[i], i) //更新字符位置
        max = Math.max(dp[i], max)
    }
    return max
};

console.log(lengthOfLongestSubstring("abca"));