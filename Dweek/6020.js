/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let hashTable = {}
    for (let num of nums) {
        if (num in hashTable)
            hashTable[num] += 1
        else
            hashTable[num] = 1
    }
    for (let i in hashTable) {
        if (hashTable[i] % 2 == 1)
            return false
    }
    return true
};  

nums = [1,2,1,2]
console.log(divideArray(nums));