function partition(s: string): string[][] {
  const ans: string[][] = []
  const path: string[] = []
  function backtracing(startIndex: number) {
    if (startIndex == s.length) {
      return void ans.push([...path])
    }
    for (let i = startIndex; i < s.length; i++) {
      const temp = s.slice(startIndex, i + 1)
      if (!isPalindrome(temp)) {
        continue
      }
      path.push(temp)
      backtracing(i + 1)
      path.pop()
    }
  }
  backtracing(0)
  return ans
}

function isPalindrome(s: string) {
  let left = 0, right = s.length - 1
  while (left <= right) {
    if (s[left] != s[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

const s = "aab"
const ans = partition(s)
console.log(ans)