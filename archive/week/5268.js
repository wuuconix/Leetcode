/**
 * 5268. 找出两数组的不同
 * 简单
 * 给你两个下标从 0 开始的整数数组 nums1 和 nums2 ，请你返回一个长度为 2 的列表 answer ，其中：

    answer[0] 是 nums1 中所有 不 存在于 nums2 中的 不同 整数组成的列表。
    answer[1] 是 nums2 中所有 不 存在于 nums1 中的 不同 整数组成的列表。
    注意：列表中的整数可以按 任意 顺序返回。

     

    示例 1：

    输入：nums1 = [1,2,3], nums2 = [2,4,6]
    输出：[[1,3],[4,6]]
    解释：
    对于 nums1 ，nums1[1] = 2 出现在 nums2 中下标 0 处，然而 nums1[0] = 1 和 nums1[2] = 3 没有出现在 nums2 中。因此，answer[0] = [1,3]。
    对于 nums2 ，nums2[0] = 2 出现在 nums1 中下标 1 处，然而 nums2[1] = 4 和 nums2[2] = 6 没有出现在 nums2 中。因此，answer[1] = [4,6]。
    示例 2：

    输入：nums1 = [1,2,3,3], nums2 = [1,1,2,2]
    输出：[[3],[]]
    解释：
    对于 nums1 ，nums1[2] 和 nums1[3] 没有出现在 nums2 中。由于 nums1[2] == nums1[3] ，二者的值只需要在 answer[0] 中出现一次，故 answer[0] = [3]。
    nums2 中的每个整数都在 nums1 中出现，因此，answer[1] = [] 。 
     

    提示：

    1 <= nums1.length, nums2.length <= 1000
    -1000 <= nums1[i], nums2[i] <= 1000

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 * 由于数据量小。直接哈希表O(n)解即可。注意用Set去重。
 */
var findDifference = function(nums1, nums2) {
    let hashTable1 = new Map(), hashTable2 = new Map(), ans = new Array(2)
    ans[0] = new Set(), ans[1] = new Set()
    for (num of nums1) {
        if (!hashTable1.has(num))
            hashTable1.set(num, 1)
    }
    for (num of nums2) {
        if (!hashTable2.has(num))
            hashTable2.set(num, 1)
    }
    for (num of nums1) {
        if (!hashTable2.has(num)) {
            ans[0].add(num)
        }
    }
    for (num of nums2) {
        if (!hashTable1.has(num)) {
            ans[1].add(num)
        }
    }
    return [[...ans[0]], [...ans[1]]]
};

let nums1 = [1,2,3], nums2 = [2,4,6]
console.log(findDifference(nums1, nums2));