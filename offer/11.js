/**
 * 剑指 Offer 11. 旋转数组的最小数字
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
    给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。请返回旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为1。  
    示例 1：

    输入：[3,4,5,1,2]
    输出：1
    示例 2：

    输入：[2,2,2,0,1]
    输出：0

 * @param {number[]} numbers
 * @return {number}
 * 这道题硬刚直接js数组排序，返回头/尾数据就行
 * 但是这道题因为是旋转数组，发生降序的位置就是关键节点。比如 45123。5和1之间发生了降序，那么1就是最小值。
 * 注意如果数组 全部都是升序，没有找到降序的点，那么它的最小值就是0位置的值。
 * 60 ms 84.75%
 * 41.6 MB 13.45%
 * 我已经觉得我够吊的了，虽然时间复杂度O(n)和直接sort相比可能还慢了点，但是思路是很不错的。
 * 这道题的官方解法是二分查找。时间复杂度为 O(logn)
 * 我对二分查找还是有些不太理解，比如最后的最低点为什么就是numbers[left]
 * 60 ms 84.75%
 * 41.2 MB 43.34%
 */
var minArray = function(numbers) { //找规律
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i + 1] < numbers[i])
            return numbers[i + 1]
    }
    return numbers[0]
};

var minArray = function(numbers) { //二分查找
    let left = 0, right = numbers.length - 1
    while (left < right) {
        let pivot = Math.floor(left + (right - left) / 2)
        if (numbers[pivot] < numbers[right]) { //说明pivot在最低点右边
            right = pivot //这里不能写为pivot - 1 感觉二分挺玄学的，很多东西不能直观的解释
        } else if (numbers[pivot] > numbers[right]) { //pivot在最低点左边
            left = pivot + 1
        } else { //两个相同的情况，无法判断pivot在最低端的左侧还是右侧
            right -= 1
        }
    }
    return numbers[left]
};

console.log(minArray([2,2,2,0,1]))