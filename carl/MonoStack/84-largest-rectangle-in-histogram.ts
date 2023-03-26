function largestRectangleArea(heights: number[]): number {
	heights.push(0)
	const monoStack: number[] = [0]		// increasing strictly (no equal) from left to right
	let ans = heights[0]
	for (let i = 1; i < heights.length; i++) {
		if (heights[i] > heights[monoStack[monoStack.length - 1]]) {
			monoStack.push(i)
		} else if (heights[i] == heights[monoStack[monoStack.length - 1]]) {
			monoStack.pop()
			monoStack.push(i)
		} else {
			while (monoStack.length > 0 && heights[i] < heights[monoStack[monoStack.length - 1]]) {
				const mid = monoStack.pop()!
				const h = heights[mid]
				const left = monoStack.length ? monoStack[monoStack.length - 1] : -1
				const right = i
				const w = right - left - 1	// the width not include the left and right
				ans = Math.max(ans, w * h)
			}
			monoStack.push(i)
		}
	}
	return ans
}

const heights = [1, 2, 3]
console.log(largestRectangleArea(heights))