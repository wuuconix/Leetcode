function longestPalindromeSubseq(s: string): number {
  const dp: number[][] = []
  for (let i = s.length - 1; i >= 0; i--) {
    dp[i] = []
    for (let j = i; j < s.length; j++) {
      if (s[i] == s[j]) {
        if (i == j) {
          dp[i][j] = 1
        } else {
          dp[i][j] = (dp[i + 1]?.[j - 1] ?? 0) + 2
        }
      } else {
        dp[i][j] = Math.max(dp[i][j - 1] ?? 0, dp[i + 1]?.[j] ?? 0)
      }
    }
  }
  console.log(dp)
  return dp[0][s.length - 1]
}

const s = "bbbab"
console.log(longestPalindromeSubseq(s))