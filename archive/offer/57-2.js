/**
 * 剑指 Offer 57 - II. 和为s的连续正数序列
 * 简单
 * 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

    序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

    示例 1：
    输入：target = 9
    输出：[[2,3,4],[4,5]]

    示例 2：
    输入：target = 15
    输出：[[1,2,3,4,5],[4,5,6],[7,8]]
     
    限制：
    1 <= target <= 10^5
 * @param {number} target
 * @return {number[][]}
 * 数据量为10W。时间复杂度最大为O(nlogn)
 * 我的做法类似双指针，满指针进行线性遍历。
 * 另一位进行二分查找，然后利用求和公式判断 区间的值是否是 target。
 * 总的时间复杂度是O(nlogn)
 * 88 ms 20.42%
 * 41.8 MB 30.23%
 */
var findContinuousSequence = function(target) {
    const gen = (left, right) => {
        let res = []
        for (let i = left; i <= right; i++)
            res.push(i)
        return res
    }
    let res = []
    for (let i = 1; i <= Math.floor(target / 2); i++) {
        let left = i, right = Math.floor(target / 2) + 1
        while (left <= right) {
            let mid = Math.floor((left +  right) / 2)
            let sum = (i + mid) * (mid - i + 1) / 2 //求和公式
            if (sum == target) {
                res.push(gen(i, mid))
                break
            } else if (sum > target) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }
    return res
};

/* 看了k神的题解。发现这道题可以用滑动数组来解决，一开始做题的想到了，但是当时想错了一点，然后就没有继续。
双指针。用sum来记录两个指针之间的和。如果和大于target，说明值大了，这个时候我们让左指针往右移动1位。
为什么这个时候只能让左指针往右移动1呢？因为如果我们让左指针往左移动，因为它求得是范围里得和，左指针往左相当于又多了一个值，总得值就会变大，不符合情况。
那如果让右指针往右移动一个呢？这个总的值就会减小了！但是你要直到，右值就是从上一个移动过来的，也就是之前的情况我们已经考虑过了。
所以这种情况下，我们唯一的办法就是把左指针往右移动一位。

当碰到范围里的值小于target的时候，我们的动作是把右指针移动1。我们同样有一个问题，为什么不把左指针移动1呢？
这是因为我们不用考虑左指针移动之前的事情。因为左指针+1的唯一情况就是已经发现了一个范围，或者范围的值太大了。说明我们左指针到了现在这个位置，说明
之前的位置已经完成了任务，我们不需要考虑。综上 ，只能把右指针 移动1.
68 ms 72.62%
40.8 MB 79.38%*/
var findContinuousSequence = function(target) {
    const gen = (left, right) => {
        let res = []
        for (let i = left; i <= right; i++)
            res.push(i)
        return res
    }
    let left = 1, right = 2, sum = 3
    let res = []
    while (left < right) {
        if (sum == target) {
            res.push(gen(left, right))
        }
        if (sum >= target) {
            sum -= left
            left++
        } else {
            right++
            sum += right
        }
    }
    return res
};
let target = 9
console.log(findContinuousSequence(target));