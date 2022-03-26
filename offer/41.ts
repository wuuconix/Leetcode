import { MinPriorityQueue } from '/root/.nvm/versions/node/v16.13.2/lib/node_modules/@datastructures-js/priority-queue/index.js'

class MedianFinder {
    queue: MinPriorityQueue<number>
    constructor() {
        this.queue = new MinPriorityQueue()
    }

    addNum(num: number): void {
        this.queue.enqueue(num)
    }

    findMedian(): number {
        let a: number[] = this.queue.toArray()
        if (a.length % 2 == 1)
            return a[Math.floor(a.length / 2)]
        else
            return (a[a.length / 2 - 1] + a[a.length / 2]) / 2
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

let obj = new MedianFinder()
obj.addNum(1)
obj.addNum(2)
obj.addNum(3)
console.log(obj.findMedian());
