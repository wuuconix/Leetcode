function longestCommonSubsequence(text1: string, text2: string): number {
  const dp: number[][] = []
  for (let i = 0; i < text1.length; i++) {
    dp[i] = []
    for (let j = 0; j < text2.length; j++) {
      if (text1[i] == text2[j]) {
        dp[i][j] = (dp[i - 1]?.[j - 1] ?? 0) + 1                    // i - 1 or j - 1 may be -1, so use the optional chaining and nullish opeator
      } else {
        dp[i][j] = Math.max(dp[i - 1]?.[j] ?? 0, dp[i][j - 1] ?? 0) // optional chaining
      }
    }
  }
  console.log(dp)
  return dp[text1.length - 1][text2.length - 1]
}

const text1 = "abc", text2 = "def"
console.log(longestCommonSubsequence(text1, text2))