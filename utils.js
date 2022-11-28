// From https://code-boxx.com/javascript-permutations-combinations/
function allPermutations(items) {
  // allPermutations () : return a list of all possible permutations
  // Credits: https://stackoverflow.com/questions/9960908/permutations-in-javascript
  // PARAM items : array of items

  let results = []
  function permute(arr, memo) {
    var cur, memo = memo || []
    for (let i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1)
      if (arr.length === 0) {
        results.push(memo.concat(cur))
      }
      permute(arr.slice(), memo.concat(cur))
      arr.splice(i, 0, cur[0])
    }
    return results
  }
  permute(items)
  return results
}

function sumArray(array) {
  let sum = 0

  array.forEach(item => {
    sum += item
  })

  return sum
}

module.exports = {
  allPermutations,
  sumArray,
}