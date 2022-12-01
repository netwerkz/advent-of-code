const { sumArray, getCombinations } = require('../utils')

const input = [
  11,
  30,
  47,
  31,
  32,
  36,
  3,
  1,
  5,
  3,
  32,
  36,
  15,
  11,
  46,
  26,
  28,
  1,
  19,
  3,
]
const limit = 150

{ // Part 1
  let matches = 0
  const combinations = getCombinations(input)
  for (const combination of combinations) {
    const sum = sumArray(combination)
    if (sum === limit) {
      matches++
    }
  }

  console.log('Part 1: ', matches)
}

{ // Part 2

  // console.log('Part 2: ', auntFound)
}