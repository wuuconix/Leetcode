/**
 * 剑指 Offer 29. 顺时针打印矩阵
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
    示例 1：

    输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
    输出：[1,2,3,6,9,8,7,4,5]
    示例 2：

    输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
    输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 * @param {number[][]} matrix
 * @return {number[]}
 * 这道题十分麻烦，我的思路便是方向的改变，右 下 左 上。最后改变方向后发现已经经过后便说明已经走完了。
 * 96 ms 24.01%
 * 47.8 mb 5.01%
 */
var spiralOrder = function(matrix) {
    if (matrix.length == 0 || matrix[0].length == 0) //空直接返回
        return []
    let m = matrix.length, n = matrix[0].length //n为宽， m为长
    let visited = new Array(m).fill(0).map(() => new Array(n).fill(0)) //m * n 的二维数组初始化
    let result = []
    let direction = 0 //0往右 1往下 2往左 3往上
    let i = 0, j = 0
    let move = (i, j, direction) => {
        switch (direction) {
            case 0:
                j++
                break
            case 1:
                i++
                break
            case 2:
                j--
                break
            case 3:
                i--
                break
        }
        return [i, j]
    }
    let judge = (i, j) => { //查看运动后的坐标越界或者已经经过
        if (i >= m || i < 0 || j >= n || j < 0 || visited[i][j])
            return false
        return true
    }
    while (1) {
        result.push(matrix[i][j])
        visited[i][j] = 1 //标记已经走过
        let [tryI, tryJ] = move(i, j, direction)
        if (!judge(tryI, tryJ)) {
            direction += 1
            direction %= 4 //改变方向
        }
        [i, j] = move(i, j, direction)
        if (!judge(i, j)) //碰壁说明已经无路可走，返回结果
            return result
    }
};

let matrix = [[]]
console.log(spiralOrder(matrix));