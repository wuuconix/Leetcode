function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) {
    return false
  }
  const map = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    map[s[i].charCodeAt(0) - 97]++
    map[t[i].charCodeAt(0) - 97]--
  }
  return map.every(i => i === 0)
}