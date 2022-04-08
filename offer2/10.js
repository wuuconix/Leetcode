/**
 * 剑指 Offer II 010. 和为 k 的子数组
 * 中等
 * 给定一个整数数组和一个整数 k ，请找到该数组中和为 k 的连续子数组的个数。

示例 1 :

输入:nums = [1,1,1], k = 2
输出: 2
解释: 此题 [1,1] 与 [1,1] 为两种不同的情况
示例 2 :

输入:nums = [1,2,3], k = 3
输出: 2

提示:

1 <= nums.length <= 2 * 10^4
-1000 <= nums[i] <= 1000
-10^7 <= k <= 10^7
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 这个数据量给的就非常够，貌似O(n^2)的时间复杂度应该也可以？
 * 但是为了稳妥起见 通过二分使用了 达到了 O(nlogn)，结果就是编写难度加大。
 * 
 * 首先我们采用前缀和的思想，通过遍历nums得到每个下标的前缀和 prefixSum
 * 我们这道题的整体解决思路就是通过前缀和， prefixSum[j] - prefixSum[i] ，如果他们的差就是k，说明他们之间的元素就构成了一个和为k的连续数组。
 * 这道题有负数，这样做也能达到效果，如果这道题是全部正数的话，那就滑动数组就可以了。
 * 因为我们要求 prefixSum[j] - prefixSum[i] = k
 * 假设prefixSum[j]我们已经知道了，我们要求的就是 prefixSum[i] = prefixSum[j] - k 
 * 然后再来一个哈希表 hashTable 记录 某个前缀和 的所有下标，这样我们就是知道 prefixSum[i] 这个前缀和到底有哪些下标符合了。
 * 当然 这个 i 需要 比 j小。
 * 实际操作过程中，hashTable的键为前缀和的值，值为一个列表，因为遍历的原因，里面的下标是从小到大的。
 * 这就为之后的二分查找提供了条件。
 * 于是我们就遍历前缀和数组，然后找到 targets，然后用二分查找，找到比j小的下标们，统计数量。
 * 96ms
 * 57.7mb
 */
var subarraySum = function(nums, k) {
    let prefixSum = [nums[0]] //前缀和数组
    let hashTable = new Map() //哈希表，记录对应 某个前缀和对应的下标 比如一个前缀和的为sum 表中记录着 sum: [index1, index2, ...]
    hashTable.set(nums[0], [0])
    for (let i = 1; i < nums.length; i++) {
        let sum = prefixSum[i - 1] + nums[i]
        prefixSum.push(sum)
        if (hashTable.has(sum)) {
            hashTable.get(sum).push(i) //添加下标
        } else {
            hashTable.set(sum, [i])
        }
    }
    let res = 0
    if (prefixSum[0] == k)
        res++
    for (let i = 1; i < prefixSum.length; i++) {
        if (prefixSum[i] == k) //自身前缀和就等于k
            res++
        let targetSum = prefixSum[i] - k //目标前缀和
        let targets = hashTable.get(targetSum) //prefixSum中等于target的那些下标们
        if (!targets) //如果targets是空，直接continue
            continue
        let l = 0, r = targets.length - 1
        while (l <= r) {
            let m = Math.floor((l + r) / 2)
            if (targets[m] < i) {
                l = m + 1
            } else {
                r = m - 1
            }
        }
        res += (r + 1)
    }
    return res
};

/* 看了题解，发现整体思路正确，也是用前缀和+哈希表。
但是我哈希表的形式不太好，记录了所有的下标，实际上我们只需要记录某个前缀和的个数即可。
而且完全可以在一次遍历中完成答案，不需要我之前那样，先一次遍历得到前缀和数组和哈希表。然后再遍历前缀和数组。
96 ms 30.16%
51mb 16.55% 
可以看到时间消耗一样，
但是内存消耗比之前得做法少了许多，这是因为哈希表结构变简单了。*/
var subarraySum = function(nums, k) {
    let prefix = []
    let hash = new Map()
    let sum = 0
    let res = 0 //个数
    for (let num of nums) {
        sum += num
        prefix.push(sum)
        if (sum == k) //本身就等于k需要单独算，因为prefix[0]是nums[0] 而不是 0
            res++
        let target = sum - k
        res += (hash.get(target) ?? 0) //空值合并运算符 当双文号前面的值为undefined时，就会被后面的取代
        if (hash.has(sum)) //哈希表在求完res后再设置 防止 target = num 得情况出现（k = 0）会多加自己。
            hash.set(sum, hash.get(sum) + 1)
        else
            hash.set(sum, 1)
    }
    return res
};

let nums = [1], k = 0
console.log(subarraySum(nums, k));