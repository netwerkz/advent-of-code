const { allPermutations } = require('../utils')

let inputs = [
  'Faerun to Norrath = 129',
  'Faerun to Tristram = 58',
  'Faerun to AlphaCentauri = 13',
  'Faerun to Arbre = 24',
  'Faerun to Snowdin = 60',
  'Faerun to Tambi = 71',
  'Faerun to Straylight = 67',
  'Norrath to Tristram = 142',
  'Norrath to AlphaCentauri = 15',
  'Norrath to Arbre = 135',
  'Norrath to Snowdin = 75',
  'Norrath to Tambi = 82',
  'Norrath to Straylight = 54',
  'Tristram to AlphaCentauri = 118',
  'Tristram to Arbre = 122',
  'Tristram to Snowdin = 103',
  'Tristram to Tambi = 49',
  'Tristram to Straylight = 97',
  'AlphaCentauri to Arbre = 116',
  'AlphaCentauri to Snowdin = 12',
  'AlphaCentauri to Tambi = 18',
  'AlphaCentauri to Straylight = 91',
  'Arbre to Snowdin = 129',
  'Arbre to Tambi = 53',
  'Arbre to Straylight = 40',
  'Snowdin to Tambi = 15',
  'Snowdin to Straylight = 99',
  'Tambi to Straylight = 70'
]

const sampleInputs = [
  'London to Dublin = 464',
  'London to Belfast = 518',
  'Dublin to Belfast = 141',
]
// inputs = sampleInputs

const locations = new Set
for (const input of inputs) {
  const strings = input.split(' ')
  const fromLocation = strings[0]
  const toLocation = strings[2]
  locations.add(fromLocation)
  locations.add(toLocation)
  // console.log(fromLocation, toLocation, distance)
}

let smallestDistance = Number.MAX_SAFE_INTEGER
let greatestDistance = 0
const locationsPermutations = allPermutations([...locations]);
for (const permutation of locationsPermutations) {
  let travelledDistance = 0;
  for (let i = 1; i < permutation.length; i++) {
    const fromLocation = permutation[i - 1]
    const toLocation = permutation[i]
    const str = inputs.find((location) => (location.includes(fromLocation) && location.includes(toLocation)))
    travelledDistance += parseInt(str.split(' ')[4])
  }
  if (travelledDistance < smallestDistance) {
    smallestDistance = travelledDistance
  }
  if (travelledDistance > greatestDistance) {
    greatestDistance = travelledDistance
  }
}

console.log('Part 1 - smallest distance:', smallestDistance) // 207
console.log('Part 2 - greatest distance:', greatestDistance) // 804