const input = [
    1003681,
    `23,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,37,x,x,x,x,x,431,x,x,x,x,x,x,x,x,x,x,x,x,13,17,x,x,x,x,19,x,x,x,x,x,x,x,x,x,x,x,409,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,29`
]
const sample = [
    939,
    `7,13,x,x,59,x,31,19`,
]

const Part1 = (input, expected) => {
    const startingOffset = input[0]
    const ids = input[1].split(',').filter(el => el != 'x').map(el => parseInt(el))
    let fastestDeparture = Number.MAX_SAFE_INTEGER
    let line = null
    for (const id of ids) {
        const nextDeparture = id - (startingOffset % id)
        if(fastestDeparture > nextDeparture) {
            fastestDeparture = nextDeparture
            line = id
        }
        // console.log(`${startingOffset} % ${id} = ${startingOffset % id}, nextDeparture: ${nextDeparture}`)
    }

    console.log(`[Part 1] Expected ${expected}, got ${line*fastestDeparture}`)
}

Part1(sample, 295)
Part1(input, '?')

const Part2 = (input, expected) => {

}