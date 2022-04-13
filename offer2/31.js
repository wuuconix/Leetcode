/* 剑指 Offer II 031. 最近最少使用缓存
中等
运用所掌握的数据结构，设计和实现一个  LRU (Least Recently Used，最近最少使用) 缓存机制 。

实现 LRUCache 类：

LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 
示例：

输入
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
输出
[null, null, null, 1, null, -1, null, -1, 3, 4]

解释
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
 
提示：

1 <= capacity <= 3000
0 <= key <= 10000
0 <= value <= 105
最多调用 2 * 105 次 get 和 put
 

进阶：是否可以在 O(1) 时间复杂度内完成这两种操作？

手动维护了一个数组来判断哪个元素最久未使用。
但是这个数组的维护需要O(n)的时间，导致最后耗时很久。

788 ms 5.58%
97.7 MB 23.72%
*/
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.hashTabe = new Map()
        this.used = [] //每次调用put就会把key放入其中，然后每次调用get就会把它放到数组末尾。每次从数组头部shift得到一个需要被删除的
    }
    get(key) {
        if (this.hashTabe.has(key)) {
            this.refresh(key)
            return this.hashTabe.get(key)
        } else {
            return -1
        }
    }
    put(key, value) {
        if (this.hashTabe.has(key)) {
            this.hashTabe.set(key, value)
            this.refresh(key)
        } else {
            if (this.hashTabe.size < this.capacity) {
                this.hashTabe.set(key, value)
                this.used.push(key)
            } else {
                let ele = this.used.shift()
                this.hashTabe.delete(ele)
                this.hashTabe.set(key, value)
                this.used.push(key)
            }
        }
    }
    refresh(key) {
        let index = this.used.indexOf(key)
        for (let i = index + 1; i < this.used.length; i++) {
            this.used[i - 1] = this.used[i]
        }
        this.used.pop()
        this.used.push(key) //更新key在used数据中的位置
    }
}

/* 看了题解有用双向链表来存储 访问时间信息的。
然后看了一个js的题解，发现完全可以用map的特性来实现
564 ms 58.60%
93.5 MB 66.51%
每次get或者重新重新set的时候都把map中原来的delete掉。
这样新设置或者新访问的就会在map最后。
然后map最前面的元素就代表最近未访问的，符合题意。 */
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.hashTabe = new Map()
    }
    get(key) {
        if (this.hashTabe.has(key)) {
            let value = this.hashTabe.get(key)
            this.hashTabe.delete(key)
            this.hashTabe.set(key, value) //这样删除后重新设计，就会让k,v这个在map的最后
            return value
        } else {
            return -1
        }
    }
    put(key, value) {
        if (this.hashTabe.has(key)) {
            this.hashTabe.delete(key)
            this.hashTabe.set(key, value)
        } else {
            if (this.hashTabe.size < this.capacity) {
                this.hashTabe.set(key, value)
            } else {
                let target = this.hashTabe.keys().next().value //map中最前面的键，说明它最久未被访问
                this.hashTabe.delete(target)
                this.hashTabe.set(key, value)
            }
        }
    }
}
let a = new LRUCache(2)
a.put(1, 1)
a.put(2, 2)
a.get(1)
a.put(3, 3)