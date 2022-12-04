const assert = require('assert')

const input = [
  'Al => ThF',
  'Al => ThRnFAr',
  'B => BCa',
  'B => TiB',
  'B => TiRnFAr',
  'Ca => CaCa',
  'Ca => PB',
  'Ca => PRnFAr',
  'Ca => SiRnFYFAr',
  'Ca => SiRnMgAr',
  'Ca => SiTh',
  'F => CaF',
  'F => PMg',
  'F => SiAl',
  'H => CRnAlAr',
  'H => CRnFYFYFAr',
  'H => CRnFYMgAr',
  'H => CRnMgYFAr',
  'H => HCa',
  'H => NRnFYFAr',
  'H => NRnMgAr',
  'H => NTh',
  'H => OB',
  'H => ORnFAr',
  'Mg => BF',
  'Mg => TiMg',
  'N => CRnFAr',
  'N => HSi',
  'O => CRnFYFAr',
  'O => CRnMgAr',
  'O => HP',
  'O => NRnFAr',
  'O => OTi',
  'P => CaP',
  'P => PTi',
  'P => SiRnFAr',
  'Si => CaSi',
  'Th => ThCa',
  'Ti => BP',
  'Ti => TiTi',
  'e => HF',
  'e => NAl',
  'e => OMg',
]
const molecule = 'CRnCaSiRnBSiRnFArTiBPTiTiBFArPBCaSiThSiRnTiBPBPMgArCaSiRnTiMgArCaSiThCaSiRnFArRnSiRnFArTiTiBFArCaCaSiRnSiThCaCaSiRnMgArFYSiRnFYCaFArSiThCaSiThPBPTiMgArCaPRnSiAlArPBCaCaSiRnFYSiThCaRnFArArCaCaSiRnPBSiRnFArMgYCaCaCaCaSiThCaCaSiAlArCaCaSiRnPBSiAlArBCaCaCaCaSiThCaPBSiThPBPBCaSiRnFYFArSiThCaSiRnFArBCaCaSiRnFYFArSiThCaPBSiThCaSiRnPMgArRnFArPTiBCaPRnFArCaCaCaCaSiRnCaCaSiRnFYFArFArBCaSiThFArThSiThSiRnTiRnPMgArFArCaSiThCaPBCaSiRnBFArCaCaPRnCaCaPMgArSiRnFYFArCaSiThRnPBPMgAr'

String.prototype.replaceAndPushCharsAt = function (index, replacement, pushChars) {
  return this.substring(0, index) + replacement + this.substring(index + pushChars);
}

{ // Part 1
  const combinations = new Set()
  for (const transition of input) {
    const [fromElement, toElement] = transition.split(' => ')

    let lastIndex = 0
    while (true) {
      lastIndex = molecule.indexOf(fromElement, lastIndex)
      if (lastIndex === -1) {
        break
      }

      const newMoleculeFound = molecule.replaceAndPushCharsAt(lastIndex, toElement, fromElement.length)
      combinations.add(newMoleculeFound)

      lastIndex++
    }

  }

  console.log('Part 1: ', combinations.size) // 509
}

{ // Part 2
  // Minify molecule
  let step = 0
  let minifiedMolecule = molecule

  while(true) {
    let replacementsDone = 0
    for(const transition of input) {
      const [fromElement, toElement] = transition.split(' => ')
      let lastIndex = 0
      while(true) {
        lastIndex = minifiedMolecule.indexOf(toElement, lastIndex)
        if(lastIndex === -1) {
          break
        }
  
        console.log(minifiedMolecule)
        minifiedMolecule = minifiedMolecule.replaceAndPushCharsAt(lastIndex, fromElement, toElement.length)

        lastIndex++
        step++
        replacementsDone++
      }
    }

    if(!replacementsDone) break
  }  

  assert(minifiedMolecule !== molecule && minifiedMolecule.length < molecule.length) // minification succesful

  // Expand from protoMolecule "e"
  const alreadySequencedMolecules = new Set()
  let state = new Set(['e'])

  function fabricate() {
    const newState = new Set()
    const discoveredMolecules = []
    for (const sourceMolecule of state) {
      for (const transition of input) {
        const [fromElement, toElement] = transition.split(' => ')
        let lastIndex = 0
        while (true) {
          lastIndex = sourceMolecule.indexOf(fromElement, lastIndex)
          if (lastIndex === -1) {
            break
          }

          const newMolecule = sourceMolecule.replaceAndPushCharsAt(lastIndex, toElement, fromElement.length)
          const isNewMolecule = newMolecule.length <= minifiedMolecule.length && alreadySequencedMolecules.has(newMolecule) === false
          const isRepeatingTooManyTimes = (new RegExp(`${toElement}${toElement}`, "g")).test(newMolecule); 

          if (isNewMolecule && !isRepeatingTooManyTimes) {
            alreadySequencedMolecules.add(newMolecule)
            discoveredMolecules.push(newMolecule)
          }

          lastIndex++
        }
      }
    }

    // throw out molecules larger than target molecule.length
    for (const discoveredMolecule of discoveredMolecules) {
      newState.add(discoveredMolecule)
      if (discoveredMolecule === minifiedMolecule) {
        console.log('Part 2:', step) // 
        process.exit(0)
      }
    }

    state = newState
  }

  while (true) {
    console.log(`Step ${step++}, fabricating ${state.size} molecules...`)
    fabricate()

    if (state.size === 0) {
      break
    }
  }
}