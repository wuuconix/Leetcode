/**
    58. 最后一个单词的长度
    给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度。
    单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。
    示例 1：
    输入：s = "Hello World"
    输出：5
*/

/**
 * @param {string} s
 * @return {number}
 * split教你做人
 * 68 ms 60.47%
 * 40.9 MB 27.93%
 */
var lengthOfLastWord = function(s) {
    let ss = s.split(" ")
    for (let i = ss.length - 1; i >=0; i--) {
        if (ss[i] != '')
            return ss[i].length
    }
    return 0
};

let s = "Today is a nice day"
console.log(lengthOfLastWord(s))