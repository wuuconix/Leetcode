function spiralOrder(matrix: number[][]): number[] {
    const m = matrix.length, n = matrix[0].length
    const loopNum = Math.floor(Math.min(m, n) / 2)
    const res: number[] = []
    let startx = 0, starty = 0, chunkNumX = n - 1, chunkNumY = m - 1
    for (let i = 0; i < loopNum; i++) {
        for (let j = 0; j < chunkNumX; j++) {
            res.push(matrix[starty][startx++])
        }
        for (let j = 0; j < chunkNumY; j++) {
            res.push(matrix[starty++][startx])
        }
        for (let j = 0; j < chunkNumX; j++) {
            res.push(matrix[starty][startx--])
        }
        for (let j = 0; j < chunkNumY; j++) {
            res.push(matrix[starty--][startx])
        }
        startx++
        starty++
        chunkNumX -= 2
        chunkNumY -= 2
    }
    if (Math.min(m, n) % 2 == 1) {
        if (n >= m) {
            for (let i = 0; i < chunkNumX + 1; i++) {
                res.push(matrix[starty][startx++])
            }
        } else {
            for (let i = 0; i < chunkNumY + 1; i++) {
                res.push(matrix[starty++][startx])
            }
        }
    }
    return res
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(spiralOrder(matrix))