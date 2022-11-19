function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let i = 0, j = 0, num = 0
  while (j < s.length) {
    if (g[i] <= s[j]) {
      num++
      i++
      j++
    } else {
      j++
    }
  }
  return num
}

const g = [1,2], s = [1,2,3]
console.log(findContentChildren(g, s))