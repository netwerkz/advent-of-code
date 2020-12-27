const { fromPairs } = require("lodash")

const input = [
    '.#.',
    '..#',
    '###',
    // '.......#',
    // '....#...',
    // '...###.#',
    // '#...###.',
    // '....##..',
    // '##.#..#.',
    // '###.#.#.',
    // '....#...',
]
const key = (x, y, z) => `${x}:${y}:${z}`
const cycleCount = 1 // TODO: set to 6

{ // Part 1
    let frame = {}
    let nextFrame
    for (let y = 0; y < input.length; y++) { // pre-set frame
        const row = input[y]
        for (let x = 0; x < row.length; x++) {
            const col = row[x]
            if (col === '#') { // only set active states
                frame[key(x, y, 0)] = true
            }
        }
    }

    let minX = -1, maxX = input[0].length + 1, minY = -1, maxY = input.length + 1, minZ = -1, maxZ = 1; // set limits (will grow)
    for (let cycle = 1; cycle <= cycleCount; cycle++) { // run for 6 cycles
        nextFrame = {}

        for(const activePosition of Object.keys(frame)) {
            const [x, y, z] = activePosition.split(':')

        }

        for (let x = minX; x < maxX; x++) {
            for (let y = minY; y < maxY; y++) {
                for (let z = minZ; z < maxZ; z++) {

                    const countActiveNeighbours = (sampleX, sampleY, sampleZ) => {
                        let acc = 0
                        const active = frame[key(sampleX, sampleY, sampleZ)]
                        if(active) {
                            // const [xx, yy, zz] = 
                        }

                        for (let xx = sampleX - 1; xx <= sampleX + 1; xx++) {
                            for (let yy = sampleY - 1; yy <= sampleY + 1; yy++) {
                                for (let zz = sampleZ - 1; zz <= sampleZ + 1; zz++) {
                                    if (x == xx && y == yy && z == zz) { // exclude self
                                        continue
                                    }
                                    if (frame[key(xx, yy, zz)]) {
                                        acc++
                                    }
                                    // console.log(xx, yy, zz, frame[key(xx, yy, zz)] ? '#' : '.')
                                }
                            }
                        }
                        // console.log(sampleX, sampleY, sampleZ, acc)
                        // process.exit()

                        return acc
                    }

                    const activeNeighborsCount = countActiveNeighbours(x, y, z)
                    const isActive = frame[key(x, y, z)]
                    let shouldBeActive
                    if (isActive) {
                        // If a cube is active and exactly 2 or 3 of its neighbors are also active, the cube remains active. 
                        // Otherwise, the cube becomes inactive.
                        shouldBeActive = [2, 3].includes(activeNeighborsCount)
                    } else {
                        // If a cube is inactive but exactly 3 of its neighbors are active, the cube becomes active. Otherwise, the cube remains inactive.
                        shouldBeActive = (activeNeighborsCount == 3)
                    }
                    if (shouldBeActive) {
                        nextFrame[key(x, y, z)] = true
                    }
                }
            }
        }
        console.log(frame, nextFrame)
        minX-- // grow limits for next cycle
        minY--
        minZ--
        maxX++
        maxY++
        maxZ++
        console.log(`Cycle ${cycle}, expanded limits minX:${minX}, maxX:${maxX}, minY:${minY}, maxY:${maxY}, minZ:${minZ}, maxZ:${maxZ}, frame size ${Object.keys(nextFrame).length}`)
        frame = nextFrame // cache frame for next cycle
    }
    console.log('final', frame)

    let activeCubeCount = Object.keys(frame).length
    console.log(`[Part 1] sum is: ${activeCubeCount}`)
}

// Incorrect: 5, 6, 100, 219, 201