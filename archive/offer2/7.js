/**
 * 剑指 Offer II 007. 数组中和为 0 的三个数
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a ，b ，c ，使得 a + b + c = 0 ？请找出所有和为 0 且 不重复 的三元组。
 * 示例 1：

    输入：nums = [-1,0,1,2,-1,-4]
    输出：[[-1,-1,2],[-1,0,1]]
    示例 2：

    输入：nums = []
    输出：[]
    示例 3：

    输入：nums = [0]
    输出：[]
     

    提示：

    0 <= nums.length <= 3000
    -105 <= nums[i] <= 105
 * @return {number[][]}
 * 题目给的数据量比较小，可以用O(n^2)或者更大O(n^2logn)的时间复杂度。
 * 这道题实际和之前做的两数之和类似，是三数之和，在这道题里是找出三数 之和为0的那些数。
 * 我们把三个数称为1操作数，2操作数和3操作数。
 * 因为我们想利用两数之和里的双指针的做法 首先我们需要先把数组排序，复杂度O(nlogn)
 * 之后我们遍历数组，线性得到第一个操作数。
 * 得到1操作数后，剩下2操作数和3操作数的和就应该是负的1操作数。
 * 我们就转化为了两数之和问题，利用双指针做法，两数之和问题的时间复杂度是O(n)
 * 再乘上遍历1操作数的n，总的时间复杂度是O(n^2)。
 * 
 * 在实际操作过程中，因为要设计到去重，而 Set 会区别两个 相同值二维数组，使得无法去重。
 * > let a = new Set()
    undefined
    > a.add([1,2])
    Set(1) { [ 1, 2 ] }
    > a.add([1, 2])
    Set(2) { [ 1, 2 ], [ 1, 2 ] }
    >
    我解决这个的办法是把二维数组 toString转化为字符串，再利用Set去重。
    最后返回结果的时候再join返回为数组。 
    4416 ms 5%
    53.7 MB 6%
 */
var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b) //排序为升学 O(nlogn)
    let res = new Set()
    for (let i = 0; i < nums.length; i++) { //遍历三个数中的一个
        let num = nums[i]
        let target = -num //剩下两个数的和需要是-num，转化为两数之和问题，利用双指针时间复杂度O(n)
        let left = 0, right = nums.length - 1
        while (left < right) {
            if (i == left) {
                left++
                continue
            }
            if (i == right) {
                right--
                continue
            }
            if (nums[left] + nums[right] == target) {
                res.add([nums[i], nums[left], nums[right]].sort((a, b) => a -b).toString()) //排序后加入set得到去重 由于set认为两个二维数组是不同的，即[1, 2] != [1, 2]，所以转化为字符串实现去重
                left++ //由于不确定b+c = target的可能性只有一种，所以left继续加
            }
            else if (nums[left] + nums[right] > target) {
                right--
            } else {
                left++
            }
        }
    }
    let res2 = []
    for (let str of res) {
        res2.push(str.split(",").map((x) => Number(x)))
    }
    return res2
};

let nums = [0, 0]
console.log(threeSum(nums));