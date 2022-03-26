/* 剑指 Offer 38. 字符串的排列
难度 中等
输入一个字符串，打印出该字符串中字符的所有排列。

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

示例:

输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]

限制：

1 <= s 的长度 <= 8
---
这道题得难点在于全排列。
至于不能有重复元素就可以用ES6得Set实现骚操作了。
Set支持以一个array作为参数来初始化。
然后再用省略符 来把Set里面得值放到数组里。十分优雅。
*/

function permutation(s: string): string[] {
    let res: string[] = []

    const permu = (s: string): string[] => {
        if (s.length == 0 || s.length == 1)
            return [s]
        else {
            let left: string, right_permu: string[], res: string[] = []
            for (let i = 0; i < s.length; i++) {
                left = s[i]
                right_permu = permu(s.slice(0, i) + s.slice(i + 1))
                for (let s of right_permu) {
                    res.push(left + s)
                }
            }
            return res
        }
    }
    res = permu(s)
    return [...new Set(res)]  //利用ES6 Set来去重
};
let res: string[] = permutation("123")
console.log(res);
