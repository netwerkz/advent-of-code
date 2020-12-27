const assert = require('assert')

const input = [
    145,
    3,
    157,
    75,
    84,
    141,
    40,
    20,
    60,
    48,
    15,
    4,
    2,
    21,
    129,
    113,
    54,
    28,
    69,
    42,
    34,
    1,
    155,
    63,
    151,
    8,
    139,
    135,
    33,
    81,
    70,
    132,
    150,
    112,
    102,
    59,
    154,
    53,
    144,
    149,
    116,
    13,
    41,
    156,
    85,
    22,
    165,
    51,
    14,
    125,
    52,
    64,
    16,
    134,
    110,
    71,
    107,
    124,
    164,
    160,
    10,
    25,
    66,
    74,
    161,
    111,
    122,
    166,
    140,
    87,
    126,
    123,
    146,
    35,
    91,
    106,
    133,
    26,
    77,
    19,
    86,
    105,
    39,
    99,
    76,
    58,
    31,
    96,
    78,
    88,
    168,
    119,
    27,
    45,
    9,
    92,
    138,
    38,
    97,
    32,
    7,
    98,
    167,
    95,
    55,
    65,
]

const sampleInput1 = [
    16,
    10,
    15,
    5,
    1,
    11,
    7,
    19,
    6,
    12,
    4,
]
const sampleInput2 = [
    28,
    33,
    18,
    42,
    31,
    14,
    46,
    20,
    48,
    47,
    24,
    23,
    49,
    45,
    19,
    38,
    39,
    11,
    1,
    32,
    25,
    35,
    8,
    17,
    7,
    9,
    4,
    2,
    34,
    10,
    3,
]

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

{ // Part 2
    const sortedInput = sampleInput1.sort((a, b) => a > b ? 1 : (a < b ? -1 : 0))
    const getAvailableAdaptersForJoltage = (joltage) => {
        const adapters = []
        for (const entry of sortedInput) {
            if (entry <= joltage) continue
            if (entry > joltage + 3) continue
            adapters.push(entry)
        }
        return adapters
    }
    const factorial = (num) => {
        if (num < 0)
            return -1;
        else if (num == 0)
            return 1;
        else {
            return (num * factorial(num - 1));
        }
    }

    let targetJoltage = 0
    let groupings = 0
    let sample = 0
    while (true) {
        const joltages = getAvailableAdaptersForJoltage(targetJoltage)
        if (!joltages.length) break

        console.log(joltages)

        if (joltages.length > 1) {
            groupings += (joltages.length)
            sample++
        }

        const foundJoltage = joltages[0]
        targetJoltage = foundJoltage
    }

    console.log('[Part 2] result:', groupings, sample)
    // assert(arrangementsCounter === 8)
}