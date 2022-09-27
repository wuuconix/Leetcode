/* 剑指 Offer 30. 包含min函数的栈
定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
 
示例:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2.

普通的栈push、pop、top都是O(1)复杂度。
但是min是O(n)的。
这个时候我们就需要写一个辅助栈，来保存历史以来的最小值。从而实现O(1)
104 ms 83.04%
50.8 MB 5.29%
*/
class MinStack {

    stackA: number[] //主栈
    stackB: number[] //辅助站 用来存放历史以来额最小值
    constructor() {
        this.stackA = []
        this.stackB = []
    }

    push(x: number): void {
        this.stackA.push(x)
        if (this.stackA.length == 1 || x <= this.stackB.slice(-1)[0]) //遇到了一个新的最小值
            this.stackB.push(x)
    }

    pop(): void {
        let temp = this.stackA.pop()
        if (temp == this.stackB.slice(-1)[0])
            this.stackB.pop() //主栈中的最小值被弹出，辅助栈也需要
    }

    top(): number {
        return this.stackA.slice(-1)[0]
    }

    min(): number {
        return this.stackB.slice(-1)[0] //辅助站的栈顶就是最小值
    }
}
