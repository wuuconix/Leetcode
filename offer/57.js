/**
 * 剑指 Offer 57. 和为s的两个数字
 * 简单
 * 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

    示例 1：

    输入：nums = [2,7,11,15], target = 9
    输出：[2,7] 或者 [7,2]
    示例 2：

    输入：nums = [10,26,30,31,47,60], target = 40
    输出：[10,30] 或者 [30,10]
     

    限制：

    1 <= nums.length <= 10^5
    1 <= nums[i] <= 10^6

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 二分查找一把梭。不多说
 * 时间复杂度O(nlogn)
 * 136 ms 20.10%
 * 55.5 MB 73.89%
 */
var twoSum = function(nums, target) {
    let get = num => {
        let i = 0, j = nums.length - 1
        while (i <= j) {
            let mid = Math.floor((i + j) / 2)
            if (nums[mid] == num)
                return mid
            else if (nums[mid] > num)
                j = mid - 1
            else
                i = mid + 1
        }
        return -1
    }
    for (let num of nums) {
        if(get(target - num) != -1)
            return [num, target - num]
    }
};

/* 看了k神的评论，发现直接用哈希表貌似时间复杂度是 O(n)？
因为只需要遍历一遍，但是可能需要完整的遍历，而我那个方法虽然时间最坏复杂度需要 O(nlogn) 
但是一般情况下遍历到一般就ok了，所以这样做反而时间要长。
而且空间复杂度为O(n)，占用了额外的空间。
176 ms 8.12%
82.7 MB 4.99% */
var twoSum = function(nums, target) {
    let hashTable = new Map()
    for (let num of nums) {
        if (!hashTable.has(num)) {
            hashTable.set(num, 1)
        }
    }
    for(let num of nums) {
        if (hashTable.has(target - num))
            return [num, target - num]
    }
};

/* k神的解。因为数组是有序的。我们可以用对撞指针。
左指针左边，右指针右边。
如果他们的和就是target，直接返回。
如果他们的和小于target，说明值太大了，这个时候右指针减1
反之左指针+1
但是这样的正确性证明我还没有理解。 */
var twoSum = function(nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= nums.length -1 && right >= 0) {
        if (nums[left] + nums[right] == target)
            return [nums[left], nums[right]]
        else if (nums[left] + nums[right] > target)
            right--
        else if (nums[left] + nums[right] < target)
            left++
    }
};
let nums = [18,19,25,30,39,41,61,77,88,97], target = 59
console.log(twoSum(nums, target));