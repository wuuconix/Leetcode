/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function(directions) {
    let dire = directions.split("")
    let res = 0
    for (let i = 0; i < directions.length; i++) {
        if (i < directions.length - 1 && dire[i] == 'R' && ["S", "L"].includes(dire[i + 1])) {
            if (dire[i + 1] == "S")
                res += 1
            else if (dire[i + 1] == "L")
                res += 2
            dire[i] = "S"
            dire[i + 1] = "S"
        } else if (i > 0 && dire[i] == "L" && ["S", "R"].includes(dire[i - 1])) {
            if (dire[i - 1] == "S")
                res += 1
            else if (dire[i - 1] == "R")
                res += 2
            dire[i] = "S"
            dire[i - 1] = "S"
        }
    }
    let flag = 0
    for (let i = dire.length - 1; i >= 0; i--) {
        if (dire[i] == "S")
            flag = 1
        if (flag == 1 && dire[i] == "R")
            res += 1
    }
    return res
};

let directions = "SSRSSRLLRSLLRSRSSRLRRRRLLRRLSSRR"
console.log(countCollisions(directions));