function findItinerary(tickets: string[][]): string[] {
  const path: string[] = ["JFK"]
  const ticketsMap: Map<string, Map<string, number>> = new Map()
  tickets.sort((a, b) => { //make the tickets sort by "to" lexical order
    if (a[1] == b[1]) {
      return 0
    }
    return a[1] < b[1] ? -1 : 1
  })
  for (const [from, to] of tickets) {
    if (ticketsMap.has(from)) {
      ticketsMap.get(from)!.set(to, (ticketsMap.get(from)!.get(to) ?? 0) + 1)
    } else {
      ticketsMap.set(from, new Map([[to, 1]]))
    }
  }
  function backtracing(): boolean {
    if (path.length == tickets.length + 1) {
      return true
    }
    const targetMap = ticketsMap.get(path[path.length - 1])
    if (targetMap) {
      for (const [to, count] of targetMap) {
        if (count > 0) {
          path.push(to)
          targetMap.set(to, count - 1)
          if (backtracing()) {
            return true
          }
          path.pop()
          targetMap.set(to, count)
        }
      }
    }
    return false
  }
  backtracing()
  return path
}

const tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
console.log(findItinerary(tickets))