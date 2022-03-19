/* 剑指 Offer 31. 栈的压入、弹出序列

难度： 中等

输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如，序列 {1,2,3,4,5} 是某栈的压栈序列，序列 {4,5,3,2,1} 是该压栈序列对应的一个弹出序列，但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。

示例 1：

输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
输出：true
解释：我们可以按以下顺序执行：
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
示例 2：

输入：pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
输出：false
解释：1 不能在 2 之前弹出。
 
提示：

0 <= pushed.length == popped.length <= 1000
0 <= pushed[i], popped[i] < 1000
pushed 是 popped 的排列。
-----
思路比较简单。就是去模拟栈的push和pop。
当试图去pop的时候就得看stack里面的栈顶，如果不对，那说明这一步无法pop。
在模拟的过程中，popped数组的指针到了最后，说明已经全部pop成功，返回true

72 ms 76.62%
44.2 MB 20.78%
*/
function validateStackSequences(pushed: number[], popped: number[]): boolean {
    let i: number = 0, j: number = 0
    let stack: number[] = []
    while (j < popped.length) {
        if (i < pushed.length && pushed[i] == popped[j]) { //一个push一个pop直接抵销
            i++
            j++
        } else if (popped[j] == stack[stack.length - 1]){ //stack里pop
            j++
            stack.pop()
        } else if (i < pushed.length) { //push进stack
            stack.push(pushed[i])
            i++
        } else { //发现既不能pop也不能push，说明出现了错误
            return false
        }
    }
    return true
};

/* 以下是看了题解后的代码。
思路更加清楚，以辅助站最后是否长度为空作为函数返回值的判断条件。
让我自己写的代码虽然也是这个意思，但是没有很好的表达出来，显得比较晦涩
64 ms 94.81%
44.2 MB 19.48% */
function validateStackSequences2(pushed: number[], popped: number[]): boolean {
    let stack: number[] = [] //辅助栈
    let i: number = 0 //popped数组的指针
    for (let num of pushed) {
        stack.push(num)
        while(stack.length && popped[i] == stack[stack.length - 1]) {
            stack.pop()
            i++
        }
    }
    return !stack.length
};

let pushed: number[] = [1,2,3,4,5], popped: number[] = [4,5,3,2,1]
console.log(validateStackSequences2(pushed, popped));
