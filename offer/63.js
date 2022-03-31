/**
 * 剑指 Offer 63. 股票的最大利润
 * 中等
 * 假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？

    示例 1:
    输入: [7,1,5,3,6,4]
    输出: 5
    解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
        注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。

    示例 2:
    输入: [7,6,4,3,1]
    输出: 0
    解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
     
    限制：
    0 <= 数组长度 <= 10^5
 * @param {number[]} prices
 * @return {number}
 * 这道题还蛮简单的。
 * 只要O(n)遍历prices数组即可，期间维护一个min变量记录最低点，以及profit最大收益。
 * 遍历到一个新的下标的时候就先判断它是否比min小，如果小，它变成新的min。
 * 如果它比min大，那么就让它和min的差和profit比较，如果大，就称为新的profit
 * 80 ms 29.10%
 * 41.5 MB 39.66%
 * 看了k神的题解，发现这道题实际上是动态规划。
 * 但是我貌似直接想到了某种思路，实际的效果和动态规划不采用数组，而采用一些变量来不断迭代的代码一样。
 * 可能所谓的动态规划，它的本质就是利用之前得到的一些结果，
 * 而我这里的min和profit就是用到了之前 的一些结果。
 */
var maxProfit = function(prices) {
    if (prices.length <= 1)
        return 0
    let min = prices[0], profit = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i] //新的最低值
        } else if (prices[i] - min > profit){
            profit = prices[i] - min //新的最大利润
        }
    }
    return profit
};

let prices = [7,6,4,3,1]
console.log(maxProfit(prices));