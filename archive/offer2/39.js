/**
 * 剑指 Offer II 039. 直方图最大矩形面积
 * 困难
 * 给定非负整数数组 heights ，数组中的数字用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

https://assets.leetcode.com/uploads/2021/01/04/histogram.jpg

示例 1:

输入：heights = [2,1,5,6,2,3]
输出：10
解释：最大的矩形为图中红色区域，面积为 10
示例 2：

https://assets.leetcode.com/uploads/2021/01/04/histogram-1.jpg

输入： heights = [2,4]
输出： 4
 
提示：

1 <= heights.length <=10^5
0 <= heights[i] <= 10^4
 * @param {number[]} heights
 * @return {number}
 * 看了题解才明白。
 * 首先我们以每个下标为中心，找出以它为高的最大矩形的面积。
 * 很显然，既然我们确定了高，那么我们只要再确定宽即可，宽实际上需要找出它左侧比它高小的下标，右侧比它高小的下标，这样就能算出宽。
 * 然后为了快速找到两侧的下标，我们可以借助单调栈。
 * 单调栈里的存放下标，单调栈需要保持递增。
 * 这样我们发现当前元素的高比栈顶元素的高 低。说明栈顶元素的右边界已经找到。
 * 而它的左边界就是栈顶元素下面的元素。
 * 这样宽度就确定了。
 * 一个栈，实现了左边界和右边界的同时找到，不可谓不牛逼。
 * 所以单调栈什么时候用呢？大概是这样一种情况。
 * 当前元素因为需要计算 某种属性 需要后续元素的参与。
 * 这个时候我们可以把当前元素入栈。然后当遍历到后续元素的时候再让它弹栈，给它那个需要的信息。
 * 88 ms 56.67%
 * 48.1 MB 90.00%
 */
var largestRectangleArea = function(heights) {
    let monoStack = [-1] //记录下标。栈里面非递减
    let max = 0
    let i = 0
    while (i <= heights.length) {
        if (monoStack.length == 1 || (heights[monoStack[monoStack.length - 1]] < heights[i])) { //栈空了或者比栈顶元素的高度大
            monoStack.push(i)
            i++
        } else { //比栈顶元素小，这是栈顶元素的面积可以计算了。
            let height = heights[monoStack.pop()]
            let width = i - (monoStack[monoStack.length - 1]) - 1 //i前去 栈顶元素的前一个元素的下标即 以栈顶元素为宽
            max = Math.max(max, height * width)
        }
    }
    return max
};

let heights = [2,4]
console.log(largestRectangleArea(heights));