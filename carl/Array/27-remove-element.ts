function removeElement(nums: number[], val: number): number {
	let index = 0
	for (let num of nums) {
		if (num != val) {
			nums[index++] = num
		}
	}
	return index
}

const nums = [0,1,2,2,3,0,4,2], val = 2
console.log(removeElement(nums, val))