function maxUncrossedLines(nums1: number[], nums2: number[]): number {
  const dp: number[][] = []
  for (let i = 0; i < nums1.length; i++) {
    dp[i] = []
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j]) {
        dp[i][j] = (dp[i - 1]?.[j - 1] ?? 0) + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1]?.[j] ?? 0, dp[i][j - 1] ?? 0)
      }
    }
  }
  console.log(dp)
  return dp[nums1.length - 1][nums2.length - 1]
}

const nums1 = [2,5,1,2,5], nums2 = [10,5,2,1,5,2]
console.log(maxUncrossedLines(nums1, nums2))