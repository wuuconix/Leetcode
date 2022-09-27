/**
 * 剑指 Offer II 040. 矩阵中最大的矩形
 * 困难
 * 给定一个由 0 和 1 组成的矩阵 matrix ，找出只包含 1 的最大矩形，并返回其面积。

注意：此题 matrix 输入格式为一维 01 字符串数组。

示例 1：

输入：matrix = ["10100","10111","11111","10010"]
输出：6
解释：最大矩形如上图所示。
示例 2：

输入：matrix = []
输出：0
示例 3：

输入：matrix = ["0"]
输出：0
示例 4：

输入：matrix = ["1"]
输出：1
示例 5：

输入：matrix = ["00"]
输出：0
 
提示：

rows == matrix.length
cols == matrix[0].length
0 <= row, cols <= 200
matrix[i][j] 为 '0' 或 '1'
 
 * @param {string[]} matrix
 * @return {number}
 * 这道题需要前一道题39.js 直方图最大矩形面积做铺垫。
 * 直方图实际上就是存储了高度信息。
 * 在二维矩阵中，每一行得高度信息（即连续得1得个数）可能会发生变化。
 * 所以我们需要在遍历二维举证中 更新heights数组。
 * 然后每一行里利用heights数组计算直方图最大矩形面积。
 * heights被定义为以当前当前行为起点到顶行得路上的最长连续1.
 * 比如当前行得值是0，那heights就是0了，
 * 如果当前行是1，上一行也是1，再上一行就是0了，那么他的heights就是2
 * 60 ms 100.00%
 * 42.2 MB 77.00%
 */
var maximalRectangle = function(matrix) {
    if(matrix.length == 0)
        return 0
    let heights = new Array(matrix[0].length).fill(0)
    let max = 0 //记录最大面积
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) { //这里更新heights数组
            if (matrix[i][j] == 0)
                heights[j] = 0
            else
                heights[j] += 1
        }
        let monoStack = [-1] //单调栈
        for (let j = 0; j <= matrix[0].length; j++) { //这里得取到下标右界右侧1个，使得让栈里得东西能够都被算到。
            if (monoStack.length == 1 || heights[j] > heights[monoStack[monoStack.length - 1]] ) {
                monoStack.push(j)
            } else {
                let top = monoStack.pop()
                let width = j - monoStack[monoStack.length - 1] - 1
                let height = heights[top]
                max = Math.max(max, height * width)
                j--
            }

        }
    }
    return max
};

let matrix = ["00"]
console.log(maximalRectangle(matrix));
