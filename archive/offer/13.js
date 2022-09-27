/**
 * 剑指 Offer 13. 机器人的运动范围
 * 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？
    示例 1：    
    输入：m = 2, n = 3, k = 1
    输出：3

 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 * 学习dfs。
 * 这道题可以发现不用往左走和往上走。
 * 只需要不断往右走或者往下走就可以到达所有可能的格子。能够大量减少递归的个数，防止超时。
 * 64 ms 87.16%
 * 41.8 MB 59.65%
 */
var movingCount = function(m, n, k) {
    const visit = new Array(m).fill(0).map(() => new Array(n).fill(0))

    const sum = n => {
        return n % 10 + Math.floor(n / 10) % 10 + Math.floor(n / 100) % 10
    }
    const dfs = (i, j) => {
        let s = sum(i) + sum(j)
        if (i >= m || j >= n || s > k || visit[i][j] == 1) //不符合的情况直接返回
            return 0
        visit[i][j] = 1
        return 1 + dfs(i, j + 1) + dfs(i + 1, j)
    }

    return dfs(0, 0)
};

let m = 2, n = 3, k = 1
console.log(movingCount(m, n, k));