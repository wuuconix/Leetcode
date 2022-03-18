/**
 * 88. 合并两个有序数组
 * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

    请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

    注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

    示例 1：

    输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    输出：[1,2,2,3,5,6]
    解释：需要合并 [1,2,3] 和 [2,5,6] 。
    合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。

 *  绷不住了，直接用API也搞了半天，slice，concat，sort。
    sort最坑，默认用ascii排序，需要自己写comapre函数，一般就是 (a, b) => a - b  负数时前者小，0时两者相等，正数是前者大
    60 ms 85.5%
    41.5 MB 5.4%
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let nums1_ = nums1.slice(0, m)
    let result = nums1_.concat(nums2)
    result.sort((a, b) => a - b)
    for (let i = 0; i < m + n; i++) {
        nums1[i] = result[i]
    }
    console.log(nums1)
};


nums1 = [1,2,3,0,0,0]
m = 3
nums2 = [2, 5, 6]
n = 3

merge(nums1, m, nums2, n)