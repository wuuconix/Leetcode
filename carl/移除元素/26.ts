function removeDuplicates(nums: number[]): number {
    let slow = 0, fast = 0
    while (fast < nums.length) {
        if (nums[fast] != nums[fast + 1]) {
            nums[slow++] = nums[fast]
        }
        fast++
    }
    return slow
}

let nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))