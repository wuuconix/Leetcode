function replaceSpace(s: string): string {
  const S = s.split("")
  let spaceCount = 0
  for (let letter of S) {
    spaceCount += (letter == " " ? 1 : 0)
  }
  S.length = S.length + 2 * spaceCount
  let right = S.length - 1, left = s.length - 1
  while (left >= 0) {
    if (S[left] == " ") {
      S[right--] = "0"
      S[right--] = "2"
      S[right--] = "%"
      left--
    } else {
      S[right--] = S[left--]
    }
  }
  return S.join("")
}

const s = "We are happy."
console.log(replaceSpace(s))