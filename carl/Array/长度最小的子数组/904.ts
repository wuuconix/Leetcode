function totalFruit(fruits: number[]): number {
    let left = 0, map = new Map(), res = 0
    for (let right = 0; right < fruits.length; right++) {
        map.set(fruits[right], (map.get(fruits[right]) ?? 0) + 1) //外层循环每次都去增加右界
        if ([...map.keys()].length <= 2) {
            res = Math.max(res, right - left + 1)
        }
        while ([...map.keys()].length > 2) { //种类超了 需要一直调整左边界 直到种类为2
            if (map.get(fruits[left]) == 1) {
                map.delete(fruits[left])
            } else {
                map.set(fruits[left], map.get(fruits[left]) - 1)
            }
            left++
        }
    }
    return res
}

let fruits = [1,2,1]
console.log(totalFruit(fruits))