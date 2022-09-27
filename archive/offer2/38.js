/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// var dailyTemperatures = function(temperatures) {
//     let hashTable = new Map() //键为温度，值为下标数组
//     for (let i = 0; i < temperatures.length; i++) {
//         if (!hashTable.has(temperatures[i])) {
//             hashTable.set(temperatures[i], [i])
//         } else {
//             hashTable.get(temperatures[i]).push(i)
//         }
//     }
//     console.log(hashTable)
//     let ans = []
//     for (let i = 0; i < temperatures.length; i++) {
//         let tempe = temperatures[i] + 1 //需要找到的更高的温度
//         let index = null//目标下标
//         while (tempe <= 100) {
//             if (hashTable.has(tempe)) {
//                 let l = hashTable.get(tempe) //下标列表
//                 if (l[l.length - 1] < i) {//所有的值都比小，那直接不用找了
//                     tempe++
//                     continue
//                 }
//                 let left = 0, right = l.length - 1
//                 while (left < right) {
//                     let mid = (left + right) >> 1
//                     if (l[mid] < i) {
//                         left = mid + 1
//                     } else {
//                         right = mid
//                     }
//                 }
//                 index = l[right]
//                 break
//             }
//             tempe++
//         }
//         if (index === null) {
//             ans[i] = 0
//         } else {
//             ans[i] = index - i
//         }
//     }
//     return ans
// };

/* 剑指 Offer II 038. 每日温度
中等
请根据每日 气温 列表 temperatures ，重新生成一个列表，要求其对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

示例 1:

输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]
示例 2:

输入: temperatures = [30,40,50,60]
输出: [1,1,1,0]
示例 3:

输入: temperatures = [30,60,90]
输出: [1,1,0]
 
提示：

1 <= temperatures.length <= 10^5
30 <= temperatures[i] <= 100

直接双指针（双重循环）硬做了，时间复杂度大概是O(n^2)。
按理说这个数据量应该不会过，但是过了。
1108 ms 18.37%
61.6 MB 67.35%
 */
var dailyTemperatures = function(temperatures) {
    let ans = []
    for  (let i = 0; i < temperatures.length; i++) {
        let teme = temperatures[i]
        let fast = i + 1
        while (fast < temperatures.length && temperatures[fast] <= teme) {
            fast++
        }
        if (fast == temperatures.length)
            ans.push(0)
        else
            ans.push(fast - i)
    }
    return ans
};

/* 利用单调栈。
单调栈从栈底到栈顶的数据应该不断减小。
遍历temperatres数组，如果栈空的则加入。
如果栈不空，并且自己比栈顶元素还小，则加入栈。
如果比栈顶大，则需要弹栈，然后更新弹出来的元素的 相关信息，即 i - top。因为这个元素的下标一定时栈顶元素遇到的第一个比它大的元素。
然后如此往复，把栈里的元素尽可能干掉。因为它们弹栈后它们已经更新完了我们需要的信息了，它们的任务已经完成了。
212 ms 62.76%
62.4 MB 53.57% */
var dailyTemperatures = function(temperatures) {
    let ans = new Array(temperatures.length).fill(0)
    let monoStack = [] //单调栈 记录下标，从左到右它们的温度不断降低。同时它们在栈中说明它们还没有找到比它们温度高的下标
    for (let i = 0; i < temperatures.length; i++) {
        while (monoStack.length != 0 && temperatures[monoStack[monoStack.length - 1]] < temperatures[i]) {
            let top = monoStack.pop()
            ans[top] = i - top
        }
        monoStack.push(i)
    }
    return ans
};

let temperatures = [73,74,75,71,69,72,76,73]
console.log(dailyTemperatures(temperatures));