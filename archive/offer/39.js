/**剑指 Offer 39. 数组中出现次数超过一半的数字
 * 简单
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1:

输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
输出: 2
 
限制：

1 <= 数组长度 <= 50000

 * @param {number[]} nums
 * @return {number}
 * 哈希表一把锁 空间复杂度O(n)
 * 看题解说有O(1)的摩尔投票法，之后学习一波
 * 68 ms 68.38%
 * 42.5 MB 43.06%
 */
var majorityElement = function(nums) {
    let hashTable= new Map() //统计每个数字的数量
    for (let num of nums) {
        if (!hashTable.has(num))
            hashTable.set(num, 1)
        else
            hashTable.set(num, hashTable.get(num) + 1) //个数加一
        if (hashTable.get(num) > nums.length / 2)
            return num
    }
};


console.log(majorityElement([1]));
