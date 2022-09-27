/**
 * 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
 * @param {number[]} nums
 * @return {number[]}
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
    示例：

    输入：nums = [1,2,3,4]
    输出：[1,3,2,4] 
    注：[3,1,2,4] 也是正确的答案之一。
    ---
    笨办法 直接遍历 分别往odd和even数组里加
    最后用concat将两个数组连接后返回
    时间复杂度和空间复杂度都是O(n)
    92 ms 62.52%
    49.9mb 13.58%
*/
var exchange = function(nums) {
    let odd = [], even = []
    for (let num of nums) {
        if (num % 2 == 0)
            even.push(num)
        else
            odd.push(num)
    }
    return odd.concat(even)
};

/* 好方法，双指针
左指针i找到一个偶数，右指针j找到一个奇数，然后交换
时间复杂度还是O(n) 但是空间复杂度变成了O(1) 甚至可以说O(0)？es6解构赋值的语法让我可以不用附加的空间即可交换
68ms 99.78%
48.2mb 55.29% */
var exchange = function(nums) {
    let i = 0, j = nums.length - 1 //左指针i用来找到一个偶数，右指针j用来找到一个奇数。然后交换
    while (i < j) {
        while (i < j && nums[i] % 2 == 1)
            i++
        while (i < j && nums[j] % 2 == 0)
            j--
        [nums[i], nums[j]] = [nums[j], nums[i]] //es6解构语句实现交换
    }
    return nums
};