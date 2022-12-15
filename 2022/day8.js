const input = [
  '233221301103014030101125554304512450101014416563016614544451211503551012024530301031123411303012023',
  '223110030312032004315232020021044351226566053525520014161014365133524241052505310020040430140233233',
  '011200302423421402534302350042313154065514525565225306335602432332241151015242024200402140133220003',
  '002023323144303045350514551440115531356512252026625440355250226333224214343231500124312340334341321',
  '101232243140312024142320204214244464231230062354016652136653240513255431333204040044401030434211030',
  '303102413102435311532052555553031040461010416520354404000202101125240056131215011352334200032434223',
  '300241124021350440235305305265064502252664355653052603103661022335154654350220253343535411223334123',
  '323220243322044313554114210145156005441001520353563754330342212516625242341151024213335041414342201',
  '130013214244243213502220216324363535110135412126721426711575535566050222160040010533452035332043122',
  '331223042334244550504551605434252666266354232461526253225234277303623553352605022424451300442404244',
  '143244011302242550040222126526005533526344773247731442766312662452542641101604655543134141230441332',
  '034223223341140140532440622100244276224772513433354277525736136616624533125062164113454025403423402',
  '011112421331125444541545223116743735215125731334727642366151131753355120223064024615410235002330044',
  '444010415251333360424226054325525134356261352627756142635246277134767675144662506365541424215011331',
  '413332441252412114024404002455175464551226722723787467136522723675716526677621400405145404044353224',
  '320023231445523665546426443713561726276471685736846476656864427621276566267641152263152434551423142',
  '422032340150053016434505315234157333716363573868457334788332525157426143532125060004414202214323541',
  '242005523130100156466605122446724637245547256767534536377384663686265165314726542344260140135454002',
  '103103100333045134543342647715363346722727472345762338564544728683817742222663435161452411314342331',
  '201030531455612563214136716421674265273685246232774787758444882758632623271232544645026655130050015',
  '202410214152634604632242257725843782468462487534886844242326842632565746616656433140433335243531333',
  '411504054613063251425672131267466665352547345346773883344377237255874782366375362434624660051354302',
  '332334051660432424365534664438257225352566448464768647749842833862366527525737563310450154222212201',
  '554551232162023652377415617576326426634334486439834956749789862277657783246672677312135325021125400',
  '215415462453165534715474435345677326623944368587786448463733938422325377247253142625766166441124240',
  '152520042445420426271164156224232558995394389979447796564968436496783742374537144266754145665133551',
  '310343406536261745732663877434357763897657757483567998955333735485732743685642167713461503241410413',
  '415444100156265263661412857434726837394473488968699838749578938837968847383432226374617610220601131',
  '044000262650372413555472572764488366353877587334555968745383837543935447883323412334776255334201434',
  '331416641562174551317778768486783555676634548677966894448878499783948688878478273164216565456622432',
  '542264115512434233272343848478748567383875668797597769875598699635845682727422684656425363423254043',
  '551355050443331327358343724746553849357476979686844488954889849539839345668335624531411166014406004',
  '440110124312163373442478475539635686795987575554687897645498659549998653645848866855143417411221612',
  '452416661044376754553536384443537367449997689768555695778848587859646763666787267355113376652032403',
  '351650106612733643567234479567838574545748547654959748898496787978857448387838556761311434621161600',
  '423164215452426775346873528893488499859748486797964668784868787959578553965536576733115232412150350',
  '534520345555146763236633735798347448877599674655978795974786569666444749477557576225721371326555454',
  '015012041533642333262638456553667977664659486997665867556895587645795864896923458222123716546104604',
  '541314543717441134768334438436398575674499788867858879958994567865657958799965467265822753444305130',
  '104150434751234164255836339363688675667479889896798557658668974494587453947337235834446644234104263',
  '441420243111137557568749494995774879487597588968889595759978549788648695757684634223416656462645003',
  '103125155224727172844574993843955848657566577796675586566789686649665879655957838554322354612552424',
  '505004515272455856668623737796989468458856966956698758978866957467864653369358663825786774354323034',
  '326033654574774366385288876634649479797795567779796665896955776488686574458935627685483456547506432',
  '562103324543744324365346453468648558597657599588698696999885595968976978794937464456581432613140136',
  '612345424446172733285699787374567874598678685688686687688767588585457545587555947527286555311050000',
  '433411414626376543244244867987484948587678658966766789796877855698467447859563357883485375475406354',
  '341253451334125875245373685564955887589966866989999997797598978974475468594857484258484136127120100',
  '200303433735745237766747834544658696999686799768686786879887875664657758359549937282838247626231056',
  '654646336644158883684285846734695969585558766799679888677899877697994746768685758885425753311261306',
  '201036034452128372763239763585657697767668999996887978766987796754969494978755372858433115131334025',
  '462060556445627753535893495377649878766655988798977997687789856658474747668868444568545643714431066',
  '140254534612124588745669733384686669655659556969687669686697565594784896454757723723424377574253611',
  '663516371646244454853456894595497944586665977899987888798588768965477846974987562747644153757513141',
  '332452315233616328522297938878564899968667857886976687688787756767865449986797765827526215346700510',
  '452645155542553755722737576437966959876669857879789679679787668766866869639497732582262262346206605',
  '320451305651771656358773668459579474577589978577787666868787685797884496985453478287843557752540326',
  '221005405577667683824287895575588785589656888856599685876586776546856449569557225537381525443546515',
  '522610412447146737554357965736564875845999676767786957776689658558947465783965388637347135733214120',
  '365113041743772247648369688588766659447876857788787989999588676755655643654457223588345215763342145',
  '331365662344244275766538468557895994865886687597975599897895679569494793355738562445371761445154350',
  '560416605723667182485224784988455577468866555569569998585787896485878847338535683462264111470251530',
  '146413604243275425265736458655756558556566768798968887777776464554786797466795526262563147715263426',
  '130226503774252443838523787457458487445798576575789687898599777444996674896557665832754766151211114',
  '410644160416465516265472763685956655947554997997988985664549867944667645963837585338271746120020623',
  '234400444353735614367346473777975359676584465486444488547785859567944686978722843764714117506664600',
  '330546341222173232268777444964336537946884947578646848754969987868489857574783625523627515745012632',
  '215510460313351411647234366638389773845747847598579897894889788546944863985342457275663675614025645',
  '342210213545727234368434488693363487985575464755897758657759859343755599343477752464125277503536454',
  '231114156421261576175655857464745369897476648997688859877754445379957697253653436731667713060354010',
  '453164662623171156214662327873474686336654745997449564568896584576355868652768524545755363354252620',
  '554300025316031736125826485383344339936569454949855764487789637389535733242664787511565362326423031',
  '320445466330572672647677445385687357347484433584587359664737845658463728375235815264547445451141050',
  '504233423002631313542617237333654646344836534888493885796453743989575826863727171225235343520331515',
  '550051466325245352321661255742284479457798358753587476535783987374576533832831166254212101342043215',
  '103404063140042663267711668752435245443665533849666834674565479747865765884433262127324024133412453',
  '502210250335356312253437134837433475579479784957983873846397955424332238453171177325245310426631521',
  '120423203425443325251472236253442864547699839844889568449833836538346875574334244366660066111410500',
  '150153024014651445361655446722526662223434754345497966369358272744777533661277677616351264143044333',
  '305043020534516555723625613757836647243434758546652236833432766363745648575252765670636334423020131',
  '324341410350233006414762746234734427762582565426887263285227484572273665714572114134636106013020003',
  '024200410445454521665127625215755832276547667754345246823835628624425272357333436355205213141023411',
  '042531434220205431213215417464652274557872486753652854725522264725447146417737544341305620021332442',
  '000344203054303414332247511552441765344484233633274753688646745444375155547363223656046623541021312',
  '112201101440051650123666552763751174414522522454367622586846738672455255341233213141313644302203534',
  '033034235541206026565611331557477413635332243334866483233646131427363516527746640130053324105441343',
  '440432235524015324224620641631111436575761766437865557653265414665227132272123041536221402525004420',
  '424204415025304344210144511336126171352733234257647414163555255776662313512445124614512541552311403',
  '201203443413331044112643006546676731362454147415613675324315222135154622450034424105110224345204424',
  '404032420045400044052565515162401326262664123571333131356225636421142014511240160465543201054014314',
  '140044001322251045503043151635126675576646522245367527254755444572343462466066233105323133200240324',
  '142132040345344121403506604160454253277156425274151762712352543305563111025002305104214312140031443',
  '320411133024401404323432063135406654433363161345315713341411244554233022526116153323002505144044210',
  '131230124111314340101354024335060425100312345444175716433135323021551435425313124554012321023300324',
  '030420114021215402121303133114546220214604202332136022350260462606446502430052002150144444321104203',
  '300211414243414500044050104102034525462355366652523204163624026443102203551513331414101143310403023',
  '110211230343204114142500240353200434243156554215023430233064610531316015110202440241003231234113202',
  '100202013233034314540220440222252066451465203542453535611346001146526045342142013305331421411410013',
  '213120202203131334354133550411130050063060344561426462151351261236123301315415324404100140403211313',
]

const sampleInput = [
  '30373',
  '25512',
  '65332',
  '33549',
  '35390',
]

{ // Part 1
  let visibleCount = 0
  const data = input.map((row) => row.split(''))

  for (let y = 0; y < data.length; y++) {
    const row = data[y]
    for (let x = 0; x < row.length; x++) {
      const currentTree = data[y][x]
      let isTreeVisible = false
      let isVisibleToLeft = true
      let isVisibleToRight = true
      let isVisibleToTop = true
      let isVisibleToBottom = true

      if (x === 0 || y === 0 || x === (row.length - 1) || y === (data.length - 1)) {
        isTreeVisible = true
      } else {
        // check left trees
        for (let xx = x - 1; xx >= 0; xx--) {
          const treeToTheLeft = data[y][xx]
          if (treeToTheLeft >= currentTree) {
            isVisibleToLeft = false; break
          }
        }

        // check right trees
        for (let xx = x + 1; xx < row.length; xx++) {
          const treeToTheRight = data[y][xx]
          if (treeToTheRight >= currentTree) {
            isVisibleToRight = false; break
          }
        }

        // check top trees        
        for (let yy = y - 1; yy >= 0; yy--) {
          const treeAbove = data[yy][x]
          if (treeAbove >= currentTree) {
            isVisibleToTop = false; break
          }
        }

        // check bottom trees        
        for (let yy = y + 1; yy < data.length; yy++) {
          const treeBelow = data[yy][x]
          if (treeBelow >= currentTree) {
            isVisibleToBottom = false; break
          }
        }
      }

      isTreeVisible ||= isVisibleToLeft || isVisibleToRight || isVisibleToTop || isVisibleToBottom
      if (isTreeVisible) {
        visibleCount++
      }
    }
  }

  console.log('Part 1', visibleCount) // 1681
}

{ // Part 2
  let bestScenicScore = 0
  let visibleCount = 0
  const data = input.map((row) => row.split(''))

  for (let y = 0; y < data.length; y++) {
    const row = data[y]
    for (let x = 0; x < row.length; x++) {
      const currentTree = data[y][x]
      let scoreUp = 0
      let scoreDown = 0
      let scoreLeft = 0
      let scoreRight = 0

      // check left trees
      for (let xx = x - 1; xx >= 0; xx--) {
        scoreLeft++
        const treeToTheLeft = data[y][xx]
        if (treeToTheLeft >= currentTree) {
          isVisibleToLeft = false; break
        }
      }

      // check right trees
      for (let xx = x + 1; xx < row.length; xx++) {
        scoreRight++
        const treeToTheRight = data[y][xx]
        if (treeToTheRight >= currentTree) {
          isVisibleToRight = false; break
        }
      }

      // check top trees        
      for (let yy = y - 1; yy >= 0; yy--) {
        scoreUp++
        const treeAbove = data[yy][x]
        if (treeAbove >= currentTree) {
          isVisibleToTop = false; break
        }
      }

      // check bottom trees        
      for (let yy = y + 1; yy < data.length; yy++) {
        scoreDown++
        const treeBelow = data[yy][x]
        if (treeBelow >= currentTree) {
          isVisibleToBottom = false; break
        }
      }

      const totalScore = scoreUp * scoreDown * scoreLeft * scoreRight
      if (totalScore > bestScenicScore) {
        bestScenicScore = totalScore
      }
    }
  }

  console.log('Part 2:', bestScenicScore) // 201684
}