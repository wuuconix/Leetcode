function monotoneIncreasingDigits(n: number): number {
  const numArr: number[] = [...String(n)].map(v => Number(v))
  let index = numArr.length
  for (let i = numArr.length - 1; i >= 1; i--) {
    if (numArr[i] < numArr[i - 1]) {
      numArr[i - 1]--
      index = i
    }
  }
  for (let i = index; i < numArr.length; i++) {
    numArr[i] = 9
  }
  return Number(numArr.join(""))
}

const n = 10
console.log(monotoneIncreasingDigits(n))