/**
 * @param {number} numArrows
 * @param {number[]} aliceArrows
 * @return {number[]}
 */
var maximumBobPoints = function(numArrows, aliceArrows) {
    let avg = [] //每个区域每支箭的平均得分
    let res = new Array(12).fill(0)
    let findMax = () => { //得到数组中最大值的下标
        let max = 0, maxIndex = 0
        for (let i = 0; i < avg.length; i++) {
            if (avg[i] > max) {
                max = avg[i]
                maxIndex = i
            }
        }
        return maxIndex
    }
    let calcuAvg = (numArrows) => {
        for (let i = 0; i < 12; i++) {
            if (aliceArrows[i] == 0)
                avg[i] = i
            else if (aliceArrows[i] < numArrows) //剩下的键需要比alice多
                avg[i] = i / (aliceArrows[i] + 1)
            else
                avg[i] = 0
        }
    }

    let notEmpty = () => {
        for (let i = 0; i < 12; i++) {
            if (avg[i] != 0)
                return true
        }
        return false
    }
    calcuAvg()

    while (numArrows && notEmpty()) {
        let maxIndex = findMax()
        res[maxIndex] = aliceArrows[maxIndex] + 1 //多一支获得分数
        aliceArrows[maxIndex] = Number.MAX_VALUE
        numArrows -= res[maxIndex]
        calcuAvg(numArrows)
    }
    return res

};

let numArrows = 9, aliceArrows = [1,1,0,1,0,0,2,1,0,1,2,0]
console.log(maximumBobPoints(numArrows, aliceArrows));