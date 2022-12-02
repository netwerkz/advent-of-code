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
        if (fastestDeparture > nextDeparture) {
            fastestDeparture = nextDeparture
            line = id
        }
    }

    console.log(`[Part 1] Expected ${expected}, got ${line * fastestDeparture}`)
}

Part1(sample, 295)
Part1(input, '?')

const Part2 = (input, expected) => {
    const ids = input.split(',').filter(el => el != 'x').map(el => parseInt(el))
    // let largestNum = 0
    // let smallestNum = Number.MAX_SAFE_INTEGER
    // for (const id of ids) {
    //     if (id > largestNum) largestNum = id
    //     if (id < smallestNum) smallestNum = id
    // }
    let timestamp = 0
    let solved = false
    while (!solved) {
        timestamp += ids[0]
        const limitTimestamp = timestamp + ids[0]
        let targetTimestamp = timestamp
        let prevTimestamp = targetTimestamp
        for (let i = 1; i < ids.length; i++) {
            const id = ids[i]
        
            let skipToNextLoop = false
            while(targetTimestamp < timestamp + ids[0]) {
                targetTimestamp++
                const remainder = targetTimestamp % id
                if(remainder === 0) {
                    prevTimestamp = targetTimestamp
                    break
                } else if(targetTimestamp > limitTimestamp) {
                    targetTimestamp
                } else {
                    skipToNextLoop = true
                    break
                }
            }
            if(skipToNextLoop) break
        }
    }
    console.log(`[Part 2] Expected ${expected}, got ${timestamp}`)
}

const sample1 = [1068788, `7,13,x,x,59,x,31,19`]
const sample2 = [3417, `17,x,13,19`]
const sample3 = [754018, `67,7,59,61`]
const sample4 = [779210, `67,x,7,59,61`]
const sample5 = [1261476, `67,7,x,59,61`]
const sample6 = [1202161486, `1789,37,47,1889`]

Part2(sample1[1], sample1[0])
// Part2(sample2[1], sample2[0])
// Part2(sample3[1], sample3[0])
// Part2(sample4[1], sample4[0])
// Part2(sample5[1], sample5[0])
// Part2(sample6[1], sample6[0])
// Part2(input, '?')
