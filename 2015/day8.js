const fs = require('fs')

const bytes = fs.readFileSync('./2015/day8.input')

function addSlashes(str) {
  return str.replace(/[\\"']/g, '\\$&');
}

let memoryCount = 0
let charCount = 0
let escapedCharCount = 0
for (const byte of bytes) {
  if ([13, 10].includes(byte)) {
    continue
  }
  // console.log(byte, String.fromCharCode(byte))
  memoryCount++
}

const strings = String.fromCharCode(...bytes).split('\r\n')
for (const string of strings) {
  const trimmed = eval(string)
  // console.log(trimmed, trimmed.length)

  charCount += trimmed.length
  const escapedString = '"'+addSlashes(string)+'"'
  escapedCharCount += escapedString.length
  // console.log(string, escapedString)
}

console.log('Part 1:', memoryCount - charCount)
console.log('Part 2:', escapedCharCount - memoryCount)
