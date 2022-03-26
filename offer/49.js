/**
 * @param {number} n
 * @return {number}
 * 这样做是错误的。
 * 因为 在原集合的基础上每个元素都乘上 2 ， 3， 5
 * 数量会很快到达 1690。
 * 但是它们不是完整的丑数集合，因为 有些数可能需要 2 * 2 * 2 * 2
 * 但是由于 有其他的数 比如 2 * 2 * 5。在不断add的过程中 2 * 2 * 5会先于 2 * 2 * 2 * 2加入set。
 * 这时候如果set已经满了 1690，程序认为已经或了所有的丑数便退出了循环。
 * 实际上这1690个确实都是丑数，但是不是前1690个丑数，有许多丑数没有被加入其中
 */
 var nthUglyNumber = function(n) {
    if (n == 1)
        return 1
    let ugly = new Set()
    let hashTable = new Map() //用来记录该元素是否已经被乘过
    ugly.add(2)
    ugly.add(3)
    ugly.add(5)
    while (ugly.size < 1690) {
        let newItem = new Set()
        for (let i of ugly) {
            if (!hashTable.has(i)) {
                hashTable[i] = 1
                newItem.add(i * 2)
                newItem.add(i * 3)
                newItem.add(i * 5)
            }
        }
        for (let i of newItem)
            ugly.add(i)
    }
    return [...ugly].sort((a, b) => a - b)[n - 2]
};

/* 利用三指针的方式，分别记录上一个乘2的是谁，上一个乘3的是谁，上一个乘5是谁。
然后找出他们乘上对应数值后的最小值作为dp[i]
我们可以看到利用这种方法，可以保证dp[i]就是真正的该位置的丑数，因为它是最小值。 */
var nthUglyNumber = function(n) {
    let a = 0, b = 0, c = 0 //这三个指针分别表示上一个经历 * 2 / * 3 / * 5的数的指针
    let dp = new Array(n).fill(0)
    dp[0] = 1
    for (let i = 1; i < n; i++) {
        let temp = Math.min(dp[a] * 2, dp[b] * 3, dp[c] * 5) //要保证丑数的真正正确的顺序，我们需要最小的出来
        if (temp == dp[a] * 2)
            a++
        if (temp == dp[b] * 3)
            b++
        if (temp == dp[c] * 5)
            c++
        dp[i] = temp
    }
    return dp[n - 1]
};


console.log(nthUglyNumber(10));