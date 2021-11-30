const assert = require('assert')
const { off } = require('process')

let input1 = [
  'Sugar: capacity 3, durability 0, flavor 0, texture -3, calories 2',
  'Sprinkles: capacity -3, durability 3, flavor 0, texture 0, calories 9',
  'Candy: capacity -1, durability 0, flavor 4, texture 0, calories 1',
  'Chocolate: capacity 0, durability 0, flavor -2, texture 2, calories 8',
]

input1 = [
  'Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8',
  'Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3',
]

const ingredients = {}
for (const ingredient of input1) {
  const strings = ingredient.split(' ')
  const name = strings[0].replace(':', '')
  const capacity = parseInt(strings[2])
  const durability = parseInt(strings[4])
  const flavour = parseInt(strings[6])
  const texture = parseInt(strings[8])
  const calories = parseInt(strings[10])
  ingredients[name] = {
    capacity,
    durability,
    flavour,
    texture,
    calories,
  }
}

const radix = 5 // 100
class Ingredient {
  constructor(amount, name) {
    this.amount = amount
    this.name = name
  }
  increment() { // return overflow result
    this.amount++

    const overflow = this.amount > radix
    if (overflow) {
      this.amount = 0
      return true
    }

    return false
  }
}

let amountCombinations = []
const ingredientBlueprint = []
for (const [k, v] of Object.entries(ingredients)) {
  ingredientBlueprint.push(new Ingredient(0, k))
}

function incrementNumber(combination = []) {
  assert(combination.length > 0)
  let index = 0
  let didOverflow = false

  function incrementDigitAtIndex(index = 0) {
    const didOverflowDigit = combination[index].increment()
    if (didOverflowDigit) {
      const nextIndex = index + 1
      if (nextIndex < combination.length) {
        incrementDigitAtIndex(nextIndex)
      }
    }

    return didOverflowDigit
  }

  do {
    didOverflow = incrementDigitAtIndex(index)
    if (didOverflow) {
      let a = 1;
    }
    index++
  } while (didOverflow && index != combination.length)

  return index !== combination.length
}

let moreCombosExist
do {
  moreCombosExist = incrementNumber(ingredientBlueprint)
  function isNumberValid(number) {
    let totalAmount = 0
    for (const num of ingredientBlueprint) {
      totalAmount += num.amount
    }
    return (totalAmount === radix)
  }
  const isValid = isNumberValid(ingredientBlueprint)
  if (isValid) {
    amountCombinations.push(JSON.parse(JSON.stringify(ingredientBlueprint)))
  }
} while (moreCombosExist)

let largestScore = 0
for (const combination of amountCombinations) {
  const score = {}
  for (let ingredient of combination) {
    for (let property of Object.keys(ingredients[ingredient.name])) {
      const currentIngredient = combination.find(c => c.name === ingredient.name)
      const amount = currentIngredient.amount
      const propertyFactor = ingredients[ingredient.name][property]
      if (score[property] === undefined) {
        score[property] = 0
      }
      score[property] += amount * propertyFactor
    }
  }

  for (const property of Object.keys(score)) {
    if (score[property] < 0) {
      score[property] = 0
    }
  }
  // correct negative values
  console.log(score)
}

