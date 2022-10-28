function restoreIpAddresses(s: string): string[] {
  const ans: string[] = []
  let ip: string[] = []
  function backtracing(startIndex: number, dotNum: number) {
    if (dotNum == 3) {
      const target = s.slice(startIndex)
      if (isValid(target)) {
        ip.push(target)
        ans.push(ip.join(""))
        ip.pop()
      }
      return
    }
    for (let i = startIndex; i <= startIndex + 2 && i < s.length; i++) {
      const target = s.slice(startIndex, i + 1)
      if (isValid(target)) {
        ip.push(target)
        ip.push(".")
        backtracing(i + 1, dotNum + 1)
        ip.pop()
        ip.pop()
      }
    }
  }
  backtracing(0, 0)
  return ans
}

function isValid(s: string): boolean {
  const num = Number(s) //if has non-numeric digit, will return NaN
  if (s.length == 0 || isNaN(num) || num > 255 || (s.length > 1 && s[0] == "0")) {
    return false
  } else {
    return true
  }
}

const s = "101023"
console.log(restoreIpAddresses(s))

