function minDistance(word1: string, word2: string): number {
  const dp: number[][] = []
  for (let i = 0; i < word1.length; i++) {
    dp[i] = []
    for (let j = 0; j < word2.length; j++) {
      if (word1[i] == word2[j]) {
        dp[i][j] = dp[i - 1]?.[j - 1] ?? (i + j)
      } else {
        dp[i][j] = Math.min((dp[i - 1]?.[j] ?? Infinity), (dp[i][j - 1] ?? Infinity), i + j + 1) + 1
      }
    }
  }
  console.log(dp)
  return dp[word1.length - 1][word2.length - 1]
}

const word1 = "leetcode", word2 = "etco"
console.log(minDistance(word1, word2))