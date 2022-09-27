/**剑指 Offer 40. 最小的k个数
 * 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

示例 1：

输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]
示例 2：

输入：arr = [0,1,2,1], k = 1
输出：[0]

限制：
0 <= k <= arr.length <= 10000
0 <= arr[i] <= 10000
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 * 之前在40.ts里写了直接调库、手撸快排，然后参照k神利用快排思路当枢纽为k的时候直接返回的算法。
 * 但是那种算法可能用了递归的原因，执行时间爆炸。
 * 在参考了一位评论区js写法后，把递归用一个while循环代替。
 * 成功实现应有的时间复杂度。
 * 68 ms 99.75%
 * 44.6 MB 59.87%
 */
var getLeastNumbers = function(arr, k) {
    if (k >= arr.length)
        return arr
    let quicksort = (l, r) => {
        let i = l, j = r, temp
        while (i < j) {
            while (i < j && arr[l] <= arr[j])
                j--
            while (i < j && arr[l] >= arr[i])
                i++
            temp = arr[i], arr[i] = arr[j], arr[j] = temp
        }
        temp = arr[l], arr[l] = arr[i], arr[i] = temp
        return i
    }
    let left = 0, right = arr.length - 1
    let index = quicksort(left, right)
    while (index != k) {
        if (index < k) {
            left = index + 1
            index = quicksort(left, right)
        }
        else if (index > k) {
            right = index - 1
            index = quicksort(left, right)
        }
    }
    return arr.slice(0, k)
};

console.log(getLeastNumbers([1, 2, 3], 2));