/**
 * 70. 爬楼梯
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
   每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
   输入：n = 3
    输出：3
    解释：有三种方法可以爬到楼顶。
    1. 1 阶 + 1 阶 + 1 阶
    2. 1 阶 + 2 阶
    3. 2 阶 + 1 阶
 * @param {number} n
 * @return {number}
 * 想到了奇怪的递归，从零开始算
 * 实际上这里已经和动态规划的方程 f(x) = f(x-1) + f(x-2)有类似的想法了
 * 这里的想法是从刚底楼出发，试着迈开脚步后思考情况。
 * 而动态规划的方程是从楼顶开始思考刚刚是怎么上来的
 * 递归超出时间限制了   
 */
var climbStairs = function(n) {
    let getChoiceNum = (x, n) => {
        if (x == n)
            return 0
        else if (x + 1 == n)
            return 1
        else if (x + 2 == n)
            return 2
        else
            return getChoiceNum(x + 1, n) + getChoiceNum(x + 2, n)
    }
    return getChoiceNum(0, n)
};


/**
 * @param {number} n
 * @return {number}
 * 动态规划 f(x) = f(x - 1) + f(x - 2)
 * 然后用滚动数组类似斐波那契数列求就行了
 */
 var climbStairs = function(n) {
    if (n == 1)
        return 1
    else if (n == 2)
        return 2
    else {
        let p = 1, q = 2, r = 0
        for (let i = 3; i <= n; i++) {
            r = p + q
            p = q
            q = r
        }
        return r
    }
};
let n = 44
console.log(climbStairs(n));