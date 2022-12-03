function findMinArrowShots1(points: number[][]): number { //sort by X_end
  points = points.sort((a, b) => {
    if (a[1] == b[1]) {
      return a[0] - b[0]
    }
    return a[1] - b[1]
  })
  let ans = 0
  let max = -Infinity
  for (let point of points) {
    if (point[0] > max) {
      ans++
      max = point[1]
    }
  }
  return ans
}

function findMinArrowShots(points: number[][]): number { //sort by X_start
  points = points.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1]
    }
    return a[0] - b[0]
  })
  let ans = 0
  let max = -Infinity //right boundary actually
  console.log(points)
  for (let point of points) {
    if (point[0] > max) {
      ans++
      max = point[1]
    }
    max = Math.min(max, point[1])
  }
  return ans
}

const points = [[9,12],[1,10],[4,11],[8,12],[3,9],[6,9],[6,7]]

console.log(findMinArrowShots(points))