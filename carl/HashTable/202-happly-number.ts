function isHappy(n: number): boolean {
  const set = new Set()
  while(!set.has(n) && n != 1) {
    set.add(n)
    n = calcSum(n)
  }
  return n == 1
}

function calcSum(n: number): number {
  return String(n).split("").reduce((prev, cur) => prev + Number(cur) ** 2, 0)
}

console.log(isHappy(19))