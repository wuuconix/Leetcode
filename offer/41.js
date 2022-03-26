import { MinPriorityQueue, MaxPriorityQueue } from '/root/.nvm/versions/node/v16.13.2/lib/node_modules/@datastructures-js/priority-queue/index.js'

/* 剑指 Offer 41. 数据流中的中位数
困难
如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。

例如，

[2,3,4] 的中位数是 3

[2,3] 的中位数是 (2 + 3) / 2 = 2.5

设计一个支持以下两种操作的数据结构：

void addNum(int num) - 从数据流中添加一个整数到数据结构中。
double findMedian() - 返回目前所有元素的中位数。
示例 1：

输入：
["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
[[],[1],[2],[],[3],[]]
输出：[null,null,null,1.50000,null,2.00000]
示例 2：

输入：
["MedianFinder","addNum","findMedian","addNum","findMedian"]
[[],[2],[],[3],[]]
输出：[null,null,2.00000,null,2.50000]
 

限制：

最多会对 addNum、findMedian 进行 50000 次调用。
---
这道题虽然是困难，但是思路还是非常清楚的。
上周六的双周赛了解到了js内置了最小有限队列和最大有限队列。
这次题目要求实现的效果肯定得用有限队列。
我一开始想的是只用一个最大优先队列。
然后addNum就直接enqueue，
然后找中位数就利用 .toArray() 然后判断奇数还是偶数，取中间一个还是中间两个。
思路非常简单，当操作量比较少的时候也能够完成预期，但是题目调用了太多次函数，导致超时了。
看了题解之后，发现可以利用两个对冲有限队列，即一个大顶堆来存储较小的一半数，一个小顶堆用来存储较大的一半数。
这样如果是偶数的总数情况下，我们能够大顶堆deque获得左操作数，小顶对deque获取右操作数。
如果总数是奇数，直接从大顶堆deque就行。
这道题如果了解这种优先队列的数据结构的情况下，还是能够想出来。
324 ms 58.47%
61.7 MB 13.67%
这道题发现ts不内置优先队列。
以后用leetcode要不还是用js得了233，ts目前对刷题而言还要写类型，貌似还麻烦些呢
*/
class MedianFinder {
    constructor() {
        this.queueA = new MaxPriorityQueue() //大顶堆，存放小的一半数
        this.queueB = new MinPriorityQueue() //小顶堆，存放大的一半数
    }

    addNum(num) {
        if (this.queueA.size() == this.queueB.size()) { //规定当总数是奇数时，最后一个数放到左边，即小的一半数里面
            this.queueB.enqueue(num)
            this.queueA.enqueue(this.queueB.dequeue())
        } else {
            this.queueA.enqueue(num)
            this.queueB.enqueue(this.queueA.dequeue())
        }
    }

    findMedian() {
        if ((this.queueA.size() + this.queueB.size()) % 2 == 1) {
            let res = this.queueA.dequeue()
            this.queueA.enqueue(res)
            return res
        } else {
            let left = this.queueA.dequeue()
            let right = this.queueB.dequeue()
            this.queueA.enqueue(left)
            this.queueB.enqueue(right)
            return (left + right) / 2
        }
    }
}

let obj = new MedianFinder()
obj.addNum(1)
obj.addNum(2)
obj.addNum(3)
// console.log(obj.queueA.size);
console.log(obj.findMedian());
