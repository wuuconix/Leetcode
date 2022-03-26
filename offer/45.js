/**剑指 Offer 45. 把数组排成最小的数
 * 中等
 * 输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

示例 1:

输入: [10,2]
输出: "102"
示例 2:

输入: [3,30,34,5,9]
输出: "3033459"

提示:

0 < nums.length <= 100
说明:

输出结果可能非常大，所以你需要返回一个字符串而不是整数
拼接起来的数字可能会有前导 0，最后结果不需要去掉前导 0
 * @param {number[]} nums
 * @return {string}
 * 这道题我一开始就想到了 js中array.sort()利用的是ascii排序，十分符合这道题目。
 * 因为要最后的数字最小，肯定ascii小的排前面
 * 看是这里还有一些问题，比如 2 和 21应该谁排前面，按照普通的ascii排序，2会排前面。
 * 那么最后拼接的结果就是  221
 * 但是这个结果显然是错的， 21应该排在前面， 即 212
 * 所以我的思路便是手动写一个排序函数让sort来排序。
 * 至于具体排序的思路，大体上肯定就是ascii排序。 1 会排在 2的前面。
 * 当两个数字有很多有一样，比如 22 和 221。
 * 我们就需要让 22 和 1进行比较，所以最终 221 会排在 22前面。 最后拼接的结果  22122 < 22221
 * 相反的例子，如果是 22 和 223.
 * 让 22 和 3进行比较， 22会排在223前面， 最后的拼接结果  22223 < 22322
 * 60ms 92. %
 * 42.1 mb
 */
var minNumber = function(nums) {
    let compare = (a, b) => {
        if (a == b)
            return 0
        a = a.toString()
        b = b.toString()
        let al = a.length, bl = b.length
        let l = Math.min(al, bl)
        for (let i = 0; i < l; i++) {
            if (a[i] < b[i])
                return -1
            else if (a[i] > b[i])
                return 1
        }
        if (al < bl) {
            return compare(a, b.slice(l))
        } else {
            return compare(a.slice(l), b)
        }
            
    }
    return nums.sort(compare).toString().replace(/,/g, '')
};

/* 看了题解后发现实际上直接这样即可。
a 和 b哪个应该排在前面？
只要看他们拼接后的结果 ab 或者 ba那个小就行了。
太强了，佩服。
然后数组转字符串不用 toString 再replace去掉逗号那么复杂，直接join("")即可

但是这种做法的耗时比我的大一些233，可能模板字符串比较耗时。
72ms 51.43%
42.6mb 62.47%*/
var minNumber = function(nums) {
    return nums.sort((a, b) => `${a}${b}` - `${b}${a}`).join("")
};
console.log(minNumber([2, 2060]));