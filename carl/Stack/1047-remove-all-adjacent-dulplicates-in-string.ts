function removeDuplicates(s: string): string {
  const stack: string[] = []
  for (let l of s) {
    if (stack.length != 0 && stack[stack.length - 1] == l) {
      stack.pop()
    } else {
      stack.push(l)
    }
  }
  return stack.join("")
}

const s = "wuuconix"
console.log(removeDuplicates(s))