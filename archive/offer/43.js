/**
 * 剑指 Offer 43. 1～n 整数中 1 出现的次数
 * 困难
 * 输入一个整数 n ，求1～n这n个整数的十进制表示中1出现的次数。
    例如，输入12，1～12这些整数中包含1 的数字有1、10、11和12，1一共出现了5次。
    示例 1：
    输入：n = 12
    输出：5

    示例 2：
    输入：n = 13
    输出：6

    限制：
    1 <= n < 2^31
 * @param {number} n
 * @return {number}
 * 这道题如果直接暴力来的话，首先从1遍历到n，然后要计算每个个数里面1的数量，需要logn。
 * 总的时间复杂度是O(nlogn)。因为这道题里的n的最大范围是2^31，大概是21亿，所以会超时。
 * 这道题的n由于太大，甚至正常来说已经很好的O(n)时间复杂度也大概率会超时。
 * 所以要做出这道题就需要想到一个O(logn)的算法。
 * 很幸运，我在没有观看题解的情况下，进行不断的找规律。花了大概两个小时做出了这道题。
 * 首先我从宏观上发现，不去看具体的n是多少，只看它的位数。
 * 1位数的1的和是 1
 * 2位数是 20
 * 3位数 是 300
 * 规律已经很明显了，即 len * 10^ (len - 1)
 * 我们把这个规律记为 r[i] 
 * 但是题目里给的是一个具体的数，比如11。因为 00 ~ 99 这些两位数里总1数是20。但是12~99这些可不能算在总数里面。
 * 但是我们能够用上一位数的一些规律，即1位数里总的1的数量是1
 * 按照这个思路。我们看看 333 这个数的res
 * count(333) = r[2] + 1 * 10^2 + r[2] + count(33)
 * 第一个 r[2] 代表 000~099 的1的数量，即 20
 * 第二个 1 * 10^ 2 代表 100~199 里高位1 贡献的1的数量。
 * 第三个 r[2] 代表 200~299 里1的数量
 * 第四个 count(33) 则可以开始递归
 * 
 * 按照规律。我们可以写出以下方程。其中high表示n的高位, len 表示作为十进制的位数, low表示去掉高位后的结果。
 * 比如 123 的 len 为 3， high 为1， low 为23
 * 当 high >= 2 时 count(n) = high * r[len - 1] + 10 ** (len - 1) + count(low)  
 * 当 high == 1 时 count(n) = r[len - 1] + count(low) + low + 1   
 * 
 * 递归的终止条件有两个。 count(0) = 0 。
 * count(1~9) = 1
 * 52 ms 95.56%
 * 41.3 MB 6.98%
 */
var countDigitOne = function(n) {
    if (n == 0)
        return 0
    if (n >= 1 && n <= 9)
        return 1
    let r = len => { //不同位数 1的个数的规律  1位数 1  2位数 20 三位数 300
        return len * 10 ** (len - 1)
    }
    let getLen = n => { //计算n作为十进制的长度。 比如 12 的长度就是2
        return n.toString().length
    }
    let getHigh = n => { //取出十进制的最高位。 比如12的最高位就是1
        return Number(n.toString()[0])
    }
    let getLow = n => { //去掉最高位后的结果。 比如123去掉最高位1，剩下就是23
        return Number(n.toString().slice(1))
    }
    let len = getLen(n), high = getHigh(n), low = getLow(n)
    if (high == 1)
        return r(len - 1) + countDigitOne(low) + low + 1
    else
        return high * r(len - 1) + 10 ** (len - 1) + countDigitOne(low)
};

console.log(countDigitOne(99999999999999))