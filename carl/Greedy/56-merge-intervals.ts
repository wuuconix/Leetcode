function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => {
    return a[1] == b[1] ? a[0] - b[0] : a[1] - b[1]
  })
  console.log(intervals)
  for (let i = intervals.length - 1; i > 0; i--) {
    if (intervals[i][0] <= intervals[i - 1][1]) {
      intervals.splice(i - 1, 2, [Math.min(intervals[i][0], intervals[i - 1][0]), intervals[i][1]])
    }
  }
  return intervals
}

const intervals = [[2,3],[4,5],[6,7],[8,9],[1,10]]
console.log(merge(intervals))