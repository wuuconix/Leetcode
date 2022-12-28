function findMaxForm(strs: string[], m: number, n: number): number {
  const dp: number[][] = new Array(m + 1).fill(0).map(x => new Array(n + 1).fill(0))
  const record: Map<string, Array<number>> = new Map()
  for (let str of strs) {
    let numZero = 0
    Array.from(str).forEach(l => { l == "0" && numZero++ })
    record.set(str, [numZero, str.length - numZero])
  }
  console.log(record)
  for (let str of strs) {
    const numZero = record.get(str)![0]
    const numOne = record.get(str)![1]
    for (let i = m; i >= numZero; i--) {
      for (let j = n; j >= numOne; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - numZero][j - numOne] + 1)
      }
    }
  }
  console.log(dp)
  return dp[m][n]
}

const strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
console.log(findMaxForm(strs, m, n))