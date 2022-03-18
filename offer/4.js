/**
 * 剑指 Offer 04. 二维数组中的查找
    在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
    示例:

    现有矩阵 matrix 如下：

    [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
    ]
    给定 target = 5，返回 true。

    给定 target = 20，返回 false。

 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 简单暴力做，稍加优化
 * 60 ms  90.93%
 * 43.4 MB  50.33%
 */
var findNumberIn2DArray = function(matrix, target) {
    let n = matrix.length, m = matrix[0].length
    for (let row of matrix) {
        if (target >= row[0] && target <= row[m - 1]) {
            if (row.includes(target))
                return true
            else
                continue
        }
    }
    return false
};

/**
    线性查找。从右上角出发。
    若target 和 右上角相等，返回true。
    如果target比较大，则到下一行。
    如果target比较小，则往左。
    60 ms 90.93%
    43.6 MB 44.87%
*/
var findNumberIn2DArray = function(matrix, target) {
    if (matrix.length == 0)
        return false
    let n = matrix.length, m = matrix[0].length
    let i = 0, j = m -1
    while (i <= n - 1 && j >= 0) {
        if (target == matrix[i][j])
            return true
        else if (target > matrix[i][j])
            i += 1
        else if (target < matrix[i][j])
            j -= 1
    }
    return false
};

matrix = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]
console.log(findNumberIn2DArray(matrix, 1))