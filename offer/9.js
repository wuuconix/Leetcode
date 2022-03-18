/* 剑指 Offer 09. 用两个栈实现队列
用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
示例 1：

输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]

直接用数组push和shift
324 ms 51.37%
53.2 MB 5.91%
但是这样实际上和题意相悖了。

题意让我们用两个栈，对于js来说，我们对数组的操作只能有push和pop，不能有shift。
解决方法是一个栈用来push，一个栈用来pop。
404 ms 7.92%
56.5 MB 5.01%

*/

var CQueue = function() {
    this.stack1 = [] //用来push
    this.stack2 = [] //用来pop
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stack1.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (this.stack1.length == 0 && this.stack2.length == 0) {
        return -1
    } else if (this.stack2.length == 0) { //stack2无数可弹出了，这时候需要把stack1依次放pop后push进入stack2，这让statck1的栈底，即head变成了stack2的栈顶
        while (this.stack1 != 0) {
            this.stack2.push(this.stack1.pop())
        }
        return this.stack2.pop()
    } else { //正常就从statck2中弹出
        return this.stack2.pop()
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */