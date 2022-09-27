/**剑指 Offer 62. 圆圈中最后剩下的数字
 * 简单
 * 0,1,···,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。求出这个圆圈里剩下的最后一个数字。

    例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。

    示例 1：
    输入: n = 5, m = 3
    输出: 3

    示例 2：
    输入: n = 10, m = 17
    输出: 2
     
    限制：
    1 <= n <= 10^5
    1 <= m <= 10^6
 * @param {number} n
 * @param {number} m
 * @return {number}
 * 暴力法，手动移动m个位置。然后直到最后剩下一个。
 * 这种模拟耗时太大，超时了。
 */

var lastRemaining1 = function(n, m) {
    let circle = new Array(n).fill(1) //1表示还未访问过，0表示已经访问过
    let num = 0 //用来记录已经访问得数量
    let moveM = (i) => { //得到移动m步后得新坐标
        let num = 0
        while (1) {
            if (circle[i] && num == m - 1) {
                return i
            } else if (circle[i]) {
                num++
            }
            i = (i + 1) % n
        }
    }
    let index = moveM(0) //锁定第一个目标
    while (num <= n - 1) {
        if (num == n - 1)
            return index
        circle[index] = 0
        num++
        index = moveM((index + 1) % n)
    }
};

/* 官方题解的递归做法写出来令人难以置信的简单。
他的思路是把问题建模成 f(n, m) 问题。然后 f(n, m)返回的值表示 在有n个数，每次从圈中删除第m个数字，最后剩下的那个数。
然后f(n, m) 去掉第一个数之后就变成了 f(n - 1, m) 问题。
我们假设 f(n - 1, m) 返回的解是x。然后因为 f(n, m)问题第一个去掉的值的下标是 m % n，然后我们把 那个下标后面的值想做 f(n - 1, m)问题的开始。
然后它的解是第x个，所以在f(n, m)问题中，它的解就是 (m + x) % n
如此我们就能够一直递归。
递归的终点是 f(1, m)。很显然，因为只有一个数值了，它的解就是 0.

72 ms 42.28%
48.6 MB 15.60%
 */
var lastRemaining2 = function(n, m) {
    if (n == 1) {
        return 0
    } else {
        return (m + lastRemaining(n - 1, m)) % n
    }
};

/* 我们仔细观察递归的方法，f(n, m) 和 f(n - 1, m) 之间的关系已经跃然纸上了。
我们可以用递归或者说动态规划的方式来避免递归带来的额外栈空间的占用。
f(i, m) = (f(i - 1, m) + m) % i
56 ms 97.73%
40.9 MB 47.51%
这类数学问题叫做约瑟夫环问题。以后直接套结论吧2333
希望还能记住。*/
var lastRemaining3 = function(n, m) {
    let res = 0
    for (let i = 2; i <= n; i++) {
        res = (res + m) % i
    }
    return res
};

let n = 10, m = 17
console.log(lastRemaining3(n, m));
