/**
 * 剑指 Offer 56 - II. 数组中数字出现的次数 II
中等
在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。

示例 1：
输入：nums = [3,4,3,3]
输出：4

示例 2：
输入：nums = [9,1,7,9,7,9,7]
输出：1
 
限制：
1 <= nums.length <= 10000
1 <= nums[i] < 2^31

 * @param {number[]} nums
 * @return {number}
 * 想不出来和56-1用亦或的妙解。这道题没有要求空间复杂度。
 * 直接哈希表摆烂了。
 */
var singleNumber = function(nums) {
    let hashTable = new Map()
    for (let num of nums) {
        if (!hashTable.has(num))
            hashTable.set(num, 1)
        else
            hashTable.set(num, hashTable.get(num) + 1)
    }
    for (let key of hashTable.keys()) {
        if (hashTable.get(key) == 1) {
            return key
        }
    }
};

/* 参照k神的题解后，发现原来出现过3个数后，因为出现了3次，每位的二进制都会出现 3次。
我们去统计所有的数的每位二进制出现的个数，得到一个count[]
然后每位去mod 3。因为那些数都出现过3次，按理数组每位都是3的倍数，所以mod之后都是0.
但是我们求得那个值因为只出现 过一次，所以我们已经得到它得二进制数了。
84 ms 50.51%
44.7 MB 27.87% */
var singleNumber = function(nums) {
    let count = new Array(32).fill(0) //记录每个二进制的位的数量
    for (let num of nums) {
        for (let i = 0; i < 32; i++) {
            count[i] += (num & (1 << i))
        }
    }
    let res = 0
    for (let i = 0; i < 32; i++) {
        count[i] %= 3 //莫三后，如果还是1，就是那个数的一部分
        if (count[i])
            res |= (1 << i)
    }
    return res
};

let nums = [9,1,7,9,7,9,7]
console.log(singleNumber(nums));