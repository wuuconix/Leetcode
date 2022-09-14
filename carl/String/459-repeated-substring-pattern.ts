function repeatedSubstringPattern_1(s: string): boolean {
  return s.repeat(2).slice(1, -1).search(s) == -1 ? false : true
}

function repeatedSubstringPattern(s: string): boolean {
  const next = genNext(s)
  //know that next[next.length - 1] must be the biggest in the next array
  //if next[next.length - 1] is 0, meaning that no equal suffix and prefix
  //s.length - next[next.length - 1] is the minium repeated string in the s
  //so if s.length % minuim repated string's == 0, then the s is repeated by it
  return ((next[s.length - 1] != 0) && (s.length % (s.length - next[s.length - 1]) == 0)) ? true : false
}

function genNext(s: string): number[] {
  const next = new Array(s.length)
  let j = 0
  next[0] = j
  for (let i = 1; i < s.length; i++) {
    while (j > 0 && s[i] != s[j]) {
      j = next[j - 1]
    }
    if (s[i] == s[j]) {
      j++
    }
    next[i] = j
  }
  return next
}

const s = "ababc"
console.log(repeatedSubstringPattern(s))