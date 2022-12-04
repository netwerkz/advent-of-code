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

String.prototype.replaceAndPushCharsAt = function(index, replacement, pushChars) {
  return this.substring(0, index) + replacement + this.substring(index + pushChars);
}

{ // Part 1
  const combinations = new Set()
  for(const transition of input) {
    const [fromElement, toElement] = transition.split(' => ')

    let lastIndex = 0
    while(true) {
      lastIndex = molecule.indexOf(fromElement, lastIndex)
      if(lastIndex === -1) {
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
  let steps = 0
  let preMolecule = molecule

  // TODO: start from e and go from there using tree traversal?
  const startingE1 = 'HF'
  const startingE2 = 'NAl'
  const startingE3 = 'OMg'

  function fabricate(startMolecule) {
    let totalSteps = 1 // because "e" => "startMolecule" is 1 step already
    while(true) {
      let replacementsDone = 0
      for(const transition of input) {
        const [fromElement, toElement] = transition.split(' => ')
        let lastIndex = 0
        while(true) {
          lastIndex = preMolecule.indexOf(toElement, lastIndex)
          if(lastIndex === -1) {
            break
          }
    
          preMolecule = preMolecule.replaceAndPushCharsAt(lastIndex, fromElement, toElement.length)
    
          lastIndex++
          steps++
          replacementsDone++
        }
      }
  
      if(!replacementsDone) break
    }  
  }
  fabricate(startingE1) // TODO: e2, e3
  

  console.log('Part 2:', steps, preMolecule) // 
}