const input = [
    // '.#.',
    // '..#',
    // '###',
    '.......#',
    '....#...',
    '...###.#',
    '#...###.',
    '....##..',
    '##.#..#.',
    '###.#.#.',
    '....#...',
]

{ // Part 1
    const key = (x, y, z) => `${x}:${y}:${z}`
    const cycleCount = 6
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

    let minX = 0, maxX = input[0].length, minY = 0, maxY = input.length, minZ = 0, maxZ = 1; // set limits (will grow)
    for (let cycle = 1; cycle <= cycleCount; cycle++) { // run for 6 cycles
        minX-- // grow limits
        minY--
        minZ--
        maxX++
        maxY++
        maxZ++

        nextFrame = {}
        for (let z = minZ; z < maxZ; z++) {
            for (let y = minY; y < maxY; y++) {
                for (let x = minX; x < maxX; x++) {

                    const countActiveNeighbours = (sampleX, sampleY, sampleZ) => {
                        let acc = 0
                        for (let zz = sampleZ - 1; zz <= sampleZ + 1; zz++) {
                            for (let yy = sampleY - 1; yy <= sampleY + 1; yy++) {
                                for (let xx = sampleX - 1; xx <= sampleX + 1; xx++) {
                                    if (x == xx && y == yy && z == zz) { // exclude self
                                        continue
                                    }
                                    if (frame[key(xx, yy, zz)]) {
                                        acc++
                                    }
                                }
                            }
                        }
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
        // console.log(`Cycle ${cycle}, expanded limits minX:${minX}, maxX:${maxX}, minY:${minY}, maxY:${maxY}, minZ:${minZ}, maxZ:${maxZ}, frame size ${Object.keys(nextFrame).length}`)
        // console.log(frame, nextFrame)

        frame = nextFrame // cache frame for next cycle
    }

    let activeCubeCount = Object.keys(frame).length
    console.log(`[Part 1] sum is: ${activeCubeCount}`)
}

{ // Part 2
    const key = (x, y, z, w) => `${x}:${y}:${z}:${w}`
    const cycleCount = 6
    let frame = {}
    let nextFrame
    for (let y = 0; y < input.length; y++) { // pre-set frame
        const row = input[y]
        for (let x = 0; x < row.length; x++) {
            const col = row[x]
            if (col === '#') { // only set active states
                frame[key(x, y, 0, 0)] = true
            }
        }
    }

    let minX = 0, maxX = input[0].length, minY = 0, maxY = input.length, minZ = 0, maxZ = 1, minW = 0, maxW = 1; // set limits (will grow)
    for (let cycle = 1; cycle <= cycleCount; cycle++) { // run for 6 cycles
        minX-- // grow limits
        minY--
        minZ--
        minW--
        maxX++
        maxY++
        maxZ++
        maxW++

        nextFrame = {}
        for (let w = minW; w < maxW; w++) {
            for (let z = minZ; z < maxZ; z++) {
                for (let y = minY; y < maxY; y++) {
                    for (let x = minX; x < maxX; x++) {

                        const countActiveNeighbours = (sampleX, sampleY, sampleZ, sampleW) => {
                            let acc = 0
                            for (let ww = sampleW - 1; ww <= sampleW + 1; ww++) {
                                for (let zz = sampleZ - 1; zz <= sampleZ + 1; zz++) {
                                    for (let yy = sampleY - 1; yy <= sampleY + 1; yy++) {
                                        for (let xx = sampleX - 1; xx <= sampleX + 1; xx++) {
                                            if (x == xx && y == yy && z == zz && w == ww) { // exclude self
                                                continue
                                            }
                                            if (frame[key(xx, yy, zz, ww)]) {
                                                acc++
                                            }
                                        }
                                    }
                                }
                            }
                            return acc
                        }

                        const activeNeighborsCount = countActiveNeighbours(x, y, z, w)
                        const isActive = frame[key(x, y, z, w)]
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
                            nextFrame[key(x, y, z, w)] = true
                        }
                    }
                }
            }
        }

        frame = nextFrame // cache frame for next cycle
    }

    let activeCubeCount = Object.keys(frame).length
    console.log(`[Part 2] sum is: ${activeCubeCount}`)
}
