let input = [145, 3, 157, 75, 84, 141, 40, 20, 60, 48, 15, 4, 2, 21, 129, 113, 54, 28, 69, 42, 34, 1, 155, 63, 151, 8, 139, 135, 33, 81, 70, 132, 150, 112, 102, 59, 154, 53, 144, 149, 116, 13, 41, 156, 85, 22, 165, 51, 14, 125, 52, 64, 16, 134, 110, 71, 107, 124, 164, 160, 10, 25, 66, 74, 161, 111, 122, 166, 140, 87, 126, 123, 146, 35, 91, 106, 133, 26, 77, 19, 86, 105, 39, 99, 76, 58, 31, 96, 78, 88, 168, 119, 27, 45, 9, 92, 138, 38, 97, 32, 7, 98, 167, 95, 55, 65]

const sampleInput1 = [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4]
const sampleInput2 = [28, 33, 18, 42, 31, 14, 46, 20, 48, 47, 24, 23, 49, 45, 19, 38, 39, 11, 1, 32, 25, 35, 8, 17, 7, 9, 4, 2, 34, 10, 3]

{ // Part 1
    const sortedInput = input.sort((a, b) => a > b ? 1 : (a < b ? -1 : 0))
    const getAvailableAdaptersForJoltage = (joltage) => {
        const adapters = []
        for (const entry of sortedInput) {
            if (entry <= joltage) continue
            if (entry > joltage + 3) continue
            adapters.push(entry)
        }
        return adapters
    }

    const diffs = {}
    let targetJoltage = 0
    while (true) {
        const joltages = getAvailableAdaptersForJoltage(targetJoltage)
        if (!joltages.length) break

        const foundJoltage = joltages[0]
        const diff = foundJoltage - targetJoltage

        if (!diffs.hasOwnProperty(diff)) {
            diffs[diff] = 1
        } else {
            diffs[diff]++
        }

        targetJoltage = foundJoltage
    }
    if (!diffs.hasOwnProperty(3)) {
        diffs[3] = 1
    } else {
        diffs[3]++
    }

    console.log('[Part 1] result:', diffs[1] * diffs[3])
}

const Part2 = (input, expected) => { // Part 2
    const sortedInput = input.sort((a, b) => a > b ? 1 : (a < b ? -1 : 0))
    const isSequenceValid = (arr) => {
        if (arr[0] > 3) return false

        for (let i = 1; i < arr.length; i++) {
            let first = arr[i - 1]
            let second = arr[i]
            if (second - first > 3) {
                return false
            }
        }
        return true
    }

    let acc = new Set([sortedInput.join(', ')])
    const doStep = (arr) => {
        for (let i = 0; i < arr.length - 1; i++) { // ignore the last one
            let isInConsecutiveSequence = false
            if ((i != 0) && (arr[i] - arr[i - 1] === 1)) {
                isInConsecutiveSequence = true
            } else if (arr[i + 1] - arr[i] === 1) {
                isInConsecutiveSequence = true
            }
            if (!isInConsecutiveSequence) {
                continue // skip non consecutive numbers
            }

            const newArr = arr.filter(el => el !== arr[i])
            const key = newArr.join(', ')
            if (acc.has(key)) {
                continue // skip duplicates
            }

            const isValid = isSequenceValid(newArr)
            if (isValid) {                
                acc.add(key)
                doStep(newArr) // recurse to advance algorithm
            } else {
                continue // skip invalid series
            }
        }
    }
    doStep(sortedInput) // start algorithm

    console.log(`[Part 2] expected [${expected}] got [${acc.size}]`, /*original*/ /*, [...(acc)].sort()*/)
}

Part2(sampleInput1, 8)
Part2(sampleInput2, 19208)
Part2(input, '?')
