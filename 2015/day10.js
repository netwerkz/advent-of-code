let input = '1113122113'

// input = '1'

function lookAndSay(input) {
  let index = 1;
  let result = ''
  let charRepetitions = 1
  let prevChar = input[0]
  while(index <= input.length) {
    const currentChar = input[index]
    if(currentChar === prevChar) {
      charRepetitions++
    } else {
      result += `${charRepetitions}${prevChar}`
      charRepetitions = 1
    }    
    
    prevChar = currentChar
    index++
  }
  
  return result
}

{
  let result = input
  for(let i = 0; i < 40; i++) {
    result = lookAndSay(result)
  }
  
  console.log('Part 1: ', result.length)
}
{
  let result = input
  for(let i = 0; i < 50; i++) {
    result = lookAndSay(result)
  }
  
  console.log('Part 2: ', result.length)
}
