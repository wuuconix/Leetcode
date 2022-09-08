function canConstruct(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) {
    return false
  }
  const map: Array<number> = new Array(26).fill(0)
  for (let s of magazine) {
    map[s.charCodeAt(0) - 97]++
  }
  for (let s of ransomNote) {
    map[s.charCodeAt(0) - 97]--
    if (map[s.charCodeAt(0) - 97] < 0) {
      return false
    }
  }
  return true
}

const ransomNote = "aa", magazine = "ab"
console.log(canConstruct(ransomNote, magazine))