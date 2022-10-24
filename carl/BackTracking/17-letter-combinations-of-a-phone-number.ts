function letterCombinations(digits: string): string[] {
  if (digits.length == 0) {
    return []
  }
  const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
  const ans: string[] = []
  const path: string[] = []
  function backtracking(index: number) {
    if (index == digits.length) {
      ans.push(path.join(""))
      return
    }
    const phoneCode = Number(digits[index])
    const letters = map[phoneCode].split("")
    for (let letter of letters) {
      path.push(letter)
      backtracking(index + 1)
      path.pop()
    }
  }
  backtracking(0)
  return ans
}

const digits = "2"
console.log(letterCombinations(digits))