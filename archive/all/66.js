/**
66. 加一
给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
你可以假设除了整数 0 之外，这个整数不会以零开头。
示例 1：
输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 * ES2020 BigInt教你做人
 * 如果用普通过的Number遇到太大的数会造成精度损失
 * 这里直接用BigInt解决这个办法
 * +1n 表示加上一个大整数1，1n和1是不一样的。
 * 60 ms 89.16%
 * 40.8 MB 27.83%
 */
var plusOne = function(digits) {
    return String(BigInt(digits.join('')) + 1n).split('')
};

let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
console.log(plusOne(digits))