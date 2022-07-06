function searchRange(nums: number[], target: number): number[] {
    let ansLeft, ansRight
    let left = 0, right = nums.length - 1
    let flag = false //judge whether nums includes target
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] >= target) {
            if (nums[mid] == target) {
                flag = true
            }
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    ansLeft = right
    if (!flag) {
        return [-1, -1]
    }
    left = 0, right = nums.length - 1
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] >= (target + 1)) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    ansRight = right
    return [ansLeft + 1, ansRight]
};

let nums = [1], target = 1
console.log(searchRange(nums, target))