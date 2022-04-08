/**
 * 剑指 Offer II 006. 排序数组中两个数字之和
 * 简单
 * 给定一个已按照 升序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 。

函数应该以长度为 2 的整数数组的形式返回这两个数的下标值。numbers 的下标 从 0 开始计数 ，所以答案数组应当满足 0 <= answer[0] < answer[1] < numbers.length 。

假设数组中存在且只存在一对符合条件的数字，同时一个数字不能使用两次。

示例 1：

输入：numbers = [1,2,4,6,10], target = 8
输出：[1,3]
解释：2 与 6 之和等于目标数 8 。因此 index1 = 1, index2 = 3 。
示例 2：

输入：numbers = [2,3,4], target = 6
输出：[0,2]
示例 3：

输入：numbers = [-1,0], target = -1
输出：[0,1]
 

提示：

2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers 按 递增顺序 排列
-1000 <= target <= 1000
仅存在一个有效答案
 * @param {number} target
 * @return {number[]}
 * 因为是有序，题目要求返回两个和为target的数，我们把它叫为左操作数和右操作数。
 * 左操作数我们直接线性遍历，然后求出右操作数应该是谁。
 * 然后再用二分查找求出右操作数，如果找到了右操作数直接返回他们的下标。
 * 时间复杂度O(nlogn)
 */
var twoSum = function(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        let a = numbers[i], b = target - a //希望找到的两个数
        if (b < a) { //只考虑a小b大的情况，如果它找不到合适的 在a大b小的情况下也不可能匹配。
            break
        }
        let left = i + 1, right = numbers.length - 1
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (numbers[mid] == b) { //找到了两个数
                return [i, mid]
            } else if (numbers[mid] > b) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }
    return []
};

/* 双指针！时间复杂度降到了O(n)。
两个指针，分别指向头和尾，然后如果它们的和小于target，left++
如果和大于target right--。
看起来好像十分正确，但是我们又好像难以证明它。
这是k神在offer1里一道类似题目的证明。
https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/solution/mian-shi-ti-57-he-wei-s-de-liang-ge-shu-zi-shuang-/
我们可以把所有的解的可能想成一个二维数组，他们的每个点对应了可能的(i, j)
每次i++的时候，我们就划掉一列，每次j--的时候我们就划掉一行，
这使得他们不可能走回头路。
他们必定向中间聚集。
由于每次都会划掉n个左右的可能性，而一共又n^2个可能性，也就不难理解他的时间复杂度是O(n)了。
 */
var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1
    while (left < right) {
        if (numbers[left] + numbers[right] < target)
            left++
        else if (numbers[left] + numbers[right] > target)
            right--
        else
            return [left, right]
    }
};
let numbers = [0,0,3,4], target = 0
console.log(twoSum(numbers, target));