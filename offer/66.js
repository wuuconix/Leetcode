/**
 * 剑指 Offer 66. 构建乘积数组
 * 中等
 * 给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B[i] 的值是数组 A 中除了下标 i 以外的元素的积, 即 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。

    示例:

    输入: [1,2,3,4,5]
    输出: [120,60,40,30,24]
     
    提示：
    所有元素乘积之和不会溢出 32 位整数
    a.length <= 100000
 * @param {number[]} a
 * @return {number[]}
 * 这道题不让用除法，不然直接先求出总的乘机，然后 B[i] 就等于 总的积 / a[i]
 * 我还以为要用位运算实现除法，像之前那道用位运算实现加法一样。
 * 好在看了题解后不是 位运算。
 * 我们可以使用前缀积和后缀积的思想。
 * prefix[i] 记录了从a[0]...a[i]的乘机
 * suffix[i] 记录了从a[i]...a[a.length - 1]的乘机
 * 这样我们要求一个 res[2] 就等于 prefix[1] * suffix[3]
 */
var constructArr = function(a) {
    let prefix = new Array(a.length) //prefix[i] 记录了从a[0]...a[i]的乘机
    let suffix = new Array(a.length) //suffix[i] 记录了从a[i]...a[a.length - 1]的乘机
    let res = new Array(a.length)
    for (let i = 0; i < a.length; i++) { //计算前缀prefix
        if (i == 0) {
            prefix[i] = a[i]
        } else {
            prefix[i] = prefix[i - 1] * a[i]
        }
    }
    for (let i = a.length - 1; i >= 0; i--) { //计算后缀suffix
        if (i == a.length - 1) {
            suffix[i] = a[i]
        } else {
            suffix[i] = a[i] * suffix[i + 1]
        }
    }
    for (let i = 0; i < a.length; i++) {
        if (i == 0)
            res[i] = suffix[1]
        else if (i == a.length - 1)
            res[i] = prefix[a.length - 2]
        else
            res[i] = prefix[i - 1] * suffix[i + 1]
    }
    return res
};

let a = [1,2,3,4,5]
console.log(constructArr(a));