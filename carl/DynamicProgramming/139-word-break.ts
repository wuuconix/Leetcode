function wordBreak(s: string, wordDict: string[]): boolean {
  const dp: boolean[] = new Array(s.length + 1).fill(false)
  dp[0] = true
  for (let i = 1; i <= s.length; i++) {
    for (let word of wordDict) {
      if (word.length > i) {
        continue
      }
      if (s.slice(i - word.length, i) === word) {
        dp[i] = dp[i] || dp[i - word.length]
      }
    }
  }
  console.log(dp)
  return dp[s.length]
}

const s = "dogs", wordDict = ["dog","s","gs"]
console.log(wordBreak(s, wordDict))