function generateMatrix(n: number): number[][] {
    const matrix = new Array(n).fill(0).map(x => new Array(n))
    const loopNum = Math.floor(n / 2)
    let startx = 0, starty = 0, value = 1, chunkNum = n - 1
    for (let i = 0; i < loopNum; i++) {
        for (let j = 0; j < chunkNum; j++) {
            matrix[starty][startx++] = value++
        }
        for (let j = 0; j < chunkNum; j++) {
            matrix[starty++][startx] = value++
        }
        for (let j = 0; j < chunkNum; j++) {
            matrix[starty][startx--] = value++
        }
        for (let j = 0; j < chunkNum; j++) {
            matrix[starty--][startx] = value++
        }
        startx++
        starty++
        chunkNum -= 2
    }
    if (n % 2 == 1) {
        matrix[starty][startx] = value
    }
    return matrix
}

let n = 10
generateMatrix(n).forEach(x => console.log(x))