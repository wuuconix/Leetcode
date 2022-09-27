/**
 * 剑指 Offer II 013. 二维子矩阵的和
 * 中等
 * 给定一个二维矩阵 matrix，以下类型的多个请求：

计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2) 。
实现 NumMatrix 类：

NumMatrix(int[][] matrix) 给定整数矩阵 matrix 进行初始化
int sumRegion(int row1, int col1, int row2, int col2) 返回左上角 (row1, col1) 、右下角 (row2, col2) 的子矩阵的元素总和。

输入: 
["NumMatrix","sumRegion","sumRegion","sumRegion"]
[[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]
输出: 
[null, 8, 11, 12]

解释:
NumMatrix numMatrix = new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]]);
numMatrix.sumRegion(2, 1, 4, 3); // return 8 (红色矩形框的元素总和)
numMatrix.sumRegion(1, 1, 2, 2); // return 11 (绿色矩形框的元素总和)
numMatrix.sumRegion(1, 2, 2, 4); // return 12 (蓝色矩形框的元素总和)
 

提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 200
-10^5 <= matrix[i][j] <= 10^5
0 <= row1 <= row2 < m
0 <= col1 <= col2 < n
最多调用 10^4 次 sumRegion 方法

该题要实现的效果实际非常简单，正常情况我们两个for循环直接解决。这意味着每次循环 O(mn)的时间复杂度，然后因为它调用sumRegion的次数高达 10 ^ 4,
肯定会超时，因为我们取m和n的最大值， 200 * 200 * 10 ^ 4 = 4 * 10 ^ 8。肯定抄了。
我便想用前缀和的思想降低点时间复杂度。用dp二维数组，记录每一行里的前缀和，注意是每一行里的，因为如果从0，0开始求和最后会发现没什么用，因为
题目里圈的范围是一个矩形。
得到dp数组后，每一行的求和就可以 dp[row][col2] - dp[row][col1 - 1]。
然后每次求和的时间复杂度降低到了O(m)
然后乘上次数 200 * 10 ^ 4 = 2 * 10 ^ 6。卡着时间过的。。。
328 ms 5.56%
58.2 MB 36.91%
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.dp = new Array(matrix.length).fill(0).map(x => new Array(matrix[0].length)) //dp二维数组存储该行里到它的前缀和
    for (let i = 0; i < matrix.length; i++) {
        let sum = 0 //存储单行的和
        for (let j = 0; j < matrix[0].length; j++) {
            sum += matrix[i][j]
            this.dp[i][j] = sum
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0
    for (let i = row1; i <= row2; i++) {
        sum += (this.dp[i][col2] - (this.dp[i][col1 - 1] ?? 0))
    }
    return sum
};


/* 看了题解，发现更好的做法应该是我放弃的二维前缀和。
即从0, 0 到 i, j这个矩形的前缀和
我当初放弃这个做法是因为这个前缀和比较难求。需要结合前一行、前一列，还有一个重合的部分。
而且就算求出来了这个二维前缀和，最后算的时候貌似也不太行，不是简单的减去。
但是其实还是能够做的，需要注意重合部分。
dp[i][j] = dp[i - 1][j] + dp[i][j - 1] + dp[i - 1][j + 1]
最后求矩形的时候也是类似的方法。
这样可以每次调用sumRegion的时候可以直接求出来，时间复杂度降到了O(1) */
/**
 * @param {number[][]} matrix
*/
var NumMatrix = function(matrix) {
    this.matrix = matrix
    this.dp = new Array(matrix.length).fill(0).map(x => new Array(matrix[0].length)) //dp二维数组存储从0，0里到它这个矩形里的的前缀和
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (i == 0)
                this.dp[i][j] = (this.dp[i][j - 1] ?? 0) + matrix[i][j]
            else
                this.dp[i][j] = ((this.dp[i - 1][j] ?? 0) + (this.dp[i][j - 1] ?? 0) - (this.dp[i - 1][j - 1] ?? 0) + matrix[i][j])
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    if (row1 == 0) 
        return this.dp[row2][col2] - (this.dp[row2][col1 - 1] ?? 0)
    else
        return this.dp[row2][col2] - (this.dp[row2][col1 - 1] ?? 0) - (this.dp[row1 - 1][col2] ?? 0) + (this.dp[row1 - 1][col1 - 1] ?? 0)
};

let a = new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]])
console.log(a.sumRegion(1, 1, 2, 2)); 