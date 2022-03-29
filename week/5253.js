/**
 * 5253. 找到指定长度的回文数
 * 中等
 * 给你一个整数数组 queries 和一个 正 整数 intLength ，请你返回一个数组 answer ，其中 answer[i] 是长度为 intLength 的 正回文数 中第 queries[i] 小的数字，如果不存在这样的回文数，则为 -1 。

回文数 指的是从前往后和从后往前读一模一样的数字。回文数不能有前导 0 。

示例 1：
输入：queries = [1,2,3,4,5,90], intLength = 3
输出：[101,111,121,131,141,999]
解释：
长度为 3 的最小回文数依次是：
101, 111, 121, 131, 141, 151, 161, 171, 181, 191, 201, ...
第 90 个长度为 3 的回文数是 999 。

示例 2：
输入：queries = [2,4,6], intLength = 4
输出：[1111,1331,1551]
解释：
长度为 4 的前 6 个回文数是：
1001, 1111, 1221, 1331, 1441 和 1551 。
 

提示：
1 <= queries.length <= 5 * 104
1 <= queries[i] <= 109
1 <= intLength <= 15
 * @param {number[]} queries
 * @param {number} intLength
 * @return {number[]}
 */
/* 周赛时想到的做法，直接从中间开始构造回文数。比较复杂，很容易出错，比赛时疯狂报错。
比赛后又做了一个半小时终于de完bug成功通过 
280ms 
62.9mb*/
var kthPalindrome = function(queries, intLength) {
    let create = (n) => {
        if (intLength == 1)
            return `${n}`
        else if (intLength == 2)
            return `${n}${n}`
        else {
            let res = ""
            n-- //次数减1
            do {
                let temp = n % 10
                if (res == "" && intLength % 2 == 1) //比如3位数的第一个是 101 即中间是0
                    res = `${temp}`
                else if (res == "" && intLength % 2 == 0)
                    res = `${temp}${temp}`
                else if (res.length + 2 < intLength)
                    res = `${temp}${res}${temp}`
                else if (res.length + 2 == intLength)
                    res = `${Number(temp + 1)}${res}${Number(temp + 1)}`
                n = Math.floor(n / 10)
            } while(n)
            while (res.length < intLength - 2) {
                res = `0${res}0`
            }
            if (res.length == intLength)
                return res
            res = `1${res}1`
            return res
        }
    }
    let ans = []
    for (let num of queries) {
        if (num > (9 * 10 ** (intLength % 2 == 0 ? intLength / 2 - 1: (intLength - 1) / 2)))
            ans.push(-1)
        else 
            ans.push(Number(create(num)))
    }
    return ans
};

/* 看了题解发现回文数只需要考虑前一半就行。
比如101。我们只需要看前一半10.
1001我们也只需要看前一半10
而前一半也非常好求。
比如4位数。
10
11
12
13
就是一个递增的关系。所以比如我们要求第90个数。
只要 10 + 90 - 1 = 99
然后再根据前一半得到后一半 99
最后的结果就是 9999

284 ms 100.00%
62.9 MB 100.00%*/
var kthPalindrome = function(queries, intLength) {
    let ans = []
    let max = 9 * 10 ** Math.floor((intLength - 1) / 2) 
    for (let query of queries) {
        if (query > max)
            ans.push(-1)
        else {
            let res = `${query + 10 ** Math.floor((intLength - 1) / 2) - 1}`
            if (intLength % 2 == 0)
                res = `${res}${res.split("").reverse().join("")}`
            else
                res = `${res}${res.split("").slice(0, res.length - 1).reverse().join("")}`
            ans.push(Number(res))
        }
    }
    return ans
};

let queries = [449229674,501930675,40059525,908875541,9,672504016], intLength = 5
console.log(kthPalindrome(queries, intLength))