/**
 * 剑指 Offer 50. 第一个只出现一次的字符
 * 简单
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
    示例 1:

    输入：s = "abaccdeff"
    输出：'b'
    示例 2:

    输入：s = "" 
    输出：' '
     
    限制：
    0 <= s 的长度 <= 50000

 * @param {string} s
 * @return {character}
 * 简单题，哈希表梭哈
 */
var firstUniqChar = function(s) {
    let hashTable = new Map()
    for (let i of s) {
        if (!hashTable.has(i))
            hashTable.set(i, 1)
        else
            hashTable.set(i, hashTable.get(i) + 1)
    }
    for (let [k, v] of hashTable) {
        if (v == 1)
            return k
    }
    return " "
};

console.log(firstUniqChar(""));