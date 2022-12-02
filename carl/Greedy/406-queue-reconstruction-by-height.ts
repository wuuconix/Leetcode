function reconstructQueue(people: number[][]): number[][] {
  people = people.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1]
    }
    return b[0] - a[0]
  }) //sort by height, heighter in the head
  let queue: number[][] = []
  for (let p of people) {
    queue.splice(p[1], 0, p)
  }
  return queue
}

const people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
console.log(reconstructQueue(people))