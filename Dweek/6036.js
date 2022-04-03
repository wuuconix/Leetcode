/**
 * @param {string} s
 * @return {number}
 */
var sumScores = function(s) {
    let getPrefixLength = (s, target) => {
        let res = 0
        for (let i = 0; i < target.length; i++) {
            if (s[i] == target[i])
                res++
            else
                return res
        }
        return res
    }
    let res = s.length
    for (let i = 1; i < s.length; i++) {
        if (s[i] != s[0])
            continue
        else
            res += (getPrefixLength(s, s.slice(i)))
    }
    return res
};

let s = "babab"
console.log(sumScores(s));