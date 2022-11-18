function solveSudoku(board: string[][]): void {
  const rows: Set<number>[] = []
  const columns: Set<number>[] = []
  const blocks: Set<number>[] = []
  for (let i = 0; i < 9; i++) {
    rows[i] = new Set()
    columns[i] = new Set()
    blocks[i] = new Set()
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] != ".") {
        rows[i].add(Number(board[i][j]))
        columns[j].add(Number(board[i][j]))
        blocks[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(Number(board[i][j]))
      }
    }
  }
  function backtracking(): boolean {
    let flag = true
    for (let i = 0; i < 9; i++) {
      if (blocks[i].size != 9) {
        flag = false
        break
      }
    }
    if (flag) {
      return true
    }
    for (let i = 0; i < 9; i++) {
      const row = board[i]
      if (rows[i].size == 9) {
        continue
      }
      for (let j = 0; j < 9; j++) {
        if (row[j] == ".") {
          for (let num = 1; num < 10; num++) {
            if (!rows[i].has(num) && !columns[j].has(num) && !blocks[Math.floor(i / 3) * 3 + Math.floor(j / 3)].has(num)) {
              board[i][j] = String(num)
              rows[i].add(num)
              columns[j].add(num)
              blocks[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(num)
              if (backtracking()) {
                return true
              }
              board[i][j] = "."
              rows[i].delete(num)
              columns[j].delete(num)
              blocks[Math.floor(i / 3) * 3 + Math.floor(j / 3)].delete(num)
            }
          }
          return false
        }
      }
    }
    return false
  }
  backtracking()
}

const board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
solveSudoku(board)