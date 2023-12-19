const { min, max } = require("lodash");

const input = [
  '............................................411.....................363..134.........463.775..........................506...................',
  '......429...836..$............../..960........*.............+..........*...=....381.....*........67......426.....=..../...304...............',
  '.........*...&...641..........924..*.........855....492..495.......476.927.......*.........680...../.&....*.....713......*..................',
  '.........900......................239.325..............*.............*.....953%.771...........#......808...329..........214........846%.....',
  '.............707...233...................*.....*........774...445.....107.........................................@927......775.............',
  '........721........*...17................790...670.............$..........893.93&../...129$.651.696.......131*99.............=......446*781.',
  '...........*717.868...+.............252....................................*......461.........*......................350....................',
  '....911..................*...454.............161.........875........209....695..............926.983.........758.592....*..........$.562.....',
  '...*............569#..496........888.............227......*..67......*..................877........*...#.......*.......716......975....@....',
  '...730........................$...#..112............*..509..*.......858..710.......@567..%..610..821...918..................................',
  '.........794.....701@..456-...505.....*............884.....298...............................&...............742=.....95....................',
  '............+........................891.165.......................=.............175...............$..693.............+...........127.......',
  '....*..........554...855.................*...............505.262.110..764............953@...+.....343.../..............................817..',
  '..449.464.148.........*.............1=.853.......232.356*....../.......&....................217................992..935.527............*....',
  '..........*........931...44.........................................&..........553*..............*....945......$.......*............655.....',
  '........735..718............16.....650.....944...................525.....*........................491.+...662..................27.......397.',
  '...273........*.........563...+.......*418.%.......-.....#265..........43.92.....791*211..+................*..&...507@....84...*..543.......',
  '..............562...=...........................627....*.....................*............492..*86......456..837............*........*181...',
  '.....829.233.........454..................351.......232..........47........44.401.............8....876...........965*151..284...............',
  '........*....................647..........*.....$.................#................................*....+788...*.....................-......',
  '...49.....588........174......*....111....604....358......863..61.........................663.......549......442.271&.................493...',
  '...........+..446.......*...638.......*..........................*..881................#.*....*.........................720....168%.........',
  '.....504.........*..43..245........975.................91........28..*.....966......600..18...245.......480............*....................',
  '.......*....+...57..*....................@412......812...*............729......61...................268*.............706...#................',
  '.......307..107......937.108..................453......50......778........&......*440....................4......361.........888.=256........',
  '..........................*..889*....89............675..........%.......29..427...................508..&........&...641..................455',
  '..........897...960......403.....971...*......806.....@.363................*......9+..............*.....464...................586....282*...',
  '.....316...*...............................9...#........./.............317..614........362..905..27................670.............$........',
  '......*...606....................+...........................-............*........292.*.....@..........%.........=.......164.470.902..549..',
  '..473.603.........733..482*423....276...419...../166.........297........401.......$....313......306/.353.....................*..........*...',
  '...*....................................%...............291......997.........385..............................617%..470...............618...',
  '....577...*903...%.-343.....790.................143.....*.........*...30........*................/759..$.....................@..............',
  '...............387.........*.......$.............*.....210....417.482..........86.....760...............626........503.+990..299..137..-....',
  '....*14....896.....=...922..937...188........553..63....................*150..........*........*...208...............@................338...',
  '.........#....*..774..*.......................*......................987..........737.959......665.#....329...+.../....#.....966............',
  '.......221....8........629...........521.94....706.....356...+............636........................=...*..253.655..505..............613...',
  '............................649............................270....468.......*.....................420...848..................846.....-......',
  '....43..718..678.............=.....*906....593.-26.....268...................810...401......+.........$.........842.........@..........&....',
  '826*...*......*...430+..572.....436..........*.................954.....732........*.......391..999..348.662......*.....................771..',
  '.....61.....535............*........977.......34....672.......*.........*.........693............*.............=.860.....*790.....611.......',
  '........930.......&................*................=.......596.........590....*................903.....985.639.......984...........@.......',
  '.......*.......691...379.......226..971.....549*............................438.466........./.......307.*.........75......151..594....631...',
  '........761..........*..........................236....................534..........611......835..%...............&.........*.*.........*...',
  '...275.........58.970............660-..605..........689.191...32...+..*....287$......%...........160........*625..........413......*133.885.',
  '....*..................................*...........*......*.......873........................./.............................................',
  '.....388..518.........313*820...666/.321.520...392..12....455.................165=...+.#....345........557..........293............+........',
  '.............*.........................../......*..................................267..841...........@........49......*762.863...123.......',
  '.............41......301.....247*37..........836........631*32..241&..........999.................+.....476&.....*.896.........*............',
  '.../..................*..................794...........................950...*.....................436.......$.240.+.........108............',
  '.917....$..+........72.....&....333.8*2...-.............35...809..416..-...654...750...166.................419.......=................884...',
  '.....442..537...........865..................927*114.$........*...=...............*....*...725.....................228......385...214*......',
  '..................@.........701.501..204.............320................/.......+..820.514....*.......520...../.............................',
  '................121....$....*...+......@...725...@.....................305....698..........287..877......*....7................$.%..........',
  '....920..790........468.......=............*.....584..........-546...............................*.....870............954....811.407........',
  '....*.....*....................405..........724...............................143.................256.......668.............................',
  '..877......381..........=.................................4.........../...........=495......617..................519........................',
  '..................855....59..............$63..............*............73..773.=...........*.......595.......353*....937.......226..........',
  '.....456.............@............966..........990....282..19.749....=....../..273.......860.......$...233..........*....+........*.464.....',
  '......*..........*.......206..131.$...110.861.*........*...........159....................................&............624......566.........',
  '...181...349......198....................*.....484.....989.....181............457...........................................................',
  '........*...............942@..345....................+........................*......142..86..............282...........73..................',
  '.....319..804*656.............*....................330..261......236.......263......*.............158.......*...........*........551..314...',
  '...................343.......957.175=.....492.245*.....*............*306.......745.90.........165*..........910.......818..201..*...........',
  '.............%....-.........................*.....186.188......306........*96..+......................837.......945.........@..129..........',
  '..............742..........+.....619.........889..............#...................465.....542%..44....*.../418...*..........................',
  '..................753-....973....*...$575.................883...../.....*....242..&.............*....63...........72..........*732....702...',
  '.........640....................724.........63*844...........*...234.690.48....*.....+........612..............*.......483.............$....',
  '...225.......@......................452..89........435.....754.................886....514...................209.282...*.....................',
  '.....*.....346........................=.*..........................................................357*88............473...........712..+...',
  '...84..&.......%.....616.......605&......380.....773..865.254.433......*...1*..-............33+.............283...................$......538',
  '........416.....408.......744......................&.....*....*......595........586.....428..........523......*..............901............',
  '.820@.......59*...................%625.....................560..........................*......705....*.....713..../.745........&...........',
  '.......%.......849...$.......................*...........*.....574.....#526..............304......@..241.........241..../..........975..635.',
  '....754.............269........327$..906/.133.33........400.....*...-.........540.........................299..................451*.....=...',
  '...........409............589.......................533.........564.211........*.....592.....%..............*...............................',
  '.............*...............*..915......321.........+......................938......#....809............756..396.......980.403..813.725*200',
  '...916=.%223.354...227....488...*...........%.....@.....907.659...192.$866.......874.............737.........*...............*....*.........',
  '.....................*...........966.257.......515.........*......*..........645....*..169......#.....*792...369......909....36..172.%119...',
  '..779.................669............$...318......../.309+.....546..........*....817......*........755............634*......................',
  '......441........%..........*40....6.............514.......323............464............501.84........*379....*........+.....339......$....',
  '............641...735....355........&................14...*...........*.............53.......$..............386.577....697..............520.',
  '................................................929+....288........408................*..417...192...............................899$.......',
  '.....871..................736............749*.......................................24......*.*.....$67...............616.765.........@783..',
  '......*........24........*.....$.............147...258*605.65*807......253.............450.....912......454.895.............*..#............',
  '...612....957.*........245..790.....................................@.....*............*............@....@...=..91*..554....60.15...........',
  '..........@....229..........................481.......542*650....779................520..........139..................*.....................',
  '....*304.............815....................*...................................16.................................@.772......*506....%.....',
  '.975........+....794.#........773*.......292..........708*......475............-............*100................600........862........439...',
  '.........500......................884...............#.....477...........+...........*894.368.....480..-..552*...............................',
  '.......................912..=............../......227............199..822........478.............*...742.....572.......625..................',
  '.117.........*146..529...*.718.........121..974.....................*....................201.....47........+..............*.500.............',
  '.......296.97......@...345................*......................976.......-..............%................851..........196.*....383....$...',
  '...182......................39.....#600...973....*606.................950...448...............&.....&9.215...................849........303.',
  '.......824...864*973.....%....................973......................*...........581...772..167.......+.......598.........................',
  '..829+....*..............953.............................764..424......200....788....*....@........169......280....*..........373...711.....',
  '.......147.........348.......#..744.730........355*..............=...............*..183.&...............808..*......147..........-.*........',
  '....*........836...*......807..*....$...815........235.172/...............640..93........900..............=...291...................249.....',
  '.452.213........*....698......569......%.......................320.......-.........%................................./......................',
  '..........522....406.*............959...........383.......533.......706....47&......33.960......960....&...241.....620.......-764....906#...',
  '..........*..........932............*..594.......*...711.&.....+794....................-..............487...............285.................',
  '..139...737.....*541......658.248.79...........589.....-...460...........................-..145............696.........+......645.....=640..',
  '.....*........24..........*....+......971*.................................397..&86.....95..*.................*..................*..........',
  '...55...75.............258..4.....+.......183..........349.....&...169=....@................207..187.....929..601.746.....$...269...-.......',
  '........*.......%577.........*543..149.71........337....*.....40.....................434..........%.........+......-.....277......43...638..',
  '...230%..609......................................./.580.......................+.......*....+...........640............................*....',
  '..............269..999................618...636..............311....109...314.586.....162...747..........*........56..967...............291.',
  '...../...........#.=......217............*......................*..*........*......%......................596........%......629..901$.......',
  '....103...................*....157.......427.................101..686..134.909....550...@.........911........./..579....167.............*...',
  '.............181......-.822.......*................623...................*.............39..644.......*.....841.........&.............562.45.',
  '.....+469...........89.........190...653...939.89..*......................898..............*......660..........272..@........%..614.........',
  '............&.......................*.........*...563....215....................612*882..740.&................*......173...834....$....182..',
  '......437...856........626..159...266.299...............*.............830$...................268.......467-.738.............................',
  '.........%............*................$....@...........891..291................649.................................387...938.850*..........',
  '...............922.610....*....676...........494.161%............%.................*154..741....*............326.....*............88........',
  '....702.................223........+......$.......................224.......133.............@....648..890....../..540..745*............573..',
  '.........&842....$..849........513..210.288............35.....758........../........................./................................./....',
  '..............135..+............*...........607.........*........*...............790..#.....552/.............374......*496.....253..........',
  '..........*..............804/.369....419..............22..576.....335..723.686........347..............-327...*....180......................',
  '.......685.829.790@...................*....437............................*....................392.............352...............599........',
  '.......................944..........667....*...321..764@.746.665.......+......890.......104................./..........746..668.-...........',
  '96.+....=.............#.................662....*..........*...@..961...877...*.....942+..*......290...655.303.....467.....*..*........57....',
  '....927.857........+................791........545..67......................152...........345..*.....*...............*...541..846...........',
  '................325....966....480..................@...............462..468.....352.............96.371...............593................220.',
  '........=.970.........*......*..........943.....+......*875..362.%....*....*...-.......................550*25...%191.........462............',
  '.....984...+......&..618.39.493.289..21....*....379.600...........16.642..162....256........................................*....403........',
  '...............168........*........*...*....326...............*...............*...+..............413.*.....+293.769*620....674..............',
  '647.................949..........502...748..............692...208.......271..903..................=..132.........................506$..832..',
  '..............&.........983....+................503....#.........................*350..239.....................581.......372...........*....',
  '.....45........693.........*...192.....7./......+.............774.............338....................@81...337*...................249..105..',
  '.........................598.......905....899......#..........*......-.............*31..........+......................751#......*..........',
  '...../...............56..............*..............110....594.....517..300.679.150.......64.919......287.........................5...801...',
  '....783....498..321.&...297.514.......8.......+18..........................*...............*....../.....*.....&.............................',
  '..............$..*......*....-....................*................=...961.....534*791......526....499.648.....349..&.......................',
  '........767......48....40.............524.28...369.417..432.......421..$...........................................748......40..............',
  '..........%..........+............820....*.................#...................707.....378.........801.................52..*.....102%.......',
  '..............822...364.551/......./.................118&.....922.....785........./.......*610........$..........%268..=...529..............',
  '........820..*.........................../......753.......................................................499...................435.........',
  '..232......&.676...738....#......839....876.45........866...555...664......+..68.......941.........51*585..............937.......*...917*691',
  '.........@........*.......8...31*...........+.....577*.........*....*...399....*.=....@......./...................................59........',
  '.......740.......781..........................................105.353........791.579...........900.463..............909.....................',
]

const sampleInput = [
  '467..114..',
  '...*......',
  '..35..633.',
  '......#...',
  '617*......',
  '.....+.58.',
  '..592.....',
  '......755.',
  '...$.*....',
  '.664.598..',
]

const DIGITS = '0123456789'

{ // Part 1
  let sum = 0
  const targetInput = input
  for (let y = 0; y < targetInput.length; y++) {
    const line = targetInput[y]

    for (let x = 0; x < line.length; x++) {
      const char = line[x]
      const isDigit = DIGITS.includes(char)
      if (isDigit) {
        let startingX = x
        let startingY = y
        let numberStrAccumulator = char
        // read thw whole number
        while (x < line.length - 1) {
          const nextChar = line[x + 1]
          const isNextCharADigit = DIGITS.includes(nextChar)
          if (isNextCharADigit) {
            numberStrAccumulator += nextChar
            x++
          } else {
            break;
          }
        }

        const minY = max([startingY - 1, 0])
        const maxY = min([(startingY + 1), targetInput.length - 1])
        const minX = max([startingX - 1, 0])
        const maxX = min([(startingX + numberStrAccumulator.length), line.length - 1])
        let isSurroundedByChar = false
        let breakLoop = false
        for (let yy = minY; yy <= maxY && !breakLoop; yy++) {
          for (let xx = minX; xx <= maxX && !breakLoop; xx++) {
            const potentialSymbol = targetInput[yy][xx]
            const isSymbol = ![...DIGITS, '.'].includes(potentialSymbol)
            if (isSymbol) {
              isSurroundedByChar = true
              breakLoop = true
            }
          }
        }

        if (isSurroundedByChar) {
          sum += Number(numberStrAccumulator)
          console.log(`Adding: ${numberStrAccumulator}`)
        } else {
          console.log(`Skipping: ${numberStrAccumulator} at ${x}:${y}`)
          x += numberStrAccumulator.length
        }
      } else {
        continue
      }
    }
  }

  console.log('Part 1:', sum) 
  // 382601 too low
  // 527007 too low
  // 531904 incorrect
  // 538387 too high
}