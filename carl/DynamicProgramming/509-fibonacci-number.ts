function fib(n: number): number {
  const NMAX = 30
  const dp = new Array(NMAX + 1).fill(0)
  dp[1] = 1
  for (let i = 2; i <= NMAX; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  console.log(dp)
  return dp[n]
}

const n = 4
console.log(fib(n))