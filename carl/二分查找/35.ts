/* reference: https://www.programmercarl.com/0704.%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html#%E6%80%9D%E8%B7%AF */
function searchInsert(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] > target) {
            right = mid - 1
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            return mid
        }
    }
    return left
}

// let nums = [1,3,5,6], target = 2
// console.log(searchInsert(nums, target))