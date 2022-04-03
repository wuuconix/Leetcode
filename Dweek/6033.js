/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let res = 0
    let i = 0
    while (1) {
        if ((start & (2 ** i)) != (goal & (2 ** i))) {
            res++
        }
        i++
        if ((2 ** i > start) && (2 ** i > goal))
            break
    }
    return res
};

let start = 3, goal = 4
console.log(minBitFlips(start, goal));