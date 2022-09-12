function replaceSpace(s: string): string {
  const S = s.split("")
  let count = 0
  for (let letter of S) {
    count += letter == " " ? 1 : 0
  }
  S.length += 2 * count
  let left = s.length - 1, right = S.length - 1 //s and S are different
  while (left >= 0) {
    if (S[left] != " ") {
      S[right--] = S[left--]
    } else {
      left--
      S[right--] = "0"
      S[right--] = "2"
      S[right--] = "%"
    }
  }
  return S.join("")
}

const s = "We are happy."
console.log(replaceSpace(s))