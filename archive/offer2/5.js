/**
 * 剑指 Offer II 005. 单词长度的最大乘积
 * 中等
 * 给定一个字符串数组 words，请计算当两个字符串 words[i] 和 words[j] 不包含相同字符时，它们长度的乘积的最大值。假设字符串中只包含英语的小写字母。如果没有不包含相同字符的一对字符串，返回 0。

    示例 1:

    输入: words = ["abcw","baz","foo","bar","fxyz","abcdef"]
    输出: 16 
    解释: 这两个单词为 "abcw", "fxyz"。它们不包含相同字符，且长度的乘积最大。
    示例 2:

    输入: words = ["a","ab","abc","d","cd","bcd","abcd"]
    输出: 4 
    解释: 这两个单词为 "ab", "cd"。
    示例 3:

    输入: words = ["a","aa","aaa","aaaa"]
    输出: 0 
    解释: 不存在这样的两个单词。
     

    提示：

    2 <= words.length <= 1000
    1 <= words[i].length <= 1000
    words[i] 仅包含小写字母
 * @param {string[]} words
 * @return {number}
 * 这个题的数据量比较小，大概可以接受O(n^2)的时间复杂度
 * 这道题的关键在于如何判断两个字符串是否有相交的字符，如果这里处理不好，直接干一个O(n^2)。配合上外层循环的O(n^2)。直接O(n^4)。。。就爆炸了。
 * 看了评论区，发现可以把字符串转化为二进制，然后按位与，如果是0，就说明他们没有相交的字符。
 * 比如 a 对应的二进制就应该是 1     b对应的二进制应该是  10   c对应 100
 * aaa 还是对应 1，因为我们的目的是看这个字符中有没有某个字符，至于它有几个，我们不关心。
 * ab 对应 11
 * abc 对应 111
 * 最后的时间复杂度是O(n^2)
 */
var maxProduct = function(words) {
    let hashTable = [] //哈希表 用来记录字符串对应的二进制对应的数字与字符串长度。 每个元素是一个数组 [数字，长度]
    for (let word of words) {
        let bitCount = new Array(26).fill(0) //26个二级制对应26个字母
        for (let letter of word) {
            bitCount[letter.charCodeAt() - 97] = 1
        }
        hashTable.push([parseInt(bitCount.reverse().join(""), 2), word.length])
    }
    let max = 0
    for (let i = 0; i < hashTable.length - 1; i++) {
        for (let j = i + 1; j < hashTable.length; j++) {
            if ((hashTable[i][0] & hashTable[j][0]) == 0) //相与等于0 说明字符串没有交集
                max = Math.max(max, hashTable[i][1] * hashTable[j][1])
        }
    }
    return max
};

let words = ["abcw","baz","foo","bar","fxyz","abcdef"]
console.log(maxProduct(words));
