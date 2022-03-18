/**
 * 剑指 Offer 12. 矩阵中的路径
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
    单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
    例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出）。
    https://assets.leetcode.com/uploads/2020/11/04/word2.jpg 

    示例 1：
    输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
    输出：true

 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * 84 ms 75.95%
 * 43.9 MB 41.41%
 * 学习dfs。注意边界是不是写正确了。
 */
var exist = function(board, word) {
    let dfs = (i, j, k) => {
        if (i < 0 || i > board.length -1 || j < 0 || j > board[0].length - 1 || board[i][j] != word[k]) //剪枝
            return false
        if (k == word.length - 1) //最后一位也一样，说明board中存在word
            return true
        board[i][j] = "" //置为空，防止下面的上下左右格走回头路
        let ans = dfs(i - 1, j, k + 1) || dfs(i + 1, j, k + 1) || dfs(i, j - 1, k + 1) || dfs(i, j + 1, k + 1)
        board[i][j] = word[k] //恢复棋盘。因为置空只是让上一行代码不走回头路，现在任务已经完成了
        return ans
    }
    for (let i = 0; i < board.length; i++ )
        for (let j = 0; j < board[0].length; j++)
            if (dfs(i, j, 0)) //这一步相当于是遍历棋盘上的位置，把他们作为起点，查看dfs是否成功。
                return true
    return false
};

let board = [["a","a"]], word = "aa"
console.log(exist(board, word));