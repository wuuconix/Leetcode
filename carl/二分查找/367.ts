function isPerfectSquare(num: number): boolean {
    let left = 0, right = num
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (mid * mid > num) {
            right = mid - 1
        } else if (mid * mid < num) {
            left = mid + 1
        } else {
            return true
        }
    }
    return false
}

console.log(isPerfectSquare(16))