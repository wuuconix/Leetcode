/* 剑指 Offer 40. 最小的k个数
简单

输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

示例 1：

输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]
示例 2：

输入：arr = [0,1,2,1], k = 1
输出：[0]
 
限制：

0 <= k <= arr.length <= 10000
0 <= arr[i] <= 10000
---
直接暴力了，排序后直接slice获取前k个数
108 ms 54.29%
46.2 MB 25.71%
*/
function getLeastNumbers1(arr: number[], k: number): number[] {
    arr = arr.sort((a, b) => a - b)
    return arr.slice(0, k)
};

/* 手动实现快排。
学习并手写快排的时候发现已经要右边的指针先动，找到一个比枢纽小的，然后左边再动。
不能左边先动，不然就乱套了。
时间竟然比用库函数更快了。。
100 ms  73.57%
45.8 MB 39.28%*/
function getLeastNumbers2(arr: number[], k: number): number[] {
    let quicksort = (l: number, r: number): void => {
        if (l >= r)
            return
        let i: number = l, j: number = r, temp: number
        while (i < j) {
            while (i < j && arr[j] >= arr[l])
                j--
            while (i < j && arr[i] <= arr[l])
                i++
            temp = arr[i], arr[i] = arr[j], arr[j] = temp
        }
        temp = arr[l], arr[l] = arr[i], arr[i] = temp
        quicksort(l, i - 1)
        quicksort(i + 1, r)
    }
    quicksort(0, arr.length - 1)
    return arr.slice(0, k)
};

/* 利用快排的思想。
当某一次枢纽为k时，那么比它小的k个数就是我们所求。
根据大佬们的题解，这个时间复杂度可以降到O(n)
但是typescript为什么不知道为什么跑的这么慢。
544 ms 5.00%
49.6 MB 6.43%*/
function getLeastNumbers(arr: number[], k: number): number[] {
    if (k >= arr.length)
        return arr
    let quicksort = (l: number, r: number): number[] => {
        let i: number = l, j: number = r, temp: number
        while (i < j) {
            while (i < j && arr[l] <= arr[j])
                j--
            while (i < j && arr[l] >= arr[i])
                i++
            temp = arr[i], arr[i] = arr[j], arr[j] = temp
        }
        temp = arr[l], arr[l] = arr[i], arr[i] = temp
        if (i < k)
            return quicksort(i + 1, r)
        else if (i > k)
            return quicksort(0, i - 1)
        else
            return arr.slice(0, k)
    }
    return quicksort(0, arr.length - 1)
};

console.log(getLeastNumbers([3, 2, 1], 2));
