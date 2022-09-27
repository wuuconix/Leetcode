/**
    回文数
    给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
    回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
    例如，121 是回文，而 123 不是。
     
    示例 1：
    输入：x = 121
    输出：true

    示例 2：
    输入：x = -121
    输出：false
    解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
*/

/**
 * @param {number} x
 * @return {boolean}
 * 把数字转化为字符串然后前后指针分别比较，比较到中间的时候如果都一直正确，则返回true，在到中间的过程中，前后有一个位置不一样，直接返回false
 * 140ms 94.04%
 * 49MB 24.54%
 */
 var isPalindrome = function(x) {
    const s = x.toString()
    for (let i = 0; i < Math.ceil(s.length / 2); i++) {
        if (s[i] == s[s.length - 1 - i]) {
            continue
        }
        else {
            return false
        }
    }
    return true
};

/**
 * @param {number} x
 * @return {boolean}
 * 利用字符串转置来判断
 * 124 ms 99.39%
 * 50.4 MB 7.19%
 */
 var isPalindrome = function(x) {
    return String(x) == String(x).split('').reverse().join('') ? true : false
};