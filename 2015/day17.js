const { sum } = require('lodash')
const { getCombinations } = require('../utils')

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
    const result = sum(combination)
    if (result === limit) {
      matches++
    }
  }

  console.log('Part 1: ', matches) // 4372
}

{ // Part 2
  const state = {}
  const combinations = getCombinations(input)
  for (const combination of combinations) {
    const result = sum(combination)
    if (result === limit) {
      const numContainers = combination.length
      if(state[numContainers] === undefined) {
        state[numContainers] = 0
      }
      state[numContainers]++
    }
  }

  let result = null
  let minCombinations = Number.POSITIVE_INFINITY
  for(const [combinationsFound, containerCount] of Object.entries(state)) {
    if(containerCount < minCombinations) {
      minCombinations = containerCount
      result = combinationsFound
    }
  }
  console.log('Part 2: ', result) // 4
}