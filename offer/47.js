/**
 * 剑指 Offer 47. 礼物的最大价值
 * 中等
 * 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？
    示例 1:

    输入: 
    [
      [1,3,1],
      [1,5,1],
      [4,2,1]
    ]
    输出: 12
    解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物

    提示：

    0 < grid.length <= 200
    0 < grid[0].length <= 200
* @param {number[][]} grid
* @return {number}
* 我算是看出来了，这种这个位置和上一个位置有关的就可以用动态规划。
* 这里建一个二维数组来存放这个位置到起点可以得到的最大收益即可。
* 然后后面的位置也会收到这个节点的影响。
* 76 ms 39.41%
* 44.1 MB 12.95%

*/
var maxValue = function(grid) {
    let m = grid.length, n = grid[0].length //一维长度和二维宽度
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (j == 0 && i == 0)
                dp[i][j] = grid[i][j]
            else if (j == 0)
                dp[i][j] = dp[i - 1][j] + grid[i][j]
            else if (i == 0) //第一行不能从上一行下来
                dp[i][j] = dp[i][j - 1] + grid[i][j]
            else {
                dp[i][j] = grid[i][j] + Math.max(dp[i][j - 1], dp[i - 1][j])
            }
        }
    }
    return dp[m - 1][n - 1]
};

let a = [[1,3,1],[1,5,1],[4,2,1]]
console.log(maxValue(a));