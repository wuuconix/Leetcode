/**
 * 剑指 Offer II 014. 字符串中的变位词
 * 中等
 * 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的某个变位词。

换句话说，第一个字符串的排列之一是第二个字符串的 子串 。

示例 1：

输入: s1 = "ab" s2 = "eidbaooo"
输出: True
解释: s2 包含 s1 的排列之一 ("ba").
示例 2：

输入: s1= "ab" s2 = "eidboaoo"
输出: False

提示：

1 <= s1.length, s2.length <= 10^4
s1 和 s2 仅包含小写字母
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * 感觉已经连着做了好几天前缀和思想的题目了。
 * 在这里我们首先记录下s1里面各个字符的个数，存放在new Array(26)里面。
 * 然后去遍历S2,遍历的过程中得到每个坐标的前缀和，即到当前位置的 字母个数，也是一个26长度的数组。
 * 然后如果从0开始到现在，每个字符的个数和s1里每个的个数都完全相等，直接返回true。
 * 不然的话，可能会比s1的字符多出一些了，这里我们仍然用差的思想，看它和s1的数组差哪些，形成一个target数组。
 * 如果前面有一个小标的前缀和数组和target一模一样，那么两个下标之间的字符就是s1的变位词。
 * 为了快速找到target对应的下标，我们使用哈希表，然后js里哈希表Map的键由于会把数组 [1, 2] 和 [1, 2]看成不同的，因为它们的地址不同，所以用toString()得到的下标作为key。
 * 然后哈希表的值只需要是 1就行，1代表出现过。
 * 而且由于我们只需要知道是否存在，所以只需要记录第一次键值，set为1后之后遇到一样的也不用动了。
 * 时间复杂度和空间复杂度都是O(n)
 * 264 ms 20.22%
 * 53.5 MB 5.27%
 */
var checkInclusion = function(s1, s2) {
    let letterCount = new Array(26).fill(0) //统计s1中各个字母的次数
    for (let letter of s1) {
        letterCount[letter.charCodeAt(0) - 97] += 1
    }
    let prefixNum = new Array(26).fill(0) //统计s2各个位置的字符个数
    let hashTable = new Map()
    for (let i = 0; i < s2.length; i++) {
        prefixNum[s2[i].charCodeAt(0) - 97] += 1
        let target = new Array(26).fill(0).map((v, i) => prefixNum[i] - letterCount[i])
        if (target.reduce((a, b) => Math.abs(a) + Math.abs(b)) == 0) //和s1的个数完全一致，说明从坐标0道坐标i就是s1的变位词
            return true
        if (hashTable.has(target.toString())) //如果有，说明他们之间的字符就是 s1的变位词
            return true
        let key = prefixNum.toString()
        if (!hashTable.has(key))
            hashTable.set(key, 1) //表示有下标是这种数量的
    }
    return false
};

/* 看了题解，发现可以用滑动窗口做。
一开始考虑过，但是放弃了，因为我不知道窗口右界和窗口左界何时移动，因为在我的映像里滑动窗口都是不定长的。
但是看了题解后我发现完全可以用一个定长的滑动数组，即s1的长度，在遍历s2的过程中不断遍历中，
不断更新滑动窗口内的各字符的个数，如果和s1的个数一致，那么就找到了。
然后为了方便，我们可以用diff来看，实际上因为每次还是要判断 数组是否都变成0了，貌似没啥作用。
用了滑动数组，时间效率提升了许多，少了操作哈希表的哪些时间。
96 ms 59.28%
50.5 MB 5.27% */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) //s1比s2长直接false
        return false
    let letterCount = new Array(26).fill(0) //统计s1中各个字母的次数
    for (let letter of s1) {
        letterCount[letter.charCodeAt(0) - 97] += 1
    }
    let diffWindow = new Array(26).fill(0).map((v, i) => -letterCount[i]) //记录当前和letterCount的差距
    for (let i = 0; i < s1.length; i++) { //初始化窗口，窗口为固定长度，s1.length
        diffWindow[s2[i].charCodeAt(0) - 97]++
    }
    if (diffWindow.reduce((a, b) => Math.abs(a) + Math.abs(b)) == 0)
        return true
    for (let i = s1.length; i < s2.length; i++) {
        diffWindow[s2[i - s1.length].charCodeAt(0) - 97]-- //窗口左界右移
        diffWindow[s2[i].charCodeAt(0) - 97]++
        if (diffWindow.reduce((a, b) => Math.abs(a) + Math.abs(b)) == 0)
            return true
    }
    return false
};
let s1 = "ad", s2 = "a"
console.log(checkInclusion(s1, s2));