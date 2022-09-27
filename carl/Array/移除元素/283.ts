function moveZeroes(nums: number[]): void {
    let slow = 0, fast = 0
    while (fast < nums.length) {
        if (nums[fast] != 0) {
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
            slow++
        }
        fast++
    }
}