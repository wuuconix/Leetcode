function reverseStr(s: string, k: number): string {
  const ans = s.split("")
  for (let i = 0; i < ans.length; i += 2 * k) {
    let left = i
    let right = (i + k - 1) >= ans.length ? ans.length - 1 : i + k - 1
    while (left < right) {
      [ans[left], ans[right]] = [ans[right], ans[left]]
      left++
      right--
    }
  }
  return ans.join("")
}

const s = "abcd", k = 4
console.log(reverseStr(s, k))