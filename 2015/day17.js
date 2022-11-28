const { sumArray } = require('../utils')

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
  function getCombinations(valuesArray) {
    let combi = []
    let temp = []
    let slent = Math.pow(2, valuesArray.length)

    for (let i = 0; i < slent; i++) {
      temp = []
      for (let j = 0; j < valuesArray.length; j++) {
        if ((i & Math.pow(2, j))) {
          temp.push(valuesArray[j])
        }
      }
      if (temp.length > 0) {
        combi.push(temp)
      }
    }
    return combi
  }

  let matches = 0
  const combinations = getCombinations(input)
  for (const combination of combinations) {
    const sum = sumArray(combination)
    if (sum === limit) {
      matches++
    }
  }

  console.log(combinations)
  console.log('Part 1: ', matches)
}

{ // Part 2

  // console.log('Part 2: ', auntFound)
}