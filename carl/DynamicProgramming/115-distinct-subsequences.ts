function numDistinct(s: string, t: string): number {
  const dp: number[][] = []
  for (let i = 0; i < t.length; i++) {
    dp[i] = []
    for (let j = 0; j < s.length; j++) {
      if (t[i] == s[j]) {
        if (i == 0) {
          dp[i][j] = (dp[i][j - 1] ?? 0) + 1
        } else {
          dp[i][j] = (dp[i - 1]?.[j - 1] ?? 0) + (dp[i][j - 1] ?? 0)
        }
      } else {
        dp[i][j] = dp[i][j - 1] ?? 0
      }
    }
  }
  console.log(dp)
  return dp[t.length - 1][s.length - 1]
}

const s = "babgbag", t = "bag"
console.log(numDistinct(s, t))