function countSubstrings(s: string): number {
  const dp: boolean[][] = []
  let ans = 0
  for (let i = s.length - 1; i >= 0; i--) {
    dp[i] = []
    for (let j = i; j < s.length; j++) {
      if (s[i] == s[j]) {
        if (j - i <= 1 || dp[i + 1][j - 1]) {
          ans++
          dp[i][j] = true
        }
      }
    }
  }
  console.log(dp)
  return ans
}

const s = "aaa"
console.log(countSubstrings(s))