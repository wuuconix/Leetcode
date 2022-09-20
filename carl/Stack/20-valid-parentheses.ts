function isValid(s: string): boolean {
  const stack: string[] = []
  const map: Map<string, string> = new Map([[")", "("], ["}", "{"], ["]", "["]])
  for (let p of s) {
    if (["(", "[", "{"].includes(p)) {
      stack.push(p)
    } else {
      const pair = map.get(p)
      if (stack[stack.length - 1] == pair) {
        stack.pop()
      } else {
        stack.push(p)
      }
    }
  }
  return stack.length == 0
}

function isValid2(s: string): boolean {
  const stack: string[] = []
  for (let p of s) {
    if (p == "(") {
      stack.push(")")
    } else if (p == "[") {
      stack.push("]")
    } else if (p == "{") {
      stack.push("}")
    } else {
      const top = stack.pop()
      if (top != p) {
        return false
      }
    }
  }
  return stack.length == 0
}

const s = "(){]"
console.log(isValid2(s))