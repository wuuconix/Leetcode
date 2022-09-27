/**
 * 剑指 Offer II 035. 最小时间差
 * 中等
 * 给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。

示例 1：

输入：timePoints = ["23:59","00:00"]
输出：1
示例 2：

输入：timePoints = ["00:00","23:59","00:00"]
输出：0

提示：

2 <= timePoints <= 2 * 104
timePoints[i] 格式为 "HH:MM"
 * @param {string[]} timePoints
 * @return {number}
 * 这道题有两个难点，一个是 两个时间之间的差的问题，23:59  与 00： 00 到底差 23 * 60 + 59 还是差 1。 我们需要顺时针和逆时针同时考虑，取一个最小值当做它们之间的差。
 * 我们解决了两个时间之间差怎么计算。
 * 但是如果直接硬比较，需要O(n^2)的时间复杂度，会超时。
 * 所以我们可以先排序，然后只需要线性遍历，计算前后之间的差值，取一个最小的min即可。
 * 104 ms 15.32%
 * 47.6 MB 6.75%
 */
var findMinDifference = function(timePoints) {
    let sort = (a, b) => {
        let ha = Number(a.slice(0, 2))
        let hb = Number(b.slice(0, 2))
        if (ha < hb)
            return -1
        if (ha > hb)
            return 1
        let ma = Number(a.slice(3, 5))
        let mb = Number(b.slice(3, 5))
        return ma - mb
    }
    let diff = (a, b) => {
        let ha = Number(a.slice(0, 2))
        let hb = Number(b.slice(0, 2))
        let ma = Number(a.slice(3, 5))
        let mb = Number(b.slice(3, 5))
        return Math.min((hb - ha) * 60 + (mb - ma), 24 * 60 - ((hb - ha) * 60 + (mb - ma))) //顺时针或者逆时针里取个小的
    }
    timePoints.sort(sort)
    let min = diff(timePoints[0], timePoints[timePoints.length - 1])
    for (let i = 1; i < timePoints.length; i++) {
        min = Math.min(min, diff(timePoints[i - 1], timePoints[i]))
    }
    return min
};

//看了一下题解，发现时间一共就 24 * 60 这么多种形式，如果 发现timePoints的长度大于此值，那么一定是有重复的两个时间，直接返回0即可。
// 耗时和空间占用大幅降低，这就是剪枝的厉害之处吧。
// 68 ms 87.84%
// 43.3 MB 72.07%
var findMinDifference = function(timePoints) {
    if (timePoints.length > 24 * 60) //就只是多添加了这个判断
        return 0
    let sort = (a, b) => {
        let ha = Number(a.slice(0, 2))
        let hb = Number(b.slice(0, 2))
        if (ha < hb)
            return -1
        if (ha > hb)
            return 1
        let ma = Number(a.slice(3, 5))
        let mb = Number(b.slice(3, 5))
        return ma - mb
    }
    let diff = (a, b) => {
        let ha = Number(a.slice(0, 2))
        let hb = Number(b.slice(0, 2))
        let ma = Number(a.slice(3, 5))
        let mb = Number(b.slice(3, 5))
        return Math.min((hb - ha) * 60 + (mb - ma), 24 * 60 - ((hb - ha) * 60 + (mb - ma))) //顺时针或者逆时针里取个小的
    }
    timePoints.sort(sort)
    let min = diff(timePoints[0], timePoints[timePoints.length - 1])
    for (let i = 1; i < timePoints.length; i++) {
        min = Math.min(min, diff(timePoints[i - 1], timePoints[i]))
    }
    return min
};
let timePoints = ["00:00","23:59","00:00"]
console.log(findMinDifference(timePoints));