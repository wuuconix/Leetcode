  function findLength(nums1: number[], nums2: number[]): number {
    let ans: number = 0
    const dp: number[][] = []
    for (let i = 0; i < nums1.length; i++) {
      dp[i] = []
      for (let j = 0; j < nums2.length; j++) {
        if (nums1[i] == nums2[j]) {
          if (i == 0 || j == 0) {             // they are the first
            dp[i][j] = 1
          } else {
            dp[i][j] = dp[i - 1][j - 1] + 1   // fowling
          }
          ans = Math.max(ans, dp[i][j])
        } else {
          dp[i][j] = 0
        }
      }
    }
    console.log(dp)
    return ans
  }

const nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
console.log(findLength(nums1, nums2))