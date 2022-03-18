/** 14. 最长公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀。
    如果不存在公共前缀，返回空字符串 ""。
    示例 1：

    输入：strs = ["flower","flow","flight"]
    输出："fl"
    示例 2：

    输入：strs = ["dog","racecar","car"]
    输出：""
    解释：输入不存在公共前缀。
 *  */


/**
 * @param {string[]} strs
 * @return {string}
 * 简单的逐位比较
 * 56 ms 98.40%
 * 42.1 MB  11.59%
 */
 var longestCommonPrefix = function(strs) {
    let max = 0 //得到字符串中的最大长度，它是最长前缀的极限
    for (let i in strs) {
        if (strs[i].length > max) {
            max = strs[i].length
        }
    }
    let ans = ""
    for (let i = 0; i < max; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] != strs[j - 1][i]) {
                return ans
            }
        }
        ans += strs[0][i]
    }
    return ans
};

strs = ["cir","car"]
console.log(longestCommonPrefix(strs));