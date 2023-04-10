function generateMatrix(n: number): number[][] {
  const ans: number[][] = new Array(n).fill(0).map(x => new Array(n).fill(0))
  let i = 0, j = 0
  let dir = 0
  let count = 1
  while (ans[i]?.[j] == 0) {
    ans[i][j] = count++
    switch (dir) {
      case 0:
        if (j + 1 == n || ans[i][j + 1]) {
          dir++
          i++
        } else {
          j++
        }
        break
      case 1:
        if (i + 1 == n || ans[i + 1][j]) {
          dir++
          j--
        } else {
          i++
        }
        break
      case 2:
        if (j - 1 == -1 || ans[i][j - 1]) {
          dir++
          i--
        } else {
          j--
        }
        break
      case 3:
        if (i - 1 == -1 || ans[i - 1][j]) {
          dir = 0
          j++
        } else {
          i--
        }
        break
    }
  }
  return ans
}

const n = 1
console.log(generateMatrix(n))