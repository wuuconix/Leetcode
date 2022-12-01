function lemonadeChange(bills: number[]): boolean {
  let fiveNum = 0
  let tenNum = 0
  for (let bill of bills) {
    if (bill == 5) {
      fiveNum += 1
    } else if (bill == 10) {
      fiveNum -= 1
      tenNum += 1
    } else {
      if (tenNum <= 0) {
        fiveNum -= 3
      } else {
        fiveNum -= 1
        tenNum -= 1
      }

    }
    if (fiveNum < 0 || tenNum < 0) {
      return false
    }
  }
  return true
}

const bills = [5,5,5,5,20,20,5,5,20,5]
console.log(lemonadeChange(bills))