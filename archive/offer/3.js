/**
 * 找出数组中重复的数字。
    在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
    示例 1：
    输入：
    [2, 3, 1, 0, 2, 5, 3]
    输出：2 或 3 

 * @param {number[]} nums
 * @return {number}
 * 72 ms 75.64%
 * 59.2 MB 5.07%
 * 硬做 统计数量 然后找出第一个不是1的key
*/

var findRepeatNumber = function(nums) {
    let dict = {}
    for (let i of nums) {
        if (i in dict)
            dict[i] += 1
        else
            dict[i] = 1
    }
    let keys = Object.keys(dict)
    for (let key of keys) {
        if (dict[key] > 1)
            return Number(key)
    }
};

//改进版 不统计数量了，遇到一样的直接返回
var findRepeatNumber = function(nums) {
    let hashTable = {}
    for (let i of nums) {
        if (i in hashTable)
            return i
        else
            hashTable[i] = 1
    }
};

console.log(findRepeatNumber([1, 1, 1]))