function sortedSquares(nums: number[]): number[] {
    const newNums: number[] = []
    let left = 0, right = nums.length - 1
    while (left <= right) {
        if (nums[left] ** 2 > nums[right] ** 2) {
            newNums.unshift(nums[left] ** 2)
            left++
        } else {
            newNums.unshift(nums[right] ** 2)
            right--
        }
    }
    return newNums
}

let nums = [-10000,-9999,-7,-5,0,0,10000]
console.log(sortedSquares(nums))