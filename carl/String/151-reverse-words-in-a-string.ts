function reverseWords(s: string): string {
  const S = s.split("")
  //first trim the extra spaces
  delExtraSpaces(S)
  //then reverse all letter
  reverseStr(S, 0, S.length - 1)
  //last reverse each word's letter
  let begin = 0, end = 0
  while (end <= S.length) {
    if (S[end] != " " && end != S.length) {
      end++
    } else {
      reverseStr(S, begin, end - 1)
      end++
      begin = end
    }
  }
  return S.join("")
}

function delExtraSpaces(s: string[]): string[] {
  let left = 0, right = 0
  //trim the spaces in the begining
  while (right < s.length && s[right] == " ") {
    right++
  }
  //slow and fast pointer del the space in the middle
  while (right < s.length) {
    if (s[right] == " " && s[right - 1] == " ") {
      right++
    } else {
      s[left++] = s[right++]
    }
  }
  //consider that s[left - 1] maybe the space
  s.length = s[left - 1] == " " ? left - 1 : left
  return s
}

function reverseStr(s: string[], left: number, right: number): string[] {
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]]
    left++
    right--
  }
  return s
}

const s = "  hello world  "
console.log(reverseWords(s))
