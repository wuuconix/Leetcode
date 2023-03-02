function isSubsequence(s: string, t: string): boolean {
  const dp: number[][] = []
  for (let i = 0; i < s.length; i++) {
    dp[i] = []
    for (let j = 0; j < t.length; j++) {
      if (s[i] == t[j]) {
        dp[i][j] = (dp[i - 1]?.[j - 1] ?? 0) + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1]?.[j] ?? 0, dp[i][j - 1] ?? 0)
      }
    }
  }
  console.log(dp)
  return (dp[s.length - 1]?.[t.length - 1] ?? 0) == s.length
}

const s = "abc", t = ""
console.log(isSubsequence(s, t))