const assert = require('assert')

let input = 'vzbxkghb'

String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function incrementChar(char) {
  assert(typeof char === 'string')

  let codeNum = char.charCodeAt(0)
  let incrementedChar = String.fromCharCode(++codeNum);
  let overflow = false
  if (char === 'z') {
    incrementedChar = 'a'
    overflow = true
  }

  return {
    incrementedChar,
    overflow,
  }
}

function incrementPassword(password) {
  let charIndex = password.length
  let result
  do {
    result = incrementChar(password[--charIndex])
    password = password.replaceAt(charIndex, result.incrementedChar)
  } while (charIndex > 0 && result.overflow)

  return password
}

function threeIncreasingLetters(password) {
  let prevChar = null
  let numIncreasingChars = 0
  for (let i = 0; i < password.length; i++) {
    const currentChar = password[i]
    if (prevChar !== null) {
      const currentCode = currentChar.charCodeAt(0)
      const prevCode = prevChar.charCodeAt(0)
      if (currentCode === prevCode + 1) {
        numIncreasingChars++
        if (numIncreasingChars >= 2) return true
      } else {
        numIncreasingChars = 0
      }
    }
    prevChar = currentChar
  }
  return false
}

function notContainBlacklisterLetters(password) {
  return ! /[iol]/.test(password)
}

function mustContainAtLeastTwoDifferentNonOverlappingPairsOfLetters(password) {
  const matches = password.match(/([a-z])\1/g) || []
  return matches.length >= 2
}

function isPasswordValid(password) {
  const condition1 = threeIncreasingLetters(password)
  const condition2 = notContainBlacklisterLetters(password)
  const condition3 = mustContainAtLeastTwoDifferentNonOverlappingPairsOfLetters(password)

  return condition1 && condition2 && condition3
}

let rotatedPassword = input
do {
  rotatedPassword = incrementPassword(rotatedPassword)
} while (!isPasswordValid(rotatedPassword))

console.log('Part 1:', rotatedPassword)

do {
  rotatedPassword = incrementPassword(rotatedPassword)
} while (!isPasswordValid(rotatedPassword))

console.log('Part 2:', rotatedPassword)