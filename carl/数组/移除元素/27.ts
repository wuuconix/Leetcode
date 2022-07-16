/**
 * 原地删除数组中等于某个值的所有元素 返回最终的数组长度
 * @param nums 
 * @param val 
 */
function removeElement(nums: number[], val: number): number {
    let slow = 0, fast = 0
    while (fast < nums.length) {
        if (nums[fast] != val) {
            nums[slow++] = nums[fast]
        }
        fast++
    }
    return slow
}

let nums = [3,2,2,3,2], val = 3
console.log(removeElement(nums, val))