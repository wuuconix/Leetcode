/* 剑指 Offer 59 - II. 队列的最大值
中等
请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。

若队列为空，pop_front 和 max_value 需要返回 -1

示例 1：
输入: 
["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
[[],[1],[2],[],[],[]]
输出: [null,null,null,2,1,2]

示例 2：
输入: 
["MaxQueue","pop_front","max_value"]
[[],[],[]]
输出: [null,-1,-1]
 

限制：

1 <= push_back,pop_front,max_value的总操作数 <= 10000
1 <= value <= 10^5
---

这道题和之前的59-1 滑动数组的最大值类似。
我们需要用一个单调的双端队列来记录最大值们。
令我比较亦或的是题目里说的均摊时间复杂度怎么求，这样写，push_back函数的时间复杂度明显不是O(1)，
因为它需要将单调队列末尾比它小的全部pop掉，然后再把这个值push进去达到单调的目的。
188 ms 67.90%
51.5 MB 24.85%
*/

var MaxQueue = function() {
    this.queue = []
    this.queue2 = [] //单调队列 用来得到最大值 存储
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if (this.queue2.length == 0)
        return -1
    else
       return this.queue2[0]
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.queue.push(value)
    while (this.queue2.length && value > this.queue2[this.queue2.length - 1]) { //删除掉小的那些
        this.queue2.pop()
    }
    this.queue2.push(value)
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if (this.queue.length == 0)
        return -1
    let temp = this.queue.shift()
    if (temp == this.queue2[0]) {
        this.queue2.shift()
    }
    return temp
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */