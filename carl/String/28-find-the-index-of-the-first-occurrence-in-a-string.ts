function strStr(hayStack: string, needle: string): number {
  if (needle == "") {
    return 0
  }
  const next = genNext(needle)
  let j = 0
  for (let i = 0; i < hayStack.length; i++) {
    while (j > 0 && hayStack[i] != needle[j]) {
      j = next[j - 1]
    }
    if (hayStack[i] == needle[j]) {
      j++
    }
    if (j == needle.length) {
      return i - needle.length + 1
    }
  }
  return -1
}

function genNext(needle: string): number[] {
  const next = new Array(needle.length)
  let j = 0
  next[j] = 0
  for (let i = 1; i < needle.length; i++) {
    while(j > 0 && needle[j] != needle[i]) {
      j = next[j - 1]
    }
    if (needle[j] == needle[i]) {
      j++
    }
    next[i] = j
  }
  return next
}

const hayStack = "aabaabaaf", needle = "aabaaf"
console.log(strStr(hayStack, needle))