function mySqrt(x: number): number {
    let left = 0, right = x
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (mid * mid > x) {
            right = mid - 1
        } else if (mid * mid < x) {
            left = mid + 1
        } else {
            return mid
        }
    }
    return right
}

console.log(mySqrt(0))