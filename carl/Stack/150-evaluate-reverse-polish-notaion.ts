function evalRPN(tokens: string[]): number {
  const ops = ["+", "-", "*", "/"]
  const stack: number[] = []
  for (let token of tokens) {
    if (ops.includes(token)) {
      const right = stack.pop()!
      const left = stack.pop()!
      if (token != "/") {
        stack.push(eval(`${left} ${token} ${right}`))
      } else {
        //in this, we cannot use Math.floor. Beacause some
        //example in negative such as -0.01. Our target is 
        //0, not -1
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
        //wuuconix first use Math.trunc in 2022/9/12
        stack.push(Math.trunc(left / right))
      }
    } else {
      stack.push(Number(token))
    }
  }
  return stack.pop()!
}

const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
console.log(evalRPN(tokens))