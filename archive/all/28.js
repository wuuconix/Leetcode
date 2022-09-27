/**
    实现 strStr() 函数。
    给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。
    输入：haystack = "hello", needle = "ll"
    输出：2
*/


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * KMP算法？狗都不学！
 * 用内置函数不香嘛！
 * 72 ms 75.50%
 * 41 MB 31.10%
 */
 var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};

let haystack = "hello", needle = ""
console.log(strStr(haystack, needle))