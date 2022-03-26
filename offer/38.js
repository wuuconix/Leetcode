/**剑指 Offer 38. 字符串的排列
难度 中等
输入一个字符串，打印出该字符串中字符的所有排列。

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

示例:

输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]

限制：

1 <= s 的长度 <= 8
---
之前用typescirpt写了一份，直接全部全排列，不考虑抽重复，最后用sort去重。
这里参考了题解用，利用回溯，在过程中剪枝，保证添加进去的结果不重复。
经过这道题我貌似理解了什么是回溯了。
回溯的一个重要步骤就是递归。
但是回溯为什么叫回溯，它在递归之前要改变某个条件，然后进行递归。
递归完成后要把条件改变回来，这就是回溯。
在实践过程中发现 [array[i], array[j]] = [array[j], array[i]] 的方法来交换数组中的两个元素会报错。
/root/Leetcode/offer/38.js:22
                [listS[x], listS[i]] = [listS[i], listS[x]]
TypeError: Cannot set properties of undefined (setting '1')

十分奇怪，以后保险起见，还是用普通的交换方法吧。
temp = listS[x], listS[x] = listS[i], listS[i] =temp

100 ms 95.78%
50.4 MB 41.94%

* @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    let listS = s.split("")
    let res = []
    let temp = null

    let dfs = x => {
        if (x == listS.length - 1) {
            res.push(listS.join(""))
            return
        }
        let set = new Set()
        for (let i = x; i < listS.length; i++) { //从x出发
            if (set.has(listS[i])) //已经在该位置固定过了
                continue
            else {
                set.add(listS[i])
                temp = listS[x], listS[x] = listS[i], listS[i] =temp
                dfs(x + 1)
                temp = listS[x], listS[x] = listS[i], listS[i] =temp
            }
        }
    }
    dfs(0)
    return res
};

console.log(permutation("111"));