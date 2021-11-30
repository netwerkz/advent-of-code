{ // Part 1
  const input1 = [
    'Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.',
    'Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.',
  ]
  const reindeersPart1 = []
  for (let input of input1) {
    const strings = input.split(' ')
    reindeersPart1.push({
      name: strings[0],
      speed: parseInt(strings[3]),
      staminaSeconds: parseInt(strings[6]),
      restSeconds: parseInt(strings[13]),
    })
  }
  
  function getDistanceTravelledAfterSeconds(reindeer, seconds) {
    const cycleTime = reindeer.staminaSeconds + reindeer.restSeconds
    const cyclesCompletedCount = Math.floor(seconds / cycleTime)
    const secondsLeftInCurrentCycle = parseInt(seconds % cycleTime)
    const distanceTravelledInCurrentCycleSoFar = Math.min(secondsLeftInCurrentCycle, reindeer.staminaSeconds)
  
    const totalDistanceTravelled = (cyclesCompletedCount * reindeer.staminaSeconds + distanceTravelledInCurrentCycleSoFar) * reindeer.speed
    // console.log(cyclesCompletedCount, secondsLeftInCurrentCycle, totalDistanceTravelled)
  
    return totalDistanceTravelled
  }
  
  for (const reindeer of reindeersPart1) {
    console.log(`Part 1: ${reindeer.name} - `, getDistanceTravelledAfterSeconds(reindeer, 2503)) // 2660 seconds, Comet wins  
  }
}

{ // Part 2
  const input2 = [
    'Vixen can fly 19 km/s for 7 seconds, but then must rest for 124 seconds.',
    'Rudolph can fly 3 km/s for 15 seconds, but then must rest for 28 seconds.',
    'Donner can fly 19 km/s for 9 seconds, but then must rest for 164 seconds.',
    'Blitzen can fly 19 km/s for 9 seconds, but then must rest for 158 seconds.',
    'Comet can fly 13 km/s for 7 seconds, but then must rest for 82 seconds.',
    'Cupid can fly 25 km/s for 6 seconds, but then must rest for 145 seconds.',
    'Dasher can fly 14 km/s for 3 seconds, but then must rest for 38 seconds.',
    'Dancer can fly 3 km/s for 16 seconds, but then must rest for 37 seconds.',
    'Prancer can fly 25 km/s for 6 seconds, but then must rest for 143 seconds.',
  ]
  const reindeersPart2 = []
  for (let input of input2) {
    const strings = input.split(' ')
    reindeersPart2.push({
      name: strings[0],
      speed: parseInt(strings[3]),
      staminaSeconds: parseInt(strings[6]),
      restSeconds: parseInt(strings[13]),
    })
  }
  
  const raceResults = {}
  for (const reindeer of reindeersPart2) {
    raceResults[reindeer.name] = {
      score: 0
    }
  }
  for (let seconds = 1; seconds <= 2503; seconds++) {
    let bestCurrentDistance = 0
    for (const reindeer of reindeersPart2) {
      raceResults[reindeer.name].distanceTravelled = getDistanceTravelledAfterSeconds(reindeer, seconds)
      if (bestCurrentDistance < raceResults[reindeer.name].distanceTravelled) {
        bestCurrentDistance = raceResults[reindeer.name].distanceTravelled
      }
    }
  
    for (const reindeer of reindeersPart2) {
      if (raceResults[reindeer.name].distanceTravelled === bestCurrentDistance) {
        raceResults[reindeer.name].score += 1
      }
    }
  }
  let bestScorePart2 = 0;
  for (const name of Object.keys(raceResults)) {
    if (bestScorePart2 < raceResults[name].score) {
      bestScorePart2 = raceResults[name].score
    }
  }
  
  console.log('Part 2:', bestScorePart2) // 1256
}
