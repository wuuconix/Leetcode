function eraseOverlapIntervals(intervals: number[][]): number {
  intervals = intervals.sort((a, b) => {
    return a[1] == b[1] ? a[0] - b[0] : a[1] - b[1]
  })
  console.log(intervals)
  let ans = 0
  let prev = 0
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[prev][1]) {
      ans++
    } else {
      prev = i
    }
  }
  return ans
}

const intervals = [[-52,31],[-73,-26],[82,97],[-65,-11],[-62,-49],[95,99],[58,95],[-31,49],[66,98],[-63,2],[30,47],[-40,-26]]
console.log(eraseOverlapIntervals(intervals))