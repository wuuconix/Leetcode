/**
 * 剑指 Offer 61. 扑克牌中的顺子
 * 简单
 * 从若干副扑克牌中随机抽 5 张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

    示例 1:

    输入: [1,2,3,4,5]
    输出: True

    示例 2:

    输入: [0,0,1,2,5]
    输出: True
     
    限制：

    数组长度为 5 
    数组的数取值为 [0, 13] .
 * @param {number[]} nums
 * @return {boolean}
 * 简单的模拟，先排序，让牌组有序。
 * 然后记录 0 的个数，因为他们时万能卡，可以用来填补空缺的牌，
 * 然后看 nums[i + 1] 和 nums[i] 是不是差1，如果差1，就是正常得连起来了。
 * 如果大于1，就说明不连续了，我们需要用 万能卡得数量来填补，空多少，补多少，
 * 如果发现 补完 万能卡得数量小于0了，说明已经凉了，返回false。
 * 值得注意得是，因为牌组里可能出现重复得元素，这个时候直接返回false，因为有重复元素了，它就不可能是 顺子了，万能卡也无济于事。
 * 60 ms 80.72%
 * 41.2 MB 32.09%
 */
var isStraight = function(nums) {
    nums = nums.sort((a, b) => a - b)
    let zeroCount = 0
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == 0) {
            zeroCount++
            continue
        }
        if (nums[i] == nums[i + 1]) //如果有相同的排，比不可能为顺子，直接return
            return false
        else if (nums[i] + 1 != nums[i + 1]) {
            let offset = nums[i + 1] - nums[i] - 1 //它们之间空缺的排数
            zeroCount -= offset //用掉一张万能卡
            if (zeroCount < 0)
                return false
        }
    }
    return true
};

let nums = [1,2,12,0,3]
console.log(isStraight(nums));