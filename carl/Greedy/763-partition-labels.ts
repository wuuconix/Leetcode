function partitionLabels(s: string): number[] {
  let parts: number[] = []
  let sets: Set<string>[] = []
  for (let letter of s) {
    const index = judge(sets, letter)
    if (index == -1) {
      parts.push(1)
      sets.push(new Set([letter]))
    } else {
      parts[index]++
      for (let i = index + 1; i < parts.length; i++) {
        parts[index] += parts[i]
        sets[index] = new Set([...sets[index], ...sets[i]])
      }
      parts.splice(index + 1, parts.length - index)
      sets.splice(index + 1, sets.length - index)
    }
  }
  return parts
}

function judge(sets: Set<string>[], letter: string) {
  for (let i = 0; i < sets.length; i++) {
    if (sets[i].has(letter)) {
      return i
    }
  }
  return -1
}

//todo: method of carl haven't implemented

const s = "ababcbacadefegdehijhklij"
console.log(partitionLabels(s))