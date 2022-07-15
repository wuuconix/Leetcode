function sortedSquares(nums: number[]): number[] {
    const newNums: number[] = []
    let minAbsIndex = 0, minAbs = Math.abs(nums[0])
    nums.forEach((value, index) => { //找到绝对值最小的那个元素的下标
        if (Math.abs(value) < minAbs) {
            minAbs = Math.abs(value)
            minAbsIndex = index
        }
    })
    let slow = minAbsIndex, fast = minAbsIndex + 1
    while (slow >= 0 || fast < nums.length) {
        if (slow < 0) {
            newNums.push(nums[fast++] ** 2)
        } else if (fast >= nums.length) {
            newNums.push(nums[slow--] ** 2)
        } else {
            newNums.push(nums[fast] ** 2 < nums[slow] ** 2 ? nums[fast++] ** 2 : nums[slow--] ** 2)
        }
    }
    return newNums
}

let nums = [-10000,-9999,-7,-5,0,0,10000]
console.log(sortedSquares(nums))