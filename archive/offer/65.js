/**
 * 剑指 Offer 65. 不用加减乘除做加法
 * 简单
 * 写一个函数，求两个整数之和，要求在函数体内不得使用 “+”、“-”、“*”、“/” 四则运算符号。
    示例:

    输入: a = 1, b = 1
    输出: 2
     
    提示：

    a, b 均可能是负数或 0
    结果不会溢出 32 位整数
 * @param {number} a
 * @param {number} b
 * @return {number}
 * 再次数组reduce一把梭。
 * 48 ms 98.81%
 * 40.9 MB 43.38%
 */
var add = function(a, b) {
    return [a, b].reduce((prev, cur) => prev + cur)
};

/* 利用位运算实现加法。
两个数加法，我们如果直接按位亦或，在没有产生进位的情况下，可以直接得到结果。
比如 01 和 10 . 他们一亦或，结果是 11，即 1 + 2 = 3 
但是在有进位的条件下就不对了，比如 11 和 11， 它们按位亦或的结果是 00  好家伙，变小了。
我们需要考虑 11 和 11 相机产生的进位，我们直到，进位实际上在两者都为 1 的情况下会发生。
所以 11 和 11 按位与 的结果就是 11，然后因为进位的结果需要和 亦或的基值 相加，而进位都是需要进一位再和基址加，所以应该是 110
最后和基址 00 相加，我们就得到了结果  110 .
值得注意的是110 和 00 相加也是用按位亦或得到的，只不过它没有产生按位与后没有产生进位，所以它的结果就是 按位亦或的结果。*/
var add = function(a, b) {
    while (b != 0) {
        let base = a ^ b //用来求基值 这一步实际上已经加上了大部分了，但是没有考虑进位，属于半加器。
        let c = (a & b) << 1 //用来求进位
        a = base //接下去需要重新把基址作为加数，进位作为被加数，直到进位为空，就不用加了，也得到了结果
        b = c
    }
    return a
};

console.log(add(1, 2));