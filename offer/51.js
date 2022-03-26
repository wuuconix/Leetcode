/**
 * @param {number[]} nums
 * @return {number}
*/

/* 暴力做法，超出时间限制 O(n ^ 2) */
var reversePairs = function(nums) {
    let res = 0
    for (let i = 1; i < nums.length; i++)
        res += nums.slice(0, i).filter(x => x > nums[i]).length
    return res
};

/* 利用归并排序的特点，在合并的过程中需要比较左部分和右部分。
当左部分的值大于右部分的值是就存在了逆序对。
我们需要统计它。
这道题的关键是需要会写归并，并且需要联想到归并和逆序对之间的关系
112 ms 99.14%
48.5 MB 89.89% */
var reversePairs = function(nums) {
    let temp = new Array(nums.length).fill(0)

    let merge_sort = (l, r) => {
        if (l >= r)
            return 0
        let m = Math.floor((l + r) / 2)
        let res = merge_sort(l, m) + merge_sort(m + 1, r) //归并的划分过程 即分治中的分
        for (let i = l; i <= r; i++) { //由于归并的并过程中 数组会发生变化，故用temp存储之前的值。nums直接发生变化，存排序后的值
            temp[i] = nums[i]
        }
        let i = l, j = m + 1, k = l //归并中的并 即分治中的治
        while (k <= r) {
            if (i == m + 1)
                nums[k++] = temp[j++]
            else if (j == r + 1 || temp[i] <= temp[j])
                nums[k++] = temp[i++]
            else if (temp[i] > temp[j]) {
                nums[k++] = temp[j++]
                res += (m - i + 1)
            }
        }
        return res
    }
    return merge_sort(0, nums.length - 1)
};

console.log(reversePairs([7,5,6,4]));