/**
 * 剑指 Offer II 030. 插入、删除和随机访问都是 O(1) 的容器
 * 中等
 * 设计一个支持在平均 时间复杂度 O(1) 下，执行以下操作的数据结构：

insert(val)：当元素 val 不存在时返回 true ，并向集合中插入该项，否则返回 false 。
remove(val)：当元素 val 存在时返回 true ，并从集合中移除该项，否则返回 false 。
getRandom：随机返回现有集合中的一项。每个元素应该有 相同的概率 被返回。
 
示例 :

输入: inputs = ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
输出: [null, true, false, true, 2, true, false, 2]
解释:
RandomizedSet randomSet = new RandomizedSet();  // 初始化一个空的集合
randomSet.insert(1); // 向集合中插入 1 ， 返回 true 表示 1 被成功地插入

randomSet.remove(2); // 返回 false，表示集合中不存在 2 

randomSet.insert(2); // 向集合中插入 2 返回 true ，集合现在包含 [1,2] 

randomSet.getRandom(); // getRandom 应随机返回 1 或 2 
  
randomSet.remove(1); // 从集合中移除 1 返回 true 。集合现在包含 [2] 

randomSet.insert(2); // 2 已在集合中，所以返回 false 

randomSet.getRandom(); // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 

提示：

-231 <= val <= 231 - 1
最多进行 2 * 105 次 insert ， remove 和 getRandom 方法调用
当调用 getRandom 方法时，集合中至少有一个元素

 * Initialize your data structure here.
 * js 直接用set暴力做直接过了。。
 * 题目要求实现一个插入、删除、随机得到一个数的set。
 * js直接用set暴力来，add 和 delete原生O(1)。
 * 至于getRandom，因为set没法原生使用下标，所以需要先转化为数组，然后取下标，这里的时间复杂度实际上是O(n)。
 * 但是最后没有超时。
 *  
 */
var RandomizedSet = function() {
    this.hashTable = new Set()
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (!this.hashTable.has(val)) {
        this.hashTable.add(val)
        return true
    } else {
        return false
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.hashTable.has(val)) {
        this.hashTable.delete(val)
        return true
    } else {
        return false
    }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let length = this.hashTable.size
    let randomIndex = Math.floor(Math.random() * length)
    return [...this.hashTable][randomIndex]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */


/**
 * 用set最后那个getRandom不是O(1)
 * 而且我不太确定set里面add和delete是不是O(1)，
 * 所以这里还是用map吧。然后为了实现getRandom为O(1)，我们不能再调用的时候再生成一个数组。
 * 我们需要每时每刻维护一个数组，里面存放了所有的键，至于它们的顺序可以任意，
 * 因为我们需要这个数组的唯一目的是随机拿出一个数。
 * 所以我们可以利用map和一个array完成题目要求。
 * 328 ms 98.45%
 * 89.8 MB 79.90%
 * Initialize your data structure here.
 */
 var RandomizedSet = function() {
    this.hashTable = new Map()
    this.keys = [] //用来保存所有的键
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (!this.hashTable.has(val)) {
        this.keys.push(val)
        this.hashTable.set(val, this.keys.length - 1) //哈希表记录值在数组中的下标
        return true
    } else {
        return false
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.hashTable.has(val)) {
        let index = this.hashTable.get(val)
        let temp = this.keys[index]
        this.keys[index] = this.keys[this.keys.length - 1]
        this.keys[this.keys.len - 1] = temp //交换index下标和数组末尾
        this.hashTable.set(this.keys[index], index) //需要更新下标
        this.hashTable.delete(val)
        this.keys.pop() //删除最后一个元素
        return true
    } else {
        return false
    }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.keys[Math.floor(Math.random() * this.keys.length)]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */