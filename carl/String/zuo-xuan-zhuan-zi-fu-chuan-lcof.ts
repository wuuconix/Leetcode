function reverseLeftWords(s: string, n: number): string {
  const S = s.split("")
  //first reverse first n letters
  reverseStr(S, 0, n - 1)
  //then reverse last letters
  reverseStr(S, n, S.length - 1)
  //last reverse all letter
  reverseStr(S, 0, S.length - 1)
  return S.join("")
}

function reverseStr(s: string[], begin: number, end: number): string[] {
  while (begin < end) {
    [s[begin], s[end]] = [s[end], s[begin]]
    begin++
    end--
  }
  return s
}

const s = "abcdefg", k = 2

console.log(reverseLeftWords(s, k))