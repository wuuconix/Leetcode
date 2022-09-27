/**
 * 剑指 Offer II 033. 变位词组
 * 中等
 * 给定一个字符串数组 strs ，将 变位词 组合在一起。 可以按任意顺序返回结果列表。

注意：若两个字符串中每个字符出现的次数都相同，则称它们互为变位词。

示例 1:

输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
示例 2:

输入: strs = [""]
输出: [[""]]
示例 3:

输入: strs = ["a"]
输出: [["a"]]

提示：

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] 仅包含小写字母
 *  
 * @param {string[]} strs
 * @return {string[][]}
 * 简单哈希表。
 * 将26个字符出现的次数做统计，然后转化为字符串作为哈希表的键。
 * 然后哈希表的值就是放题目需要的变位词列表。
 * 100 ms 83.93%
 * 51.1 MB 40.63%
 */
var groupAnagrams = function(strs) {
    let count = new Array(26) //统计26个字符的的个数
    let hashTable = new Map() //键为26个字符出现次数 值为列表
    for (let str of strs) {
        count = new Array(26).fill(0)
        for (let letter of str) {
            count[letter.charCodeAt() - 97]++
        }
        let key = count.join()
        if (hashTable.has(key)) {
            hashTable.get(key).push(str)
        } else {
            hashTable.set(key, [str])
        }
    }
    let result = []
    for (let v of hashTable.values()) {
        result.push(v)
    }
    return result
};

let strs = ["a"]
console.log(groupAnagrams(strs));