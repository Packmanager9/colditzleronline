
window.addEventListener('DOMContentLoaded', (event) => {

    let dynamic2 = 0
    let dynamic1 = 0

    let playstart = 0
    let debreak = 1
    let start = 0 // whether it's okay to draw the game into the canvas element.
    function empty() {

    }
    let dataflop = 0 // enforces only 1 
    // preferential towards buildings
    // elite units

    // startup frames
    let startupart = new Image()
    startupart.src = 'startupart.png'

    // background
    let snow = new Image()
    snow.src = 'smoothsnow4.png'
    let rawdirt = new Image()
    rawdirt.src = 'rawdirt4.png'
    // barriers
    let nowalk = new Image()
    nowalk.src = 'nowalk.png'

    let closedgate = new Image()
    closedgate.src = 'closedgate.png'

    let opengate = new Image()
    opengate.src = 'opengate.png'

    let sounds = []
    let soundspamdrop = .55

    let postwind = new Audio()
    postwind.src = "postwind.mp3"
    // sounds.push(postwind)
    postwind.volume = .4

    let hopeyouknow = new Audio()
    hopeyouknow.src = "hopeyouknow.mp3"
    sounds.push(hopeyouknow)
    let myfuneral = new Audio()
    myfuneral.src = "myfuneral.mp3"
    sounds.push(myfuneral)
    let systems = new Audio()
    systems.src = "systems.mp3"
    sounds.push(systems)
    let redlight = new Audio()
    redlight.src = "redlight.mp3"
    sounds.push(redlight)
    let feelcold = new Audio()
    feelcold.src = "feelcold.mp3"
    sounds.push(feelcold)
    let hitsomething = new Audio()
    hitsomething.src = "hitsomething.mp3"
    sounds.push(hitsomething)
    let rollout = new Audio()
    rollout.src = "rollout.mp3"
    sounds.push(rollout)
    let overtime = new Audio()
    overtime.src = "overtime.mp3"
    sounds.push(overtime)
    let movin = new Audio()
    movin.src = "movin.mp3"
    sounds.push(movin)

    //gate audio

    let closing1 = new Audio()
    closing1.src = "closing1.mp3"
    sounds.push(closing1)
    let closing2 = new Audio()
    closing2.src = "closing2.mp3"
    sounds.push(closing2)
    let closing3 = new Audio()
    closing3.src = "closing3.mp3"
    sounds.push(closing3)
    let opening1 = new Audio()
    opening1.src = "opening1.mp3"
    sounds.push(opening1)
    let opening2 = new Audio()
    opening2.src = "opening2.mp3"
    sounds.push(opening2)

    // soldier audio
    let arerats = new Audio()
    arerats.src = "arerats.mp3"
    sounds.push(arerats)
    let reallytacky = new Audio()
    reallytacky.src = "reallytacky.mp3"
    sounds.push(reallytacky)
    let youareabuse = new Audio()
    youareabuse.src = "youareabuse.mp3"
    sounds.push(youareabuse)
    let inthejetsarm = new Audio()
    inthejetsarm.src = "inthejetsarm.mp3"
    sounds.push(inthejetsarm)
    let torus = new Audio()
    torus.src = "torus.mp3"
    sounds.push(torus)
    let enormoushead = new Audio()
    enormoushead.src = "enormoushead.mp3"
    sounds.push(enormoushead)
    let testroom = new Audio()
    testroom.src = "testroom.mp3"
    sounds.push(testroom)
    let sorcery = new Audio()
    sorcery.src = "sorcery.mp3"
    sounds.push(sorcery)
    let pagetti = new Audio()
    pagetti.src = "pagetti.mp3"
    sounds.push(pagetti)
    let saytome = new Audio()
    saytome.src = "saytome.mp3"
    sounds.push(saytome)
    let seearoundme = new Audio()
    seearoundme.src = "seearoundme.mp3"
    sounds.push(seearoundme)
    let snnazzyroom = new Audio()
    snnazzyroom.src = "snnazzyroom.mp3"
    sounds.push(snnazzyroom)
    let snazzyroom = new Audio()
    snazzyroom.src = "snazzyroom.mp3"
    sounds.push(snazzyroom)


    //invader audio
    let iamerror = new Audio()
    iamerror.src = "iamerror.mp3"
    sounds.push(iamerror)
    let incroiable = new Audio()
    incroiable.src = "incroiable.mp3"
    sounds.push(incroiable)
    let youhome = new Audio()
    youhome.src = "youhome.mp3"
    sounds.push(youhome)
    let gentlemen = new Audio()
    gentlemen.src = "gentlemen.mp3"
    sounds.push(gentlemen)
    let zero = new Audio()
    zero.src = "zero.mp3"
    sounds.push(zero)
    let ohgeezyouvehurtme = new Audio()
    ohgeezyouvehurtme.src = "ohgeezyouvehurtme.mp3"
    sounds.push(ohgeezyouvehurtme)
    let ritual = new Audio()
    ritual.src = "ritual.mp3"
    sounds.push(ritual)

    // podman audio
    let youworkforme = new Audio()
    youworkforme.src = "youworkforme.mp3"
    sounds.push(youworkforme)
    let whatdoweneed = new Audio()
    whatdoweneed.src = "whatdoweneed.mp3"
    sounds.push(whatdoweneed)
    let gushorgushnot = new Audio()
    gushorgushnot.src = "gushorgushnot.mp3"
    sounds.push(gushorgushnot)
    let nahimgood = new Audio()
    nahimgood.src = "nahimgood.mp3"
    sounds.push(nahimgood)
    let backwithclass = new Audio()
    backwithclass.src = "backwithclass.mp3"
    sounds.push(backwithclass)
    let hotmore = new Audio()
    hotmore.src = "hotmore.mp3"
    sounds.push(hotmore)
    let maybegofishing = new Audio()
    maybegofishing.src = "maybegofishing.mp3"
    sounds.push(maybegofishing)
    let walkinthesunpostskirmish = new Audio()
    walkinthesunpostskirmish.src = "walkinthesunpostskirmish.mp3"
    sounds.push(walkinthesunpostskirmish)
    let whosthegas = new Audio()
    whosthegas.src = "whosthegas.mp3"
    sounds.push(whosthegas)
    let bombbuoy = new Audio()
    bombbuoy.src = "bombbuoy.mp3"
    sounds.push(bombbuoy)
    let seeyesineed = new Audio()
    seeyesineed.src = "seeyesineed.mp3"
    sounds.push(seeyesineed)
    let notinhere = new Audio()
    notinhere.src = "notinhere.mp3"
    sounds.push(notinhere)
    let whatdoesthisdo = new Audio()
    whatdoesthisdo.src = "whatdoesthisdo.mp3"
    sounds.push(whatdoesthisdo)
    let moveitalong = new Audio()
    moveitalong.src = "moveitalong.mp3"
    sounds.push(moveitalong)

    //sniper audio
    let adjustingforwindspeed = new Audio()
    adjustingforwindspeed.src = "adjustingforwindspeed.mp3"
    sounds.push(adjustingforwindspeed)
    let bossaroundhere = new Audio()
    bossaroundhere.src = "bossaroundhere.mp3"
    sounds.push(bossaroundhere)
    let bossaroundhere2 = new Audio()
    bossaroundhere2.src = "bossaroundhere2.mp3"
    sounds.push(bossaroundhere2)
    let doyouunderstand = new Audio()
    doyouunderstand.src = "doyouunderstand.mp3"
    sounds.push(doyouunderstand)
    let goingdown = new Audio()
    goingdown.src = "doyouunderstand.mp3"
    sounds.push(goingdown)
    let idontunderstand = new Audio()
    idontunderstand.src = "idontunderstand.mp3"
    sounds.push(idontunderstand)
    let isnipedyouaweekago = new Audio()
    isnipedyouaweekago.src = "isnipedyouaweekago.mp3"
    sounds.push(isnipedyouaweekago)
    let isnipedyouaweekago2 = new Audio()
    isnipedyouaweekago2.src = "isnipedyouaweekago2.mp3"
    sounds.push(isnipedyouaweekago2)
    let ivegotanhour = new Audio()
    ivegotanhour.src = "ivegotanhour.mp3"
    sounds.push(ivegotanhour)
    let ivoryeh = new Audio()
    ivoryeh.src = "ivegotanhour.mp3"
    sounds.push(ivoryeh)
    let jobsthejob = new Audio()
    jobsthejob.src = "jobsthejob.mp3"
    sounds.push(jobsthejob)
    let likecontrolling = new Audio()
    likecontrolling.src = "likecontrolling.mp3"
    sounds.push(likecontrolling)
    let oratleastone = new Audio()
    oratleastone.src = "oratleastone.mp3"
    sounds.push(oratleastone)
    let theresone = new Audio()
    theresone.src = "theresone.mp3"
    sounds.push(theresone)
    let timber = new Audio()
    timber.src = "timber.mp3"
    sounds.push(timber)
    let veryprecise = new Audio()
    veryprecise.src = "veryprecise.mp3"
    sounds.push(veryprecise)
    let veryprecise2 = new Audio()
    veryprecise2.src = "veryprecise2.mp3"
    sounds.push(veryprecise2)
    let wealthstatusandpower = new Audio()
    wealthstatusandpower.src = "wealthstatusandpower.mp3"
    sounds.push(wealthstatusandpower)
    let wontbesolucky = new Audio()
    wontbesolucky.src = "wontbesolucky.mp3"
    sounds.push(wontbesolucky)
    let youunderstandany = new Audio()
    youunderstandany.src = "youunderstandany.mp3"
    sounds.push(youunderstandany)
    let ahgeez = new Audio()
    ahgeez.src = "ahgeez.mp3"
    sounds.push(ahgeez)

    //gamergate audio
    let hovness = new Audio()
    hovness.src = "hovness.mp3"
    sounds.push(hovness)
    let dontstopeating = new Audio()
    dontstopeating.src = "dontstopeating.mp3"
    sounds.push(dontstopeating)
    let solutionnotobey = new Audio()
    solutionnotobey.src = "solutionnotobey.mp3"
    sounds.push(solutionnotobey)
    let youhurtme = new Audio()
    youhurtme.src = "youhurtme.mp3"
    sounds.push(youhurtme)
    let slurpslurp = new Audio()
    slurpslurp.src = "slurpslurp.mp3"
    sounds.push(slurpslurp)
    let buyburbon = new Audio()
    buyburbon.src = "buyburbon.mp3"
    sounds.push(buyburbon)
    let whatisthis = new Audio()
    whatisthis.src = "whatisthis.mp3"
    sounds.push(whatisthis)
    let doyouwantsome = new Audio()
    doyouwantsome.src = "doyouwantsome.mp3"
    sounds.push(doyouwantsome)
    let hoppe = new Audio()
    hoppe.src = "hoppe.mp3"
    sounds.push(hoppe)
    let letemseeit = new Audio()
    letemseeit.src = "letemseeit.mp3"
    sounds.push(letemseeit)
    let gooutside = new Audio()
    gooutside.src = "gooutside.mp3"
    sounds.push(gooutside)
    let ggd1 = new Audio()
    ggd1.src = "ggd1.mp3"
    sounds.push(ggd1)
    let ggd2 = new Audio()
    ggd2.src = "ggd2.mp3"
    sounds.push(ggd2)
    let ggd3 = new Audio()
    ggd3.src = "ggd3.mp3"
    sounds.push(ggd3)


    //nymph audio
    let itstheedgeofusfight = new Audio()
    itstheedgeofusfight.src = "itstheedgeofusfight.mp3"
    sounds.push(itstheedgeofusfight)
    let sureilike = new Audio()
    sureilike.src = "sureilike.mp3"
    sounds.push(sureilike)
    let seethemseetheme = new Audio()
    seethemseetheme.src = "seethemseetheme.mp3"
    sounds.push(seethemseetheme)
    let seeasvillaneh = new Audio()
    seeasvillaneh.src = "seeasvillaneh.mp3"
    sounds.push(seeasvillaneh)
    let spreadoutseemult = new Audio()
    spreadoutseemult.src = "spreadoutseemult.mp3"
    sounds.push(spreadoutseemult)
    let whoarewetomolt = new Audio()
    whoarewetomolt.src = "whoarewetomolt.mp3"
    sounds.push(whoarewetomolt)

    //scuttler audio
    let scuttlerdeath = new Audio()
    scuttlerdeath.src = "scuttlerdeath.mp3"
    sounds.push(scuttlerdeath)
    let whoelsezagtheoystergush = new Audio()
    whoelsezagtheoystergush.src = "whoelsezagtheoystergush.mp3"
    sounds.push(whoelsezagtheoystergush)
    let sureiwillstandup = new Audio()
    sureiwillstandup.src = "sureiwillstandup.mp3"
    sounds.push(sureiwillstandup)
    let suresawwithvenom = new Audio()
    suresawwithvenom.src = "suresawwithvenom.mp3"
    sounds.push(suresawwithvenom)
    let suresauna = new Audio()
    suresauna.src = "suresauna.mp3"
    sounds.push(suresauna)
    let stallusyourworth = new Audio()
    stallusyourworth.src = "stallusyourworth.mp3"
    sounds.push(stallusyourworth)
    let getinthebathsootheyourson = new Audio()
    getinthebathsootheyourson.src = "getinthebathsootheyourson.mp3"
    sounds.push(getinthebathsootheyourson)
    let illness = new Audio()
    illness.src = "illness.mp3"
    sounds.push(illness)
    let whatareyoufreesievingoutput = new Audio()
    whatareyoufreesievingoutput.src = "whatreyoufreesievingoutput.mp3"
    sounds.push(whatareyoufreesievingoutput)
    let icannamethevillans = new Audio()
    icannamethevillans.src = "icannamethevillans.mp3"
    sounds.push(icannamethevillans)
    let mylifesmine = new Audio()
    mylifesmine.src = "mylifesmine.mp3"
    sounds.push(mylifesmine)
    let iknowcomeon = new Audio()
    iknowcomeon.src = "iknowcomeon.mp3"
    sounds.push(iknowcomeon)
    let guessillgothen = new Audio()
    guessillgothen.src = "guessillgothen.mp3"
    sounds.push(guessillgothen)
    let yeahimfamiliarsee = new Audio()
    yeahimfamiliarsee.src = "yeahimfamiliarsee.mp3"
    sounds.push(yeahimfamiliarsee)
    let amiaringer = new Audio()
    amiaringer.src = "amiaringer.mp3"
    sounds.push(amiaringer)
    let ohisthattheeyeofthesnake = new Audio()
    ohisthattheeyeofthesnake.src = "ohisthattheeyeofthesnake.mp3"
    sounds.push(ohisthattheeyeofthesnake)
    let snazzyrim = new Audio()
    snazzyrim.src = "snazzyrim.mp3"
    sounds.push(snazzyrim)
    let hangintheremanlol = new Audio()
    hangintheremanlol.src = "hangintheremanlol.mp3"
    sounds.push(hangintheremanlol)
    let slowworkingsite = new Audio()
    slowworkingsite.src = "slowworkingsite.mp3"
    sounds.push(slowworkingsite)

    //imago audio
    let boh = new Audio()
    boh.src = "boh.mp3"
    sounds.push(boh)
    let sieveceaselessly = new Audio()
    sieveceaselessly.src = "sieveceaselessly.mp3"
    sounds.push(sieveceaselessly)
    let sieveseejunior = new Audio()
    sieveseejunior.src = "sieveseejunior.mp3"
    sounds.push(sieveseejunior)
    let ahhbarber = new Audio()
    ahhbarber.src = "ahhbarber.mp3"
    sounds.push(ahhbarber)
    let go = new Audio()
    go.src = "go.mp3"
    sounds.push(go)
    let die = new Audio()
    die.src = "die.mp3"
    sounds.push(die)
    let youneedmyassagain = new Audio()
    youneedmyassagain.src = "youneedmyassagain.mp3"
    sounds.push(youneedmyassagain)
    let yeahiminthisroom = new Audio()
    yeahiminthisroom.src = "yeahiminthisroom.mp3"
    sounds.push(yeahiminthisroom)
    let slamdownmustard = new Audio()
    slamdownmustard.src = "slamdownmustard.mp3"
    sounds.push(slamdownmustard)


    let donttellme = new Audio()
    donttellme.src = "onmyway.mp3"
    sounds.push(donttellme)
    let reporting = new Audio()
    reporting.src = "reporting.mp3"
    sounds.push(reporting)
    let onmyway = new Audio()
    onmyway.src = "onmyway.mp3"
    sounds.push(onmyway)
    let lesgo = new Audio()
    lesgo.src = "lesgo.mp3"
    sounds.push(lesgo)
    let lightemup = new Audio()
    lightemup.src = "lightemup.mp3"
    sounds.push(lightemup)
    let tellmywife = new Audio()
    tellmywife.src = "tellmywife.mp3"
    sounds.push(tellmywife)
    let deathrattle = new Audio()
    deathrattle.src = "deathrattle.mp3"
    sounds.push(deathrattle)
    let orders = new Audio()
    orders.src = "orders.mp3"
    sounds.push(orders)
    let righton = new Audio()
    righton.src = "righton.mp3"
    sounds.push(righton)
    let freezin = new Audio()
    freezin.src = "freezin.mp3"
    sounds.push(freezin)


    let combatinit = new Audio()
    combatinit.src = "combatinit.mp3"
    sounds.push(combatinit)
    let online = new Audio()
    online.src = "online.mp3"
    sounds.push(online)
    let scanning = new Audio()
    scanning.src = "scanning.mp3"
    sounds.push(scanning)
    let hello = new Audio()
    hello.src = "hello.mp3"
    sounds.push(hello)
    let pathfound = new Audio()
    pathfound.src = "pathfound.mp3"
    sounds.push(pathfound)
    let pathing = new Audio()
    pathing.src = "pathing.mp3"
    sounds.push(pathing)
    let signallost = new Audio()
    signallost.src = "signallost.mp3"
    sounds.push(signallost)
    let error = new Audio()
    error.src = "error.mp3"
    sounds.push(signallost)
    let collect = new Audio()
    collect.src = "collect.mp3"
    sounds.push(collect)

    //librilian faces
    let librilbianpollinatorface = new Image()
    librilbianpollinatorface.src = "librilbianpollinatorface.png"
    let golophyteface = new Image()
    golophyteface.src = "golophyteface.png"
    let pufffellowface = new Image()
    pufffellowface.src = "pufffellowface.png"
    let podmanface = new Image()
    podmanface.src = "podmanface.png"

    // colditzlerian faces
    let nymphface = new Image()
    nymphface.src = "nymphface2.png"
    let imagoface = new Image()
    imagoface.src = "imagoface.png"
    let scurrierface = new Image()
    scurrierface.src = "scurrierface.png"
    let gamergateface = new Image()
    gamergateface.src = "gamergateface1.png"


    // human faces
    let infantryface = new Image()
    infantryface.src = "infantryface.png"
    let droneface = new Image()
    droneface.src = "droneface.png"
    let sniperface = new Image()
    sniperface.src = "sniperface.png"
    let harvesterface = new Image()
    harvesterface.src = "harvesterface.png"



    // hamartan faces
    let hamartanscoutface = new Image()
    hamartanscoutface.src = "hamartanscoutface.png"
    let hamartansoldierface = new Image()
    hamartansoldierface.src = "hamartansoldierface.png"
    let hamartanworkerface = new Image()
    hamartanworkerface.src = "hamartanworkerface.png"
    let hamartaninvaderface = new Image()
    hamartaninvaderface.src = "hamartaninvaderface.png"


    function soundCancel() {
        /* sets chance of audio playback  */
        soundspamdrop = .15
        for (let t = 0; t < sounds.length; t++) {
            sounds[t].pause()
            sounds[t].currentTime = 0
        }
    }

    let defenseicon = new Image()
    defenseicon.src = "defenseicon.png"
    let attackicon = new Image()
    attackicon.src = "attackicon.png"

    let icewall = new Image()
    icewall.src = "icewall2.png"
    let barracks = new Image()
    barracks.src = "barracks.png"
    let machinelab = new Image()
    machinelab.src = "machinelab.png"


    //librilbian sprites
    let librilbianbulbplant = new Image()
    librilbianbulbplant.src = "bulbplant.png"
    let librilbianpodman = new Image()
    librilbianpodman.src = "podman.png"
    let librilbianpufffellow = new Image()
    librilbianpufffellow.src = "librilbian pufffellow.png"
    let librilbianpodmother = new Image()
    librilbianpodmother.src = "librilbian podmother.png"
    let librilbiangoliophyte = new Image()
    librilbiangoliophyte.src = "librilbian goliophyte.png"
    let librilbianpollinator = new Image()
    librilbianpollinator.src = "librilbian pollinator.png"


    //human and base sprites
    let windmeter = new Image()
    windmeter.src = "windmeter.png"
    let progress = new Image()
    progress.src = "progressmeter.png"
    let harvester = new Image()
    harvester.src = "harvester2.png"
    let drone = new Image()
    drone.src = "drone1.png"
    let infantry = new Image()
    infantry.src = "infantry.png"
    let imago = new Image()
    imago.src = "imagobl3.png"
    let gamergate = new Image()
    gamergate.src = "gamergate.png"
    let gamergatedug = new Image()
    gamergatedug.src = "gamergatedug.png"
    let scuttler = new Image()
    scuttler.src = "scuttler3.png"
    let nymph = new Image()
    nymph.src = "nymph2.png"
    let hotrock1 = new Image()
    hotrock1.src = "hotrock3a.png"
    let hotrock2 = new Image()
    hotrock2.src = "hotrock3.png"


    //hamartan sprites
    let spire = new Image()
    spire.src = "spire.png"
    let assembler2 = new Image()
    assembler2.src = "assembler2.png"
    let assembler3 = new Image()
    assembler3.src = "assembler3.png"
    let assembler1 = new Image()
    assembler1.src = "assembler1.png"
    let hamartansoldier = new Image()
    hamartansoldier.src = "hamartansoldier.png"
    let hamartanscout = new Image()
    hamartanscout.src = "hamartanscout.png"
    let hamartaninvader = new Image()
    hamartaninvader.src = "hamartaninvader.png"
    let hamartanworker = new Image()
    hamartanworker.src = "hamartanworker.png"

    let sniper1 = new Image()
    sniper1.src = "sniper5.png"
    // let sniper2 = new Image()
    // sniper2.src = "sniper2.png"

    let rectstart = {}
    rectstart.x = 0
    rectstart.y = 0
    let selectrect = {}
    selectrect.x = 0
    selectrect.y = 0
    selectrect.width = 0
    selectrect.height = 0
    selectrect.color = "transparent"
    selectrect.draw = empty
    selectrect.isPointInside = empty

    const squaretable = {} // this section of code is an optimization for use of the hypotenuse function on Line and LineOP objects
    for (let t = 0; t < 10000000; t++) {
        squaretable[`${t}`] = Math.sqrt(t)
        if (t > 999) {
            t += 9
        }
    }


    // let distancetable = {}
    // function makeDistanceTable(t,k, g,n) {
    //     var distX = Math.abs(t - g);
    //     var distY = Math.abs(k - nodeB.y);

    //     if (distX > distY) {
    //         return ((1.4 * distY) + ((distX - distY)))

    //     }
    //     return (1.4 * distX + ((distY - distX)));
    // }
    // ////console.time("onetile")
    // for(let t = 0;t<100;t+=10){
    //     for(let k = 0;k<1280;k+=10){
    //         for(let g = 0;g<1280;g+=10){
    //             for(let n = 0;n<1280;n+=10){
    //                 let ob1 = {}
    //                 ob1.x = t
    //                 ob1.y = k
    //                 let ob2 = {}
    //                 ob2.x = g
    //                 ob2.y = n
    //                 distancetable[`${t},${k},${g},${n}`] = makeDistanceTable(t,k, g,n)
    //             }
    //             ////console.log(g)
    //         }
    //     }
    //     ////console.log(t)
    // }
    // // distancetable = JSON.stringify(distancetable)
    // function downloadObject(obj, filename){
    //     var blob = new Blob([JSON.stringify(obj, null, 2)], {type: "application/json;charset=utf-8"}).slice(2,-1);
    //     var url = URL.createObjectURL(blob);
    //     var elem = document.createElement("a");
    //     elem.href = url;
    //     elem.download = filename;
    //     document.body.appendChild(elem);
    //     elem.click();
    //     document.body.removeChild(elem);
    //   }
    //   downloadObject(distancetable, "paths")
    // const gamepadAPI = {
    //     controller: {},
    //     turbo: true,
    //     connect: function (evt) {
    //         if (navigator.getGamepads()[0] != null) {
    //             gamepadAPI.controller = navigator.getGamepads()[0]
    //             gamepadAPI.turbo = true;
    //         } else if (navigator.getGamepads()[1] != null) {
    //             gamepadAPI.controller = navigator.getGamepads()[0]
    //             gamepadAPI.turbo = true;
    //         } else if (navigator.getGamepads()[2] != null) {
    //             gamepadAPI.controller = navigator.getGamepads()[0]
    //             gamepadAPI.turbo = true;
    //         } else if (navigator.getGamepads()[3] != null) {
    //             gamepadAPI.controller = navigator.getGamepads()[0]
    //             gamepadAPI.turbo = true;
    //         }
    //         for (let i = 0; i < gamepads.length; i++) {
    //             if (gamepads[i] === null) {
    //                 continue;
    //             }
    //             if (!gamepads[i].connected) {
    //                 continue;
    //             }
    //         }
    //     },
    //     disconnect: function (evt) {
    //         gamepadAPI.turbo = false;
    //         delete gamepadAPI.controller;
    //     },
    //     update: function () {
    //         gamepadAPI.controller = navigator.getGamepads()[0]
    //         gamepadAPI.buttonsCache = [];// clear the buttons cache
    //         for (var k = 0; k < gamepadAPI.buttonsStatus.length; k++) {// move the buttons status from the previous frame to the cache
    //             gamepadAPI.buttonsCache[k] = gamepadAPI.buttonsStatus[k];
    //         }
    //         gamepadAPI.buttonsStatus = [];// clear the buttons status
    //         var c = gamepadAPI.controller || {}; // get the gamepad object
    //         var pressed = [];
    //         if (c.buttons) {
    //             for (var b = 0, t = c.buttons.length; b < t; b++) {// loop through buttons and push the pressed ones to the array
    //                 if (c.buttons[b].pressed) {
    //                     pressed.push(gamepadAPI.buttons[b]);
    //                 }
    //             }
    //         }
    //         var axes = [];
    //         if (c.axes) {
    //             for (var a = 0, x = c.axes.length; a < x; a++) {// loop through axes and push their values to the array
    //                 axes.push(c.axes[a].toFixed(2));
    //             }
    //         }
    //         gamepadAPI.axesStatus = axes;// assign received values
    //         gamepadAPI.buttonsStatus = pressed;
    //         // //////////////////////////console.log(pressed); // return buttons for debugging purposes
    //         return pressed;
    //     },
    //     buttonPressed: function (button, hold) {
    //         var newPress = false;
    //         for (var i = 0, s = gamepadAPI.buttonsStatus.length; i < s; i++) {// loop through pressed buttons
    //             if (gamepadAPI.buttonsStatus[i] == button) {// if we found the button we're looking for...
    //                 newPress = true;// set the boolean variable to true
    //                 if (!hold) {// if we want to check the single press
    //                     for (var j = 0, p = gamepadAPI.buttonsCache.length; j < p; j++) {// loop through the cached states from the previous frame
    //                         if (gamepadAPI.buttonsCache[j] == button) { // if the button was already pressed, ignore new press
    //                             newPress = false;
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //         return newPress;
    //     },
    //     buttons: [
    //         'A', 'B', 'X', 'Y', 'LB', 'RB', 'Left-Trigger', 'Right-Trigger', 'Back', 'Start', 'Axis-Left', 'Axis-Right', 'DPad-Up', 'DPad-Down', 'DPad-Left', 'DPad-Right', "Power"
    //     ],
    //     buttonsCache: [],
    //     buttonsStatus: [],
    //     axesStatus: []
    // };
    let canvas
    let canvas_context
    let keysPressed = {}
    let FLEX_engine
    let TIP_engine = {}
    let XS_engine
    let YS_engine
    TIP_engine.x = 350
    TIP_engine.y = 350
    class Point {
        constructor(x, y) {
            this.x = x
            this.y = y
            this.radius = 0
        }
        pointDistance(point) {
            return (new LineOP(this, point, "transparent", 0)).hypotenuse()
        }
    }

    class Vector { // vector math and physics if you prefer this over vector components on circles
        constructor(object = (new Point(0, 0)), xmom = 0, ymom = 0) {
            this.xmom = xmom
            this.ymom = ymom
            this.object = object
        }
        isToward(point) {
            let link = new LineOP(this.object, point)
            let dis1 = link.sqrDis()
            let dummy = new Point(this.object.x + this.xmom, this.object.y + this.ymom)
            let link2 = new LineOP(dummy, point)
            let dis2 = link2.sqrDis()
            if (dis2 < dis1) {
                return true
            } else {
                return false
            }
        }
        rotate(angleGoal) {
            let link = new Line(this.xmom, this.ymom, 0, 0)
            let length = link.hypotenuse()
            let x = (length * Math.cos(angleGoal))
            let y = (length * Math.sin(angleGoal))
            this.xmom = x
            this.ymom = y
        }
        magnitude() {
            return (new Line(this.xmom, this.ymom, 0, 0)).hypotenuse()
        }
        normalize(size = 1) {
            let magnitude = this.magnitude()
            this.xmom /= magnitude
            this.ymom /= magnitude
            this.xmom *= size
            this.ymom *= size
        }
        multiply(vect) {
            let point = new Point(0, 0)
            let end = new Point(this.xmom + vect.xmom, this.ymom + vect.ymom)
            return point.pointDistance(end)
        }
        add(vect) {
            return new Vector(this.object, this.xmom + vect.xmom, this.ymom + vect.ymom)
        }
        subtract(vect) {
            return new Vector(this.object, this.xmom - vect.xmom, this.ymom - vect.ymom)
        }
        divide(vect) {
            return new Vector(this.object, this.xmom / vect.xmom, this.ymom / vect.ymom) //be careful with this, I don't think this is right
        }
        draw() {
            let dummy = new Point(this.object.x + this.xmom, this.object.y + this.ymom)
            let link = new LineOP(this.object, dummy, "#FFFFFF", 1)
            link.draw()
        }
    }
    class Line {
        constructor(x, y, x2, y2, color, width) {
            this.x1 = x
            this.y1 = y
            this.x2 = x2
            this.y2 = y2
            this.color = color
            this.width = width
        }
        angle() {
            return Math.atan2(this.y1 - this.y2, this.x1 - this.x2)
        }
        squareDistance() {
            let xdif = this.x1 - this.x2
            let ydif = this.y1 - this.y2
            let squareDistance = (xdif * xdif) + (ydif * ydif)
            return squareDistance
        }
        hypotenuse() {
            let xdif = this.x1 - this.x2
            let ydif = this.y1 - this.y2
            let hypotenuse = (xdif * xdif) + (ydif * ydif)
            if (hypotenuse < 10000000 - 1) {
                if (hypotenuse > 1000) {
                    return squaretable[`${Math.round(10 * Math.round((hypotenuse * .1)))}`]
                } else {
                    return squaretable[`${Math.round(hypotenuse)}`]
                }
            } else {
                return Math.sqrt(hypotenuse)
            }
        }
        draw() {
            let linewidthstorage = canvas_context.lineWidth
            canvas_context.strokeStyle = this.color
            canvas_context.lineWidth = this.width
            canvas_context.beginPath()
            canvas_context.moveTo(this.x1, this.y1)
            canvas_context.lineTo(this.x2, this.y2)
            canvas_context.stroke()
            canvas_context.lineWidth = linewidthstorage
        }
    }
    class LineOP {
        constructor(object, target, color, width) {
            this.object = object
            this.target = target
            this.color = color
            this.width = width
        }
        squareDistance() {
            let xdif = this.object.x - this.target.x
            let ydif = this.object.y - this.target.y
            let squareDistance = (xdif * xdif) + (ydif * ydif)
            return squareDistance
        }
        hypotenuse() {
            let xdif = this.object.x - this.target.x
            let ydif = this.object.y - this.target.y
            let hypotenuse = (xdif * xdif) + (ydif * ydif)
            if (hypotenuse < 10000000 - 1) {
                if (hypotenuse > 1000) {
                    return squaretable[`${Math.round(10 * Math.round((hypotenuse * .1)))}`]
                } else {
                    return squaretable[`${Math.round(hypotenuse)}`]
                }
            } else {
                return Math.sqrt(hypotenuse)
            }
        }
        angle() {
            return Math.atan2(this.object.y - this.target.y, this.object.x - this.target.x)
        }
        draw() {
            let linewidthstorage = canvas_context.lineWidth
            canvas_context.strokeStyle = this.color
            canvas_context.lineWidth = this.width
            canvas_context.beginPath()
            canvas_context.moveTo(this.object.x, this.object.y)
            canvas_context.lineTo(this.target.x, this.target.y)
            canvas_context.stroke()
            canvas_context.lineWidth = linewidthstorage
        }
    }
    class Triangle {
        constructor(x, y, color, length, fill = 0, strokeWidth = 0, leg1Ratio = 1, leg2Ratio = 1, heightRatio = 1) {
            this.x = x
            this.y = y
            this.color = color
            this.length = length
            this.x1 = this.x + this.length * leg1Ratio
            this.x2 = this.x - this.length * leg2Ratio
            this.tip = this.y - this.length * heightRatio
            this.accept1 = (this.y - this.tip) / (this.x1 - this.x)
            this.accept2 = (this.y - this.tip) / (this.x2 - this.x)
            this.fill = fill
            this.stroke = strokeWidth
        }
        draw() {
            canvas_context.strokeStyle = this.color
            canvas_context.stokeWidth = this.stroke
            canvas_context.beginPath()
            canvas_context.moveTo(this.x, this.y)
            canvas_context.lineTo(this.x1, this.y)
            canvas_context.lineTo(this.x, this.tip)
            canvas_context.lineTo(this.x2, this.y)
            canvas_context.lineTo(this.x, this.y)
            if (this.fill == 1) {
                canvas_context.fill()
            }
            canvas_context.stroke()
            canvas_context.closePath()
        }
        isPointInside(point) {
            if (point.x <= this.x1) {
                if (point.y >= this.tip) {
                    if (point.y <= this.y) {
                        if (point.x >= this.x2) {
                            this.accept1 = (this.y - this.tip) / (this.x1 - this.x)
                            this.accept2 = (this.y - this.tip) / (this.x2 - this.x)
                            this.basey = point.y - this.tip
                            this.basex = point.x - this.x
                            if (this.basex == 0) {
                                return true
                            }
                            this.slope = this.basey / this.basex
                            if (this.slope >= this.accept1) {
                                return true
                            } else if (this.slope <= this.accept2) {
                                return true
                            }
                        }
                    }
                }
            }
            return false
        }
    }
    class Rectangle {
        constructor(x, y, width, height, color, fill = 1, stroke = 0, strokeWidth = 1) {
            this.x = x
            this.y = y
            this.height = height
            this.width = width
            this.color = color
            this.xmom = 0
            this.ymom = 0
            this.stroke = stroke
            this.strokeWidth = strokeWidth
            this.fill = fill
        }
        draw() {
            map_context.fillStyle = this.color
            map_context.fillRect(this.x, this.y, this.width, this.height)
        }
        move() {
            this.x += this.xmom
            this.y += this.ymom
        }
        isPointInside(point) {
            if (point.x >= this.x) {
                if (point.y >= this.y) {
                    if (point.x <= this.x + this.width) {
                        if (point.y <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
        doesPerimeterTouch(point) {
            if (point.x + point.radius >= this.x) {
                if (point.y + point.radius >= this.y) {
                    if (point.x - point.radius <= this.x + this.width) {
                        if (point.y - point.radius <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
    }
    class UiRectangle {
        constructor(x, y, width, height, color, fill = 1, stroke = 0, strokeWidth = 1) {
            this.x = x
            this.y = y
            this.height = height
            this.width = width
            this.color = color
            this.xmom = 0
            this.ymom = 0
            this.stroke = stroke
            this.strokeWidth = strokeWidth
            this.fill = fill
        }
        draw() {
            canvas_context.fillStyle = this.color
            canvas_context.fillRect(this.x, this.y, this.width, this.height)
        }
        move() {
            this.x += this.xmom
            this.y += this.ymom
        }
        isPointInside(point) {
            if (point.x >= this.x) {
                if (point.y >= this.y) {
                    if (point.x <= this.x + this.width) {
                        if (point.y <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
        doesPerimeterTouch(point) {
            if (point.x + point.radius >= this.x) {
                if (point.y + point.radius >= this.y) {
                    if (point.x - point.radius <= this.x + this.width) {
                        if (point.y - point.radius <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
    }
    let playbutton = new UiRectangle(80, 620, 200, 75, "#333333")
    let aitoggle1 = new UiRectangle(200, 200, 300, 75, "#333333")
    let chartoggle1 = new UiRectangle(200, 300, 300, 75, "#333333")
    let aitoggle2 = new UiRectangle(680, 200, 300, 75, "#333333")
    let chartoggle2 = new UiRectangle(680, 300, 300, 75, "#333333")

    let difftoggle1 =new UiRectangle(200, 100, 450, 75, "#333333")
    let difftoggle2 = new UiRectangle(680, 100, 450, 75, "#333333")
    class Circle {
        constructor(x, y, radius, color, xmom = 0, ymom = 0, friction = 1, reflect = 0, strokeWidth = 0, strokeColor = "transparent") {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.friction = friction
            this.reflect = reflect
            this.strokeWidth = strokeWidth
            this.strokeColor = strokeColor
        }
        draw() {
            canvas_context.lineWidth = this.strokeWidth
            canvas_context.strokeStyle = this.color
            canvas_context.beginPath();
            if (this.radius > 0) {
                canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)
                canvas_context.fillStyle = this.color
                canvas_context.fill()
                canvas_context.stroke();
            } else {
                //////////////////////////console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
            }
        }
        move() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x += this.xmom
            this.y += this.ymom
        }
        unmove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x -= this.xmom
            this.y -= this.ymom
        }
        frictiveMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x += this.xmom
            this.y += this.ymom
            this.xmom *= this.friction
            this.ymom *= this.friction
        }
        frictiveunMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.xmom /= this.friction
            this.ymom /= this.friction
            this.x -= this.xmom
            this.y -= this.ymom
        }
        isPointInside(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius * this.radius)) {
                return true
            }
            return false
        }
        doesPerimeterTouch(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= ((this.radius + point.radius) * (this.radius + point.radius))) {
                return true
            }
            return false
        }
    }
    class UnitCircle {
        constructor(x, y, radius, color, xmom = 0, ymom = 0, friction = 1, reflect = 0, strokeWidth = 0, strokeColor = "transparent") {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.friction = friction
            this.reflect = reflect
            this.strokeWidth = strokeWidth
            this.strokeColor = strokeColor
        }
        draw() {
            map_context.lineWidth = this.strokeWidth
            map_context.strokeStyle = this.color
            map_context.beginPath();
            if (this.radius > 0) {
                map_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)
                map_context.fillStyle = this.color
                map_context.fill()
                map_context.strokeStyle = "#00000010"
                map_context.stroke();
            } else {
                //////////////////////////console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
            }
        }
        move() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x += this.xmom
            this.y += this.ymom
        }
        unmove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x -= this.xmom
            this.y -= this.ymom
        }
        frictiveMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x += this.xmom
            this.y += this.ymom
            this.xmom *= this.friction
            this.ymom *= this.friction
        }
        frictiveunMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.xmom /= this.friction
            this.ymom /= this.friction
            this.x -= this.xmom
            this.y -= this.ymom
        }
        isPointInside(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius * this.radius)) {
                return true
            }
            return false
        }
        doesPerimeterTouch(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= ((this.radius + point.radius) * (this.radius + point.radius))) {
                return true
            }
            return false
        }
    }
    class CircleRing {
        constructor(x, y, radius, color, xmom = 0, ymom = 0, friction = 1, reflect = 0, strokeWidth = 0, strokeColor = "transparent") {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.friction = friction
            this.reflect = reflect
            this.strokeWidth = 10
            this.strokeColor = strokeColor
        }
        draw() {
            canvas_context.lineWidth = this.strokeWidth
            canvas_context.strokeStyle = this.color
            canvas_context.beginPath();
            if (this.radius > 0) {
                canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)
                canvas_context.fillStyle = this.color
                canvas_context.fill()
                canvas_context.stroke();
            } else {
                //////////////////////////console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
            }
        }
        move() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x += this.xmom
            this.y += this.ymom
        }
        unmove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x -= this.xmom
            this.y -= this.ymom
        }
        frictiveMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x += this.xmom
            this.y += this.ymom
            this.xmom *= this.friction
            this.ymom *= this.friction
        }
        frictiveunMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.xmom /= this.friction
            this.ymom /= this.friction
            this.x -= this.xmom
            this.y -= this.ymom
        }
        isPointInside(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius * this.radius)) {
                return true
            }
            return false
        }
        doesPerimeterTouch(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= ((this.radius + point.radius) * (this.radius + point.radius))) {
                return true
            }
            return false
        }
    } class Polygon {
        constructor(x, y, size, color, sides = 3, xmom = 0, ymom = 0, angle = 0, reflect = 0) {
            if (sides < 2) {
                sides = 2
            }
            this.reflect = reflect
            this.xmom = xmom
            this.ymom = ymom
            this.body = new Circle(x, y, size - (size * .293), "transparent")
            this.nodes = []
            this.angle = angle
            this.size = size
            this.color = color
            this.angleIncrement = (Math.PI * 2) / sides
            this.sides = sides
            for (let t = 0; t < sides; t++) {
                let node = new Circle(this.body.x + (this.size * (Math.cos(this.angle))), this.body.y + (this.size * (Math.sin(this.angle))), 0, "transparent")
                this.nodes.push(node)
                this.angle += this.angleIncrement
            }
        }
        isPointInside(point) { // rough approximation
            this.body.radius = this.size - (this.size * .293)
            if (this.sides <= 2) {
                return false
            }
            this.areaY = point.y - this.body.y
            this.areaX = point.x - this.body.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.body.radius * this.body.radius)) {
                return true
            }
            return false
        }
        move() {
            if (this.reflect == 1) {
                if (this.body.x > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.body.y > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.body.x < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.body.y < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.body.x += this.xmom
            this.body.y += this.ymom
        }
        draw() {
            this.nodes = []
            this.angleIncrement = (Math.PI * 2) / this.sides
            this.body.radius = this.size - (this.size * .293)
            for (let t = 0; t < this.sides; t++) {
                let node = new Circle(this.body.x + (this.size * (Math.cos(this.angle))), this.body.y + (this.size * (Math.sin(this.angle))), 0, "transparent")
                this.nodes.push(node)
                this.angle += this.angleIncrement
            }
            canvas_context.strokeStyle = this.color
            canvas_context.fillStyle = this.color
            canvas_context.lineWidth = 0
            canvas_context.beginPath()
            canvas_context.moveTo(this.nodes[0].x, this.nodes[0].y)
            for (let t = 1; t < this.nodes.length; t++) {
                canvas_context.lineTo(this.nodes[t].x, this.nodes[t].y)
            }
            canvas_context.lineTo(this.nodes[0].x, this.nodes[0].y)
            canvas_context.fill()
            canvas_context.stroke()
            canvas_context.closePath()
        }
    }
    class Shape {
        constructor(shapes) {
            this.shapes = shapes
        }
        draw() {
            for (let t = 0; t < this.shapes.length; t++) {
                this.shapes[t].draw()
            }
        }
        isPointInside(point) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (this.shapes[t].isPointInside(point)) {
                    return true
                }
            }
            return false
        }
        doesPerimeterTouch(point) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (this.shapes[t].doesPerimeterTouch(point)) {
                    return true
                }
            }
            return false
        }
        innerShape(point) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (this.shapes[t].doesPerimeterTouch(point)) {
                    return this.shapes[t]
                }
            }
            return false
        }
        isInsideOf(box) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (box.isPointInside(this.shapes[t])) {
                    return true
                }
            }
            return false
        }
        adjustByFromDisplacement(x, y) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (typeof this.shapes[t].fromRatio == "number") {
                    this.shapes[t].x += x * this.shapes[t].fromRatio
                    this.shapes[t].y += y * this.shapes[t].fromRatio
                }
            }
        }
        adjustByToDisplacement(x, y) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (typeof this.shapes[t].toRatio == "number") {
                    this.shapes[t].x += x * this.shapes[t].toRatio
                    this.shapes[t].y += y * this.shapes[t].toRatio
                }
            }
        }
        mixIn(arr) {
            for (let t = 0; t < arr.length; t++) {
                for (let k = 0; k < arr[t].shapes.length; k++) {
                    this.shapes.push(arr[t].shapes[k])
                }
            }
        }
        push(object) {
            this.shapes.push(object)
        }
    }

    class Spring {
        constructor(x, y, radius, color, body = 0, length = 1, gravity = 0, width = 1) {
            if (body == 0) {
                this.body = new Circle(x, y, radius, color)
                this.anchor = new Circle(x, y, radius, color)
                this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", width)
                this.length = length
            } else {
                this.body = body
                this.anchor = new Circle(x, y, radius, color)
                this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", width)
                this.length = length
            }
            this.gravity = gravity
            this.width = width
        }
        balance() {
            this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", this.width)
            if (this.beam.hypotenuse() < this.length) {
                this.body.xmom += (this.body.x - this.anchor.x) / this.length
                this.body.ymom += (this.body.y - this.anchor.y) / this.length
                this.anchor.xmom -= (this.body.x - this.anchor.x) / this.length
                this.anchor.ymom -= (this.body.y - this.anchor.y) / this.length
            } else {
                this.body.xmom -= (this.body.x - this.anchor.x) / this.length
                this.body.ymom -= (this.body.y - this.anchor.y) / this.length
                this.anchor.xmom += (this.body.x - this.anchor.x) / this.length
                this.anchor.ymom += (this.body.y - this.anchor.y) / this.length
            }
            let xmomentumaverage = (this.body.xmom + this.anchor.xmom) / 2
            let ymomentumaverage = (this.body.ymom + this.anchor.ymom) / 2
            this.body.xmom = (this.body.xmom + xmomentumaverage) / 2
            this.body.ymom = (this.body.ymom + ymomentumaverage) / 2
            this.anchor.xmom = (this.anchor.xmom + xmomentumaverage) / 2
            this.anchor.ymom = (this.anchor.ymom + ymomentumaverage) / 2
        }
        draw() {
            this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", this.width)
            this.beam.draw()
            this.body.draw()
            this.anchor.draw()
        }
        move() {
            this.anchor.ymom += this.gravity
            this.anchor.move()
        }

    }
    class SpringOP {
        constructor(body, anchor, length, width = 3, color = body.color) {
            this.body = body
            this.anchor = anchor
            this.beam = new LineOP(body, anchor, color, width)
            this.length = length
        }
        balance() {
            if (this.beam.hypotenuse() < this.length) {
                this.body.xmom += ((this.body.x - this.anchor.x) / this.length)
                this.body.ymom += ((this.body.y - this.anchor.y) / this.length)
                this.anchor.xmom -= ((this.body.x - this.anchor.x) / this.length)
                this.anchor.ymom -= ((this.body.y - this.anchor.y) / this.length)
            } else if (this.beam.hypotenuse() > this.length) {
                this.body.xmom -= (this.body.x - this.anchor.x) / (this.length)
                this.body.ymom -= (this.body.y - this.anchor.y) / (this.length)
                this.anchor.xmom += (this.body.x - this.anchor.x) / (this.length)
                this.anchor.ymom += (this.body.y - this.anchor.y) / (this.length)
            }

            let xmomentumaverage = (this.body.xmom + this.anchor.xmom) / 2
            let ymomentumaverage = (this.body.ymom + this.anchor.ymom) / 2
            this.body.xmom = (this.body.xmom + xmomentumaverage) / 2
            this.body.ymom = (this.body.ymom + ymomentumaverage) / 2
            this.anchor.xmom = (this.anchor.xmom + xmomentumaverage) / 2
            this.anchor.ymom = (this.anchor.ymom + ymomentumaverage) / 2
        }
        draw() {
            this.beam.draw()
        }
        move() {
            //movement of SpringOP objects should be handled separate from their linkage, to allow for many connections, balance here with this object, move nodes independently
        }
    }

    class Color {
        constructor(baseColor, red = -1, green = -1, blue = -1, alpha = 1) {
            this.hue = baseColor
            if (red != -1 && green != -1 && blue != -1) {
                this.r = red
                this.g = green
                this.b = blue
                if (alpha != 1) {
                    if (alpha < 1) {
                        this.alpha = alpha
                    } else {
                        this.alpha = alpha / 255
                        if (this.alpha > 1) {
                            this.alpha = 1
                        }
                    }
                }
                if (this.r > 255) {
                    this.r = 255
                }
                if (this.g > 255) {
                    this.g = 255
                }
                if (this.b > 255) {
                    this.b = 255
                }
                if (this.r < 0) {
                    this.r = 0
                }
                if (this.g < 0) {
                    this.g = 0
                }
                if (this.b < 0) {
                    this.b = 0
                }
            } else {
                this.r = 0
                this.g = 0
                this.b = 0
            }
        }
        normalize() {
            if (this.r > 255) {
                this.r = 255
            }
            if (this.g > 255) {
                this.g = 255
            }
            if (this.b > 255) {
                this.b = 255
            }
            if (this.r < 0) {
                this.r = 0
            }
            if (this.g < 0) {
                this.g = 0
            }
            if (this.b < 0) {
                this.b = 0
            }
        }
        randomLight() {
            var letters = '0123456789ABCDEF';
            var hash = '#';
            for (var i = 0; i < 6; i++) {
                hash += letters[(Math.floor(Math.random() * 12) + 4)];
            }
            var color = new Color(hash, 55 + Math.random() * 200, 55 + Math.random() * 200, 55 + Math.random() * 200)
            return color;
        }
        randomDark() {
            var letters = '0123456789ABCDEF';
            var hash = '#';
            for (var i = 0; i < 6; i++) {
                hash += letters[(Math.floor(Math.random() * 12))];
            }
            var color = new Color(hash, Math.random() * 200, Math.random() * 200, Math.random() * 200)
            return color;
        }
        random() {
            var letters = '0123456789ABCDEF';
            var hash = '#';
            for (var i = 0; i < 6; i++) {
                hash += letters[(Math.floor(Math.random() * 16))];
            }
            var color = new Color(hash, Math.random() * 255, Math.random() * 255, Math.random() * 255)
            return color;
        }
    }
    class Softbody { //buggy, spins in place
        constructor(x, y, radius, color, size, members = 10, memberLength = 5, force = 10, gravity = 0) {
            this.springs = []
            this.pin = new Circle(x, y, radius, color)
            this.points = []
            this.flop = 0
            let angle = 0
            this.size = size
            let line = new Line((Math.cos(angle) * size), (Math.sin(angle) * size), (Math.cos(angle + ((Math.PI * 2) / members)) * size), (Math.sin(angle + ((Math.PI * 2) / members)) * size))
            let distance = line.hypotenuse()
            for (let t = 0; t < members; t++) {
                let circ = new Circle(x + (Math.cos(angle) * size), y + (Math.sin(angle) * size), radius, color)
                circ.reflect = 1
                circ.bigbody = new Circle(x + (Math.cos(angle) * size), y + (Math.sin(angle) * size), distance, color)
                circ.draw()
                circ.touch = []
                this.points.push(circ)
                angle += ((Math.PI * 2) / members)
            }

            for (let t = 0; t < this.points.length; t++) {
                for (let k = 0; k < this.points.length; k++) {
                    if (t != k) {
                        if (this.points[k].bigbody.doesPerimeterTouch(this.points[t])) {
                            if (!this.points[k].touch.includes(t) && !this.points[t].touch.includes(k)) {
                                let spring = new SpringOP(this.points[k], this.points[t], (size * Math.PI) / members, 2, color)
                                this.points[k].touch.push(t)
                                this.points[t].touch.push(k)
                                this.springs.push(spring)
                                spring.beam.draw()
                            }
                        }
                    }
                }
            }

            //////////////////////////console.log(this)

            // this.spring = new Spring(x, y, radius, color, this.pin, memberLength, gravity)
            // this.springs.push(this.spring)
            // for (let k = 0; k < members; k++) {
            //     this.spring = new Spring(x, y, radius, color, this.spring.anchor, memberLength, gravity)
            //     if (k < members - 1) {
            //         this.springs.push(this.spring)
            //     } else {
            //         this.spring.anchor = this.pin
            //         this.springs.push(this.spring)
            //     }
            // }
            this.forceConstant = force
            this.centroid = new Circle(0, 0, 10, "red")
        }
        circularize() {
            this.xpoint = 0
            this.ypoint = 0
            for (let s = 0; s < this.springs.length; s++) {
                this.xpoint += (this.springs[s].anchor.x / this.springs.length)
                this.ypoint += (this.springs[s].anchor.y / this.springs.length)
            }
            this.centroid.x = this.xpoint
            this.centroid.y = this.ypoint
            this.angle = 0
            this.angleIncrement = (Math.PI * 2) / this.springs.length
            for (let t = 0; t < this.points.length; t++) {
                this.points[t].x = this.centroid.x + (Math.cos(this.angle) * this.forceConstant)
                this.points[t].y = this.centroid.y + (Math.sin(this.angle) * this.forceConstant)
                this.angle += this.angleIncrement
            }
        }
        balance() {
            this.xpoint = 0
            this.ypoint = 0
            for (let s = 0; s < this.points.length; s++) {
                this.xpoint += (this.points[s].x / this.points.length)
                this.ypoint += (this.points[s].y / this.points.length)
            }
            this.centroid.x = this.xpoint
            this.centroid.y = this.ypoint
            // this.centroid.x += TIP_engine.x / this.points.length
            // this.centroid.y += TIP_engine.y / this.points.length
            for (let s = 0; s < this.points.length; s++) {
                this.link = new LineOP(this.points[s], this.centroid, 0, "transparent")
                if (this.link.hypotenuse() != 0) {

                    if (this.size < this.link.hypotenuse()) {
                        this.points[s].xmom -= (Math.cos(this.link.angle()) * (this.link.hypotenuse())) * this.forceConstant * .1
                        this.points[s].ymom -= (Math.sin(this.link.angle()) * (this.link.hypotenuse())) * this.forceConstant * .1
                    } else {
                        this.points[s].xmom += (Math.cos(this.link.angle()) * (this.link.hypotenuse())) * this.forceConstant * .1
                        this.points[s].ymom += (Math.sin(this.link.angle()) * (this.link.hypotenuse())) * this.forceConstant * .1
                    }

                    // this.points[s].xmom += (((this.points[s].x - this.centroid.x) / (this.link.hypotenuse()))) * this.forceConstant
                    // this.points[s].ymom += (((this.points[s].y - this.centroid.y) / (this.link.hypotenuse()))) * this.forceConstant
                }
            }
            if (this.flop % 2 == 0) {
                for (let s = 0; s < this.springs.length; s++) {
                    this.springs[s].balance()
                }
            } else {
                for (let s = this.springs.length - 1; s >= 0; s--) {
                    this.springs[s].balance()
                }
            }
            for (let s = 0; s < this.points.length; s++) {
                this.points[s].move()
                this.points[s].draw()
            }
            for (let s = 0; s < this.springs.length; s++) {
                this.springs[s].draw()
            }
            this.centroid.draw()
        }
    }
    class Observer {
        constructor(x, y, radius, color, range = 100, rays = 10, angle = (Math.PI * .125)) {
            this.body = new Circle(x, y, radius, color)
            this.color = color
            this.ray = []
            this.rayrange = range
            this.globalangle = Math.PI
            this.gapangle = angle
            this.currentangle = 0
            this.obstacles = []
            this.raymake = rays
        }
        beam() {
            this.currentangle = this.gapangle / 2
            for (let k = 0; k < this.raymake; k++) {
                this.currentangle += (this.gapangle / Math.ceil(this.raymake / 2))
                let ray = new Circle(this.body.x, this.body.y, 1, "white", (((Math.cos(this.globalangle + this.currentangle)))), (((Math.sin(this.globalangle + this.currentangle)))))
                ray.collided = 0
                ray.lifespan = this.rayrange - 1
                this.ray.push(ray)
            }
            for (let f = 0; f < this.rayrange; f++) {
                for (let t = 0; t < this.ray.length; t++) {
                    if (this.ray[t].collided < 1) {
                        this.ray[t].move()
                        for (let q = 0; q < this.obstacles.length; q++) {
                            if (this.obstacles[q].isPointInside(this.ray[t])) {
                                this.ray[t].collided = 1
                            }
                        }
                    }
                }
            }
        }
        draw() {
            this.beam()
            this.body.draw()
            canvas_context.lineWidth = 1
            canvas_context.fillStyle = this.color
            canvas_context.strokeStyle = this.color
            canvas_context.beginPath()
            canvas_context.moveTo(this.body.x, this.body.y)
            for (let y = 0; y < this.ray.length; y++) {
                canvas_context.lineTo(this.ray[y].x, this.ray[y].y)
                canvas_context.lineTo(this.body.x, this.body.y)
            }
            canvas_context.stroke()
            canvas_context.fill()
            this.ray = []
        }
    }
    function setUp(canvas_pass, style = "#888888") {
        canvas = canvas_pass
        canvas_context = canvas.getContext('2d');
        canvas.style.background = style
        window.setInterval(function () {
            if (playstart == 1) {
                main()
            } else {

                canvas_context.clearRect(0, 0, canvas.width, canvas.height)  // refreshes the image

                playbutton.draw()
                if (playstart == 0) {
                    canvas_context.drawImage(startupart, 0, 0)

                    playbutton.draw()
                    let invscale = 1
                    let string = "In the far flung Itzler star-system, on the sixth planet out, thought to be well beyond the habitable zone of Itzler, the planet Cold Itzler as it has come to be known is the only source of the miracle compound 'hotrock'. Hotrock makes life on Cold Itzler possible."
                    let ypointer = 50
                    let xpointer = 10
                    canvas_context.font = "50px Arial";
                    canvas_context.fillStyle = "#FFFFFF"
                    let stoarr = string.split(' ')
                    let stostring = ''
                    for (let t = 0; t < stoarr.length; t++) {
                        const width = canvas_context.measureText(stostring + ' ' + stoarr[t]).width
                        if (width > canvas.width * invscale * .821) {
                            canvas_context.fillText(stostring + ' ' + stoarr[t], xpointer, ypointer)
                            ypointer += 60
                            stostring = ''
                        } else {
                            stostring = stostring + " " + stoarr[t]
                            if (t == stoarr.length - 1) {
                                canvas_context.fillText(stostring, xpointer, ypointer)
                            }
                        }
                    }
                    canvas_context.font = "40px Arial";
                    canvas_context.fillStyle = "#FFFFFF"
                    canvas_context.fillText("Continue", playbutton.x + 15, playbutton.y + 50)
                }
                if (playstart == 2) {

                    canvas_context.drawImage(startupart, 0, 0)

                    playbutton.draw()
                    let invscale = 1
                    let string = "You must choose, to defend your home planet as the Cold Itzlerians, to pillage the icy rock for all it's worth as the Earthoids, to replenish your armada on your nomadic voyage as the Hamartans, or to steal the water from the soil as the Librilbians."
                    let ypointer = 50
                    let xpointer = 10
                    canvas_context.font = "50px Arial";
                    canvas_context.fillStyle = "#FFFFFF"
                    let stoarr = string.split(' ')
                    let stostring = ''
                    for (let t = 0; t < stoarr.length; t++) {
                        const width = canvas_context.measureText(stostring + ' ' + stoarr[t]).width
                        if (width > canvas.width * invscale * .821) {
                            canvas_context.fillText(stostring + ' ' + stoarr[t], xpointer, ypointer)
                            ypointer += 60
                            stostring = ''
                        } else {
                            stostring = stostring + " " + stoarr[t]
                            if (t == stoarr.length - 1) {
                                canvas_context.fillText(stostring, xpointer, ypointer)
                            }
                        }
                    }

                    canvas_context.font = "40px Arial";
                    canvas_context.fillStyle = "#FFFFFF"
                    canvas_context.fillText("Continue", playbutton.x + 15, playbutton.y + 50)

                }
                if (playstart == 3) {

                    canvas_context.drawImage(startupart, 0, 0)

                    playbutton.draw()
                    let invscale = 1
                    let string = "Click the buttons to set up the match."
                    let ypointer = 50
                    let xpointer = 10
                    canvas_context.font = "50px Arial";
                    canvas_context.fillStyle = "#FFFFFF"
                    let stoarr = string.split(' ')
                    let stostring = ''
                    for (let t = 0; t < stoarr.length; t++) {
                        const width = canvas_context.measureText(stostring + ' ' + stoarr[t]).width
                        if (width > canvas.width * invscale * .821) {
                            canvas_context.fillText(stostring + ' ' + stoarr[t], xpointer, ypointer)
                            ypointer += 60
                            stostring = ''
                        } else {
                            stostring = stostring + " " + stoarr[t]
                            if (t == stoarr.length - 1) {
                                canvas_context.fillText(stostring, xpointer, ypointer)
                            }
                        }
                    }
                    canvas_context.font = "40px Arial";
                    canvas_context.fillStyle = "#FFFFFF"
                    canvas_context.fillText("Start", playbutton.x + 35, playbutton.y + 50)
                    aitoggle1.draw()
                    aitoggle2.draw()
                    chartoggle1.draw()
                    chartoggle2.draw()
                    if (sandmap.players[1].isAI == 1) {
                        difftoggle2.draw()            
                        canvas_context.font = "30px Arial";
                        canvas_context.fillStyle = "#FFFFFF"
                         if(dynamic2 == 1){
                            canvas_context.fillText(`Power: Dynamic (?)`, difftoggle2.x + 10, difftoggle2.y + 50)
                        }else if(sandmap.players[1].clickrate == 1){
                            canvas_context.fillText(`Power: Absolute-Zero (11)`, difftoggle2.x + 10, difftoggle2.y + 50)
                        }else if(sandmap.players[1].clickrate == 2){
                            canvas_context.fillText(`Power: Bone-Chilling (10)`, difftoggle2.x + 10, difftoggle2.y + 50)
                        }else if(sandmap.players[1].clickrate == 5){
                            canvas_context.fillText(`Power: Frigid (9)`, difftoggle2.x + 10, difftoggle2.y + 50)
                        }else if(sandmap.players[1].clickrate == 10){
                            canvas_context.fillText(`Power: Frosty (8)`, difftoggle2.x + 10, difftoggle2.y + 50)
                        }else if(sandmap.players[1].clickrate == 15){
                            canvas_context.fillText(`Power: Sweater-Weather (7)`, difftoggle2.x + 10, difftoggle2.y + 50)
                        }else if(sandmap.players[1].clickrate == 25){
                            canvas_context.fillText(`Power: Cold (6)`, difftoggle2.x + 10, difftoggle2.y + 50)
                        }else if(sandmap.players[1].clickrate == 35){
                            canvas_context.fillText(`Power: Chilly (5)`, difftoggle2.x + 10, difftoggle2.y + 50)
                        }else if(sandmap.players[1].clickrate == 50){
                            canvas_context.fillText(`Power: Drafty (4)`, difftoggle2.x + 10, difftoggle2.y + 50)
                        }else if(sandmap.players[1].clickrate == 100){
                            canvas_context.fillText(`Power: Room-Temperature (3)`, difftoggle2.x + 10, difftoggle2.y + 50)
                        }else if(sandmap.players[1].clickrate == 200){
                            canvas_context.fillText(`Power: Warm (2)`, difftoggle2.x + 10, difftoggle2.y + 50)
                        }else if(sandmap.players[1].clickrate == 400){
                            canvas_context.fillText(`Power: Balmy (1)`, difftoggle2.x + 10, difftoggle2.y + 50)
                        }
                    }
                    if (sandmap.players[0].isAI == 1) {
                        difftoggle1.draw()
                        canvas_context.font = "30px Arial";
                        canvas_context.fillStyle = "#FFFFFF"
                         if(dynamic1 == 1){
                            canvas_context.fillText(`Power: Dynamic (?)`, difftoggle1.x + 10, difftoggle1.y + 50)
                        }else if(sandmap.players[0].clickrate == 1){
                            canvas_context.fillText(`Power: Absolute-Zero (11)`, difftoggle1.x + 10, difftoggle1.y + 50)
                        }else if(sandmap.players[0].clickrate == 2){
                            canvas_context.fillText(`Power: Bone-Chilling (10)`, difftoggle1.x + 10, difftoggle1.y + 50)
                        }else if(sandmap.players[0].clickrate == 5){
                            canvas_context.fillText(`Power: Frigid (9)`, difftoggle1.x + 10, difftoggle1.y + 50)
                        }else if(sandmap.players[0].clickrate == 10){
                            canvas_context.fillText(`Power: Frosty (8)`, difftoggle1.x + 10, difftoggle1.y + 50)
                        }else if(sandmap.players[0].clickrate == 15){
                            canvas_context.fillText(`Power: Sweater-Weather (7)`, difftoggle1.x + 10, difftoggle1.y + 50)
                        }else if(sandmap.players[0].clickrate == 25){
                            canvas_context.fillText(`Power: Cold (6)`, difftoggle1.x + 10, difftoggle1.y + 50)
                        }else if(sandmap.players[0].clickrate == 35){
                            canvas_context.fillText(`Power: Chilly (5)`, difftoggle1.x + 10, difftoggle1.y + 50)
                        }else if(sandmap.players[0].clickrate == 50){
                            canvas_context.fillText(`Power: Drafty (4)`, difftoggle1.x + 10, difftoggle1.y + 50)
                        }else if(sandmap.players[0].clickrate == 100){
                            canvas_context.fillText(`Power: Room-Temperature (3)`, difftoggle1.x + 10, difftoggle1.y + 50)
                        }else if(sandmap.players[0].clickrate == 200){
                            canvas_context.fillText(`Power: Warm (2)`, difftoggle1.x + 10, difftoggle1.y + 50)
                        }else if(sandmap.players[0].clickrate == 400){
                            canvas_context.fillText(`Power: Balmy (1)`, difftoggle1.x + 10, difftoggle1.y + 50)
                        }
                    }
                    canvas_context.font = "40px Arial";
                    canvas_context.fillStyle = "#FFFFFF"
                    canvas_context.fillText(sandmap.players[0].name, chartoggle1.x + 15, chartoggle1.y + 50)
                    canvas_context.fillText(sandmap.players[1].name, chartoggle2.x + 15, chartoggle2.y + 50)
                    canvas_context.font = "40px Arial";
                    canvas_context.fillStyle = "#FFFFFF"
                    canvas_context.fillText("(You)", chartoggle1.x - 150, chartoggle1.y + 50)
                    canvas_context.font = "40px Arial";
                    canvas_context.fillStyle = "#FFFFFF"
                    canvas_context.fillText("(Enemy)", chartoggle2.x + 350, chartoggle2.y + 50)
                    canvas_context.font = "40px Arial";
                    canvas_context.fillStyle = "#FFFFFF"
                    if (sandmap.players[0].isAI == 1) {
                        canvas_context.fillText("CPU control", aitoggle1.x + 15, aitoggle1.y + 50)
                    } else {
                        canvas_context.fillText("Manual control", aitoggle1.x + 15, aitoggle1.y + 50)
                    }
                    if (sandmap.players[1].isAI == 1) {
                        canvas_context.fillText("CPU control", aitoggle2.x + 15, aitoggle1.y + 50)
                    } else {
                        canvas_context.fillText("Manual control", aitoggle2.x + 15, aitoggle2.y + 50)
                    }
                }
            }
        }, 35)
        document.addEventListener('keydown', (event) => {
            keysPressed[event.key] = true;
        });
        document.addEventListener('keyup', (event) => {
            delete keysPressed[event.key];
        });
        window.addEventListener('pointerdown', e => {
            if (e.button == 0) {
                FLEX_engine = canvas.getBoundingClientRect();
                XS_engine = e.clientX - FLEX_engine.left;
                YS_engine = e.clientY - FLEX_engine.top;
                TIP_engine.x = XS_engine
                TIP_engine.y = YS_engine
                TIP_engine.body = TIP_engine

                if (endgame == 1) {
                    if (score.button.isPointInside(TIP_engine)) {
                        if (score.mode == 0) {
                            score.mode = 1
                        } else if (score.mode == 1) {
                            score.mode = 2
                        } else if (score.mode == 2) {
                            score.mode = 3
                        }else if (score.mode == 3) {
                            score.mode = 0
                        }
                    }
                }


                if (sandmap.players[0].units.length == 0 || sandmap.players[1].units.length == 0) {
                    if (endbutton.isPointInside(TIP_engine)) {
                        endgame = 1
                    }
                }

                if (playstart != 1) {
                    if (playbutton.isPointInside(TIP_engine)) {
                        if (playstart == 3) {
                            playstart = 1
                        }
                        if (playstart == 2) {
                            playstart = 3
                        }
                        if (playstart == 0) {
                            playstart = 2
                        }
                    }
                    if(difftoggle2.isPointInside(TIP_engine)){
                        if(dynamic2 == 1){
                            dynamic2 = 0
                            sandmap.players[1].clickrate = 400
                       }else if(sandmap.players[1].clickrate == 1){
                        dynamic2 = 1
                        sandmap.players[1].clickrate = sandmap.players[1].units.length
                        }else if(sandmap.players[1].clickrate == 2){
                            sandmap.players[1].clickrate = 1
                        }else if(sandmap.players[1].clickrate == 5){
                            sandmap.players[1].clickrate = 2
                        }else if(sandmap.players[1].clickrate == 10){ 
                             sandmap.players[1].clickrate = 5
                        }else if(sandmap.players[1].clickrate == 15){
                            sandmap.players[1].clickrate = 10
                        }else if(sandmap.players[1].clickrate == 25){
                            sandmap.players[1].clickrate = 15
                        }else if(sandmap.players[1].clickrate == 35){
                            sandmap.players[1].clickrate = 25
                        }else if(sandmap.players[1].clickrate == 50){
                            sandmap.players[1].clickrate = 35
                        }else if(sandmap.players[1].clickrate == 100){
                            sandmap.players[1].clickrate = 50
                        }else if(sandmap.players[1].clickrate == 200){
                            sandmap.players[1].clickrate = 100
                        }else if(sandmap.players[1].clickrate == 400){
                            sandmap.players[1].clickrate = 200
                        }

                    }
                    if(difftoggle1.isPointInside(TIP_engine)){

                        if(dynamic1 == 1){
                            dynamic1 = 0
                            sandmap.players[0].clickrate = 400
                       }else if(sandmap.players[0].clickrate == 1){
                        dynamic1 = 1
                        sandmap.players[0].clickrate = sandmap.players[0].units.length
                        }else if(sandmap.players[0].clickrate == 2){
                            sandmap.players[0].clickrate = 1
                        }else if(sandmap.players[0].clickrate == 5){
                            sandmap.players[0].clickrate = 2
                        }else if(sandmap.players[0].clickrate == 10){ 
                             sandmap.players[0].clickrate = 5
                        }else if(sandmap.players[0].clickrate == 15){
                            sandmap.players[0].clickrate = 10
                        }else if(sandmap.players[0].clickrate == 25){
                            sandmap.players[0].clickrate = 15
                        }else if(sandmap.players[0].clickrate == 35){
                            sandmap.players[0].clickrate = 25
                        }else if(sandmap.players[0].clickrate == 50){
                            sandmap.players[0].clickrate = 35
                        }else if(sandmap.players[0].clickrate == 100){
                            sandmap.players[0].clickrate = 50
                        }else if(sandmap.players[0].clickrate == 200){
                            sandmap.players[0].clickrate = 100
                        }else if(sandmap.players[0].clickrate == 400){
                            sandmap.players[0].clickrate = 200
                        }

                    }


                    if (chartoggle2.isPointInside(TIP_engine)) {
                        if (sandmap.players[1].type == 0) {
                            sandmap.players[1].type = 1
                            sandmap.players[1].name = "Cold Itzlerians"
                            sandmap.players[0].units = []
                            sandmap.players[1].units = []
                            start = 0
                            for (let t = 0; t < 3; t++) {
                                let agent1 = new Agent(sandmap.blocks[10][t + 10], sandmap.players[0])
                            }
                            for (let t = 0; t < 3; t++) {
                                let agent2 = new Agent(sandmap.blocks[117][117 - t], sandmap.players[1])
                            }
                            start = 1

                        } else if (sandmap.players[1].type == 2) {
                            sandmap.players[1].type = 3
                            sandmap.players[1].name = "Librilbians"
                            sandmap.players[0].units = []
                            sandmap.players[1].units = []
                            start = 0
                            for (let t = 0; t < 3; t++) {
                                let agent1 = new Agent(sandmap.blocks[10][t + 10], sandmap.players[0])
                            }
                            for (let t = 0; t < 3; t++) {
                                let agent2 = new Agent(sandmap.blocks[117][117 - t], sandmap.players[1])
                            }
                            start = 1
                        } else if (sandmap.players[1].type == 3) {
                            sandmap.players[1].type = 0
                            sandmap.players[1].name = "Earthoids"
                            sandmap.players[0].units = []
                            sandmap.players[1].units = []
                            start = 0
                            for (let t = 0; t < 3; t++) {
                                let agent1 = new Agent(sandmap.blocks[10][t + 10], sandmap.players[0])
                            }
                            for (let t = 0; t < 3; t++) {
                                let agent2 = new Agent(sandmap.blocks[117][117 - t], sandmap.players[1])
                            }
                            start = 1
                        } else {
                            sandmap.players[1].type = 2
                            sandmap.players[1].name = "Hamartans"
                            sandmap.players[0].units = []
                            sandmap.players[1].units = []
                            start = 0
                            for (let t = 0; t < 3; t++) {
                                let agent1 = new Agent(sandmap.blocks[10][t + 10], sandmap.players[0])
                            }
                            for (let t = 0; t < 3; t++) {
                                let agent2 = new Agent(sandmap.blocks[117][117 - t], sandmap.players[1])
                            }
                            start = 1
                        }
                    }
                    if (chartoggle1.isPointInside(TIP_engine)) {
                        if (sandmap.players[0].type == 0) {
                            sandmap.players[0].type = 1
                            sandmap.players[0].name = "Cold Itzlerians"
                            sandmap.players[0].units = []
                            sandmap.players[1].units = []
                            start = 0
                            for (let t = 0; t < 3; t++) {
                                let agent1 = new Agent(sandmap.blocks[10][t + 10], sandmap.players[0])
                            }
                            for (let t = 0; t < 3; t++) {
                                let agent2 = new Agent(sandmap.blocks[117][117 - t], sandmap.players[1])
                            }
                            start = 1

                        } else if (sandmap.players[0].type == 2) {
                            sandmap.players[0].type = 3
                            sandmap.players[0].name = "Librilbians"
                            sandmap.players[0].units = []
                            sandmap.players[1].units = []
                            start = 0
                            for (let t = 0; t < 3; t++) {
                                let agent1 = new Agent(sandmap.blocks[10][t + 10], sandmap.players[0])
                            }
                            for (let t = 0; t < 3; t++) {
                                let agent2 = new Agent(sandmap.blocks[117][117 - t], sandmap.players[1])
                            }
                            start = 1
                        } else if (sandmap.players[0].type == 3) {
                            sandmap.players[0].type = 0
                            sandmap.players[0].name = "Earthoids"
                            sandmap.players[0].units = []
                            sandmap.players[1].units = []
                            start = 0
                            for (let t = 0; t < 3; t++) {
                                let agent1 = new Agent(sandmap.blocks[10][t + 10], sandmap.players[0])
                            }
                            for (let t = 0; t < 3; t++) {
                                let agent2 = new Agent(sandmap.blocks[117][117 - t], sandmap.players[1])
                            }
                            start = 1
                        } else {
                            sandmap.players[0].type = 2
                            sandmap.players[0].name = "Hamartans"
                            sandmap.players[0].units = []
                            sandmap.players[1].units = []
                            start = 0
                            for (let t = 0; t < 3; t++) {
                                let agent1 = new Agent(sandmap.blocks[10][t + 10], sandmap.players[0])
                            }
                            for (let t = 0; t < 3; t++) {
                                let agent2 = new Agent(sandmap.blocks[117][117 - t], sandmap.players[1])
                            }
                            start = 1
                        }
                    }
                    if (aitoggle1.isPointInside(TIP_engine)) {
                        if (sandmap.players[0].isAI == 0) {
                            sandmap.players[0].isAI = 1
                        } else {
                            sandmap.players[0].isAI = 0
                        }
                    }
                    if (aitoggle2.isPointInside(TIP_engine)) {
                        if (sandmap.players[1].isAI == 0) {
                            sandmap.players[1].isAI = 1
                        } else {
                            sandmap.players[1].isAI = 0
                        }
                    }
                } else {

                    if (TIP_engine.x <= sandmap.window.body.x + sandmap.window.body.width) {
                        if (keysPressed['b']) {
                            let structuredpoint = new Point(0, 0)
                            structuredpoint.x += sandmap.window.guide.x
                            structuredpoint.y += sandmap.window.guide.y
                            structuredpoint.x += (TIP_engine.x * .5)
                            structuredpoint.y += (TIP_engine.y * .5)
                            structuredpoint.x = Math.floor(structuredpoint.x * .1)
                            structuredpoint.y = Math.floor(structuredpoint.y * .1)
                            sandmap.players[sandmap.turn].selected_tile = sandmap.blocks[structuredpoint.x][structuredpoint.y]

                            let wet = 0
                            for (let t = 0; t < sandmap.players[sandmap.turn].buildings.length; t++) {
                                if (sandmap.players[sandmap.turn].selected_tile == sandmap.players[sandmap.turn].buildings[t].tile) {
                                    wet = 1
                                }
                            }
                            if (sandmap.players[sandmap.turn].blocks[sandmap.players[sandmap.turn].selected_tile.t][sandmap.players[sandmap.turn].selected_tile.k].markdraw !== 1) {
                                wet = 1
                            }
                            // if (sandmap.players[sandmap.turn].hotrock < 10) {
                            //     wet = 1
                            // }

                            if (sandmap.players[sandmap.turn].blocks[sandmap.players[sandmap.turn].selected_tile.t][sandmap.players[sandmap.turn].selected_tile.k].markdraw !== 1) {
                                wet = 1
                            }
                            if (wet == 0) {
                                sandmap.players[sandmap.turn].buildWall(sandmap.players[sandmap.turn].selected_tile, 0)
                            }
                        } else if (keysPressed['g']) {
                            let structuredpoint = new Point(0, 0)
                            structuredpoint.x += sandmap.window.guide.x
                            structuredpoint.y += sandmap.window.guide.y
                            structuredpoint.x += (TIP_engine.x * .5)
                            structuredpoint.y += (TIP_engine.y * .5)
                            structuredpoint.x = Math.floor(structuredpoint.x * .1)
                            structuredpoint.y = Math.floor(structuredpoint.y * .1)
                            sandmap.players[sandmap.turn].selected_tile = sandmap.blocks[structuredpoint.x][structuredpoint.y]

                            let wet = 0
                            for (let t = 0; t < sandmap.players[sandmap.turn].buildings.length; t++) {
                                if (sandmap.players[sandmap.turn].selected_tile == sandmap.players[sandmap.turn].buildings[t].tile) {
                                    wet = 1
                                }
                            }
                            if (sandmap.players[sandmap.turn].blocks[sandmap.players[sandmap.turn].selected_tile.t][sandmap.players[sandmap.turn].selected_tile.k].markdraw !== 1) {
                                wet = 1
                            }
                            // if (sandmap.players[sandmap.turn].hotrock < 10) {
                            //     wet = 1
                            // }

                            if (sandmap.players[sandmap.turn].blocks[sandmap.players[sandmap.turn].selected_tile.t][sandmap.players[sandmap.turn].selected_tile.k].markdraw !== 1) {
                                wet = 1
                            }
                            if (wet == 0) {
                                sandmap.players[sandmap.turn].buildGate(sandmap.players[sandmap.turn].selected_tile, 0)
                            }
                        } else if (keysPressed['x']) {
                            let structuredpoint = new Point(0, 0)
                            structuredpoint.x += sandmap.window.guide.x
                            structuredpoint.y += sandmap.window.guide.y
                            structuredpoint.x += (TIP_engine.x * .5)
                            structuredpoint.y += (TIP_engine.y * .5)
                            structuredpoint.x = Math.floor(structuredpoint.x * .1)
                            structuredpoint.y = Math.floor(structuredpoint.y * .1)
                            sandmap.players[sandmap.turn].selected_tile = sandmap.blocks[structuredpoint.x][structuredpoint.y]
                            for (let t = 0; t < sandmap.players[sandmap.turn].buildings.length; t++) {
                                if (sandmap.players[sandmap.turn].selected_tile == sandmap.players[sandmap.turn].buildings[t].tile) {
                                    for (let k = 0; k < sandmap.players[sandmap.turn].buildings[t].tiles.length; k++) {
                                        sandmap.players[sandmap.turn].buildings[t].tiles[k].walkable = true
                                        sandmap.players[sandmap.turn].buildings[t].tiles[k].color = "#AACCFF"
                                        delete sandmap.players[sandmap.turn].buildings[t].tiles[k].wallcolor
                                    }
                                    sandmap.players[sandmap.turn].buildings.splice(t, 1)
                                    break
                                }
                            }
                        } else if (keysPressed['n']) {
                            let structuredpoint = new Point(0, 0)
                            structuredpoint.x += sandmap.window.guide.x
                            structuredpoint.y += sandmap.window.guide.y
                            structuredpoint.x += (TIP_engine.x * .5)
                            structuredpoint.y += (TIP_engine.y * .5)
                            structuredpoint.x = Math.floor(structuredpoint.x * .1)
                            structuredpoint.y = Math.floor(structuredpoint.y * .1)
                            sandmap.players[sandmap.turn].selected_tile = sandmap.blocks[structuredpoint.x][structuredpoint.y]

                            let wet = 0
                            for (let t = 0; t < sandmap.players[sandmap.turn].buildings.length; t++) {
                                if (sandmap.players[sandmap.turn].selected_tile == sandmap.players[sandmap.turn].buildings[t].tile) {
                                    wet = 1
                                }
                            }
                            // if (sandmap.players[sandmap.turn].hotrock < 70) {
                            //     wet = 1
                            // }
                            if (sandmap.players[sandmap.turn].blocks[sandmap.players[sandmap.turn].selected_tile.t][sandmap.players[sandmap.turn].selected_tile.k].markdraw !== 1) {
                                wet = 1
                            }
                            if (wet == 0) {
                                sandmap.players[sandmap.turn].buildBarracks(sandmap.players[sandmap.turn].selected_tile, 0)
                                // let building = new Building(sandmap.players[sandmap.turn].selected_tile, sandmap.players[sandmap.turn], 0)

                            }
                        } else if (keysPressed['m']) {
                            let structuredpoint = new Point(0, 0)
                            structuredpoint.x += sandmap.window.guide.x
                            structuredpoint.y += sandmap.window.guide.y
                            structuredpoint.x += (TIP_engine.x * .5)
                            structuredpoint.y += (TIP_engine.y * .5)
                            structuredpoint.x = Math.floor(structuredpoint.x * .1)
                            structuredpoint.y = Math.floor(structuredpoint.y * .1)
                            sandmap.players[sandmap.turn].selected_tile = sandmap.blocks[structuredpoint.x][structuredpoint.y]

                            let wet = 0
                            for (let t = 0; t < sandmap.players[sandmap.turn].buildings.length; t++) {
                                if (sandmap.players[sandmap.turn].selected_tile == sandmap.players[sandmap.turn].buildings[t].tile) {
                                    wet = 1
                                }
                            }
                            // if (sandmap.players[sandmap.turn].hotrock < 70) {
                            //     wet = 1
                            // }
                            if (sandmap.players[sandmap.turn].blocks[sandmap.players[sandmap.turn].selected_tile.t][sandmap.players[sandmap.turn].selected_tile.k].markdraw !== 1) {
                                wet = 1
                            }
                            if (wet == 0) {
                                sandmap.players[sandmap.turn].buildMachineLab(sandmap.players[sandmap.turn].selected_tile, 0)
                                // let building = new Building(sandmap.players[sandmap.turn].selected_tile, sandmap.players[sandmap.turn], 0)

                            }
                        } else {
                            let structuredpoint = new Point(0, 0)
                            structuredpoint.x += sandmap.window.guide.x
                            structuredpoint.y += sandmap.window.guide.y
                            structuredpoint.x += (TIP_engine.x * .5)
                            structuredpoint.y += (TIP_engine.y * .5)
                            structuredpoint.x = Math.floor(structuredpoint.x * .1)
                            structuredpoint.y = Math.floor(structuredpoint.y * .1)
                            if (structuredpoint.x < 0) {
                                structuredpoint.x = 0
                            }
                            if (structuredpoint.y < 0) {
                                structuredpoint.y = 0
                            }
                            sandmap.players[sandmap.turn].selected_tile = sandmap.blocks[structuredpoint.x][structuredpoint.y]

                            for (let t = 0; t < sandmap.players[sandmap.turn].buildings.length; t++) {
                                if (sandmap.players[sandmap.turn].buildings[t].tiles.includes(sandmap.players[sandmap.turn].selected_tile)) {
                                    sandmap.players[sandmap.turn].buildings[t].selected = 1
                                } else {
                                    if(!keysPressed['Shift']){
                                        sandmap.players[sandmap.turn].buildings[t].selected = 0
                                    }
                                }
                            }

                            // sandmap.turn++
                            sandmap.turn %= sandmap.players.length
                            rectstart.x = structuredpoint.x
                            rectstart.y = structuredpoint.y
                            for (let t = 0; t < sandmap.players[sandmap.turn].units.length; t++) {
                                if (sandmap.players[sandmap.turn].selected_tile == sandmap.players[sandmap.turn].units[t].tile) {
                                    if (sandmap.players[sandmap.turn].units[t].selected == 0) {
                                        // if(Math.random()<soundspamdrop){
                                        soundCancel()
                                        if (sandmap.players[sandmap.turn].units[t].drone == 1) {
                                            if (Math.random() < .5) {
                                                hello.play()
                                            } else {
                                                scanning.play()
                                            }
                                        }
                                        if (sandmap.players[sandmap.turn].units[t].gamergate == 1) {
                                            if (Math.random() < .5) {
                                                solutionnotobey.play()
                                            } else {
                                                whatisthis.play()
                                            }
                                        }
                                        if (sandmap.players[sandmap.turn].units[t].nymph == 2) {
                                            if (Math.random() < .3) {
                                                sureiwillstandup.play()
                                            } else if (Math.random() < .3) {
                                                suresauna.play()
                                            } else {
                                                getinthebathsootheyourson.play()
                                            }
                                        }
                                        if (sandmap.players[sandmap.turn].units[t].nymph == 1) {
                                            seeasvillaneh.play()
                                        }
                                        if (sandmap.players[sandmap.turn].units[t].imago == 1) {
                                            yeahiminthisroom.play()
                                        }
                                        if (sandmap.players[sandmap.turn].units[t].infantry == 1) {
                                            if (Math.random() < .8) {
                                                orders.play()
                                            } else {
                                                freezin.play()
                                            }
                                        }
                                        if (sandmap.players[sandmap.turn].units[t].hamartaninvader == 1) {
                                            if (Math.random() < .5) {
                                                zero.play()
                                            } else {
                                                ritual.play()
                                            }
                                        }
                                        if (sandmap.players[sandmap.turn].units[t].hamartansoldier == 1) {
                                            if (Math.random() < .3) {
                                                saytome.play()
                                            } else if (Math.random() < .3) {
                                                snazzyroom.play()
                                            } else {
                                                snnazzyroom.play()
                                            }
                                        }
                                        if (sandmap.players[sandmap.turn].units[t].infantry == 2) {
                                            if (Math.random() < .3) {
                                                jobsthejob.play()
                                            } else if (Math.random() < .3) {
                                                likecontrolling.play()
                                            } else if (Math.random() < .3) {
                                                veryprecise.play()
                                            } else {
                                                veryprecise2.play()
                                            }
                                        }
                                        if (sandmap.players[sandmap.turn].units[t].harvester == 1) {
                                            if (Math.random() < .9) {
                                                rollout.play()
                                            } else {
                                                hitsomething.play()
                                            }
                                        }
                                        if (sandmap.players[sandmap.turn].units[t].podman == 1) {
                                            if (Math.random() < .5) {
                                                backwithclass.play()
                                            } else {
                                                whosthegas.play()
                                            }
                                        }
                                        // }
                                    }
                                    sandmap.players[sandmap.turn].units[t].selected = 2
                                } else {
                                    // sandmap.players[sandmap.turn].units[t].selected = 0
                                }
                            }
                            // for(let t = 0;t<sandmap.players[sandmap.turn].units.length;t++){
                            //     if(sandmap.players[sandmap.turn].units[t].selected == 1){
                            //         sandmap.players[sandmap.turn].units[t].pathTo(sandmap.players[sandmap.turn].selected_tile )
                            //     }
                            // }
                        }
                    } else {
                        for (let t = 0; t < sandmap.players[sandmap.turn].buildings.length; t++) {
                            if (sandmap.players[sandmap.turn].buildings[t].barracks == 1) {
                                if (sandmap.players[sandmap.turn].buildings[t].spawnsmall.isPointInside(TIP_engine)) {
                                    sandmap.players[sandmap.turn].buildings[t].makeInfantry()
                                }
                                if (sandmap.players[sandmap.turn].buildings[t].spawnbig.isPointInside(TIP_engine)) {
                                    sandmap.players[sandmap.turn].buildings[t].makeSniper()
                                }
                            }

                            if (sandmap.players[sandmap.turn].buildings[t].gate == 1) {
                                if (sandmap.players[sandmap.turn].buildings[t].spawnsmall.isPointInside(TIP_engine)) {
                                    if (sandmap.players[sandmap.turn].buildings[t].tile.occupied !== true) {
                                        sandmap.players[sandmap.turn].buildings[t].open *= -1
                                        if (sandmap.players[sandmap.turn].buildings[t].open == 1) {
                                            if (Math.random() < soundspamdrop * 2) {
                                                soundCancel()
                                                if (Math.random() < .5) {
                                                    opening1.play()
                                                } else {
                                                    opening2.play()
                                                }
                                            }
                                        }
                                        if (sandmap.players[sandmap.turn].buildings[t].open == -1) {
                                            if (Math.random() < soundspamdrop * 2) {
                                                soundCancel()
                                                if (Math.random() < .3) {
                                                    closing1.play()
                                                } else if (Math.random() < .3) {
                                                    closing2.play()
                                                } else {
                                                    closing3.play()
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (sandmap.players[sandmap.turn].buildings[t].barracks == 2) {
                                if (sandmap.players[sandmap.turn].buildings[t].spawnsmall.isPointInside(TIP_engine)) {
                                    sandmap.players[sandmap.turn].buildings[t].makeScout()
                                }
                                if (sandmap.players[sandmap.turn].buildings[t].spawnbig.isPointInside(TIP_engine)) {
                                    sandmap.players[sandmap.turn].buildings[t].makeHarvester()
                                }
                            }
                            if (sandmap.players[sandmap.turn].buildings[t].assembler == 1) {
                                if (sandmap.players[sandmap.turn].buildings[t].spawnsmall.isPointInside(TIP_engine)) {
                                    sandmap.players[sandmap.turn].buildings[t].makeHamartansoldier()
                                }
                                // if (sandmap.players[sandmap.turn].buildings[t].spawnbig.isPointInside(TIP_engine)) {
                                //     sandmap.players[sandmap.turn].buildings[t].makeHarvester()
                                // }
                            }
                            if (sandmap.players[sandmap.turn].buildings[t].assembler == 2) {
                                if (sandmap.players[sandmap.turn].buildings[t].spawnsmall.isPointInside(TIP_engine)) {
                                    sandmap.players[sandmap.turn].buildings[t].makeHamartanscout()
                                }
                                // if (sandmap.players[sandmap.turn].buildings[t].spawnbig.isPointInside(TIP_engine)) {
                                //     sandmap.players[sandmap.turn].buildings[t].makeHarvester()
                                // }
                            }
                            if (sandmap.players[sandmap.turn].buildings[t].assembler == 3) {
                                if (sandmap.players[sandmap.turn].buildings[t].spawnsmall.isPointInside(TIP_engine)) {
                                    sandmap.players[sandmap.turn].buildings[t].makeHamartanworker()
                                }
                                if (sandmap.players[sandmap.turn].buildings[t].spawnbig.isPointInside(TIP_engine)) {
                                    sandmap.players[sandmap.turn].buildings[t].makeHamartaninvader()
                                }
                            }
                            if (sandmap.players[sandmap.turn].buildings[t].bulbplant == 1) {
                                if (sandmap.players[sandmap.turn].buildings[t].spawnsmall.isPointInside(TIP_engine)) {
                                    sandmap.players[sandmap.turn].buildings[t].makeLibrilbianpollinator()
                                }
                            }
                            if (sandmap.players[sandmap.turn].buildings[t].bulbplant == 2) {
                                if (sandmap.players[sandmap.turn].buildings[t].spawnsmall.isPointInside(TIP_engine)) {
                                    sandmap.players[sandmap.turn].buildings[t].makeLibrilbianpufffellow()
                                }
                                if (sandmap.players[sandmap.turn].buildings[t].spawnmedium.isPointInside(TIP_engine)) {
                                    sandmap.players[sandmap.turn].buildings[t].makeLibrilbianpodman()
                                }
                                if (sandmap.players[sandmap.turn].buildings[t].spawnbig.isPointInside(TIP_engine)) {
                                    sandmap.players[sandmap.turn].buildings[t].makeLibrilbiangoliophyte()
                                }
                            }
                        }
                        for (let t = 0; t < sandmap.players[sandmap.turn].units.length; t++) {
                            if (sandmap.players[sandmap.turn].units[t].spawnsmall.isPointInside(TIP_engine)) {

                                for (let k = 0; k < sandmap.players[sandmap.turn].units.length; k++) {
                                    if (sandmap.players[sandmap.turn].units[k].imago == 1 || sandmap.players[sandmap.turn].units[k].imago == 2) {
                                        if (sandmap.players[sandmap.turn].units[k].selected == 1 || sandmap.players[sandmap.turn].units[k].selected == 2) {
                                            sandmap.players[sandmap.turn].units[k].makeNymph()
                                        }
                                    }
                                }
                            }
                            if (sandmap.players[sandmap.turn].units[t].morph.isPointInside(TIP_engine)) {
                                if (sandmap.players[sandmap.turn].units[t].nymph == 1) {

                                    for (let k = 0; k < sandmap.players[sandmap.turn].units.length; k++) {
                                        if (sandmap.players[sandmap.turn].units[k].nymph == 1) {
                                            if (sandmap.players[sandmap.turn].units[k].selected == 1 || sandmap.players[sandmap.turn].units[k].selected == 2) {
                                                sandmap.players[sandmap.turn].units[k].metamorph1()
                                            }
                                        }
                                    }
                                    if (Math.random() < soundspamdrop) {
                                        soundCancel()
                                        whoarewetomolt.play()
                                    }
                                }
                                if (sandmap.players[sandmap.turn].units[t].pollinator == 1) {

                                    for (let k = 0; k < sandmap.players[sandmap.turn].units.length; k++) {
                                        if (sandmap.players[sandmap.turn].units[k].pollinator == 1) {
                                            if (sandmap.players[sandmap.turn].units[k].selected == 1 || sandmap.players[sandmap.turn].units[k].selected == 2) {
                                                sandmap.players[sandmap.turn].units[k].metamorphpufffellow()
                                            }
                                        }
                                    }
                                    if (Math.random() < soundspamdrop) {
                                        soundCancel()
                                    }
                                }

                            }
                            if (sandmap.players[sandmap.turn].units[t].morph2.isPointInside(TIP_engine)) {
                                // sandmap.players[sandmap.turn].units[t].metamorph2()
                                if (sandmap.players[sandmap.turn].units[t].nymph == 2) {
                                    if (Math.random() < soundspamdrop) {
                                        soundCancel()
                                        whoelsezagtheoystergush.play()
                                    }
                                    for (let k = 0; k < sandmap.players[sandmap.turn].units.length; k++) {
                                        if (sandmap.players[sandmap.turn].units[k].nymph == 2) {
                                            if (sandmap.players[sandmap.turn].units[k].selected == 1 || sandmap.players[sandmap.turn].units[k].selected == 2) {
                                                sandmap.players[sandmap.turn].units[k].metamorph2()
                                            }
                                        }
                                    }
                                }
                            }
                            if (sandmap.players[sandmap.turn].units[t].morph3.isPointInside(TIP_engine)) {
                                if (sandmap.players[sandmap.turn].units[t].nymph == 2) {
                                    // sandmap.players[sandmap.turn].units[t].metamorph3()
                                    if (Math.random() < soundspamdrop) {
                                        soundCancel()
                                        stallusyourworth.play()

                                    }

                                    for (let k = 0; k < sandmap.players[sandmap.turn].units.length; k++) {
                                        if (sandmap.players[sandmap.turn].units[k].nymph == 2) {
                                            if (sandmap.players[sandmap.turn].units[k].selected == 1 || sandmap.players[sandmap.turn].units[k].selected == 2) {
                                                sandmap.players[sandmap.turn].units[k].metamorph3()
                                            }
                                        }
                                    }
                                } else {
                                    if (sandmap.players[sandmap.turn].units[t].submerged == 0) {
                                        if (Math.random() < soundspamdrop) {
                                            soundCancel()
                                            slurpslurp.play()
                                        }
                                        for (let k = 0; k < sandmap.players[sandmap.turn].units.length; k++) {
                                            if (sandmap.players[sandmap.turn].units[k].imago == 2) {
                                                if (sandmap.players[sandmap.turn].units[k].selected == 1 || sandmap.players[sandmap.turn].units[k].selected == 2) {
                                                    sandmap.players[sandmap.turn].units[k].submerged = 1
                                                }
                                            }
                                        }
                                    } else {
                                        if (Math.random() < soundspamdrop) {
                                            soundCancel()
                                            gooutside.play()
                                        }
                                        for (let k = 0; k < sandmap.players[sandmap.turn].units.length; k++) {
                                            if (sandmap.players[sandmap.turn].units[k].imago == 2) {
                                                if (sandmap.players[sandmap.turn].units[k].selected == 1 || sandmap.players[sandmap.turn].units[k].selected == 2) {

                                                    if (sandmap.players[sandmap.turn].units[k].tile.walkable == false || sandmap.players[sandmap.turn].units[k].tile.ice == 1 || sandmap.players[sandmap.turn].units[k].tile.builtOn == 1) {
                                                    } else {
                                                        sandmap.players[sandmap.turn].units[k].submerged = 0
                                                    }
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        }
                        if (sandmap.window.minibody.isPointInside(TIP_engine)) {
                            let structuredpoint = new Point(0, 0)
                            let inv = 1 / .28125
                            structuredpoint.x += (TIP_engine.x - sandmap.window.minibody.x) * inv
                            structuredpoint.y += (TIP_engine.y - sandmap.window.minibody.y) * inv
                            sandmap.window.guide.x = structuredpoint.x - (sandmap.window.body.width * .25)
                            sandmap.window.guide.y = structuredpoint.y - (sandmap.window.body.height * .25)
                        }
                    }



                    // example usage: if(object.isPointInside(TIP_engine)){ take action }
                    window.addEventListener('pointermove', continued_stimuli);
                    // }
                }
            }
        });
        canvas.addEventListener('contextmenu', e => {
            e.preventDefault()
            FLEX_engine = canvas.getBoundingClientRect();
            XS_engine = e.clientX - FLEX_engine.left;
            YS_engine = e.clientY - FLEX_engine.top;
            TIP_engine.x = XS_engine
            TIP_engine.y = YS_engine
            TIP_engine.body = TIP_engine
            if (TIP_engine.x <= sandmap.window.body.x + sandmap.window.body.width) {

                let structuredpoint = new Point(0, 0)
                structuredpoint.x += sandmap.window.guide.x
                structuredpoint.y += sandmap.window.guide.y
                structuredpoint.x += (TIP_engine.x * .5)
                structuredpoint.y += (TIP_engine.y * .5)
                structuredpoint.x = Math.floor(structuredpoint.x * .1)
                structuredpoint.y = Math.floor(structuredpoint.y * .1)
                sandmap.players[sandmap.turn].selected_tile = sandmap.blocks[structuredpoint.x][structuredpoint.y]
                // sandmap.turn++
                sandmap.turn %= sandmap.players.length

                for (let t = 0; t < sandmap.players[sandmap.turn].units.length; t++) {
                    if (sandmap.players[sandmap.turn].units[t].selected == 1) {

                        if (e.button == 0) {
                            sandmap.players[sandmap.turn].units[t].selected = 2
                        }

                        ////////////////console.log(sandmap.players[sandmap.turn].selected_tile)
                        sandmap.players[sandmap.turn].units[t].pathTo(sandmap.players[sandmap.turn].selected_tile)


                        if (Math.random() < soundspamdrop) {
                            if (sandmap.players[sandmap.turn].selected_tile.hotrock > 0) {

                                soundCancel()
                                if (sandmap.players[sandmap.turn].units[t].imago == 1) {
                                    if (Math.random() < .5) {
                                        sieveseejunior.play()
                                    } else {
                                        sieveceaselessly.play()
                                    }
                                }
                                if (sandmap.players[sandmap.turn].units[t].podman == 1) {
                                    if (Math.random() < .5) {
                                        whatdoweneed.play()
                                    } else {
                                        hotmore.play()
                                    }
                                }
                                if (sandmap.players[sandmap.turn].units[t].hamartaninvader == 1) {
                                    incroiable.play()
                                }
                                if (sandmap.players[sandmap.turn].units[t].hamartansoldier == 1) {
                                    pagetti.play()
                                }
                                if (sandmap.players[sandmap.turn].units[t].imago == 2) {
                                    if (Math.random() < .5) {
                                        dontstopeating.play()
                                    } else {
                                        buyburbon.play()
                                    }
                                }
                                if (sandmap.players[sandmap.turn].units[t].nymph == 2) {
                                    if (Math.random() < .5) {
                                        whatareyoufreesievingoutput.play()
                                    } else {
                                        slowworkingsite.play()
                                    }
                                }
                                if (sandmap.players[sandmap.turn].units[t].drone == 1) {
                                    collect.play()
                                }
                                if (sandmap.players[sandmap.turn].units[t].nymph == 1) {
                                    sureilike.play()
                                }
                                if (sandmap.players[sandmap.turn].units[t].infantry == 2) {
                                    if (Math.random() < .5) {
                                        wealthstatusandpower.play()
                                    } else if (Math.random() < .5) {
                                        oratleastone.play()
                                    } else {
                                        jobsthejob.play()
                                    }
                                }
                                if (sandmap.players[sandmap.turn].units[t].infantry == 1) {
                                    righton.play()
                                }
                                if (sandmap.players[sandmap.turn].units[t].harvester == 1) {
                                    overtime.play()
                                }
                            } else {

                                soundCancel()

                                if (sandmap.players[sandmap.turn].units[t].hamartaninvader == 1) {
                                    gentlemen.play()
                                }

                                if (sandmap.players[sandmap.turn].units[t].hamartansoldier == 1) {
                                    if (Math.random() < .5) {
                                        seearoundme.play()
                                    } else {
                                        torus.play()
                                    }
                                }

                                if (sandmap.players[sandmap.turn].units[t].imago == 1) {
                                    go.play()
                                }
                                if (sandmap.players[sandmap.turn].units[t].imago == 2) {
                                    if (Math.random() < .5) {
                                        letemseeit.play()
                                    } else {
                                        hovness.play()
                                    }
                                }

                                if (sandmap.players[sandmap.turn].units[t].harvester == 1) {
                                    movin.play()
                                }
                                if (sandmap.players[sandmap.turn].units[t].podman == 1) {
                                    if (Math.random() < .5) {
                                        nahimgood.play()
                                    } else if (Math.random() < .5) {
                                        whatdoesthisdo.play()
                                    } else {
                                        maybegofishing.play()
                                    }
                                }
                                if (sandmap.players[sandmap.turn].units[t].drone == 1) {
                                    if (Math.random() < .5) {
                                        pathfound.play()
                                    } else {
                                        pathing.play()
                                    }
                                }
                                if (sandmap.players[sandmap.turn].units[t].infantry == 2) {
                                    if (sandmap.players[sandmap.turn].selected_tile.builtOn == 1) {
                                        ivoryeh.play()
                                    } else {
                                        ivegotanhour.play()
                                    }
                                }
                                if (sandmap.players[sandmap.turn].units[t].nymph == 1) {
                                    spreadoutseemult.play()
                                }

                                if (sandmap.players[sandmap.turn].units[t].nymph == 2) {
                                    if (Math.random() < .3) {
                                        amiaringer.play()  //scuttaud
                                    } else if (Math.random() < .3) {
                                        yeahimfamiliarsee.play()  //scuttaud
                                    } else {
                                        hangintheremanlol.play()
                                    }
                                }

                                if (sandmap.players[sandmap.turn].units[t].infantry == 1) {
                                    if (Math.random() < .3) {
                                        lesgo.play()
                                    } else if (Math.random() < .3) {
                                        onmyway.play()
                                    } else {
                                        donttellme.play()
                                    }
                                }
                            }
                        }

                        for (let k = 0; k < sandmap.players[Math.abs(sandmap.turn - 1)].units.length; k++) {
                            if (sandmap.players[sandmap.turn].selected_tile == sandmap.players[Math.abs(sandmap.turn - 1)].units[k].tile) {
                                sandmap.players[sandmap.turn].units[t].attacktarget = sandmap.players[Math.abs(sandmap.turn - 1)].units[k]
                            }
                        }
                    }
                }

            } else {
                if (sandmap.window.minibody.isPointInside(TIP_engine)) {
                    let structuredpoint = new Point(0, 0)
                    let inv = 1 / .28125
                    structuredpoint.x += (TIP_engine.x - sandmap.window.minibody.x) * inv
                    structuredpoint.y += (TIP_engine.y - sandmap.window.minibody.y) * inv
                    sandmap.window.guide.x = structuredpoint.x - (sandmap.window.body.width * .25)
                    sandmap.window.guide.y = structuredpoint.y - (sandmap.window.body.height * .25)

                    structuredpoint.x = Math.floor((sandmap.window.guide.x + (sandmap.window.body.width * .25)) * .1)
                    structuredpoint.y = Math.floor(((sandmap.window.guide.y + (sandmap.window.body.height * .25)) * .1))
                    sandmap.players[sandmap.turn].selected_tile = sandmap.blocks[structuredpoint.x][structuredpoint.y]
                    for (let t = 0; t < sandmap.players[sandmap.turn].units.length; t++) {
                        if (sandmap.players[sandmap.turn].units[t].selected == 1) {
                            if (typeof sandmap.players[sandmap.turn].units[t].realPath[sandmap.players[sandmap.turn].units[t].index + 1] != "undefined") {
                                if (sandmap.players[sandmap.turn].units[t].realPath[sandmap.players[sandmap.turn].units[t].index + 1] == sandmap.players[sandmap.turn].selected_tile) {
                                    continue
                                }
                            }
                            ////////////////console.log(sandmap.players[sandmap.turn].selected_tile)
                            sandmap.players[sandmap.turn].units[t].pathTo(sandmap.players[sandmap.turn].selected_tile)
                            if (sandmap.players[sandmap.turn].selected_tile.hotrock > 0) {

                                // soundCancel()
                                // if( sandmap.players[sandmap.turn].units[t].drone == 1){
                                //     collect.play()
                                // }
                            }
                        }
                    }
                }
            }



            // example usage: if(object.isPointInside(TIP_engine)){ take action }
            // window.addEventListener('pointermove', continued_stimuli);

        });

        window.addEventListener('pointerup', e => {

            FLEX_engine = canvas.getBoundingClientRect();
            XS_engine = e.clientX - FLEX_engine.left;
            YS_engine = e.clientY - FLEX_engine.top;
            TIP_engine.x = XS_engine
            TIP_engine.y = YS_engine
            TIP_engine.body = TIP_engine
            // if (e.button == 0) {
            window.removeEventListener("pointermove", continued_stimuli);
            if (TIP_engine.x <= sandmap.window.body.x + sandmap.window.body.width) {
                for (let t = 0; t < sandmap.players[sandmap.turn].units.length; t++) {
                    if (selectrect.isPointInside(sandmap.players[sandmap.turn].units[t].body)) {

                        if (e.button == 0) {
                            sandmap.players[sandmap.turn].units[t].selected = 1
                        }

                    } else {
                        if (sandmap.players[sandmap.turn].units[t].selected == 2) {
                            if (e.button == 0) {
                                sandmap.players[sandmap.turn].units[t].selected = 1
                            }
                        } else {

                            if (e.button == 0) {
                                if(!keysPressed['Shift']){
                                    sandmap.players[sandmap.turn].units[t].selected = 0
                                }
                            }
                        }
                    }
                }
            }
            selectrect = new Tile(0, 0, 0, 0, "transparent")
            // }
        })
        function continued_stimuli(e) {
            // if(e.button == 0){
            FLEX_engine = canvas.getBoundingClientRect();
            XS_engine = e.clientX - FLEX_engine.left;
            YS_engine = e.clientY - FLEX_engine.top;
            TIP_engine.x = XS_engine
            TIP_engine.y = YS_engine
            TIP_engine.body = TIP_engine

            if (TIP_engine.x <= sandmap.window.body.x + sandmap.window.body.width) {

                if (keysPressed['b']) {
                    let structuredpoint = new Point(0, 0)
                    structuredpoint.x += sandmap.window.guide.x
                    structuredpoint.y += sandmap.window.guide.y
                    structuredpoint.x += (TIP_engine.x * .5)
                    structuredpoint.y += (TIP_engine.y * .5)
                    structuredpoint.x = Math.floor(structuredpoint.x * .1)
                    structuredpoint.y = Math.floor(structuredpoint.y * .1)
                    sandmap.players[sandmap.turn].selected_tile = sandmap.blocks[structuredpoint.x][structuredpoint.y]

                    let wet = 0
                    for (let t = 0; t < sandmap.players[sandmap.turn].buildings.length; t++) {
                        if (sandmap.players[sandmap.turn].selected_tile == sandmap.players[sandmap.turn].buildings[t].tile) {
                            wet = 1
                        }
                    }
                    // if (sandmap.players[sandmap.turn].hotrock < 10) {
                    //     wet = 1
                    // }

                    if (sandmap.players[sandmap.turn].blocks[sandmap.players[sandmap.turn].selected_tile.t][sandmap.players[sandmap.turn].selected_tile.k].markdraw !== 1) {
                        wet = 1
                    }
                    if (wet == 0) {
                        // let building = new Building(sandmap.players[sandmap.turn].selected_tile, sandmap.players[sandmap.turn], 0)

                        sandmap.players[sandmap.turn].buildWall(sandmap.players[sandmap.turn].selected_tile, 0)
                    }
                } else if (keysPressed['g']) {
                    let structuredpoint = new Point(0, 0)
                    structuredpoint.x += sandmap.window.guide.x
                    structuredpoint.y += sandmap.window.guide.y
                    structuredpoint.x += (TIP_engine.x * .5)
                    structuredpoint.y += (TIP_engine.y * .5)
                    structuredpoint.x = Math.floor(structuredpoint.x * .1)
                    structuredpoint.y = Math.floor(structuredpoint.y * .1)
                    sandmap.players[sandmap.turn].selected_tile = sandmap.blocks[structuredpoint.x][structuredpoint.y]

                    let wet = 0
                    for (let t = 0; t < sandmap.players[sandmap.turn].buildings.length; t++) {
                        if (sandmap.players[sandmap.turn].selected_tile == sandmap.players[sandmap.turn].buildings[t].tile) {
                            wet = 1
                        }
                    }
                    // if (sandmap.players[sandmap.turn].hotrock < 10) {
                    //     wet = 1
                    // }

                    if (sandmap.players[sandmap.turn].blocks[sandmap.players[sandmap.turn].selected_tile.t][sandmap.players[sandmap.turn].selected_tile.k].markdraw !== 1) {
                        wet = 1
                    }
                    if (wet == 0) {
                        // let building = new Building(sandmap.players[sandmap.turn].selected_tile, sandmap.players[sandmap.turn], 0)

                        sandmap.players[sandmap.turn].buildGate(sandmap.players[sandmap.turn].selected_tile, 0)
                    }
                } else {

                    let structuredpoint = new Point(0, 0)
                    structuredpoint.x += sandmap.window.guide.x
                    structuredpoint.y += sandmap.window.guide.y
                    structuredpoint.x += (TIP_engine.x * .5)
                    structuredpoint.y += (TIP_engine.y * .5)
                    structuredpoint.x1 = Math.ceil(structuredpoint.x * .1)
                    structuredpoint.y1 = Math.ceil(structuredpoint.y * .1)
                    structuredpoint.x = Math.floor(structuredpoint.x * .1)
                    structuredpoint.y = Math.floor(structuredpoint.y * .1)

                    selectrect = new Tilex(rectstart.x * 10, rectstart.y * 10, (structuredpoint.x1 - rectstart.x) * 10, (structuredpoint.y1 - rectstart.y) * 10, sandmap.players[sandmap.turn].color + "22")
                    if (selectrect.width < 0) {
                        selectrect.x += selectrect.width
                        selectrect.width = Math.abs(selectrect.width)
                    }
                    if (selectrect.height < 0) {
                        selectrect.y += selectrect.height
                        selectrect.height = Math.abs(selectrect.height)
                    }

                    // ////////////////////console.log(selectrect)
                    // selectrect.draw()
                    // sandmap.players[sandmap.turn].selected_tile = sandmap.blocks[structuredpoint.x][structuredpoint.y]
                    // sandmap.turn++
                    // sandmap.turn%=sandmap.players.length


                }


            } else {
                if (sandmap.window.minibody.isPointInside(TIP_engine)) {
                    let structuredpoint = new Point(0, 0)
                    let inv = 1 / .28125
                    structuredpoint.x += (TIP_engine.x - sandmap.window.minibody.x) * inv
                    structuredpoint.y += (TIP_engine.y - sandmap.window.minibody.y) * inv
                    sandmap.window.guide.x = structuredpoint.x - (sandmap.window.body.width * .25)
                    sandmap.window.guide.y = structuredpoint.y - (sandmap.window.body.height * .25)
                }
            }
            // }
        }
    }
    //     function gamepad_control(object, speed = 1) { // basic control for objects using the controler
    // //         //////////////////////////console.log(gamepadAPI.axesStatus[1]*gamepadAPI.axesStatus[0]) //debugging
    //         if (typeof object.body != 'undefined') {
    //             if(typeof (gamepadAPI.axesStatus[1]) != 'undefined'){
    //                 if(typeof (gamepadAPI.axesStatus[0]) != 'undefined'){
    //                 object.body.x += (gamepadAPI.axesStatus[0] * speed)
    //                 object.body.y += (gamepadAPI.axesStatus[1] * speed)
    //                 }
    //             }
    //         } else if (typeof object != 'undefined') {
    //             if(typeof (gamepadAPI.axesStatus[1]) != 'undefined'){
    //                 if(typeof (gamepadAPI.axesStatus[0]) != 'undefined'){
    //                 object.x += (gamepadAPI.axesStatus[0] * speed)
    //                 object.y += (gamepadAPI.axesStatus[1] * speed)
    //                 }
    //             }
    //         }
    //     }
    function control(object, speed = 1) { // basic control for objects
        if (typeof object.body != 'undefined') {
            if (keysPressed['w']) {
                object.body.y -= speed
            }
            if (keysPressed['d']) {
                object.body.x += speed
            }
            if (keysPressed['s']) {
                object.body.y += speed
            }
            if (keysPressed['a']) {
                object.body.x -= speed
            }
        } else if (typeof object != 'undefined') {
            if (keysPressed['w']) {
                object.y -= speed
            }
            if (keysPressed['d']) {
                object.x += speed
            }
            if (keysPressed['s']) {
                object.y += speed
            }
            if (keysPressed['a']) {
                object.x -= speed
            }
        }
    }
    function getRandomLightColor() { // random color that will be visible on  black background
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[(Math.floor(Math.random() * 12) + 4)];
        }
        return color;
    }
    function getRandomColor() { // random color
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[(Math.floor(Math.random() * 16) + 0)];
        }
        return color;
    }
    function getRandomDarkColor() {// color that will be visible on a black background
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[(Math.floor(Math.random() * 12))];
        }
        return color;
    }
    function castBetween(from, to, granularity = 10, radius = 1) { //creates a sort of beam hitbox between two points, with a granularity (number of members over distance), with a radius defined as well
        let limit = granularity
        let shape_array = []
        for (let t = 0; t < limit; t++) {
            let circ = new Circle((from.x * (t / limit)) + (to.x * ((limit - t) / limit)), (from.y * (t / limit)) + (to.y * ((limit - t) / limit)), radius, "red")
            circ.toRatio = t / limit
            circ.fromRatio = (limit - t) / limit
            shape_array.push(circ)
        }
        return (new Shape(shape_array))
    }

    let setup_canvas = document.getElementById('canvas') //getting canvas from document


    let map_canvas = document.getElementById('map') //getting canvas from document

    map_context = map_canvas.getContext('2d');
    map_context.imageSmoothingEnabled = false;
    map_canvas.style.background = "tan"
    setUp(setup_canvas)
    canvas_context.imageSmoothingEnabled = false;
    // object instantiation and creation happens here 



    class Tile {
        constructor(x, y, width, height, color, id, size, posx, posy, walkable) {
            this.counterset = 0
            this.counter = 0
            this.x = x
            this.y = y
            this.height = height
            this.width = width
            this.color = color
            this.xmom = 0
            this.ymom = 0
            this.koffset = 0
            this.toffset = 0
            this.occupied = false
            // this.markdraw = 1 //remove for fog

            var F;

            var parent;
            // this.inPath = false;
            this.getGCost = this.getValueG;
            this.getHCost = this.getValueH;
            this.g = 0
            this.weight = 1
            this.size = size;
            this.posx = posx;
            this.posy = posy;
            this.walkable = walkable;
            if (Math.random() < .01) {
                if (this.hotrock != 1 && this.hotrock != 2) {
                    this.walkable = false
                    this.ice = 1
                    this.color = "#AAFFFF"
                }
            }

            this.id = id;
        }
        isWall() {
            return this.walkable
        }
        getCost(fromNeighbor) {
            // Take diagonal weight into consideration.
            if (fromNeighbor && fromNeighbor.x != this.x && fromNeighbor.y != this.y) {
                return this.weight * 1.41421;
            }
            return this.weight;
        }
        toString() {
            return "[" + this.x + " " + this.y + "]";
        }
        createStartNode() {
            // nodeDrawer(gctx, this, 2, "black", "#00FFFF88");

        }
        createEndNode() {
            // nodeDrawer(gctx, this, 2, "black", "#FFFF0088");

        }
        toggleWalkable() {
            this.walkable = !this.walkable;
        }
        getValueF() {
            //this is a problem
            var fValue = (this.getValueH()) + (this.getValueG());

            return (fValue);
        }
        getValueH() {
            var endNodePosition = {
                posx: endPoint.x,
                posy: endPoint.y
            };

            return (getDistance(this, endNodePosition));

        }
        getValueG() {
            var startPointPosition = {
                posx: endPoint.x,
                posy: endPoint.y
            };
            return (getDistance(this, startPointPosition));
        }
        createWall() {
            // nodeDrawer(gctx, this, 2, "transparent", "black");

        }
        drawOpenNode() {
            // nodeDrawer(gctx, this, 2, "transparent", "transparent");

        }
        drawClosedNode() {
            // nodeDrawer(gctx, this, 2, "transparent", "transparent");
        }
        drawPath() {
            // nodeDrawer(gctx, this, 2, "transparent", "#FF000033");
        }
        drawNode() {

            //gctx.beginPath();
            //gctx.lineWidth = ".1";
            //gctx.strokeStyle = "black";
            //gctx.fillStyle = "transparent";

            // let link = new Line(this.posx, this.posy, bottle.crew[bottle.selectedcrew].body.x-100, bottle.crew[bottle.selectedcrew].body.y-300, "red", 1)
            // if (link.hypotenuse() < 108) {
            // //////////////////////////////console.log(link)
            // //////////////////////////////console.log(bottle)
            // }
            // let roundedx = (Math.round((startPoint.x) / 10))
            // let roundedy = (Math.round((startPoint.y) / 10))
            // if (this.walkable !== false) {
            //     //gctx.fillRect(this.posx, this.posy, this.size, this.size);
            //     //gctx.rect(this.posx, this.posy, this.size, this.size);
            //     //gctx.closePath();
            //     //gctx.stroke();
            // }
            // if (this.inPath === true) {
            //     // this.drawPath();
            // } else if (this.walkable === false) {
            //     // //////////////////////////////console.log(this)

            //     // this.createWall();
            //     return;
            //     // }else if (link.hypotenuse() < 11) {
            // } else if (this.posx == roundedx && this.posy == roundedy) {
            //     //   //////////////////////////////console.log("hit the startNode");
            //     //   this.createStartNode();
            //     return;
            // } else if (this.posx == endPoint.x && this.posy == endPoint.y) {
            //     //   this.createEndNode();

            // }

        }
        dirtdraw() {
            if (this.dirt == 1) {
                map_context.drawImage(rawdirt, 0, 0, rawdirt.width, rawdirt.height, (this.x + 5) - 100, (this.y + 5) - 100, 200, 200)
            }
        }
        draw() {
            this.counterset++
            if (this.counterset % 3 == 0) {
                this.counter++
            }
            if (this.sourcerock <= 0 && this.hotrock != 0) {
                this.hotrock = 0
                // this.color = "#AACCFF"
                sandmap.hotrocks.splice(sandmap.hotrocks.indexOf(this), 1)
            }
            if ((this.walkable == false) && this.builtOn == 1 && !(this.hotrock >= 1)) {
                if ((this.spiretile >= 1)) {
                    this.color = "transparent"
                }
                if (typeof this.wallcolor != "undefined") {
                    map_context.fillStyle = this.color
                    map_context.fillRect(this.x, this.y, this.width, this.height)
                    map_context.strokeStyle = this.wallcolor
                    map_context.lineWidth = .7
                    map_context.strokeRect(this.x, this.y, this.width, this.height)
                } else {
                    map_context.fillStyle = this.color  //may not be else?
                    map_context.fillRect(this.x, this.y, this.width, this.height)
                }
            } else if (this.walkable == false && this.ice == 1) {
                map_context.drawImage(nowalk, this.x, this.y)
            } else if (this.ice == 1) {
                this.walkable = false
                map_context.drawImage(nowalk, this.x, this.y)
            } else if (this.hotrock == 1) {
                map_context.drawImage(hotrock1, this.x, this.y)
            } else if (this.hotrock == 2) {
                map_context.drawImage(hotrock2, (this.counter % 6) * 10, 0, 10, 10, this.x, this.y, 10, 10)
            } else {
                // if (typeof this.wallcolor != "undefined") {
                //     map_context.fillStyle = this.color
                //     map_context.fillRect(this.x, this.y, this.width, this.height)
                //     map_context.strokeStyle = this.wallcolor
                //     map_context.strokeRect(this.x, this.y, this.width, this.height)
                // } else {
                //     // if(this.walkable== true || this.drawish == 1){
                //     // map_context.drawImage(snow, ((this.t+this.toffset))%189, (this.k+this.koffset)%189, 10,10, this.x, this.y, 10, 10)

                //     // }else{
                //     // if(this.walkable == false){
                //     //     map_context.fillStyle = this.color
                //     //     map_context.fillRect(this.x, this.y, this.width, this.height)
                //     // }
                //     // }
                // }
                // if (sandmap.winddiry == 1) {
                //     this.toffset += sandmap.windspeed
                // }
                // if (sandmap.winddirx == 1) {
                //     this.koffset += sandmap.windspeed
                // }
                // if (sandmap.winddiry == -1) {
                //     this.toffset -= sandmap.windspeed
                //     if ((this.t + this.toffset) < 0) {
                //         this.toffset = 189 - this.t
                //     }
                // }
                // if (sandmap.winddirx == -1) {
                //     this.koffset -= sandmap.windspeed
                //     if ((this.k + this.koffset) < 0) {
                //         this.koffset = 189 - this.t
                //     }
                // }
            }
        }
        move() {
            this.x += this.xmom
            this.y += this.ymom
        }
        isPointInside(point) {
            if (point.x >= this.x) {
                if (point.y >= this.y) {
                    if (point.x <= this.x + this.width) {
                        if (point.y <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
        doesPerimeterTouch(point) {
            if (point.x + point.radius >= this.x) {
                if (point.y + point.radius >= this.y) {
                    if (point.x - point.radius <= this.x + this.width) {
                        if (point.y - point.radius <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
    }

    class Tilex {
        constructor(x, y, width, height, color, id, size, posx, posy, walkable) {
            this.x = x
            this.y = y
            this.height = height
            this.width = width
            this.color = color
            this.xmom = 0
            this.ymom = 0
            this.koffset = 0
            this.toffset = 0

            var F;

            var parent;
            // this.inPath = false;
            this.getGCost = this.getValueG;
            this.getHCost = this.getValueH;

            this.size = size;
            this.posx = posx;
            this.posy = posy;
            this.walkable = walkable;
            if (Math.random() < .01) {
                if (this.hotrock != 1 && this.hotrock != 2) {
                    this.walkable = false
                    this.ice = 1
                    this.color = "#AAFFFF"
                }
            }

            this.id = id;
        }

        createStartNode() {
            // nodeDrawer(gctx, this, 2, "black", "#00FFFF88");

        }
        createEndNode() {
            // nodeDrawer(gctx, this, 2, "black", "#FFFF0088");

        }
        toggleWalkable() {
            this.walkable = !this.walkable;
        }
        getValueF() {
            //this is a problem
            var fValue = (this.getValueH()) + (this.getValueG());

            return (fValue);
        }
        getValueH() {
            var endNodePosition = {
                posx: endPoint.x,
                posy: endPoint.y
            };

            return (getDistance(this, endNodePosition));

        }
        getValueG() {
            var startPointPosition = {
                posx: endPoint.x,
                posy: endPoint.y
            };
            return (getDistance(this, startPointPosition));
        }
        createWall() {
            // nodeDrawer(gctx, this, 2, "transparent", "black");

        }
        drawOpenNode() {
            // nodeDrawer(gctx, this, 2, "transparent", "transparent");

        }
        drawClosedNode() {
            // nodeDrawer(gctx, this, 2, "transparent", "transparent");
        }
        drawPath() {
            // nodeDrawer(gctx, this, 2, "transparent", "#FF000033");
        }
        drawNode() {

            //gctx.beginPath();
            //gctx.lineWidth = ".1";
            //gctx.strokeStyle = "black";
            //gctx.fillStyle = "transparent";

            // let link = new Line(this.posx, this.posy, bottle.crew[bottle.selectedcrew].body.x-100, bottle.crew[bottle.selectedcrew].body.y-300, "red", 1)
            // if (link.hypotenuse() < 108) {
            // //////////////////////////////console.log(link)
            // //////////////////////////////console.log(bottle)
            // }
            // let roundedx = (Math.round((startPoint.x) / 10))
            // let roundedy = (Math.round((startPoint.y) / 10))
            // if (this.walkable !== false) {
            //     //gctx.fillRect(this.posx, this.posy, this.size, this.size);
            //     //gctx.rect(this.posx, this.posy, this.size, this.size);
            //     //gctx.closePath();
            //     //gctx.stroke();
            // }
            // if (this.inPath === true) {
            //     // this.drawPath();
            // } else if (this.walkable === false) {
            //     // //////////////////////////////console.log(this)

            //     // this.createWall();
            //     return;
            //     // }else if (link.hypotenuse() < 11) {
            // } else if (this.posx == roundedx && this.posy == roundedy) {
            //     //   //////////////////////////////console.log("hit the startNode");
            //     //   this.createStartNode();
            //     return;
            // } else if (this.posx == endPoint.x && this.posy == endPoint.y) {
            //     //   this.createEndNode();

            // }

        }
        draw() {
            map_context.fillStyle = this.color
            map_context.fillRect(this.x, this.y, this.width, this.height)

        }
        move() {
            this.x += this.xmom
            this.y += this.ymom
        }
        isPointInside(point) {
            if (point.x >= this.x) {
                if (point.y >= this.y) {
                    if (point.x <= this.x + this.width) {
                        if (point.y <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
        doesPerimeterTouch(point) {
            if (point.x + point.radius >= this.x) {
                if (point.y + point.radius >= this.y) {
                    if (point.x - point.radius <= this.x + this.width) {
                        if (point.y - point.radius <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
    }


    class FogTile {
        constructor(x, y) {
            this.timer = 100
            this.x = x
            this.y = y
            this.height = 10
            this.width = 10
            this.color = "black"
        }
        draw() {
            map_context.fillStyle = this.color
            map_context.fillRect(this.x, this.y, this.width, this.height)
        }
        isPointInside(point) {
            if (point.x >= this.x) {
                if (point.y >= this.y) {
                    if (point.x <= this.x + this.width) {
                        if (point.y <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
        doesPerimeterTouch(point) {
            if (point.x + point.radius >= this.x) {
                if (point.y + point.radius >= this.y) {
                    if (point.x - point.radius <= this.x + this.width) {
                        if (point.y - point.radius <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
    }

    class ScoreGraph {
        constructor() {
            this.faction0 = {}
            this.faction0.firepower = []
            this.faction0.collection = [0]
            this.faction0.money = [250]
            this.faction1 = {}
            this.faction1.firepower = []
            this.faction1.collection = [0]
            this.faction1.money = [250]
            this.wind = []
            this.granularity = 6
            this.count = 0
            this.mode = 0
        }
        add() {
            if (this.count % this.granularity == 0) {
                let force0 = 0
                for (let t = 0; t < sandmap.players[0].units.length; t++) {
                    force0 += sandmap.players[0].units[t].health
                    force0 += (sandmap.players[0].units[t].damage * 9)
                    force0 += (sandmap.players[0].units[t].defense * 15)
                }
                let force1 = 0
                for (let t = 0; t < sandmap.players[1].units.length; t++) {
                    force1 += sandmap.players[1].units[t].health
                    force1 += (sandmap.players[1].units[t].damage * 9)
                    force1 += (sandmap.players[1].units[t].defense * 15)
                }
                // console.log(force1)
                this.faction0.firepower.push(force0)
                this.faction1.firepower.push(force1)
                this.wind.push(sandmap.windspeed)
                // this.faction1.wind.push(sandmap.windspeed)
                this.faction0.money.push(sandmap.players[0].hotrock)
                this.faction1.money.push(sandmap.players[1].hotrock)
                this.faction0.collection.push(sandmap.players[0].income)
                this.faction1.collection.push(sandmap.players[1].income)
            }
            this.count++
        }
        draw() {
            this.box = new UiRectangle(0, 0, 1000, 720, "#090909")
            this.button = new UiRectangle(1010, 40, 270, 75, "#333333")
            this.button.draw()
            this.box.draw()
            if (this.mode == 0) {
                canvas_context.fillStyle = "white"
                canvas_context.font = "30px arial"
                canvas_context.fillText("Mode: Firepower", this.button.x + 15, this.button.y + 52)
                let max0 = Math.max(...this.faction0.firepower)
                let max1 = Math.max(...this.faction1.firepower)
                let truemax = Math.max(max0, max1)
                this.faction0.firepowerx = [...this.faction0.firepower]
                this.faction1.firepowerx = [...this.faction1.firepower]
                for (let t = 0; t < this.faction0.firepower.length; t++) {
                    this.faction0.firepowerx[t] /= truemax
                }
                for (let t = 0; t < this.faction1.firepower.length; t++) {
                    this.faction1.firepowerx[t] /= truemax
                }
                for (let t = 0; t < this.faction0.firepower.length; t++) {
                    let x = (1000 / this.faction0.firepower.length) * t
                    let y = (720 - (this.faction0.firepowerx[t] * 720))
                    let point = new Circle(x, y, 1, sandmap.players[0].color)
                    // console.log(point)
                    point.draw()
                }
                for (let t = 0; t < this.faction1.firepower.length; t++) {
                    let x = (1000 / this.faction1.firepower.length) * t
                    let y = (720 - (this.faction1.firepowerx[t] * 720))
                    let point = new Circle(x, y, 1, sandmap.players[1].color)
                    // console.log(point)
                    point.draw()
                }


            } else if (this.mode == 1) {
                canvas_context.fillStyle = "white"
                canvas_context.font = "30px arial"
                canvas_context.fillText("Mode: Hotrock", this.button.x + 15, this.button.y + 52)
                let max0 = Math.max(...this.faction0.money)
                let max1 = Math.max(...this.faction1.money)
                let truemax = Math.max(max0, max1)
                this.faction0.moneyx = [...this.faction0.money]
                this.faction1.moneyx = [...this.faction1.money]
                for (let t = 0; t < this.faction0.money.length; t++) {
                    this.faction0.moneyx[t] /= truemax
                }
                for (let t = 0; t < this.faction1.money.length; t++) {
                    this.faction1.moneyx[t] /= truemax
                }
                for (let t = 0; t < this.faction0.money.length; t++) {
                    let x = (1000 / this.faction0.money.length) * t
                    let y = (720 - (this.faction0.moneyx[t] * 720))
                    let point = new Circle(x, y, 1, sandmap.players[0].color)
                    point.draw()
                }
                for (let t = 0; t < this.faction1.money.length; t++) {
                    let x = (1000 / this.faction1.money.length) * t
                    let y = (720 - (this.faction1.moneyx[t] * 720))
                    let point = new Circle(x, y, 1, sandmap.players[1].color)
                    point.draw()
                }
            }else if (this.mode == 3) {
                canvas_context.fillStyle = "white"
                canvas_context.font = "30px arial"
                canvas_context.fillText("Mode: Income", this.button.x + 15, this.button.y + 52)
                let max0 = Math.max(...this.faction0.collection)
                let max1 = Math.max(...this.faction1.collection)
                let truemax = Math.max(max0, max1)
                this.faction0.collectionx = [...this.faction0.collection]
                this.faction1.collectionx = [...this.faction1.collection]
                for (let t = 0; t < this.faction0.collection.length; t++) {
                    this.faction0.collectionx[t] /= truemax
                }
                for (let t = 0; t < this.faction1.collection.length; t++) {
                    this.faction1.collectionx[t] /= truemax
                }
                for (let t = 0; t < this.faction0.collection.length; t++) {
                    let x = (1000 / this.faction0.collection.length) * t
                    let y = (720 - (this.faction0.collectionx[t] * 720))
                    let point = new Circle(x, y, 1, sandmap.players[0].color)
                    point.draw()
                }
                for (let t = 0; t < this.faction1.collection.length; t++) {
                    let x = (1000 / this.faction1.collection.length) * t
                    let y = (720 - (this.faction1.collectionx[t] * 720))
                    let point = new Circle(x, y, 1, sandmap.players[1].color)
                    point.draw()
                }
            } else if (this.mode == 2) {
                canvas_context.fillStyle = "white"
                canvas_context.font = "30px arial"
                canvas_context.fillText("Mode: Windspeed", this.button.x + 15, this.button.y + 52)
                let max0 = Math.max(...this.wind)
                let truemax = Math.max(max0, 0)
                this.windx = [...this.wind]
                for (let t = 0; t < this.wind.length; t++) {
                    this.windx[t] /= truemax
                }
                for (let t = 0; t < this.wind.length; t++) {
                    let x = (1000 / this.wind.length) * t
                    let y = (720 - (this.windx[t] * 720))
                    let point = new Circle(x, y, 1, "red")
                    point.draw()
                }
            }
        }
    }

    let score = new ScoreGraph()
    class Sandmap {
        constructor(width, height, posx, posy, gridPoints) {
            this.windspeed = 1
            this.winddiry = 1
            this.winddirx = 0
            this.width = width;
            this.height = height;
            this.posx = posx;
            this.posy = posy;
            this.gridPoints = gridPoints;
            this.turn = 0
            this.blocks = []
            this.fog = []
            let id = 0
            this.diagonal = true
            this.hotrocks = []
            this.players = []
            this.seed = 256 + (Math.floor(Math.random() * 256))
            // this.players.push(new Player('Hamartans', "#AA00AA", 0, 2))
            this.players.push(new Player('Earthoids', "#AA00AA", 0, 0))
            this.players.push(new Player('Cold Itzlerians', "#09DD99", 1, 1))
            this.players[1].units = []
            for (let g = 0; g < this.players.length + 1; g++) {
                for (let t = 0; t < 128; t++) {
                    let rects = []
                    let fogs = []
                    for (let k = 0; k < 128; k++) {
                        let rect = new Tile(t * 10, k * 10, 10, 10, "#AACCFF", id, 10, t * 10, k * 10, true)
                        let fogtile = new FogTile(t * 10, k * 10, 10, 10, "#090909", id, 10, t * 10, k * 10, true)
                        if (g == 2) {
                            if (t > 2 && k > 2) {
                                if (t < 125 && k < 125) {
                                    let bump = 0
                                    for (let p = 0; p < this.hotrocks.length; p++) {
                                        let link = new LineOP(this.hotrocks[p], rect)
                                        if (link.hypotenuse() < 120 + ((Math.random() - .5) * 60)) {
                                            // console.log(this.hotrocks)
                                            bump = 1
                                        }
                                    }

                                    if (rect.ice != 1) {
                                        if (bump == 0) { //.009
                                            // rect.hotrock = 1
                                            // rect.sourcerock = 200
                                            // rect.walkable = true
                                            // rect.color = "#DDAA44"
                                            // if (Math.random() < .5) {
                                            rect.hotrock = 2
                                            rect.sourcerock = 400
                                            rect.walkable = true
                                            rect.color = "#AA8822"
                                            // }
                                            if (rect.hotrock == 1 || rect.hotrock == 2) {
                                                this.hotrocks.push(rect)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        rect.t = t
                        rect.k = k
                        rects.push(rect)
                        fogs.push(fogtile)
                        id++
                    }
                    if (g == 2) {
                        this.blocks.push(rects)
                        this.fog.push(fogs)
                    } else {
                        this.players[g].blocks.push(rects)
                        this.players[g].fog.push(fogs)
                    }
                }
            }


            this.window = new Window()
            // this.players.push(new Player('Skribulons', "#696969"))
            // this.players.push(new Player('Palletae', "pink"))
            // this.players.push(new Player('Bulbato', "#00ff00"))
            // this.players.push(new Player('Hydruzan' , "purple" ))
            this.createGrid()
            this.gridPoints = []

            for (let t = 0; t < this.blocks.length; t++) {
                for (let k = 0; k < this.blocks[t].length; k++) {
                    this.gridPoints.push(this.blocks[t][k])
                }
            }
            ////////////console.log(this)
            this.dirtyNodes = []
        }
        cleanDirty() {
            for (var i = 0; i < this.dirtyNodes.length; i++) {
                astar.cleanNode(this.dirtyNodes[i]);
            }
            this.dirtyNodes = [];
        }
        markDirty(node) {
            this.dirtyNodes.push(node);
        }
        neighbors(node) {

            var ret = [];
            var x = node.t;
            var y = node.k;
            var grid = this.blocks;

            // West
            if (grid[x - 1] && grid[x - 1][y]) {
                ret.push(grid[x - 1][y]);
            }

            // East
            if (grid[x + 1] && grid[x + 1][y]) {
                ret.push(grid[x + 1][y]);
            }

            // South
            if (grid[x] && grid[x][y - 1]) {
                ret.push(grid[x][y - 1]);
            }

            // North
            if (grid[x] && grid[x][y + 1]) {
                ret.push(grid[x][y + 1]);
            }

            if (this.diagonal) {
                // Southwest
                if (grid[x - 1] && grid[x - 1][y - 1]) {
                    ret.push(grid[x - 1][y - 1]);
                }

                // Southeast
                if (grid[x + 1] && grid[x + 1][y - 1]) {
                    ret.push(grid[x + 1][y - 1]);
                }

                // Northwest
                if (grid[x - 1] && grid[x - 1][y + 1]) {
                    ret.push(grid[x - 1][y + 1]);
                }

                // Northeast
                if (grid[x + 1] && grid[x + 1][y + 1]) {
                    ret.push(grid[x + 1][y + 1]);
                }
            }

            return ret;
        }
        createGrid() {
            // //gctx.drawImage(shipImage, 0, 0, shipImage.width/2, shipImage.height/2)
            var tempNode;
            var countNodes = 0;
            //gctx.beginPath();
            //gctx.lineWidth =  0;
            //gctx.strokeStyle = "transparent";
            //gctx.rect(0, 0, this.width, this.height);
            //gctx.stroke();

            for (var i = 0; i < this.width; i += NODESIZE) {
                gridPointsByPos[i] = [];

                for (var j = 0; j < this.height; j += NODESIZE) {
                    gridPointsByPos[i][j] = countNodes;
                    //here's the problem , need to set the walkability of the node without always being true...
                    //////////////////////////////console.log(countNodes)
                    tempNode = new Tile(i, j, 10, 10, "tan", countNodes, NODESIZE, i, j, true);

                    // let cutOut = [0,1 ,2, 3, 4, 5,6,7, 8, 9, 10, 11, 12,13, 18, 19,20, 32,33,  26, 31, 39, 44, 45, 46, 52, 57,58,59,99, 112, 108, 95, 197, 198, 199, 205, 203, 204, 236, 237, 238, 242, 243,244, 216, 212, 229, 225, 210, 211, 223, 224, 217, 218, 230, 231]
                    // for(let t = 0; t< 1000; t++){
                    //     if(t%13 == 0){
                    //         cutOut.push(t)
                    //     }
                    //     if((t-12)%13 == 0){
                    //         cutOut.push(t)
                    //     }
                    //     if((t-1)%13 == 0){
                    //         if(t>195){
                    //             cutOut.push(t)
                    //         }
                    //     }
                    //     if((t-11)%13 == 0){
                    //         if(t>195){
                    //             cutOut.push(t)
                    //         }
                    //     }
                    // }
                    // for(let t  = 0; t<bottle.crew.length; t++){
                    //     if(tempNode.isPointInside(bottle.crew[t].body)){
                    //         tempNode.walkable = false;
                    //     }
                    // }
                    // if (cutOut.includes(countNodes)){
                    //         tempNode.walkable = false;

                    // }
                    // if (wallSet.has(countNodes)) {
                    // //   //////////////////////////////console.log("wallSet had countNodes!")
                    //   tempNode.walkable = false;
                    // }

                    // tempNode.drawNode();
                    tempNode.F = tempNode.getValueF();
                    this.gridPoints.push(tempNode);

                    countNodes++;

                }
            }

        }

        draw() {
            for (let t = 0; t < this.players.length; t++) {
                this.players[t].income = 0
            }

            if (Math.random() < .05) {
                let chooser = Math.floor(Math.random() * 2)
                if (chooser == 0) {
                    if (this.windspeed > .1051) {
                        this.windspeed /= 1.05
                    }
                }
                if (chooser == 1) {
                    if (this.windspeed < 2.37) {
                        this.windspeed *= 1.05
                    }
                }
                if (chooser == 2) {
                    this.winddirx *= -1
                }
                if (chooser == 3) {
                    this.winddiry *= -1
                }
                if (chooser == 4) {
                    this.winddirx = 0
                }
                if (chooser == 5) {
                    this.winddirx = 1
                }
                if (chooser == 6) {
                    this.winddiry = 0
                }
                if (chooser == 7) {
                    this.winddiry = 1
                }
                if (chooser == 8) {
                    this.winddirx = -1
                }
                if (chooser == 9) {
                    this.winddiry = -1
                }
            }

            canvas_context.fillStyle = "black"
            canvas_context.strokeStyle = sandmap.players[sandmap.turn].color
            canvas_context.lineWidth = 1.5
            canvas_context.font = "18px arial"
            canvas_context.strokeText("Windspeed: " + Math.round(this.windspeed * 2000) + "cm/s", this.window.minibody.x, this.window.minibody.y - 20)
            canvas_context.fillText("Windspeed: " + Math.round(this.windspeed * 2000) + "cm/s", this.window.minibody.x, this.window.minibody.y - 20)
            canvas_context.drawImage(windmeter, 0, 10 * (Math.round(this.windspeed * 10)), windmeter.width, 10, this.window.minibody.x, this.window.minibody.y - 12, 250, 10)

            for (let t = 0; t < this.players[this.turn].blocks.length; t++) {
                for (let k = 0; k < this.players[this.turn].blocks[t].length; k++) {
                    if (this.players[this.turn].blocks[t][k].markdraw == 1) {

                        this.blocks[t][k].dirtdraw()

                    }
                }
            }
            for (let t = 0; t < this.players[this.turn].blocks.length; t++) {
                for (let k = 0; k < this.players[this.turn].blocks[t].length; k++) {
                    if (this.players[this.turn].blocks[t][k].markdraw == 1) {

                        this.blocks[t][k].draw()

                    }
                }
            }
            for (let t = 0; t < this.players.length; t++) {
                if (this.players[t].isAI == 1) {
                    this.players[t].ai()
                }
            }
            for (let t = 0; t < this.players.length; t++) {
                this.players[t].draw()
            }

            //abstract fog to player teams
            for (let t = 0; t < this.fog.length; t++) {
                for (let k = 0; k < this.fog[t].length; k++) {
                    if (this.players[this.turn].blocks[t][k].markdraw == 1) {
                        this.players[this.turn].fog[t][k].timer--
                        if (this.players[this.turn].fog[t][k].timer <= 0) {
                            this.players[this.turn].fog[t][k].color = "#09090922"
                            this.players[this.turn].fog[t][k].draw()
                        }
                    } else {
                        this.players[this.turn].fog[t][k].draw()
                    }
                }
            }
            this.window.draw()
        }
    }
    class Window {
        constructor() {
            this.body = new Rectangle(0, 0, 900, 720, "transparent")
            this.minibody = new Rectangle(this.body.x + this.body.width + 10, 360, 360, 360, "transparent")
            this.guide = new Circle(0, 0, 1, "transparent")
        }
        draw() {
            control(this.guide, 5)
            if (this.guide.x < 0) {
                this.guide.x = 0
            }
            if (this.guide.y < 0) {
                this.guide.y = 0
            }
            if (this.guide.x > map_canvas.width - (this.body.width * .5)) {
                this.guide.x = map_canvas.width - (this.body.width * .5)
            }
            if (this.guide.y > map_canvas.width - (this.body.height * .5)) {
                this.guide.y = map_canvas.width - (this.body.height * .5)
            }
            selectrect.color = (sandmap.players[sandmap.turn].color + "22")
            selectrect.draw()
            canvas_context.drawImage(map_canvas, this.guide.x, this.guide.y, this.body.width * .5, this.body.height * .5, this.body.x, this.body.y, this.body.width, this.body.height)
            canvas_context.drawImage(map_canvas, 0, 0, map_canvas.width, map_canvas.height, this.minibody.x, this.minibody.y, this.minibody.width, this.minibody.height)
            canvas_context.strokeStyle = "#FFFFFF"
            canvas_context.lineWidth = 1
            canvas_context.strokeRect(this.minibody.x + (this.guide.x * .28125), this.minibody.y + (this.guide.y * .28125), (this.body.width * .5) * .28125, (this.body.height * .5) * .28125)
        }
    }
    class Player {
        constructor(name, color, ai, type) {
            this.attacktimeout = 0
            this.blocks = []
            this.seen = []
            this.seenrocks = []
            this.fog = []
            this.name = name
            this.selected_tile = {}
            this.color = color
            this.buildings = []
            this.units = []
            this.hotrock = 250
            this.isAI = ai
            this.type = type
            this.chunk = 0
            this.clickrate = 400 // 2 // 10 //2
            this.aimode = 0
            this.racksflag = 5
            this.racks = 0
            this.lab = 0
            this.averageSpace = {}
            this.baseMoveFlag = 0
            this.defending = 0
            this.income = 0
        }
        findBase() {
            this.averageSpace.dirs1 = 0
            this.averageSpace.dirs2 = 0
            this.averageSpace.dirs3 = 0
            this.averageSpace.dirs4 = 0
            for (let t = 0; t < this.faction.buildings.length; t++) {
                if (this.averageSpace.dirs1 == 0) {// right
                    if (this.faction.buildings[t].tile.x >= this.tile.x) {
                        if (this.faction.buildings[t].tile.y == this.tile.y) {
                            this.averageSpace.dirs1 += 1
                        }
                    }
                }
                if (this.averageSpace.dirs2 == 0) {// down
                    if (this.faction.buildings[t].tile.y >= this.tile.y) {
                        if (this.faction.buildings[t].tile.x == this.tile.x) {
                            this.averageSpace.dirs2 += 1
                        }
                    }
                }
                if (this.averageSpace.dirs3 == 0) { // left
                    if (this.faction.buildings[t].tile.x <= this.tile.x) {
                        if (this.faction.buildings[t].tile.y == this.tile.y) {
                            this.averageSpace.dirs3 += 1
                        }
                    }
                }
                if (this.averageSpace.dirs4 == 0) {  // up
                    if (this.faction.buildings[t].tile.y <= this.tile.y) {
                        if (this.faction.buildings[t].tile.x == this.tile.x) {
                            this.averageSpace.dirs4 += 1
                        }
                    }
                }
            }

            this.averageSpace.decayingInTheWind = 1 - ((this.averageSpace.dirs1 + this.averageSpace.dirs2 + this.averageSpace.dirs3 + this.averageSpace.dirs4) / 4)
        }
        findBase() {
            if (this.buildings.length > 0) {
                let tindex = 0
                let kindex = 0
                for (let t = 0; t < this.buildings.length; t++) {
                    tindex += (this.buildings[t].tile.t)
                    kindex += (this.buildings[t].tile.k)
                }
                if (this.averageSpace.tile != sandmap.blocks[Math.floor(tindex / this.buildings.length)][Math.floor(kindex / this.buildings.length)]) {
                    this.averageSpace.tile = sandmap.blocks[Math.floor(tindex / this.buildings.length)][Math.floor(kindex / this.buildings.length)]
                    this.baseMoveFlag = 1
                }
            } else {
                this.averageSpace.tile = sandmap.blocks[10][10]
            }
        }
        ai() {
            if(sandmap.players.indexOf(this) == 1){
                if(dynamic2 == 1){
                    this.clickrate = this.units.length
                }
            }
            if(sandmap.players.indexOf(this) == 0){
                if(dynamic1 == 1){
                    this.clickrate = this.units.length
                }
            }
            this.defending--
            if (this.type == 3) {
                this.chunk++
                let index = -1
                let j = 0



                for (let t = 0; t < this.units.length; t++) {
                    if (this.units[t].pollinator == 1) {
                        if (this.units.length >= this.seenrocks.length && (this.units[t].health/this.units[t].maxhealth) > .3) { //seen
                            let block = sandmap.gridPoints[Math.floor(Math.random() * sandmap.gridPoints.length)]
                            this.units[t].pathTo(block)
                        }
                    }
                }

                if (this.defending >= 32) {
                    if(this.defending > 39){
                        for (let t = 0; t < this.units.length; t++) {
                            if(this.units[t].pollinator == 1){
                                if(Math.random() < (this.hotrock/2000)){
                                    this.units[t].metamorphpufffellow()
                                }
                            }
                        }
                    }
                    this.defending = 0
                    this.defenseforce = 0
                    for (let t = 0; t < this.units.length; t++) {
                        if (this.units[t].pufffellow == 1) {
                            this.defenseforce++
                        }
                        if (this.units[t].podman == 1) {
                            this.defenseforce += 1.5
                        }
                        if (this.units[t].goliophyte == 1) {
                            this.defenseforce += 2
                        }
                    }
                    if (this.defenseforce > 0) {

                        for (let t = 0; t < this.buildings.length; t++) {

                            if (this.buildings[t].bulbplant == 2) {
                                if (Math.random() < .5) {
                                    if (this.hotrock > 140) {
                                        this.buildings[t].makeLibrilbianpodman()
                                    }
                                } else {
                                    if (Math.random() < .5) {
                                        if (Math.random() < .5) {
                                            if (this.hotrock > 140) {
                                                this.buildings[t].makeLibrilbianpodman()
                                            }
                                        } else {
                                            if (Math.random() < .5) {
                                                if (this.hotrock > 95 && Math.random() < .7) { 
                                                    this.buildings[t].makeLibrilbianpufffellow()
                                                }
                                            } else {
                                                if (this.hotrock > 355) {
                                                    this.buildings[t].makeLibrilbiangoliophyte()
                                                }
                                            }
                                        }
                                    } else {
                                        if (this.hotrock > 355) {
                                            this.buildings[t].makeLibrilbiangoliophyte()
                                        }
                                    }
                                }
                            }
                        }
                        for (let t = 0; t < this.units.length; t++) {
                            if (this.units[t].podman == 1) {
                                if (Math.random() < 7 / this.defenseforce) { //2
                                    if (this.units[t].index == this.units[t].realPath.length - 1) {
                                        this.units[t].pathTo(this.attackedAt)
                                    }
                                }
                            }

                            if (this.units[t].goliophyte == 1) {
                                if (Math.random() < 7 / this.defenseforce) { //2
                                    if (this.units[t].index == this.units[t].realPath.length - 1) {
                                        this.units[t].pathTo(this.attackedAt)
                                    }
                                }
                            }

                            if (this.units[t].pufffellow == 1) {
                                if (Math.random() < 7 / this.defenseforce) { //2
                                    if (this.units[t].index == this.units[t].realPath.length - 1) {
                                        this.units[t].pathTo(this.attackedAt)
                                    }
                                }
                            }
                        }
                    } else {

                    }
                }



                if (this.chunk % this.clickrate == 0) {
                    for (let t = 0; t < this.buildings.length; t++) {
                        if (this.buildings[t].bulbplant == 2) {
                            if (Math.random() < .5) {
                                if (this.hotrock > 140) {
                                    this.buildings[t].makeLibrilbianpodman()
                                }
                            } else {
                                if (Math.random() < .5) {
                                    if (Math.random() < .5) {
                                        if (this.hotrock > 140) {
                                            this.buildings[t].makeLibrilbianpodman()
                                        }
                                    } else {
                                        if (Math.random() < .5) {
                                            if (this.hotrock > 95 && Math.random() < .7) {  // 100%
                                                this.buildings[t].makeLibrilbianpufffellow()
                                            }
                                        } else {
                                            if (this.hotrock > 355) {
                                                this.buildings[t].makeLibrilbiangoliophyte()
                                            }
                                        }
                                    }
                                } else {
                                    if (this.hotrock > 355) {
                                        this.buildings[t].makeLibrilbiangoliophyte()
                                    }
                                }
                            }
                        }
                        if (this.buildings[t].bulbplant == 1) {
                            if (this.units.length <= 8) {
                                if (this.hotrock > 90) {
                                    this.buildings[t].makeLibrilbianpollinator()
                                }
                            }
                        }
                    }
                }


                if (this.units.length > this.racksflag) {
                    this.racksflag += 5
                    this.racks = 0
                    this.lab = 0
                }

                if (this.racks == 0) {
                    let length = this.buildings.length
                    for (let t = 0; t < this.units.length; t++) {
                        if (this.units[t].realPath.length - 1 == this.units[t].index) {
                            // if (this.units[t].suffocating > 0 || (this.racks !== 1 && this.hotrock > 400)) {
                            if (Math.random() < .5) {
                                if (Math.random() < .5) {
                                    this.buildBarracks(sandmap.blocks[Math.max(this.units[t].tile.t - 1, 0)][this.units[t].tile.k])
                                } else {
                                    this.buildBarracks(sandmap.blocks[Math.min(this.units[t].tile.t + 1, 127)][this.units[t].tile.k])
                                }
                            } else {
                                if (Math.random() < .5) {
                                    this.buildBarracks(sandmap.blocks[this.units[t].tile.t][Math.min(this.units[t].tile.k + 1, 127)])
                                } else {
                                    this.buildBarracks(sandmap.blocks[this.units[t].tile.t][Math.max(this.units[t].tile.k - 1, 0)])
                                }
                            }
                            if (this.buildings.length > length) {
                                break
                            }
                        }
                        // }
                    }
                } else if (this.lab == 0) {
                    let length = this.buildings.length
                    for (let t = 0; t < this.buildings.length; t++) {
                        // if (this.buildings[t].realPath.length - 1 == this.buildings[t].index) {
                        // if (this.units[t].suffocating > 0 || (this.racks !== 1 && this.hotrock > 400)) {
                        if (Math.random() < .5) {
                            if (Math.random() < .5) {
                                this.buildMachineLab(sandmap.blocks[Math.max(this.buildings[t].tile.t - 1, 0)][this.buildings[t].tile.k])
                            } else {
                                this.buildMachineLab(sandmap.blocks[Math.min(this.buildings[t].tile.t + 1, 127)][this.buildings[t].tile.k])
                            }
                        } else {
                            if (Math.random() < .5) {
                                this.buildMachineLab(sandmap.blocks[this.buildings[t].tile.t][Math.min(this.buildings[t].tile.k + 1, 127)])
                            } else {
                                this.buildMachineLab(sandmap.blocks[this.buildings[t].tile.t][Math.max(this.buildings[t].tile.k - 1, 0)])
                            }
                        }
                        if (this.buildings.length > length) {
                            break
                        }
                        // }
                        // }
                    }
                }


                if (this.chunk % this.clickrate == 0) {
                    for (let t = 0; t < this.units.length; t++) {
                        if (this.units[t].realPath.length - 1 == this.units[t].index) { //} || this.units[t].realPath[this.units[t].index].walkable !== true) {
                            if (this.units[t].tile.hotrock != 1 && this.units[t].tile.hotrock != 2) {
                                let max = 999999999
                                for (let h = 0; h < sandmap.hotrocks.length; h++) {
                                    if (sandmap.hotrocks[h].walkable == true && sandmap.hotrocks[h].occupied == false && this.blocks[sandmap.hotrocks[h].t][sandmap.hotrocks[h].k].markdraw == 1) {
                                        let link = (new LineOP(this.units[t].tile, sandmap.hotrocks[h])).hypotenuse()
                                        // ////////////console.log(link)
                                        if (link < max) {
                                            max = link
                                            index = h
                                        }
                                    }
                                }

                                if (typeof sandmap.hotrocks[index] !== "undefined") {
                                    if (this.units[t].attacktarget.health > 0) {

                                    } else {
                                        j++
                                        this.units[t].pathTo(sandmap.hotrocks[index])
                                        if (j > 3) { //6
                                            break
                                        }
                                    }
                                } else {
                                    if (Math.random() < (1 / this.units.length)) {
                                        if (this.seen.length > 0) {
                                            let block = this.seen[Math.floor(Math.random() * this.seen.length)]
                                            this.units[t].pathTo(block)
                                        }
                                    }
                                }
                            }
                        } else if (typeof this.units[t].realPath[this.units[t].index + 1] !== "undefined") {
                            if (this.units[t].realPath[this.units[t].index + 1].walkable !== true) {
                                if (this.units[t].tile.hotrock != 1 && this.units[t].tile.hotrock != 2) {
                                    let max = 999999999
                                    for (let h = 0; h < sandmap.hotrocks.length; h++) {
                                        if (sandmap.hotrocks[h].walkable == true && sandmap.hotrocks[h].occupied == false && this.blocks[sandmap.hotrocks[h].t][sandmap.hotrocks[h].k].markdraw == 1) {
                                            let link = (new LineOP(this.units[t].tile, sandmap.hotrocks[h])).hypotenuse()
                                            // ////////////console.log(link)
                                            if (link < max) {
                                                max = link
                                                index = h
                                            }
                                        }
                                    }

                                    if (typeof sandmap.hotrocks[index] !== "undefined") {
                                        if (this.units[t].attacktarget.health > 0) {

                                        } else {
                                            j++
                                            this.units[t].pathTo(sandmap.hotrocks[index])
                                            if (j > 3) { //6
                                                break
                                            }
                                        }
                                    } else {
                                        if (Math.random() < .03) {
                                            if (this.seen.length > 0) {
                                                let block = this.seen[Math.floor(Math.random() * this.seen.length)]
                                                this.units[t].pathTo(block)
                                            }
                                        } else {

                                            if (this.seen.length <= this.units.length) {
                                                if (this.units[t].pollinator == 1) {
                                                    if (Math.random() < .5) {
                                                        let block = sandmap.gridPoints[Math.floor(Math.random() * sandmap.gridPoints.length)]
                                                        this.units[t].pathTo(block)
                                                    }
                                                }
                                            } else if (this.units[t].pufffellow == 1 || this.units[t].pollinator == 1) {
                                                if (Math.random() < .5) {
                                                    let block = sandmap.gridPoints[Math.floor(Math.random() * sandmap.gridPoints.length)]
                                                    this.units[t].pathTo(block)
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }



            } else if (this.type == 2) {


                if (this.chunk % this.clickrate == 0) {

                    if (this.units.length > this.racksflag) {
                        this.racksflag += 10
                        this.lab = 0
                    }


                    for (let t = 0; t < this.buildings.length; t++) {
                        if (this.buildings[t].assembler == 2) {
                            if (this.seenrocks.length <= this.units.length) { //seen
                                if (this.hotrock > 135) {
                                    this.buildings[t].makeHamartanscout()
                                    break
                                }
                            }
                        }

                        if (this.buildings[t].assembler == 1) {
                            if (this.seen.length <= this.units.length) {
                                if (this.hotrock > 235  && Math.random() < .75) {
                                    this.buildings[t].makeHamartansoldier()
                                }
                            }
                        }
                        if (this.buildings[t].assembler == 3) {
                            if (Math.random() < .12 - (this.units.length * .005)) { //.1
                                if (this.hotrock > 145) { //220 //170
                                    this.buildings[t].makeHamartanworker()
                                }
                            }
                            if (Math.random() < (.13 + (this.units.length * .0015)) + (this.hotrock * .0001)) {  // - unitslength not + //too frequent too early //45 not 15
                                if (this.hotrock > 340) {
                                    this.buildings[t].makeHamartaninvader()
                                }
                            }
                            if (Math.random() < 1 / (this.buildings.length * 2)) {
                                break
                            }
                        }
                    }
                }



                if (this.defending >= 32) {
                    this.defending = 0
                    this.defenseforce = 0
                    for (let t = 0; t < this.units.length; t++) {
                        if (this.units[t].soldier == 1) {
                            this.defenseforce++
                        }
                        if (this.units[t].hamartaninvader == 1) {
                            this.defenseforce += 2
                        }
                    }
                    if (this.defenseforce > 0) {

                        for (let t = 0; t < this.buildings.length; t++) {
                            if (this.buildings[t].assembler == 1) {
                                if (this.hotrock > 235 && Math.random() < .75) {
                                    this.buildings[t].makeHamartansoldier()
                                }
                            }

                            if (this.buildings[t].assembler == 2) {
                                if (this.hotrock > 340) {
                                    this.buildings[t].makeHamartaninvader()
                                }
                            }
                        }

                        for (let t = 0; t < this.units.length; t++) {
                            if (this.units[t].hamartaninvader == 1) {
                                if (Math.random() < 7 / this.defenseforce) { //2
                                    if (this.units[t].index == this.units[t].realPath.length - 1) {
                                        this.units[t].pathTo(this.attackedAt)
                                    }
                                }
                            }

                            if (this.units[t].soldier == 1) {
                                if (Math.random() < 7 / this.defenseforce) { //2
                                    if (this.units[t].index == this.units[t].realPath.length - 1) {
                                        this.units[t].pathTo(this.attackedAt)
                                    }
                                }
                            }
                        }
                    } else {

                    }
                }


                for (let t = 0; t < this.units.length; t++) {
                    if (this.units[t].realPath.length - 1 == this.units[t].index) {
                        if (this.units[t].suffocating > 0 || (this.racks !== 1 && this.hotrock > 400)) {
                            if (Math.random() < .5) {
                                if (Math.random() < .5) {
                                    this.buildWall(sandmap.blocks[Math.max(this.units[t].tile.t - 1, 0)][this.units[t].tile.k])
                                } else {
                                    this.buildWall(sandmap.blocks[Math.min(this.units[t].tile.t + 1, 127)][this.units[t].tile.k])
                                }
                            } else {
                                if (Math.random() < .5) {
                                    this.buildWall(sandmap.blocks[this.units[t].tile.t][Math.min(this.units[t].tile.k + 1, 127)])
                                } else {
                                    this.buildWall(sandmap.blocks[this.units[t].tile.t][Math.max(this.units[t].tile.k - 1, 0)])
                                }
                            }
                            break
                        }
                    }
                }


                let index
                let j = 0
                this.chunk++
                if (this.chunk % this.clickrate == 0) {



                    for (let t = 0; t < this.units.length; t++) {
                        if (this.units[t].hamartanscout == 1) {
                            if (this.units.length >= this.seenrocks.length && (this.units[t].health/this.units[t].maxhealth) > .3) { //seen
                                let block = sandmap.gridPoints[Math.floor(Math.random() * sandmap.gridPoints.length)]
                                this.units[t].pathTo(block)
                            }
                        }
                    }

                    for (let t = 0; t < this.units.length; t++) {
                        if (this.units[t].realPath.length - 1 == this.units[t].index) { //} || this.units[t].realPath[this.units[t].index].walkable !== true) {
                            if (this.units[t].tile.hotrock != 1 && this.units[t].tile.hotrock != 2) {
                                let max = 999999999
                                for (let h = 0; h < sandmap.hotrocks.length; h++) {
                                    if (sandmap.hotrocks[h].walkable == true && sandmap.hotrocks[h].occupied == false && this.blocks[sandmap.hotrocks[h].t][sandmap.hotrocks[h].k].markdraw == 1) {
                                        let link = (new LineOP(this.units[t].tile, sandmap.hotrocks[h])).hypotenuse()
                                        // ////////////console.log(link)
                                        if (link < max) {
                                            max = link
                                            index = h
                                        }
                                    }
                                }

                                if (typeof sandmap.hotrocks[index] !== "undefined") {
                                    if (this.units[t].attacktarget.health > 0) {

                                    } else {
                                        j++
                                        this.units[t].pathTo(sandmap.hotrocks[index])
                                        if (j > 3) { //6
                                            break
                                        }
                                    }
                                } else {
                                    if (Math.random() < (1 / this.units.length)) {
                                        if (this.seen.length > 0) {
                                            let block = this.seen[Math.floor(Math.random() * this.seen.length)]
                                            this.units[t].pathTo(block)
                                        }
                                    }
                                }
                            }
                        } else if (typeof this.units[t].realPath[this.units[t].index + 1] !== "undefined") {
                            if (this.units[t].realPath[this.units[t].index + 1].walkable !== true) {
                                if (this.units[t].tile.hotrock != 1 && this.units[t].tile.hotrock != 2) {
                                    let max = 999999999
                                    for (let h = 0; h < sandmap.hotrocks.length; h++) {
                                        if (sandmap.hotrocks[h].walkable == true && sandmap.hotrocks[h].occupied == false && this.blocks[sandmap.hotrocks[h].t][sandmap.hotrocks[h].k].markdraw == 1) {
                                            let link = (new LineOP(this.units[t].tile, sandmap.hotrocks[h])).hypotenuse()
                                            // ////////////console.log(link)
                                            if (link < max) {
                                                max = link
                                                index = h
                                            }
                                        }
                                    }

                                    if (typeof sandmap.hotrocks[index] !== "undefined") {
                                        if (this.units[t].attacktarget.health > 0) {

                                        } else {
                                            j++
                                            this.units[t].pathTo(sandmap.hotrocks[index])
                                            if (j > 3) { //6
                                                break
                                            }
                                        }
                                    } else {
                                        if (Math.random() < .03) {
                                            if (this.seen.length > 0) {
                                                let block = this.seen[Math.floor(Math.random() * this.seen.length)]
                                                this.units[t].pathTo(block)
                                            }
                                        } else {
                                            if (this.units[t].hamartanscout == 1) {
                                                if (Math.random() < .5) {
                                                    let block = sandmap.gridPoints[Math.floor(Math.random() * sandmap.gridPoints.length)]
                                                    this.units[t].pathTo(block)
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

            } else if (this.type == 1) {

                if (this.defending >= 25) { //25 not 32 because they favor early advantage
                    this.defending = 0
                    this.defenseforce = 0
                    for (let t = 0; t < this.units.length; t++) {
                        if (this.units[t].nymph == 2) {
                            this.defenseforce++
                        }
                        if (this.units[t].nymph == 1) {
                            this.units[t].metamorph1()
                        }
                        if (this.units[t].imago == 2) {
                            this.units[t].submerged = 1
                        }
                    }
                    if (this.defenseforce > 0) {
                        for (let t = 0; t < this.units.length; t++) {
                            if (this.units[t].nymph == 2) {
                                if (Math.random() < 7 / this.defenseforce) { //2
                                    if (this.units[t].index == this.units[t].realPath.length - 1) {
                                        this.units[t].pathTo(this.attackedAt)
                                    }
                                }
                            }
                        }
                    } else {
                        for (let t = 0; t < this.units.length; t++) {
                            if (Math.random() < 7 / this.defenseforce) {
                                if (this.units[t].nymph !== 1) {
                                    if ((this.units[t].imago == 1) && Math.random() < .4) { //.9
                                        continue
                                    }
                                    if (this.units[t].index == this.units[t].realPath.length - 1) {
                                        this.units[t].pathTo(this.attackedAt)
                                    }
                                }
                            }
                        }

                    }
                }
                let index = sandmap.hotrocks.length + 1
                this.chunk++
                if (this.aimode == 1) {
                    for (let t = 0; t < this.units.length; t++) {
                        if (this.units[t].imago == 1 || this.units[t].imago == 2) {
                            this.units[t].makeNymph()
                        }
                    }
                    let j = 0
                    if (Math.random() < this.units.length * .075) {
                        // for (let t = 0; t < this.units.length; t++) {
                        //     if (this.units[t].imago !== 1) {
                        //         //hardcoding this gid helf mi
                        //         if (Math.random() < .3) {
                        //             if (sandmap.players[Math.abs(sandmap.players.indexOf(this) - 1)].units.length > 0) {
                        //                 if (typeof sandmap.players[Math.abs(sandmap.players.indexOf(this) - 1)].units[Math.floor(Math.random() * sandmap.players[Math.abs(sandmap.players.indexOf(this) - 1)].units.length)].tile !== "undefined") {
                        //                     j++
                        //                     this.units[t].pathTo(sandmap.players[Math.abs(sandmap.players.indexOf(this) - 1)].units[Math.floor(Math.random() * sandmap.players[Math.abs(sandmap.players.indexOf(this) - 1)].units.length)].tile)
                        //                     if (j > 3) { //6
                        //                         break
                        //                     }
                        //                 }
                        //             }
                        //         }
                        //     }
                        // }
                        this.aimode = 0
                    }
                } else if (this.aimode == 0) {
                    let j = 0

                    if (this.chunk % this.clickrate == 0) {
                        for (let t = 0; t < this.units.length; t++) {
                            if (this.units[t].realPath.length - 1 == this.units[t].index) { //} || this.units[t].realPath[this.units[t].index].walkable !== true) {
                                if (this.units[t].tile.hotrock != 1 && this.units[t].tile.hotrock != 2) {
                                    let max = 999999999
                                    for (let h = 0; h < sandmap.hotrocks.length; h++) {
                                        if (sandmap.hotrocks[h].walkable == true && sandmap.hotrocks[h].occupied == false && this.blocks[sandmap.hotrocks[h].t][sandmap.hotrocks[h].k].markdraw == 1) {
                                            let link = (new LineOP(this.units[t].tile, sandmap.hotrocks[h])).hypotenuse()
                                            // ////////////console.log(link)
                                            if (link < max) {
                                                max = link
                                                index = h
                                            }
                                        }
                                    }

                                    if (typeof sandmap.hotrocks[index] !== "undefined") {
                                        if (this.units[t].attacktarget.health > 0) {

                                        } else {
                                            j++
                                            this.units[t].pathTo(sandmap.hotrocks[index])
                                            if (j > 3) { //6
                                                break
                                            }
                                        }
                                    } else {
                                        if (Math.random() < (1 / this.units.length)) {
                                            if (this.seen.length > 0) {
                                                let block = this.seen[Math.floor(Math.random() * this.seen.length)]
                                                this.units[t].pathTo(block)
                                            }
                                        }
                                    }
                                }
                            } else if (typeof this.units[t].realPath[this.units[t].index + 1] !== "undefined") {
                                if (this.units[t].realPath[this.units[t].index + 1].walkable !== true) {
                                    if (this.units[t].tile.hotrock != 1 && this.units[t].tile.hotrock != 2) {
                                        let max = 999999999
                                        for (let h = 0; h < sandmap.hotrocks.length; h++) {
                                            if (sandmap.hotrocks[h].walkable == true && sandmap.hotrocks[h].occupied == false && this.blocks[sandmap.hotrocks[h].t][sandmap.hotrocks[h].k].markdraw == 1) {
                                                let link = (new LineOP(this.units[t].tile, sandmap.hotrocks[h])).hypotenuse()
                                                // ////////////console.log(link)
                                                if (link < max) {
                                                    max = link
                                                    index = h
                                                }
                                            }
                                        }

                                        if (typeof sandmap.hotrocks[index] !== "undefined") {
                                            if (this.units[t].attacktarget.health > 0) {

                                            } else {
                                                j++
                                                this.units[t].pathTo(sandmap.hotrocks[index])
                                                if (j > 3) { //6
                                                    break
                                                }
                                            }
                                        } else {
                                            if (Math.random() < .03) {
                                                if (this.seen.length > 0) {
                                                    let block = this.seen[Math.floor(Math.random() * this.seen.length)]
                                                    this.units[t].pathTo(block)
                                                }
                                            } else {
                                                if (this.units[t].nymph == 1) {
                                                    if (Math.random() < .01) {
                                                        let block = sandmap.gridPoints[Math.floor(Math.random() * sandmap.gridPoints.length)]
                                                        this.units[t].pathTo(block)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    if (Math.random() < .1) {
                        for (let t = 0; t < this.units.length; t++) {
                            if (this.units[t].nymph == 1) {
                                this.units[t].attackmove()
                            }
                            if (this.units[t].nymph == 2) {
                                this.units[t].attackmove()
                            }
                            if (this.units[t].imago == 2) {
                                if (this.units[t].tile.sourcerock >= 1) {
                                    this.units[t].submerged = 1
                                }
                                this.units[t].attackmove()
                            }
                        }
                    }

                    if (Math.random() < (.3 / this.units.length)) {
                        for (let t = 0; t < this.units.length; t++) {
                            if (this.units[t].imago == 1 || this.units[t].imago == 2) {
                                this.units[t].makeNymph()
                                if (Math.random() < .1) {
                                    break
                                }
                            }
                        }
                    }
                    if (Math.random() < (this.units.length * .001)) {
                        let n = 0
                        for (let t = 0; t < this.units.length; t++) {
                            if (this.units[t].nymph == 1) {
                                n++
                            }
                        }
                        if (n > 2) {
                            for (let t = 0; t < this.units.length; t++) {
                                if (this.units[t].nymph == 1) {
                                    this.units[t].metamorph1()
                                    break
                                }
                            }
                        }
                    }

                    if (Math.random() < (this.units.length * .0009)) {
                        for (let t = 0; t < this.units.length; t++) {
                            if (Math.random() < .5) {
                                if (this.units[t].nymph == 2) {
                                    this.units[t].metamorph2()
                                    break
                                }
                            } else {
                                if (this.units[t].nymph == 2) {
                                    this.units[t].metamorph3()
                                    break
                                }
                            }
                        }
                    }


                    if (this.units.length > 25) {
                        if (this.attacktimeout <= 0) {
                            this.aimode = 1
                            this.attacktimeout = 3000
                        }
                        this.attacktimeout--
                    }
                }



            } else { // human below, itzler above

                if(this.hotrock > (this.racksflag * 75)){
                    // console.log("earthoid effect")
                    this.racks = 0 
                    this.lab = 0 
                    this.racksflag += 4
                }



                if (this.defending >= 32) {
                    this.defending = 0
                    this.defenseforce = 0
                    for (let t = 0; t < this.units.length; t++) {
                        if (this.units[t].infantry == 1) {
                            this.defenseforce++
                        }
                    }
                    for (let t = 0; t < this.buildings.length; t++) {
                        if (this.buildings[t].barracks == 1) {
                            if (this.hotrock > 40) { // 40??
                                this.buildings[t].makeInfantry()
                            }
                        }
                    }
                    if (this.defenseforce > 0) {
                        for (let t = 0; t < this.units.length; t++) {
                            if (this.units[t].infantry == 1) {
                                if (Math.random() < 7 / this.defenseforce) { //2
                                    if (this.units[t].index == this.units[t].realPath.length - 1) {
                                        this.units[t].pathTo(this.attackedAt)
                                    }
                                }
                            }
                        }
                    } else {
                        for (let t = 0; t < this.units.length; t++) {
                            if (Math.random() < 7 / this.defenseforce) { //2
                                if (this.units[t].harvester == 1 && Math.random() < .4) { //.9
                                    continue
                                }

                                if (this.units[t].index == this.units[t].realPath.length - 1) {
                                    this.units[t].pathTo(this.attackedAt)
                                }
                            }
                        }

                    }
                }

                if (Math.random() < .0001) {
                    this.racks = 0
                    this.lab = 0
                }
                let index = 0
                this.chunk++
                if (this.aimode == 1) {
                    let j = 0
                    if (Math.random() < this.units.length * .075) {
                        // for (let t = 0; t < this.units.length; t++) {
                        //     if (this.units[t].imago !== 1) {
                        //         //hardcoding this gid helf mi
                        //         if (Math.random() < .3) {
                        //             if (sandmap.players[0].units.length > 0) {
                        //                 if (typeof sandmap.players[0].units[Math.floor(Math.random() * sandmap.players[0].units.length)].tile !== "undefined") {
                        //                     j++
                        //                     this.units[t].pathTo(sandmap.players[0].units[Math.floor(Math.random() * sandmap.players[0].units.length)].tile)
                        //                     if (j > 3) { //6
                        //                         break
                        //                     }
                        //                 }
                        //             }
                        //         }
                        //     }
                        // }
                        this.aimode = 0
                    }
                } else if (this.aimode == 0) {
                    let j = 0

                    if (this.chunk % this.clickrate == 0) {

                        this.findBase() // to make an averagespace
                        for (let t = 0; t < this.units.length; t++) {
                            if (this.units[t].realPath.length - 1 == this.units[t].index) { //} || this.units[t].realPath[this.units[t].index].walkable !== true) {

                                if (this.units[t].health < (this.units[t].maxhealth * .33)) {
                                    j++
                                    let block = this.averageSpace.tile
                                    this.units[t].pathTo(block)
                                    if (j > 3) { //6
                                        break
                                    }
                                } else {
                                    if (this.units[t].tile.hotrock != 1 && this.units[t].tile.hotrock != 2) {
                                        let max = 999999999
                                        for (let h = 0; h < sandmap.hotrocks.length; h++) {
                                            if (this.blocks[sandmap.hotrocks[h].t][sandmap.hotrocks[h].k].markdraw == 1) {
                                                if (sandmap.hotrocks[h].walkable == true && sandmap.hotrocks[h].occupied == false) {
                                                    let link = (new LineOP(this.units[t].tile, sandmap.hotrocks[h])).hypotenuse()
                                                    // ////////////console.log(link)
                                                    if (link < max) {
                                                        max = link
                                                        index = h
                                                    }
                                                }
                                            }
                                        }

                                        if (typeof sandmap.hotrocks[index] !== "undefined" && max < 999999999) {
                                            if (this.units[t].attacktarget.health > 0) {

                                            } else {
                                                j++
                                                this.units[t].pathTo(sandmap.hotrocks[index])
                                                if (j > 3) { //6
                                                    break
                                                }
                                            }
                                        } else {
                                            if (this.units[t].drone == 1 && Math.random() < (.05 / this.units.length)) {
                                                if (this.units[t].health > (this.units[t].maxhealth * .33)) {
                                                    let block = sandmap.gridPoints[Math.floor(Math.random() * sandmap.gridPoints.length)]
                                                    this.units[t].pathTo(block)
                                                } else {
                                                    j++
                                                    let block = this.averageSpace.tile
                                                    this.units[t].pathTo(block)
                                                    if (j > 3) { //6
                                                        break
                                                    }
                                                }
                                            } else if (Math.random() < (1 / this.units.length)) {
                                                if (this.units[t].health > (this.units[t].maxhealth * .33)) {
                                                    if (this.seen.length > 0) {
                                                        j++
                                                        let block = this.seen[Math.floor(Math.random() * this.seen.length)]
                                                        this.units[t].pathTo(block)
                                                        if (j > 3) { //6
                                                            break
                                                        }
                                                    }
                                                } else {
                                                    j++
                                                    let block = this.averageSpace.tile
                                                    this.units[t].pathTo(block)
                                                    if (j > 3) { //6
                                                        break
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            } else if (typeof this.units[t].realPath[this.units[t].index + 1] !== "undefined") {
                                if (this.units[t].health < (this.units[t].maxhealth * .33)) {
                                    j++
                                    let block = this.averageSpace.tile
                                    this.units[t].pathTo(block)
                                    if (j > 3) { //6
                                        break
                                    }
                                } else {
                                    if (this.units[t].realPath[this.units[t].index + 1].walkable !== true) {
                                        if (this.units[t].tile.hotrock != 1 && this.units[t].tile.hotrock != 2) {
                                            let max = 999999999
                                            for (let h = 0; h < sandmap.hotrocks.length; h++) {
                                                if (this.blocks[sandmap.hotrocks[h].t][sandmap.hotrocks[h].k].markdraw == 1) {
                                                    if (sandmap.hotrocks[h].walkable == true && sandmap.hotrocks[h].occupied == false) {
                                                        let link = (new LineOP(this.units[t].tile, sandmap.hotrocks[h])).hypotenuse()
                                                        // ////////////console.log(link)
                                                        if (link < max) {
                                                            max = link
                                                            index = h
                                                        }
                                                    }
                                                }
                                            }

                                            if (typeof sandmap.hotrocks[index] !== "undefined" && max < 999999999) {
                                                if (this.units[t].attacktarget.health > 0) {

                                                } else {
                                                    j++
                                                    this.units[t].pathTo(sandmap.hotrocks[index])
                                                    if (j > 3) { //6
                                                        break
                                                    }
                                                }
                                            } else {
                                                if (Math.random() < (1 / this.units.length)) {
                                                    if (this.seen.length > 0) {
                                                        j++
                                                        let block = this.seen[Math.floor(Math.random() * this.seen.length)]
                                                        this.units[t].pathTo(block)
                                                        if (j > 3) { //6
                                                            break
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    if (Math.random() < .01) {
                        for (let t = 0; t < this.units.length; t++) {
                            if (this.units[t].infantry == 1) {
                                this.units[t].attackmove()
                            }
                            if (this.units[t].drone == 1) {
                                if (Math.random() < .03) {
                                    // let block = sandmap.gridPoints[Math.floor(Math.random()*sandmap.gridPoints.length)]
                                    // this.units[t].pathTo(block)
                                    let block = sandmap.gridPoints[Math.floor(Math.random() * sandmap.gridPoints.length)]
                                    this.units[t].pathTo(block)
                                }
                            }
                        }
                    }

                    if (Math.random() < (.3 / this.units.length)) {
                        for (let t = 0; t < this.buildings.length; t++) {
                            if (this.buildings[t].barracks == 1) {
                                if (Math.random() < .1 - (this.units.length * .005)) {
                                    if (this.hotrock > 120) { 
                                        this.buildings[t].makeInfantry()
                                    }
                                }
                                if (Math.random() < (.13 + (this.units.length * .0045)) + (this.hotrock * .0001)) { // - not +
                                    if (this.hotrock > 300) {
                                        this.buildings[t].makeSniper()
                                    }
                                }
                                if (Math.random() < .3) {
                                    break
                                }
                            }
                        }
                        for (let t = 0; t < this.buildings.length; t++) {
                            if (this.buildings[t].barracks == 2) {
                                if (Math.random() < .1 - (this.units.length * .008)) {
                                    if (this.hotrock > 70) {
                                        this.buildings[t].makeScout()
                                    }
                                }
                                if (Math.random() < (.1 + (this.units.length * .003)) + (this.hotrock * .0001)) { //- to +
                                    if (this.hotrock > 170) { //200
                                        this.buildings[t].makeHarvester()
                                    }
                                }

                                if (Math.random() < .3) {
                                    break
                                }
                            }
                        }
                    } else {
                        for (let t = 0; t < this.buildings.length; t++) {
                            if (this.buildings[t].barracks == 1) {
                                if (Math.random() < .005) {
                                    if (this.hotrock > 100) { //200
                                        this.buildings[t].makeInfantry()
                                    }
                                }
                            }
                        }
                    }



                    if (this.baseMoveFlag == 1) {
                        this.baseMoveFlag = 0
                        if (this.averageSpace.dirs2 == 1) {
                        } else {
                            for (let x = this.averageSpace.tile.k; x < 127; x++) {
                                if (x < 0 || x > 127) {
                                    continue
                                }
                                if (this.blocks[this.averageSpace.tile.t][x + 1].markdraw != 1) {
                                    this.buildWall(sandmap.blocks[this.averageSpace.tile.t][x])
                                } else if (x == 126) {
                                    this.buildWall(sandmap.blocks[this.averageSpace.tile.t][x])
                                }
                                if (debreak == 0) {
                                    break
                                }
                            }
                        }
                        if (this.averageSpace.dirs4 == 1) {
                        } else {
                            for (let x = this.averageSpace.tile.k; x > 1; x--) {
                                if (x < 0 || x > 127) {
                                    continue
                                }
                                if (this.blocks[this.averageSpace.tile.t][x - 1].markdraw != 1) {
                                    this.buildWall(sandmap.blocks[this.averageSpace.tile.t][x])
                                } else if (x == 2) {
                                    this.buildWall(sandmap.blocks[this.averageSpace.tile.t][x])
                                }
                                if (debreak == 0) {
                                    break
                                }
                            }
                        }
                        if (this.averageSpace.dirs3 == 1) {
                        } else {
                            for (let x = this.averageSpace.tile.t; x > 1; x--) {
                                if (x < 0 || x > 127) {
                                    continue
                                }
                                if (this.blocks[x - 1][this.averageSpace.tile.k].markdraw != 1) {
                                    this.buildWall(sandmap.blocks[x][this.averageSpace.tile.k])
                                } else if (x == 2) {
                                    this.buildWall(sandmap.blocks[x][this.averageSpace.tile.k])
                                }
                                if (debreak == 0) {
                                    break
                                }
                            }
                        }
                        if (this.averageSpace.dirs1 == 1) {
                        } else {
                            for (let x = this.averageSpace.tile.t; x < 127; x++) {
                                if (x < 0 || x > 127) {
                                    continue
                                }
                                if (this.blocks[x + 1][this.averageSpace.tile.k].markdraw != 1) {
                                    this.buildWall(sandmap.blocks[x][this.averageSpace.tile.k])
                                } else if (x == 126) {
                                    this.buildWall(sandmap.blocks[x][this.averageSpace.tile.k])
                                }
                                if (debreak == 0) {
                                    break
                                }
                            }
                        }
                    }




                    if ((Math.random() * .13) && this.hotrock >= 10) {

                        for (let t = 0; t < this.units.length; t++) {
                            if (this.units[t].tile.sourcerock >= 1 || ((Math.random() * .03) && this.units[t].index < this.units[t].realPath.length - 1)) {

                            } else {
                                continue
                            }


                            let calcdeath = this.units[t].health / (((this.units[t].decayRate * this.units[t].decayingInTheWind * sandmap.windspeed)))

                            if (Math.abs(this.units[t].realPath.length - this.units[t].index) < 3 || Math.abs(this.units[t].realPath.length - this.units[t].index) > (calcdeath - (this.units[t].movespeed * 10))) {

                                // //////////console.log(this.units[t])

                            } else {
                                continue
                            }


                            if ((this.units[t].decayingInTheWind == 1 && this.units[t].drone != 1) || (this.units[t].decayingInTheWind == 1 && this.units[t].drone == 1 && (Math.random() < (this.hotrock * .002)))) {
                                if (this.units[t].dirs2 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.k; x < 127; x++) {
                                            if (x < 0 || x > 127) {
                                                continue
                                            }
                                            if (this.blocks[this.units[t].tile.t][x + 1].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            } else if (x == 126) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }
                                if (this.units[t].dirs4 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.k; x > 1; x--) {
                                            if (x < 0 || x > 127) {
                                                continue
                                            }
                                            if (this.blocks[this.units[t].tile.t][x - 1].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            } else if (x == 2) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }
                                if (this.units[t].dirs3 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.t; x > 1; x--) {
                                            if (x < 0 || x > 127) {
                                                continue
                                            }
                                            if (this.blocks[x - 1][this.units[t].tile.k].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            } else if (x == 2) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }
                                if (this.units[t].dirs1 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.t; x < 127; x++) {
                                            if (x < 0 || x > 127) {
                                                continue
                                            }
                                            if (this.blocks[x + 1][this.units[t].tile.k].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            } else if (x == 126) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }


                            } else if ((this.units[t].decayingInTheWind > .51 && this.units[t].decayingInTheWind < .8 && this.units[t].drone != 1) || (this.units[t].decayingInTheWind > .51 && this.units[t].decayingInTheWind < .8 && this.units[t].drone == 1 && (Math.random() < (this.hotrock * .004)))) {
                                if (this.units[t].dirs2 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.k; x < 127; x++) {
                                            if (x < 0 || x > 127) {
                                                continue
                                            }
                                            if (this.blocks[this.units[t].tile.t][x + 1].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            } else if (x == 126) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }
                                if (this.units[t].dirs4 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.k; x > 1; x--) {
                                            if (x < 0 || x > 127) {
                                                continue
                                            }
                                            if (this.blocks[this.units[t].tile.t][x - 1].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            } else if (x == 2) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }
                                if (this.units[t].dirs3 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.t; x > 1; x--) {
                                            if (x < 0 || x > 127) {
                                                continue
                                            }
                                            if (this.blocks[x - 1][this.units[t].tile.k].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            } else if (x == 2) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }
                                if (this.units[t].dirs1 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.t; x < 127; x++) {
                                            if (x < 0 || x > 127) {
                                                continue
                                            }
                                            if (this.blocks[x + 1][this.units[t].tile.k].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            } else if (x == 126) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }

                            } else if ((this.units[t].decayingInTheWind > .27 && this.units[t].decayingInTheWind < .55 && this.units[t].drone != 1) || (this.units[t].decayingInTheWind > .27 && this.units[t].decayingInTheWind < .55 && this.units[t].drone == 1 && (Math.random() < (this.hotrock * .006)))) {
                                if (this.units[t].dirs2 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.k; x < 127; x++) {
                                            if (x < 0 || x > 127) {
                                                continue
                                            }
                                            if (this.blocks[this.units[t].tile.t][x + 1].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            } else if (x == 126) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }
                                if (this.units[t].dirs4 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.k; x > 1; x--) {
                                            if (x < 0 || x > 127) {
                                                continue
                                            }
                                            if (this.blocks[this.units[t].tile.t][x - 1].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            } else if (x == 2) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }
                                if (this.units[t].dirs3 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.t; x > 1; x--) {
                                            if (x < 0 || x > 127) {
                                                continue
                                            }
                                            if (this.blocks[x - 1][this.units[t].tile.k].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            } else if (x == 2) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }
                                if (this.units[t].dirs1 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.t; x < 127; x++) {
                                            if (x < 0 || x > 127) {
                                                continue
                                            }
                                            if (this.blocks[x + 1][this.units[t].tile.k].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            } else if (x == 126) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }

                            } else if ((this.units[t].decayingInTheWind >= .01 && this.units[t].decayingInTheWind < .3 && this.units[t].drone != 1) || (this.units[t].decayingInTheWind > .01 && this.units[t].decayingInTheWind < .3 && this.units[t].drone == 1 && (Math.random() < (this.hotrock * .008)))) {
                                if (this.units[t].dirs2 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.k; x < 127; x++) {
                                            if (x < 0 || x > 127) {
                                                continue
                                            }
                                            if (this.blocks[this.units[t].tile.t][x + 1].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            } else if (x == 126) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }
                                if (this.units[t].dirs4 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.k; x > 1; x--) {
                                            if (x < 0 || x > 127) {
                                                continue
                                            }
                                            if (this.blocks[this.units[t].tile.t][x - 1].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            } else if (x == 2) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }
                                if (this.units[t].dirs3 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.t; x > 1; x--) {
                                            if (x < 0 || x > 127) {
                                                continue
                                            }
                                            if (this.blocks[x - 1][this.units[t].tile.k].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            } else if (x == 2) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }
                                if (this.units[t].dirs1 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.t; x < 127; x++) {
                                            if (x < 0 || x > 127) {
                                                continue
                                            }
                                            if (this.blocks[x + 1][this.units[t].tile.k].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            } else if (x == 126) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }

                            } else {


                            }
                        }

                    }

                    if (this.units.length > 25) {
                        if (this.attacktimeout <= 0) {
                            this.aimode = 1
                            this.attacktimeout = 3000
                        }
                        this.attacktimeout--
                    }
                }



            }
        }
        buildWall(tile) {
            if (this.type == 1) {
                return
            } else if (this.type == 0) {
                if (this.racks == 0 && this.isAI == 1) {
                    this.buildBarracks(tile)
                } else if (this.lab == 0 && this.isAI == 1 && this.hotrock > 150) {
                    this.buildMachineLab(tile)
                } else {
                    let wet = 0
                    for (let t = 0; t < this.buildings.length; t++) {
                        if (tile == this.buildings[t].tile || this.blocks[tile.t][tile.k].markdraw != 1) {
                            wet = 1
                            debreak = 1
                            // //////////console.log(tile)
                        }
                    }
                    if (tile.walkable == false) {
                        wet = 1
                    }
                    if (wet == 0) {
                        if (this.hotrock >= 10) {
                            this.hotrock -= 10
                            let building = new Building(tile, this, 0)
                            building.defense = 3
                            building.damage = 0
                        }
                    }
                }
            } else if (this.type == 2) {

                if(this.hotrock > (this.racksflag * 75)){
                    // console.log("hamartan effect")
                    this.racks = 0 
                    this.lab = 0 
                    this.racksflag += 4
                }

                if (this.racks == 0 && this.isAI == 1 && this.hotrock > 340) {
                    if(Math.random() < .5){
                        this.buildGate(tile)
                    }else if (this.lab == 0 && this.isAI == 1 && this.hotrock > 150) {
                        this.buildBarracks(tile)
                    }
                } else if (this.lab == 0 && this.isAI == 1 && this.hotrock > 150 && this.racks == 1) {
                    this.buildBarracks(tile)
                } else if (this.lab == 1 && this.isAI == 1 && this.hotrock > 150 && this.racks == 1) {
                    this.buildMachineLab(tile)
                } else {
                    let wet = 0
                    for (let t = 0; t < this.buildings.length; t++) {
                        if (tile == this.buildings[t].tile || this.blocks[tile.t][tile.k].markdraw != 1) {
                            wet = 1
                            debreak = 1
                            // //////////console.log(tile)
                        }
                    }
                    if (tile.walkable == false) {
                        wet = 1
                    }
                    if (wet == 0) {
                        if (this.hotrock >= 40) {
                            // this.racks = 1
                            this.hotrock -= 40
                            let building = new Building(tile, this, 0)
                            building.defense = 10
                            building.damage = 0
                            building.name = "Spire"
                            building.body = new UnitCircle(building.tile.x + 5, building.tile.y + 5, 110, "#FFFF0010")
                            building.bodybig = new UnitCircle(building.tile.x + 5, building.tile.y + 5, 170, "#FFFF0010")
                            building.health = 420
                            building.maxhealth = building.health
                            building.spire = 1
                            building.tile.spiretile = 1
                            for (let t = 0; t < this.units.length; t++) {
                                this.units[t].spirecheck()
                            }
                        }
                    }
                }
            }

        }
        buildGate(tile) {
            if (this.type == 1) {
                return
            } else if (this.type == 0) {
                if (this.racks == 0 && this.isAI == 1) {
                    this.buildBarracks(tile)
                } else if (this.lab == 0 && this.isAI == 1 && this.hotrock > 150) {
                    this.buildMachineLab(tile)
                } else {
                    let wet = 0
                    for (let t = 0; t < this.buildings.length; t++) {
                        if (tile == this.buildings[t].tile || this.blocks[tile.t][tile.k].markdraw != 1) {
                            wet = 1
                            debreak = 1
                            // //////////console.log(tile)
                        }
                    }
                    if (tile.walkable == false) {
                        wet = 1
                    }
                    if (wet == 0) {
                        if (this.hotrock >= 25) {
                            this.hotrock -= 25
                            let building = new Building(tile, this, 0)
                            building.health = 300
                            building.maxhealth = building.health
                            building.defense = 15
                            building.damage = 0
                            building.gate = 1
                            building.name = "Blast Door"
                            building.open = -1
                        }
                    }
                }
            } else if (this.type == 2) {

                let wet = 0
                for (let t = 0; t < this.buildings.length; t++) {
                    if (tile == this.buildings[t].tile || this.blocks[tile.t][tile.k].markdraw != 1) {
                        wet = 1
                        debreak = 1
                        // //////////console.log(tile)
                    }
                }
                if (tile.walkable == false) {
                    wet = 1
                }
                if (wet == 0) {
                    if (this.hotrock >= 340) {
                        this.hotrock -= 340
                        let building = new Building(tile, this, 0)
                        building.health = 1300
                        building.maxhealth = building.health
                        building.defense = 15
                        building.damage = 0
                        building.assembler = 3
                        building.tile.spiretile = 1
                        building.name = "High-Caste Assembler"
                        this.racks = 1
                    }
                }

            }

        }
        buildBarracks(tile) {

            if (this.type == 1) {
                return
            } else if (this.type == 0) {


                let wet = 0
                if (tile.walkable == false) {
                    wet = 1
                }
                for (let t = 0; t < this.buildings.length; t++) {
                    if (tile == this.buildings[t].tile || this.blocks[tile.t][tile.k].markdraw != 1) {
                        wet = 1
                    }
                }
                if (wet == 0) {

                    if (this.hotrock >= 70) {
                        this.racks = 1
                        this.hotrock -= 70
                        let building = new Building(tile, this, 0)
                        building.barracks = 1
                        building.name = "Barracks"
                        building.health = 500
                        building.maxhealth = building.health
                        building.defense = 6
                        building.damage = 0
                    }
                }

            } else if (this.type == 2) {
                let wet = 0
                if (tile.walkable == false) {
                    wet = 1
                }
                for (let t = 0; t < this.buildings.length; t++) {
                    if (tile == this.buildings[t].tile || this.blocks[tile.t][tile.k].markdraw != 1) {
                        wet = 1
                    }
                }
                if (wet == 0) {

                    if (this.hotrock >= 130) {
                        this.lab = 1
                        this.hotrock -= 130
                        let building = new Building(tile, this, 0)
                        building.assembler = 1
                        building.name = "Soldier Assembler"
                        building.health = 500
                        building.maxhealth = building.health
                        building.defense = 6
                        building.damage = 0
                        building.tile.spiretile = 1
                    }
                }
            } else if (this.type == 3) {
                let wet = 0
                let dirty = 0
                for (let t = 0; t < this.buildings.length; t++) {
                    if (this.buildings[t].bulbplant == 1) {
                        let link = new LineOP(tile, this.buildings[t].tile)
                        if (link.hypotenuse() < 160) {
                            dirty = 1
                        }
                    }
                }
                if (tile.walkable == false) {
                    wet = 1
                }
                for (let t = 0; t < this.buildings.length; t++) {
                    if (tile == this.buildings[t].tile || this.blocks[tile.t][tile.k].markdraw != 1) {
                        wet = 1
                    }
                }
                if (wet == 0 && ((dirty == 0 && this.isAI == 1) || this.isAI == 0)) {

                    if (this.hotrock >= 80) {
                        this.racks = 1
                        this.hotrock -= 80
                        let building = new Building(tile, this, 0)
                        building.bulbplant = 1
                        building.name = "Librilbian Bulbplant"
                        building.health = 500
                        building.maxhealth = building.health
                        building.defense = 6
                        building.damage = 0
                        building.tile.spiretile = 1
                        building.tile.dirt = 1
                    }
                }
            }
        }
        buildMachineLab(tile) {
            if (this.type == 1) {
                return
            } else if (this.type == 0) {
                let wet = 0
                if (tile.walkable == false) {
                    wet = 1
                }
                for (let t = 0; t < this.buildings.length; t++) {
                    if (tile == this.buildings[t].tile || this.blocks[tile.t][tile.k].markdraw != 1) {
                        wet = 1
                    }
                }
                if (wet == 0) {

                    if (this.hotrock >= 110) {
                        this.lab = 1
                        this.hotrock -= 110
                        let building = new Building(tile, this, 0)
                        building.barracks = 2
                        building.name = "Machine Lab"
                        building.health = 1000
                        building.maxhealth = building.health
                        building.defense = 20
                        building.damage = 0
                    }
                }
            } else if (this.type == 2) {
                let wet = 0
                if (tile.walkable == false) {
                    wet = 1
                }
                for (let t = 0; t < this.buildings.length; t++) {
                    if (tile == this.buildings[t].tile || this.blocks[tile.t][tile.k].markdraw != 1) {
                        wet = 1
                    }
                }
                if (wet == 0) {

                    if (this.hotrock >= 210) {
                        this.lab = 2
                        this.hotrock -= 210
                        let building = new Building(tile, this, 0)
                        building.assembler = 2
                        building.name = "Scout Assembler"
                        building.health = 750
                        building.maxhealth = building.health
                        building.defense = 20
                        building.damage = 0
                        building.tile.spiretile = 1
                    }
                }
            } else if (this.type == 3) {
                let wet = 0

                let dirty = 0
                for (let t = 0; t < this.buildings.length; t++) {
                    if (this.buildings[t].bulbplant == 1) {
                        let link = new LineOP(tile, this.buildings[t].tile)
                        if (link.hypotenuse() < 100) {
                            dirty = 1
                        }
                    }
                }
                if (tile.walkable == false) {
                    wet = 1
                }
                for (let t = 0; t < this.buildings.length; t++) {
                    if (tile == this.buildings[t].tile || this.blocks[tile.t][tile.k].markdraw != 1) {
                        wet = 1
                    }
                }
                if (wet == 0 && dirty == 1) {

                    if (this.hotrock >= 210) {
                        this.lab = 1
                        this.hotrock -= 210
                        let building = new Building(tile, this, 0)
                        building.bulbplant = 2
                        building.name = "Librilbian Podmother"
                        building.health = 1750
                        building.maxhealth = building.health
                        building.defense = 22
                        building.damage = 0
                        building.tile.spiretile = 1
                    }
                }
            }
        }
        draw() {
            for (let t = 0; t < this.buildings.length; t++) {
                this.buildings[t].clean()
            }
            for (let t = 0; t < this.buildings.length; t++) {
                this.buildings[t].draw()
            }
            for (let t = 0; t < this.units.length; t++) {
                this.units[t].move()
            }
            for (let t = 0; t < this.units.length; t++) {
                this.units[t].draw()
            }
            for (let t = 0; t < this.units.length; t++) {
                if (this.units[t].marked == 1) {
                    this.units[t].tile.walkable = true
                    this.units[t].tile.occupied = false

                    if (sandmap.players.indexOf(this) == sandmap.turn) {
                        if (Math.random() < soundspamdrop) {
                            soundCancel()
                            if (this.units[t].podman == 1) {
                                if (Math.random() < .5) {
                                    walkinthesunpostskirmish.play()
                                } else {
                                    gushorgushnot.play()
                                }
                            }
                            if (this.units[t].drone == 1) {
                                if (Math.random() < .5) {
                                    signallost.play()
                                } else {
                                    error.play()
                                }
                            }
                            if (this.units[t].infantry == 1) {
                                if (Math.random() < .5) {
                                    tellmywife.play()
                                } else {
                                    deathrattle.play()
                                }
                            }
                            if (this.units[t].hamartaninvader == 1) {
                                ohgeezyouvehurtme.play()
                            }
                            if (this.units[t].infantry == 2) {
                                if (Math.random() < .5) {
                                    ahgeez.play()
                                } else {
                                    goingdown.play()
                                }
                            }
                            if (this.units[t].harvester == 1) {
                                if (Math.random() < .5) {
                                    feelcold.play()
                                } else {
                                    redlight.play()
                                }
                            }
                            if (this.units[t].imago == 1) {
                                if (Math.random() < .5) {
                                    boh.play()
                                } else {
                                    die.play()
                                }
                            }
                            if (this.units[t].imago == 2) {
                                if (Math.random() < .3) {
                                    ggd1.play()
                                } else if (Math.random() < .3) {
                                    ggd3.play()
                                } else {
                                    ggd2.play()
                                }
                            }
                            if (this.units[t].nymph == 2) {
                                if (Math.random() < .3) {
                                    scuttlerdeath.play()
                                } else if (Math.random() < .3) {
                                    guessillgothen.play()
                                } else {
                                    illness.play()
                                }
                            }
                        }
                    }
                    this.units.splice(t, 1)
                }
            }
            for (let t = 0; t < this.units.length; t++) {
                this.units[t].see()
            }
            if (sandmap.players.indexOf(this) == sandmap.turn) {
                canvas_context.fillStyle = "black"
                canvas_context.strokeStyle = sandmap.players[sandmap.turn].color
                canvas_context.lineWidth = 1.5
                canvas_context.font = "18px arial"
                canvas_context.strokeText("Hotrock: " + Math.round(this.hotrock), sandmap.window.body.x + sandmap.window.body.width + 10, 315)
                canvas_context.fillText("Hotrock: " + Math.round(this.hotrock), sandmap.window.body.x + sandmap.window.body.width + 10, 315)
                canvas_context.strokeText("Units: " + Math.round(this.units.length), sandmap.window.body.x + sandmap.window.body.width + 10, 290)
                canvas_context.fillText("Units: " + Math.round(this.units.length), sandmap.window.body.x + sandmap.window.body.width + 10, 290)
            }
        }
    }


    var gCanvas = document.getElementById("gCanvas");
    var gCanvasOffset;
    var gctx = gCanvas.getContext("2d");
    var CANVAS_WIDTH = 1280;
    var CANVAS_HEIGHT = 1280;
    var NODESIZE = 10;


    var path;

    var openSet = new Set();
    var closedSet = new Set();
    var gridPointsByPos = [];
    var gridPoints = [];

    var wallSet = new Set;

    //used to store the start and endPoint during resets, etc. 
    var startPoint;
    var endPoint;
    let mode = "endPoint"

    //any point in 2D space
    class Vec2 {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }


    gCanvasOffset = new Vec2(gCanvas.offsetLeft, gCanvas.offsetTop);


    // startPoint = new Vec2(bottle.crew[bottle.selectedcrew].body.x, bottle.crew[bottle.selectedcrew].body.y);
    endPoint = new Vec2(640, 640);

    class PathFindingAlg {
        constructor(grid, startNode, endNode, agent = {}) {
            this.agent = agent
            this.grid = grid;
            let gridarray = Array.from(grid)
            // for(let t = 0; t<gridarray.length; t++){
            //     for(let k = 0; k<gridarray[t].length; k++){

            //     }
            // }
            gridPointsByPos = [...this.grid]
            // this.startNode = gridPointsByPos[startNode.x][startNode.y];
            let roundedx = (Math.round((startNode.x))) * .1
            let roundedy = (Math.round((startNode.y))) * .1
            //////////////////////////console.log(gridPointsByPos, roundedx, roundedy)
            //////////////////////////////console.log(gridPointsByPos[roundedx] [roundedy])
            this.startNode = startNode // gridPointsByPos[roundedx] [roundedy]
            this.endNode = endNode //gridPointsByPos[endNode.x][endNode.y];
            this.currentNode = null;

            this.openSet = [];
            this.closedset = [];
            this.breaker = 0
        }
        findPath() {
            // this.breaker++
            // if(this.breaker > 1){
            //     return
            // }
            openSet.clear();
            closedSet.clear();

            var grid = this.grid; //the grid we're working with

            var currentNode = this.startNode; // the currentNode, defaults to start node for now
            ////////////////console.log(this.endNode)
            var endNode = this.endNode //sandmap.gridPoints[this.endNode.id]; //the target node
            var startNode = this.startNode

            var tempArray;

            var newMovementCost; //the new movement cost to neighbor

            openSet.add(currentNode);
            //   ////////////////////////console.log(currentNode)
            // currentNode.color = "black"
            // //////////////////////////////console.log('begin');

            let j = 0
            let timeout = 0
            while (openSet.size > 0) {
                j++
                if (j > 50000) {
                    timeout = 1
                }
                tempArray = Array.from(openSet);
                ////////////////////////console.log(tempArray)
                currentNode = tempArray[0];

                for (var i = 1; i < tempArray.length; i++) {
                    //this if statement is solely to build the starting walls.
                    if (tempArray[i].getValueF() < currentNode.getValueF() || tempArray[i].getValueF() == currentNode.getValueF() && tempArray[i].getValueH() < currentNode.getValueH()) {
                        currentNode = tempArray[i]; //sets the currentNode to openSetI if it has a lower F value, or an = F value with a lower HCost.
                        if (currentNode.walkable == false) {
                            j += 100
                        }
                    }
                }

                //exits for loop with either lowest F value or combined H value and F value

                openSet.delete(currentNode);

                // currentNode.drawClosedNode();

                closedSet.add(currentNode);

                //might need to put this after getNighbors.... then replace closedSet.hasIn(neighborNode with currentNode
                // if (currentNode.id == startNode.id) {
                //   currentNode.drawNode();
                // }
                // if (currentNode.id == endNode.id) {
                //   currentNode.drawNode();
                // }
                // if (currentNode.walkable == false) {
                //   currentNode.drawNode();
                // }

                ////////////////////////console.log(currentNode, endNode)
                // currentNode.color = "black"
                ////////////////console.log(currentNode, endNode)
                if (currentNode.id == endNode.id) {
                    //////////////console.log(startNode, endNode)
                    retracePath(startNode, endNode, this.agent);
                    //hit the last point, exit's the loop.

                    return; //exits loop
                } else if (timeout == 1) {

                    //////////////console.log(startNode, endNode)
                    retracePath(startNode, currentNode, this.agent);
                    //hit the last point, exit's the loop.

                    return; //exits loop
                }
                getNeighbors(currentNode, this.agent).forEach(function (neighbor) {

                    var neighborNode = neighbor;
                    var neighborH = neighborNode.getHCost();
                    var neighborG = neighborNode.getGCost();

                    var currentG = currentNode.getGCost();
                    var currentH = currentNode.getHCost();
                    if (neighborNode.occupied == true || ((!neighborNode.walkable && neighbor.agent.submerged !== 1) && (!neighborNode.walkable && (neighbor.agent.mounted !== 0))) || closedSet.has(neighborNode)) {

                        return; //acts as a continue, no need to continue if the wall was already checked.

                    }

                    newMovementCost = currentG + (getDistance(currentNode, neighborNode));

                    if (newMovementCost < neighborG || !openSet.has(neighborNode)) {

                        neighborNode.gCost = newMovementCost;
                        neighborNode.hCost = neighborH;
                        neighborNode.parent = currentNode;

                        if (!openSet.has(neighborNode)) {
                            //push the neighborNode to the openSet, to check against other open values
                            openSet.add(neighborNode);

                            // neighborNode.drawOpenNode();

                        }
                    }

                })
            }

        }

    }
    //distance from a node to  another node
    function getDistance(nodeA, nodeB) {
        // return distancetable[`${nodeA.x},${nodeB.y},${nodeA.x},${nodeB.y}`]
        var distX = Math.abs(nodeA.x - nodeB.x);
        var distY = Math.abs(nodeA.y - nodeB.y);

        if (distX > distY) {
            return ((1.4 * distY) + ((distX - distY)))

        }
        return (1.4 * distX + ((distY - distX)));
    }

    function retracePath(startNode, endNode, agent = {}) {
        path = new Set();
        var currentNode = endNode;
        var reverseArray;
        while (currentNode != startNode) {
            path.add(currentNode);
            //////////////console.log(currentNode)
            currentNode = currentNode.parent;
            //////////////console.log(currentNode)
            // currentNode.inPath = true;
            // if (currentNode != startNode)
            //     currentNode.drawPath();
        }

        reverseArray = Array.from(path);

        reverseArray.reverse();
        path = new Set(reverseArray);

        //   //////////////////////////////console.log(path)

        realPath = Array.from(path)
        //   //////////////////////////////console.log(realPath)

        if (realPath.length == 1) {
            // realPath[0].walkable = false
            ////////////////////////////console.log("hit")
            // wallSet.add(realPath[0])
            ////////////////////////////console.log(wallSet)
        }

        ////////////////////////console.log(realPath)
        if (realPath.length > 0) {
            realPath.unshift(agent.tile)
            agent.realPath = [...realPath]
            //   for(let t = 0;t<realPath.length;t++){
            //       realPath[t].color = "black"
            //   }
            // bottle.crew[bottle.selectedcrew].body.x =realPath[0].posx+105
            // bottle.crew[bottle.selectedcrew].body.y  = realPath[0].posy+285

            // startPoint = new Vec2(bottle.crew[bottle.selectedcrew].body.x, bottle.crew[bottle.selectedcrew].body.y);
            // startPoint = new Vec2(realPath[0].posx+100, realPath[0].posy+280);
            // bottle.crew[bottle.selectedcrew].body.x =startPoint.x+4
            // bottle.crew[bottle.selectedcrew].body.y  = startPoint.y+4
            // startPoint = new Vec2(realPath[0].posx, realPath[0].posy);
            //////////////////////////////console.log(startPoint)
            // bottle.crew[bottle.selectedcrew].moving = 1
        } else {
            //   //////////////////////////console.log(endPoint)

            //     if(bottle.crew[bottle.selectedcrew].moving == 1){
            //         // //////////////////////////console.log(endPoint)
            //     // bottle.crew[bottle.selectedcrew].body.x =endPoint.x+96
            //     // bottle.crew[bottle.selectedcrew].body.y  = endPoint.y+284
            //     // bottle.crew[bottle.selectedcrew].moving = 0
            //     // //////////////////////////console.log(endPoint)
            //         reset()
            //   }
        }
    }
    //list of neighbors
    function getNeighbors(node, agent, parent) {
        // ////////console.log(agent)
        var checkX;
        var checkY;
        var neighborList = [];
        var tempList = [];
        //   for (var x = -NODESIZE; x <= NODESIZE; x += NODESIZE) {
        //     for (var y = -NODESIZE; y <= NODESIZE; y += NODESIZE) {
        //       if (x == 0 && y == 0) {
        //         continue;
        //       }
        //       checkX = node.posx + x;
        //       checkY = node.posy + y;

        //       if (checkX >= 0 && checkX <= CANVAS_WIDTH - NODESIZE && checkY >= 0 && checkY <= CANVAS_HEIGHT - NODESIZE) {

        //         if(x == 0 || y == 0){

        //             if(checkX<=gridPointsByPos.length ){
        //                 if(checkY<=gridPointsByPos[checkX].length ){
        //                     if(sandmap.gridPoints[gridPointsByPos[checkX][checkY].id].walkable !== false){
        //                         tempList.push(gridPointsByPos[checkX][checkY]);
        //                     }

        //             }
        //         }
        //         }
        //       }
        //     }
        //   }


        for (var x = -1; x <= 1; x += 1) {
            for (var y = -1; y <= 1; y += 1) {
                if (x == 0 && y == 0) {
                    continue;
                }
                checkX = node.t + x;
                checkY = node.k + y;

                if (checkX >= 0 && checkX <= sandmap.blocks.length && checkY >= 0 && checkY <= sandmap.blocks.length) { //127 mapsize

                    if (x == 0 || y == 0 || Math.random() < .525) {  // randomness leads to organic //.25
                        ////////////////console.log(sandmap)
                        if (checkX < sandmap.blocks.length) {
                            if (checkY < sandmap.blocks[0].length) {
                                if ((sandmap.blocks[checkX][checkY].walkable !== false || agent.submerged == 1 || agent.mounted == 0) || sandmap.blocks[checkX][checkY].occupied == false) { //occupied? false?
                                    sandmap.blocks[checkX][checkY].agent = agent
                                    tempList.push(sandmap.blocks[checkX][checkY]);
                                }

                            }
                        }
                    }
                }
            }
        }


        neighborList = tempList;
        neighborList.agent = agent
        ////////////////////////console.log(neighborList)
        return (neighborList);

    }



    //UI, buttons, and click events/functions

    //tells canvas to how to draw the node
    function nodeDrawer(context, target, lineW, strokeS, fillS) {
        //   context.beginPath();
        //   context.lineWidth = lineW;
        //   context.strokeStyle = strokeS;
        //   context.fillStyle = fillS;
        //   context.fillRect(target.posx, target.posy, target.size, target.size);
        //   context.rect(target.posx, target.posy, target.size, target.size);
        //   context.closePath();
        //   context.stroke();
    }
    //clears the path WITHOUT clearing the walls
    function reset() {
        gridPoints = []; // resets the gridPoints so that it clears the walls etc. on reset.
        gridPointsByPos = [];
        openSet.clear();
        closedSet.clear();
        //gctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        grid.createGrid();

    }
    //resets everything INCLUDING walls
    function resetWalls() {

        wallSet.clear();
        reset();
    }


    let sandmap = new Sandmap(CANVAS_WIDTH, CANVAS_HEIGHT, 0, 0, []);

    class Building {
        constructor(tile, faction, size) {
            if (tile.id % 128 < 0) {
                tile = sandmap.gridPoints[tile.id + 1]
            }
            if (tile.id < 128) {
                tile = sandmap.gridPoints[tile.id + 128]
            }
            this.tile = tile
            this.tile.builtOn = 1
            this.timer = -1

            this.faction = faction
            this.tiles = []
            for (let t = -size; t <= size; t++) {
                for (let k = -size; k <= size; k++) {
                    this.tiles.push(sandmap.blocks[tile.t + t][tile.k + k])
                }
            }
            this.selected = 0
            this.health = 100
            this.maxhealth = this.health
            this.name = "Wall"
            // this.cost = 10
            // this.faction.hotrock -= this.cost
            this.body = new UnitCircle(this.tile.x + (this.tile.width * .5), this.tile.y + (this.tile.height * .5), 5, this.faction.color)
            this.faction.buildings.push(this)
        }

        see() {
            for (let t = -this.sight; t <= this.sight; t++) {
                for (let k = -this.sight; k <= this.sight; k++) {
                    if (this.tile.t + t >= 0) {
                        if (this.tile.k + k >= 0) {
                            if (this.tile.t + t < 128) {
                                if (this.tile.k + k < 128) {
                                    if (typeof (sandmap.blocks[this.tile.t + t] != undefined)) {
                                        if (typeof (sandmap.blocks[this.tile.t + t][this.tile.k + k] != undefined)) {
                                            this.faction.fog[this.tile.t + t][this.tile.k + k].color = "transparent"
                                            this.faction.fog[this.tile.t + t][this.tile.k + k].timer = 100
                                            this.faction.blocks[this.tile.t + t][this.tile.k + k].markdraw = 1
                                            if (!this.faction.seen.includes(sandmap.blocks[this.tile.t + t][this.tile.k + k])) {
                                                this.faction.seen.push(sandmap.blocks[this.tile.t + t][this.tile.k + k])
                                                if (sandmap.blocks[this.tile.t + t][this.tile.k + k].sourcerock >= 1) {
                                                    // this.faction.clickrate++
                                                    this.faction.seenrocks.push(sandmap.blocks[this.tile.t + t][this.tile.k + k])
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        makeHamartansoldier() {
            if (this.que != 1) {
                if (this.faction.hotrock >= 175 && this.faction.units.length < 51) {
                    if (this.assembler == 1) {
                        this.faction.hotrock -= 175
                        this.que = 1
                        this.soldier = 1
                        this.timer = 95 //115
                        this.maxtimer = this.timer
                    }
                }
            }
        }
        makeHamartanscout() {
            if (this.que != 1) {
                if (this.faction.hotrock >= 75 && this.faction.units.length < 51) {
                    if (this.assembler == 2) {
                        this.faction.hotrock -= 75
                        this.que = 1
                        this.scout = 1
                        this.timer = 85
                        this.maxtimer = this.timer
                    }
                }
            }
        }
        makeHamartanworker() {
            if (this.que != 1) {
                if (this.faction.hotrock >= 145 && this.faction.units.length < 51) {
                    if (this.assembler == 3) {
                        this.faction.hotrock -= 145
                        this.que = 1
                        this.worker = 1
                        this.timer = 20
                        this.maxtimer = this.timer
                    }
                }
            }
        }
        makeLibrilbianpollinator() {
            if (this.que != 1) {
                if (this.faction.hotrock >= 85 && this.faction.units.length < 51) {
                    if (this.bulbplant == 1) {
                        this.faction.hotrock -= 85
                        this.que = 1
                        this.pollinator = 1
                        this.timer = 100
                        this.maxtimer = this.timer
                    }
                }
            }
        }
        makeLibrilbianpodman() {
            if (this.que != 1) {
                if (this.faction.hotrock >= 140 && this.faction.units.length < 51) {
                    if (this.bulbplant == 2) {
                        this.faction.hotrock -= 140 //170
                        this.que = 1
                        this.podman = 1
                        this.timer = 180
                        this.maxtimer = this.timer
                    }
                }
            }
        }
        makeLibrilbiangoliophyte() {
            if (this.que != 1) {
                if (this.faction.hotrock >= 355 && this.faction.units.length < 51) {
                    if (this.bulbplant == 2) {
                        this.faction.hotrock -= 355
                        this.que = 1
                        this.goliophyte = 1
                        this.timer = 290
                        this.maxtimer = this.timer
                    }
                }
            }
        }
        makeLibrilbianpufffellow() {
            if (this.que != 1) {
                if (this.faction.hotrock >= 90 && this.faction.units.length < 51) {
                    if (this.bulbplant == 2) {
                        this.faction.hotrock -= 90
                        this.que = 1
                        this.pufffellow = 1
                        this.timer = 50
                        this.maxtimer = this.timer
                    }
                }
            }
        }
        makeHamartaninvader() {
            if (this.que != 1) {
                if (this.faction.hotrock >= 340 && this.faction.units.length < 51) {
                    if (this.assembler == 3) {
                        this.faction.hotrock -= 340
                        this.que = 1
                        this.invader = 1
                        this.timer = 190 //270
                        this.maxtimer = this.timer
                    }
                }
            }
        }
        makeScout() {
            if (this.que != 1) {
                if (this.faction.hotrock >= 30 && this.faction.units.length < 51) {
                    this.faction.hotrock -= 30
                    this.que = 1
                    this.drone = 1
                    this.timer = 25
                    this.maxtimer = this.timer
                }
            }
        }
        finishScout() {
            if (Math.random() < soundspamdrop) {
                if (sandmap.players.indexOf(this.faction) == sandmap.turn) {
                    soundCancel()
                    online.play()
                }
            }
            let agent1 = new Agent(this.tile, this.faction)
            agent1.isScout()
        }
        finishHamartansoldier() {
            if (Math.random() < soundspamdrop) {
                if (sandmap.players.indexOf(this.faction) == sandmap.turn) {
                    soundCancel()
                    testroom.play()
                }
            }
            let agent1 = new Agent(this.tile, this.faction)
            agent1.isHamartansoldier()
        }
        finishHamartanscout() {
            if (Math.random() < soundspamdrop) {
                if (sandmap.players.indexOf(this.faction) == sandmap.turn) {
                    soundCancel()
                }
            }
            let agent1 = new Agent(this.tile, this.faction)
            agent1.isHamartanscout()
        }
        finishLibrilbianpollinator() {
            if (Math.random() < soundspamdrop) {
                if (sandmap.players.indexOf(this.faction) == sandmap.turn) {
                    soundCancel()
                }
            }
            let agent1 = new Agent(this.tile, this.faction)
            agent1.isPollinator()
        }
        finishLibrilbianpodman() {
            if (Math.random() < soundspamdrop) {
                if (sandmap.players.indexOf(this.faction) == sandmap.turn) {
                    soundCancel()
                    youworkforme.play()
                }
            }
            let agent1 = new Agent(this.tile, this.faction)
            agent1.isPodman()
        }
        finishLibrilbiangoliophyte() {
            if (Math.random() < soundspamdrop) {
                if (sandmap.players.indexOf(this.faction) == sandmap.turn) {
                    soundCancel()
                }
            }
            let agent1 = new Agent(this.tile, this.faction)
            agent1.isGoliophyte()
        }
        finishLibrilbianpufffellow() {
            if (Math.random() < soundspamdrop) {
                if (sandmap.players.indexOf(this.faction) == sandmap.turn) {
                    soundCancel()
                }
            }
            let agent1 = new Agent(this.tile, this.faction)
            agent1.isPufffellow()
        }
        finishHamartaninvader() {
            if (Math.random() < soundspamdrop) {
                if (sandmap.players.indexOf(this.faction) == sandmap.turn) {
                    soundCancel()
                    iamerror.play()
                }
            }
            let agent1 = new Agent(this.tile, this.faction)
            agent1.isHamartaninvader()
        }
        finishHamartanworker() {
            if (Math.random() < soundspamdrop) {
                if (sandmap.players.indexOf(this.faction) == sandmap.turn) {
                    soundCancel()
                }
            }
            let agent1 = new Agent(this.tile, this.faction)
            agent1.isHamartanworker()
        }
        makeInfantry() {
            if (this.que != 1) {
                if (this.faction.hotrock >= 85 && this.faction.units.length < 51) {
                    this.faction.hotrock -= 85
                    this.que = 1
                    this.infantry = 1
                    this.timer = 45 //70
                    this.maxtimer = this.timer
                }
            }
        }
        makeSniper() {
            if (this.que != 1) {
                if (this.faction.hotrock >= 290 && this.faction.units.length < 51) {
                    this.faction.hotrock -= 290
                    this.que = 1
                    this.sniper = 1
                    this.timer = 200
                    this.maxtimer = this.timer
                }
            }
        }
        finishInfantry() {
            if (Math.random() < soundspamdrop) {
                if (sandmap.players.indexOf(this.faction) == sandmap.turn) {
                    soundCancel()
                    reporting.play()
                }
            }
            let agent1 = new Agent(this.tile, this.faction)
            agent1.isInfantry()
        }
        finishSniper() {
            if (Math.random() < soundspamdrop) {
                if (sandmap.players.indexOf(this.faction) == sandmap.turn) {
                    soundCancel()
                    if (Math.random() < .5) {
                        youunderstandany.play()
                    } else {
                        idontunderstand.play()
                    }
                }
            }
            let agent1 = new Agent(this.tile, this.faction)
            agent1.isSniper()
        }
        makeHarvester() {

            if (this.que != 1) {
                if (this.faction.hotrock >= 160 && this.faction.units.length < 51) {
                    this.faction.hotrock -= 160
                    this.que = 1
                    this.harvester = 1
                    this.timer = 140
                    this.maxtimer = this.timer
                }
            }
        }
        finishHarvester() {
            if (Math.random() < soundspamdrop) {
                if (sandmap.players.indexOf(this.faction) == sandmap.turn) {
                    soundCancel()
                    systems.play()
                }
            }
            let agent1 = new Agent(this.tile, this.faction)
            agent1.isHarvester()
        }

        dataOutput() {
            if (dataflop == 0) {
                dataflop = 1
                canvas_context.fillStyle = this.faction.color
                canvas_context.font = "18px arial"

                canvas_context.fillStyle = "black"
                canvas_context.strokeStyle = sandmap.players[sandmap.turn].color
                canvas_context.lineWidth = 1.5
                canvas_context.font = "18px arial"
                canvas_context.strokeText(this.name + " " + Math.ceil(this.health) + "/" + this.maxhealth, sandmap.window.body.x + sandmap.window.body.width + 10, 25)
                canvas_context.fillText(this.name + " " + Math.ceil(this.health) + "/" + this.maxhealth, sandmap.window.body.x + sandmap.window.body.width + 10, 25)

                canvas_context.strokeText("Attack " + Math.ceil(this.damage), sandmap.window.body.x + sandmap.window.body.width + 10, 85)
                canvas_context.fillText("Attack " + Math.ceil(this.damage), sandmap.window.body.x + sandmap.window.body.width + 10, 85)
                canvas_context.strokeText("Defense " + Math.ceil(this.defense), sandmap.window.body.x + sandmap.window.body.width + 10, 115)
                canvas_context.fillText("Defense " + Math.ceil(this.defense), sandmap.window.body.x + sandmap.window.body.width + 10, 115)
                if (this.barracks == 1) {
                    canvas_context.strokeText("Units", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                    canvas_context.fillText("Units", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                    this.spawnsmall = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 10, 125, 90, 50, "black")
                    this.spawnsmall.draw()
                    canvas_context.drawImage(infantry, 0, 0, 10, 10, this.spawnsmall.x + 10, this.spawnsmall.y + 5, 30, 30)
                    // this.spawnmedium = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 110, 125, 90, 50, "black")
                    // this.spawnmedium.draw()
                    // canvas_context.drawImage(infantry, 0, 0, 10, 10, this.spawnmedium.x + 10, this.spawnmedium.y + 5, 30, 30)
                    this.spawnbig = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 210, 125, 90, 50, "black")
                    this.spawnbig.draw()
                    canvas_context.drawImage(sniper1, 0, 0, 10, 10, this.spawnbig.x + 10, this.spawnbig.y + 5, 30, 30)


                    canvas_context.fillStyle = "white"
                    canvas_context.font = "12px arial"
                    // canvas_context.fillText("Drone: 30", this.spawnsmall.x + 1, this.spawnsmall.y + 46)
                    canvas_context.fillText("Infantry: 85", this.spawnsmall.x + 1, this.spawnsmall.y + 46)
                    canvas_context.fillText("Sniper: 290", this.spawnbig.x + 1, this.spawnbig.y + 46)
                    // canvas_context.fillText("Drone: 30")
                    // canvas_context.fillText("Drone: 30")
                    if (this.timer > 0) {
                        canvas_context.drawImage(progress, 0, (250 - (Math.round((this.timer / this.maxtimer) * 250))), progress.width, 10, sandmap.window.minibody.x, 185, 250, 10)
                    }
                }
                if (this.assembler == 1) {
                    canvas_context.strokeText("Units", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                    canvas_context.fillText("Units", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                    this.spawnsmall = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 10, 125, 90, 50, "black")
                    this.spawnsmall.draw()
                    canvas_context.drawImage(hamartansoldier, 0, 0, 10, 10, this.spawnsmall.x + 10, this.spawnsmall.y + 5, 30, 30)
                    // this.spawnmedium = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 110, 125, 90, 50, "black")
                    // this.spawnmedium.draw()
                    // canvas_context.drawImage(infantry, 0, 0, 10, 10, this.spawnmedium.x + 10, this.spawnmedium.y + 5, 30, 30)
                    this.spawnbig = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 210, 125, 90, 50, "black")
                    // this.spawnbig.draw()
                    // canvas_context.drawImage(sniper1, 0, 0, 10, 10, this.spawnbig.x + 10, this.spawnbig.y + 5, 30, 30)


                    canvas_context.fillStyle = "white"
                    canvas_context.font = "12px arial"
                    // canvas_context.fillText("Drone: 30", this.spawnsmall.x + 1, this.spawnsmall.y + 46)
                    canvas_context.fillText("Soldier: 175", this.spawnsmall.x + 1, this.spawnsmall.y + 46)
                    // canvas_context.fillText("Sniper: 360", this.spawnbig.x + 1, this.spawnbig.y + 46)
                    // canvas_context.fillText("Drone: 30")
                    // canvas_context.fillText("Drone: 30")
                    if (this.timer > 0) {
                        canvas_context.drawImage(progress, 0, (250 - (Math.round((this.timer / this.maxtimer) * 250))), progress.width, 10, sandmap.window.minibody.x, 185, 250, 10)
                    }
                }
                if (this.assembler == 2) {
                    canvas_context.strokeText("Units", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                    canvas_context.fillText("Units", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                    this.spawnsmall = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 10, 125, 90, 50, "black")
                    this.spawnsmall.draw()
                    canvas_context.drawImage(hamartanscout, 0, 0, 10, 10, this.spawnsmall.x + 10, this.spawnsmall.y + 5, 30, 30)
                    // this.spawnmedium = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 110, 125, 90, 50, "black")
                    // this.spawnmedium.draw()
                    // canvas_context.drawImage(infantry, 0, 0, 10, 10, this.spawnmedium.x + 10, this.spawnmedium.y + 5, 30, 30)
                    this.spawnbig = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 210, 125, 90, 50, "black")
                    // this.spawnbig.draw()
                    // canvas_context.drawImage(sniper1, 0, 0, 10, 10, this.spawnbig.x + 10, this.spawnbig.y + 5, 30, 30)


                    canvas_context.fillStyle = "white"
                    canvas_context.font = "12px arial"
                    // canvas_context.fillText("Drone: 30", this.spawnsmall.x + 1, this.spawnsmall.y + 46)
                    canvas_context.fillText("Scout: 75", this.spawnsmall.x + 1, this.spawnsmall.y + 46)
                    // canvas_context.fillText("Sniper: 360", this.spawnbig.x + 1, this.spawnbig.y + 46)
                    // canvas_context.fillText("Drone: 30")
                    // canvas_context.fillText("Drone: 30")
                    if (this.timer > 0) {
                        canvas_context.drawImage(progress, 0, (250 - (Math.round((this.timer / this.maxtimer) * 250))), progress.width, 10, sandmap.window.minibody.x, 185, 250, 10)
                    }
                }
                if (this.bulbplant == 1) {
                    canvas_context.strokeText("Units", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                    canvas_context.fillText("Units", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                    this.spawnsmall = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 10, 125, 90, 50, "black")
                    this.spawnsmall.draw()
                    canvas_context.drawImage(librilbianpollinator, 0, 0, 10, 10, this.spawnsmall.x + 10, this.spawnsmall.y + 5, 30, 30)
                    // this.spawnmedium = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 110, 125, 90, 50, "black")
                    // this.spawnmedium.draw()
                    // canvas_context.drawImage(infantry, 0, 0, 10, 10, this.spawnmedium.x + 10, this.spawnmedium.y + 5, 30, 30)
                    this.spawnbig = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 210, 125, 90, 50, "black")
                    // this.spawnbig.draw()
                    // canvas_context.drawImage(sniper1, 0, 0, 10, 10, this.spawnbig.x + 10, this.spawnbig.y + 5, 30, 30)


                    canvas_context.fillStyle = "white"
                    canvas_context.font = "12px arial"
                    // canvas_context.fillText("Drone: 30", this.spawnsmall.x + 1, this.spawnsmall.y + 46)
                    canvas_context.fillText("Pollinator: 85", this.spawnsmall.x + 1, this.spawnsmall.y + 46)
                    // canvas_context.fillText("Sniper: 360", this.spawnbig.x + 1, this.spawnbig.y + 46)
                    // canvas_context.fillText("Drone: 30")
                    // canvas_context.fillText("Drone: 30")
                    if (this.timer > 0) {
                        canvas_context.drawImage(progress, 0, (250 - (Math.round((this.timer / this.maxtimer) * 250))), progress.width, 10, sandmap.window.minibody.x, 185, 250, 10)
                    }
                }
                if (this.bulbplant == 2) {
                    canvas_context.strokeText("Units", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                    canvas_context.fillText("Units", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                    this.spawnsmall = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 10, 125, 90, 50, "black")
                    this.spawnsmall.draw()
                    canvas_context.drawImage(librilbianpufffellow, 0, 0, 10, 10, this.spawnsmall.x + 10, this.spawnsmall.y + 5, 30, 30)
                    this.spawnmedium = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 110, 125, 90, 50, "black")
                    this.spawnmedium.draw()
                    canvas_context.drawImage(librilbianpodman, 0, 0, 10, 10, this.spawnmedium.x + 10, this.spawnmedium.y + 5, 30, 30)
                    this.spawnbig = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 210, 125, 90, 50, "black")
                    this.spawnbig.draw()
                    canvas_context.drawImage(librilbiangoliophyte, 0, 0, 10, 10, this.spawnbig.x + 10, this.spawnbig.y + 5, 30, 30)


                    canvas_context.fillStyle = "white"
                    canvas_context.font = "12px arial"
                    // canvas_context.fillText("Drone: 30", this.spawnsmall.x + 1, this.spawnsmall.y + 46)
                    canvas_context.fillText("Puff-Fellow: 90", this.spawnsmall.x + 1, this.spawnsmall.y + 46)
                    canvas_context.fillText("Podman: 140", this.spawnmedium.x + 1, this.spawnmedium.y + 46)
                    canvas_context.fillText("Golophyte: 355", this.spawnbig.x + 1, this.spawnbig.y + 46)
                    // canvas_context.fillText("Drone: 30")
                    // canvas_context.fillText("Drone: 30")
                    if (this.timer > 0) {
                        canvas_context.drawImage(progress, 0, (250 - (Math.round((this.timer / this.maxtimer) * 250))), progress.width, 10, sandmap.window.minibody.x, 185, 250, 10)
                    }
                }
                if (this.assembler == 3) {
                    canvas_context.strokeText("Units", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                    canvas_context.fillText("Units", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                    this.spawnsmall = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 10, 125, 90, 50, "black")
                    this.spawnsmall.draw()
                    canvas_context.drawImage(hamartanworker, 0, 0, 10, 10, this.spawnsmall.x + 10, this.spawnsmall.y + 5, 30, 30)
                    // this.spawnmedium = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 110, 125, 90, 50, "black")
                    // this.spawnmedium.draw()
                    // canvas_context.drawImage(infantry, 0, 0, 10, 10, this.spawnmedium.x + 10, this.spawnmedium.y + 5, 30, 30)
                    this.spawnbig = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 210, 125, 90, 50, "black")
                    this.spawnbig.draw()
                    canvas_context.drawImage(hamartaninvader, 0, 0, 10, 10, this.spawnbig.x + 10, this.spawnbig.y + 5, 30, 30)


                    canvas_context.fillStyle = "white"
                    canvas_context.font = "12px arial"
                    // canvas_context.fillText("Drone: 30", this.spawnsmall.x + 1, this.spawnsmall.y + 46)
                    canvas_context.fillText("Worker: 145", this.spawnsmall.x + 1, this.spawnsmall.y + 46)
                    canvas_context.fillText("Invader: 340", this.spawnbig.x + 1, this.spawnbig.y + 46)
                    // canvas_context.fillText("Drone: 30")
                    // canvas_context.fillText("Drone: 30")
                    if (this.timer > 0) {
                        canvas_context.drawImage(progress, 0, (250 - (Math.round((this.timer / this.maxtimer) * 250))), progress.width, 10, sandmap.window.minibody.x, 185, 250, 10)
                    }
                }
                if (this.barracks == 2) {
                    canvas_context.strokeText("Units", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                    canvas_context.fillText("Units", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                    this.spawnsmall = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 10, 125, 90, 50, "black")
                    this.spawnsmall.draw()
                    canvas_context.drawImage(drone, 0, 0, 10, 10, this.spawnsmall.x + 10, this.spawnsmall.y + 5, 30, 30)
                    // this.spawnmedium = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 110, 125, 90, 50, "black")
                    // this.spawnmedium.draw()
                    // canvas_context.drawImage(infantry, 0, 0, 10, 10, this.spawnmedium.x + 10, this.spawnmedium.y + 5, 30, 30)
                    this.spawnbig = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 210, 125, 90, 50, "black")
                    this.spawnbig.draw()
                    canvas_context.drawImage(harvester, 0, 0, 10, 10, this.spawnbig.x + 10, this.spawnbig.y + 5, 30, 30)


                    canvas_context.fillStyle = "white"
                    canvas_context.font = "13px arial"
                    canvas_context.fillText("Drone: 30", this.spawnsmall.x + 1, this.spawnsmall.y + 46)
                    // canvas_context.fillText("Infantry: 90", this.spawnmedium.x + 1, this.spawnmedium.y + 46)
                    canvas_context.fillText("Harvester: 160", this.spawnbig.x + 1, this.spawnbig.y + 46)
                    // canvas_context.fillText("Drone: 30")
                    // canvas_context.fillText("Drone: 30")
                    if (this.timer > 0) {
                        canvas_context.drawImage(progress, 0, (250 - (Math.round((this.timer / this.maxtimer) * 250))), progress.width, 10, sandmap.window.minibody.x, 185, 250, 10)
                    }
                }
                if (this.gate == 1) {
                    if (this.open == 1) {
                        canvas_context.strokeText("Status: Open", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                        canvas_context.fillText("Status: Open", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                    } else {
                        canvas_context.strokeText("Status: Closed", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                        canvas_context.fillText("Status: Closed", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                    }
                    this.spawnsmall = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 10, 125, 90, 50, "black")
                    this.spawnsmall.draw()
                    // this.spawnmedium = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 110, 125, 90, 50, "black")
                    // this.spawnmedium.draw()
                    // canvas_context.drawImage(infantry, 0, 0, 10, 10, this.spawnmedium.x + 10, this.spawnmedium.y + 5, 30, 30)
                    this.spawnbig = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 210, 125, 90, 50, "black")
                    // this.spawnbig.draw()
                    // canvas_context.drawImage(harvester, 0, 0, 10, 10, this.spawnbig.x + 10, this.spawnbig.y + 5, 30, 30)

                    canvas_context.fillStyle = "white"
                    canvas_context.font = "22px arial"

                    if (this.open == 1) {
                        canvas_context.fillText("Close", this.spawnsmall.x + 5, this.spawnsmall.y + 32)
                    } else {
                        canvas_context.fillText("Open", this.spawnsmall.x + 15, this.spawnsmall.y + 32)
                    }

                }
            }
        }
        draw() {
            if (this.bulbplant == 1) {
                this.sight = 10
                this.see()
            }
            if (this.barracks >= 1 || this.assembler >= 1 || this.bulbplant >= 1) {
                this.timer--
                if (this.timer == 0) {
                    if (this.drone == 1) {
                        this.que = 0
                        this.drone = 0
                        this.finishScout()
                    }
                    if (this.infantry == 1) {
                        this.infantry = 0
                        this.que = 0
                        this.finishInfantry()
                    }
                    if (this.harvester == 1) {
                        this.harvester = 0
                        this.que = 0
                        this.finishHarvester()
                    }
                    if (this.sniper == 1) {
                        this.sniper = 0
                        this.que = 0
                        this.finishSniper()
                    }
                    if (this.soldier == 1) {
                        this.soldier = 0
                        this.que = 0
                        this.finishHamartansoldier()
                    }
                    if (this.scout == 1) {
                        this.scout = 0
                        this.que = 0
                        this.finishHamartanscout()
                    }
                    if (this.worker == 1) {
                        this.worker = 0
                        this.que = 0
                        this.finishHamartanworker()
                    }
                    if (this.invader == 1) {
                        this.invader = 0
                        this.que = 0
                        this.finishHamartaninvader()
                    }
                    if (this.pollinator == 1) {
                        this.pollinator = 0
                        this.que = 0
                        this.finishLibrilbianpollinator()
                    }
                    if (this.podman == 1) {
                        this.podman = 0
                        this.que = 0
                        this.finishLibrilbianpodman()
                    }
                    if (this.goliophyte == 1) {
                        this.goliophyte = 0
                        this.que = 0
                        this.finishLibrilbiangoliophyte()
                    }
                    if (this.pufffellow == 1) {
                        this.pufffellow = 0
                        this.que = 0
                        this.finishLibrilbianpufffellow()
                    }
                }
            }















            for (let t = 0; t < this.tiles.length; t++) {
                this.tiles[t].walkable = false

                if (this.open == 1) {
                    this.tiles[t].builtOn = 0
                    this.tiles[t].walkable = true
                }
                if (this.open == -1) {
                    this.tiles[t].builtOn = 1
                    this.tiles[t].walkable = false
                }


                this.tiles[t].color = this.faction.color  // this.faction.color
                if (this.barracks == 1) {
                    map_context.drawImage(barracks, this.tiles[t].x, this.tiles[t].y)
                } else if (this.barracks == 2) {
                    map_context.drawImage(machinelab, this.tiles[t].x, this.tiles[t].y)
                } else if (this.spire == 1) {
                    map_context.drawImage(spire, (this.tiles[t].counter % 5) * 10, 0, 10, 10, this.tiles[t].x, this.tiles[t].y, 10, 10)
                    this.body.draw()
                    this.bodybig.draw()
                } else if (this.assembler == 1) {
                    map_context.drawImage(assembler1, (this.tiles[t].counter % 10), 0, 10, 10, this.tiles[t].x, this.tiles[t].y, 10, 10)
                } else if (this.assembler == 2) {
                    map_context.drawImage(assembler2, this.tiles[t].x, this.tiles[t].y)
                } else if (this.assembler == 3) {
                    map_context.drawImage(assembler3, this.tiles[t].x, this.tiles[t].y)
                } else if (this.bulbplant == 1) {
                    map_context.drawImage(librilbianbulbplant, this.tiles[t].x, this.tiles[t].y)
                } else if (this.bulbplant == 2) {
                    map_context.drawImage(librilbianpodmother, this.tiles[t].x, this.tiles[t].y)
                } else if (this.gate == 1) {
                    if (this.open == -1) {
                        map_context.drawImage(closedgate, this.tiles[t].x, this.tiles[t].y)
                    } else {
                        map_context.drawImage(opengate, this.tiles[t].x, this.tiles[t].y)
                    }
                } else {
                    map_context.drawImage(icewall, this.tiles[t].x, this.tiles[t].y)
                }
                if (this.selected == 1) {
                    this.tiles[t].wallcolor = "black"
                } else {
                    // this.tiles[t].wallcolor = this.faction.color
                    this.tiles[t].wallcolor = "transparent"
                }
            }
            if (this.selected == 1) {
                if (sandmap.turn == sandmap.players.indexOf(this.faction)) {
                    this.dataOutput()
                }
            } else {
                this.spawnsmall = new UiRectangle(0, 0, 0, 0, "red")
                this.spawnmedium = new UiRectangle(0, 0, 0, 0, "red")
                this.spawnbig = new UiRectangle(0, 0, 0, 0, "red")
            }

        }
        clean() {
            if (this.health <= 0) {
                this.tile.walkable = 1
                this.tile.color = "#AACCFF"
                delete this.tile.wallcolor
                if (this.barracks == 1) {
                    this.faction.racks = 0
                }
                if (this.assembler == 3) {
                    this.faction.racks = 0
                }
                if (this.assembler == 1) {
                    this.faction.lab = 0
                }
                if (this.assembler == 2) {
                    this.faction.lab = 0
                }
                if (this.barracks == 2) {
                    this.faction.lab = 0
                }
                if (this.bulbplant == 1) {
                    this.faction.racks = 0
                }
                if (this.bulbplant == 2) {
                    this.faction.lab = 0
                }

                this.tile.spiretile = 0
                this.tile.builtOn = 0
                this.tile.dirt = 0
                this.faction.buildings.splice(this.faction.buildings.indexOf(this), 1)
            }
        }
    }
    class Agent {
        constructor(tile, player) {
            this.stacksnap = 0
            this.aircheck = Math.floor(Math.random() * 10)
            this.swing = 0
            this.swingout = 1 //5
            this.stepout = 1
            this.selected = 0
            this.faction = player
            this.tile = tile
            this.movespeedcount = 0
            this.movespeed = Math.floor(Math.random() * 3) + 2
            // this.pather = astar.search(sandmap, this.tile, this.tile)
            this.body = new UnitCircle(this.tile.x + (this.tile.width * .5), this.tile.y + (this.tile.height * .5), 5, this.faction.color)
            this.faction.units.push(this)
            this.index = 0
            this.realPath = [this.tile]
            this.repath = 0
            this.repathsnap = 0
            this.sight = 1 + this.movespeed
            this.damage = this.body.radius
            this.firerate = (this.movespeed * 5)
            this.attackrange = this.sight - 1
            this.decayRate = (this.sight * this.movespeed) * .05
            this.health = this.sight * 100
            this.maxhealth = this.health
            this.shots = []
            this.attacktarget = {}
            this.attacktarget.health = 0
            this.attacktargetmove = {}
            this.attacktargetmove.health = 0
            this.attackcounter = 0
            this.projectilespeed = 7 // 9
            this.name = "agent"
            if (this.faction.type == 2) {
                if (this.faction.units.length == 1) {
                    this.isHamartanscout()
                }
                if (this.faction.units.length == 2) {
                    this.isHamartanworker()
                }
                if (this.faction.units.length == 3) {
                    this.isHamartansoldier()
                }

            } else if (this.faction.type == 1) {
                this.isNymph()
                if (this.faction.units.length == 2) {
                    this.finishMorph2()
                }
            } else if (this.faction.type == 3) {

                if (this.faction.units.length == 1) {
                    this.isPollinator()
                }
                if (this.faction.units.length == 2) {
                    this.isPufffellow()
                }
                if (this.faction.units.length == 3) {
                    this.isGoliophyte()
                }
            } else {
                if (start == 0) {
                    if (this.faction.units.length == 1) {
                        this.isScout()
                    }
                    if (this.faction.units.length == 2) {
                        this.isInfantry()
                    }
                    if (this.faction.units.length == 3) {
                        this.isHarvester()
                    }
                }
            }
        }
        isPollinator() {
            this.body.color = "teal"
            this.body.radius = 4
            this.movespeed = 1 //2 and 3 too high?
            this.firerate = 6
            this.decayRate = 0
            this.damage = (this.body.radius * 1.5) + 1
            this.name = "Librilbian Pollinator"
            this.pollinator = 1
            this.defense = 0
            this.sight = 3 + this.movespeed
            this.attackrange = this.sight - 1
            this.maxhealth = this.health
            this.shots = []
            this.attacktarget = {}
            this.attacktarget.health = 0
            this.attackcounter = 0
            this.health = 170
            this.maxhealth = this.health
        }
        isGoliophyte() {
            this.body.color = "teal"
            this.body.radius = 5.5
            this.movespeed = 8
            this.firerate = 6 //7
            this.decayRate = 0
            this.damage = (this.body.radius * 4.5) + 1
            this.name = "Librilbian Golophyte"
            this.goliophyte = 1
            this.defense = 14
            this.sight = 2 + this.movespeed
            this.attackrange = this.sight - 1
            this.maxhealth = this.health
            this.shots = []
            this.attacktarget = {}
            this.attacktarget.health = 0
            this.attackcounter = 0
            this.health = 1700
            this.maxhealth = this.health
        }
        isPodman() {
            this.body.color = "teal"
            this.body.radius = 4
            this.movespeed = 4
            this.firerate = 3 //4
            this.decayRate = 0
            this.damage = (43 / 3)
            this.name = "Librilbian Podman"
            this.podman = 1
            this.defense = 7
            this.sight = 2 + this.movespeed
            this.attackrange = this.sight - 1
            this.maxhealth = this.health
            this.shots = []
            this.attacktarget = {}
            this.attacktarget.health = 0
            this.attackcounter = 0
            this.health = 990 //510 //490 //890
            this.maxhealth = this.health
        }
        isPufffellow() {
            this.pollinator = 0
            this.body.color = "teal"
            this.body.radius = 4.7
            this.movespeed = 2
            this.firerate = 4//4 //lmao 4.7
            this.decayRate = 0
            this.damage = (this.body.radius * 2.6) + 0  //2.1 // +1
            this.name = "Librilbian Puff-Fellow"
            this.pufffellow = 1
            this.defense = 4
            this.sight = 2 + this.movespeed
            this.attackrange = this.sight - 1
            this.maxhealth = this.health
            this.shots = []
            this.attacktarget = {}
            this.attacktarget.health = 0
            this.attackcounter = 0
            this.health = 440//300 //530 //470
            this.maxhealth = this.health
        }
        isNymph() {
            this.body.color = "teal"
            this.body.radius = 4
            this.movespeed = 1
            this.firerate = 2 //3 make more viable in combat
            this.decayRate = 0
            this.damage = (this.body.radius * 2.75) + 1
            this.name = "Nymph"
            this.nymph = 1
            this.defense = 3
            this.sight = 2 + this.movespeed
            // this.firerate = (this.movespeed * 5)
            this.attackrange = this.sight - 1
            // this.health = this.sight * 100
            this.maxhealth = this.health
            this.shots = []
            this.attacktarget = {}
            this.attacktarget.health = 0
            this.attackcounter = 0
            this.health = 70
            this.maxhealth = this.health
        }
        isScout() {
            this.drone = 1
            this.movespeed = 2
            this.body.color = "red"
            this.body.radius = 4
            this.defense = 1
            this.damage = this.body.radius
            this.name = "Scout Drone"
            this.sight = 3 + this.movespeed
            this.damage = this.body.radius
            this.firerate = 4  // 9//(this.movespeed * 5)
            this.attackrange = this.sight - 1
            this.health = (this.sight - 2) * 100
            this.maxhealth = this.health
            this.shots = []
            this.attacktarget = {}
            this.attacktarget.health = 0
            this.attackcounter = 0
            this.decayRate = ((this.sight - 2) * this.movespeed) * .015
            this.health = 100
            this.maxhealth = this.health
        }
        isHamartanworker() {
            this.hamartanworker = 1
            this.hamartansoldier = 0
            this.movespeed = 3 //too high?
            this.body.color = "red"
            this.body.radius = 4
            this.defense = 1
            this.damage = this.body.radius
            this.name = "Hamartan Worker"
            this.sight = 4
            this.damage = this.body.radius
            this.firerate = 7  // 9//(this.movespeed * 5) //10
            this.attackrange = this.sight - 1
            this.health = (this.sight - 2) * 100
            this.maxhealth = this.health
            this.shots = []
            this.attacktarget = {}
            this.attacktarget.health = 0
            this.attackcounter = 0
            this.decayRate = .09
        }
        isHamartaninvader() {
            this.hamartaninvader = 1
            this.hamartansoldier = 0
            this.movespeed = 7
            this.body.color = "red"
            this.body.radius = 4.5
            this.defense = 12 //14 //19
            this.damage = this.body.radius * 7
            this.name = "Hamartan Invader"
            this.sight = 6
            this.firerate = 7   // 9//(this.movespeed * 5) // 7? //6? - 7
            this.attackrange = this.sight
            this.health = (this.sight - 1) * 420  //-1 //1.5
            this.maxhealth = this.health
            this.shots = []
            this.attacktarget = {}
            this.attacktarget.health = 0
            this.attackcounter = 0
            this.decayRate = .07
        }
        isHamartansoldier() {
            this.hamartansoldier = 1
            this.movespeed = 4 //5
            this.body.color = "red"
            this.body.radius = 4
            this.defense = 11 //9 //13
            this.damage = this.body.radius * 3.25 //2.9
            this.name = "Hamartan Soldier"
            this.sight = 7
            this.firerate = 3  // 9//(this.movespeed * 5) //4
            this.attackrange = this.sight
            this.health = (this.sight - 2) * 170
            this.maxhealth = this.health
            this.shots = []
            this.attacktarget = {}
            this.attacktarget.health = 0
            this.attackcounter = 0
            this.decayRate = .09
        }
        isHamartanscout() {
            this.hamartanscout = 1
            this.hamartansoldier = 0
            this.movespeed = 9 //13
            this.body.color = "red"
            this.body.radius = 4
            this.defense = 25
            this.damage = 3
            this.name = "Hamartan Scout"
            this.sight = 12
            this.firerate = 1  // 9//(this.movespeed * 5) //20 lmao
            this.attackrange = this.sight - 5
            this.health = (this.sight - 2) * 9
            this.maxhealth = this.health
            this.shots = []
            this.attacktarget = {}
            this.attacktarget.health = 0
            this.attackcounter = 0
            this.decayRate = .05
        }
        isInfantry() {
            this.infantry = 1
            this.movespeed = 3 //4
            this.body.color = "magenta"
            this.body.radius = 4.8
            this.defense = 4
            this.damage = this.body.radius
            this.name = "Infantry"
            this.sight = 1 + this.movespeed
            this.damage = (this.body.radius * 2.9)
            this.firerate = 5 //12 //(this.movespeed * 5)
            this.attackrange = this.sight
            this.health = this.sight * 100
            this.maxhealth = this.health
            this.shots = []
            this.attacktarget = {}
            this.attacktarget.health = 0
            this.attackcounter = 0
            this.decayRate = (this.sight * this.movespeed) * .02
            this.health = 460
            this.maxhealth = this.health
        }
        isSniper() {
            this.infantry = 2
            this.movespeed = 7//4
            this.body.color = "magenta"
            this.body.radius = 4.8
            this.defense = 7
            this.name = "Sniper"
            this.sight = 1 + this.movespeed
            this.damage = 23
            this.firerate = 3 //12 //(this.movespeed * 5)
            this.attackrange = this.sight
            this.maxhealth = this.health
            this.shots = []
            this.attacktarget = {}
            this.attacktarget.health = 0
            this.attackcounter = 0
            this.decayRate = (12) * .02
            this.health = 725
            this.maxhealth = this.health
            this.mounted = 0
        }
        isHarvester() {
            this.harvester = 1
            this.movespeed = 5 //5 // 4
            this.body.color = "gray"
            this.body.radius = 5.5
            this.defense = 10
            this.name = "Harvesting Vehicle"
            this.sight = 1 + this.movespeed
            this.damage = (this.body.radius * 5.6)
            this.firerate = 7 //(this.movespeed * 5) // 6
            this.attackrange = this.sight - 1
            this.shots = []
            this.attacktarget = {}
            this.attacktarget.health = 0
            this.attackcounter = 0
            this.decayRate = (this.sight * this.movespeed) * .01
            this.health = 1400
            this.maxhealth = this.health
        }
        spawnNymph() {
            let agent1 = new Agent(this.tile, this.faction)
            agent1.isNymph()
            // agent1.body.color = "teal"
            // agent1.body.radius = 4
            // agent1.movespeed = 1
            // agent1.firerate = 3
            // agent1.decayRate = 0
            // agent1.damage = (agent1.body.radius * .5)
            // agent1.name = "Nymph"
            // agent1.nymph = 1
            // agent1.health = 70
            // agent1.maxhealth = agent1.health
            for (let t = -2; t <= 2; t++) {
                for (let k = -2; k <= 2; k++) {
                    if (this.tile.t + t >= 0) {
                        if (this.tile.k + k >= 0) {
                            if (this.tile.t + t < 128) {
                                if (this.tile.k + k < 128) {
                                    if (sandmap.blocks[this.tile.t + t][this.tile.k + k].walkable == true) {
                                        agent1.pathTo(sandmap.blocks[this.tile.t + t][this.tile.k + k])
                                        break
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        makeNymph() {
            if (this.que != 1) {
                if (this.faction.hotrock >= 109 && this.faction.units.length < 51) {
                    if (this.imago == 1 || this.imago == 2) {
                        this.faction.hotrock -= 109
                        this.spawn = 1
                        this.que = 1
                        this.timer = 55
                        this.maxtimer = this.timer
                        if (this.imago == 1) {
                            if (Math.random() < soundspamdrop * 3) {
                                if (sandmap.players.indexOf(this.faction) == sandmap.turn) {
                                    soundCancel()
                                    youneedmyassagain.play()
                                }
                            }
                        } else if (this.imago == 2) {
                            if (Math.random() < soundspamdrop * 3) {
                                if (sandmap.players.indexOf(this.faction) == sandmap.turn) {
                                    soundCancel()
                                    hoppe.play()
                                }
                            }
                        }
                    }
                }
            }
        }
        finishMorph1() {
            this.body.color = "blue"
            this.body.radius = 4.8
            this.movespeed = 3
            this.sight = 1 + this.movespeed
            this.firerate = 2  //3 geez too slow//4
            this.decayRate = 0
            this.damage = 17.36 // (this.body.radius * 3.1) + 1
            this.name = "Scurrier"
            this.nymph = 2
            this.health = 660
            this.defense = 6
            this.maxhealth = this.health
            this.attackrange = this.sight - 1
            if (sandmap.players.indexOf(this.faction) == sandmap.turn) {
                if (Math.random() < soundspamdrop) {
                    soundCancel()
                    if (Math.random() < .3) {
                        iknowcomeon.play()
                    } else if (Math.random() < .3) {
                        mylifesmine.play()
                    } else {
                        snazzyrim.play()
                    }
                }
            }
        }
        finishMorph2() {
            this.body.color = "white"
            this.body.radius = 7.9  // 7.9
            this.movespeed = 6 //7 //8
            this.sight = 1 + this.movespeed
            this.firerate = 5 // 6 // 9 //8
            this.decayRate = 0
            this.defense = 9
            this.damage = 42 // (this.body.radius * 4) + 1.5
            this.name = "Imago"
            this.imago = 1
            this.nymph = 0
            this.health = 2800
            this.maxhealth = this.health
            this.attackrange = this.sight - 1
            if (Math.random() < soundspamdrop) {
                if (sandmap.players.indexOf(this.faction) == sandmap.turn) {
                    soundCancel()
                    if (start != 0) {
                        yeahiminthisroom.play()
                    }
                }
            }
        }
        finishMorphgamergate() {
            this.body.color = "white"
            this.body.radius = 6.5
            this.movespeed = 6
            this.sight = 1 + this.movespeed
            this.firerate = 17 // 9 // 17?
            this.decayRate = 0
            this.defense = 18
            this.damage = 70 // 23.5  //(this.body.radius * 3) + 4
            this.name = "Gamergate"
            this.imago = 2
            this.nymph = 0
            this.gamergate = 1
            this.health = 1451
            this.maxhealth = this.health
            this.attackrange = this.sight - 1
            this.submerged = 0
            if (Math.random() < soundspamdrop) {
                if (sandmap.players.indexOf(this.faction) == sandmap.turn) {
                    soundCancel()
                    doyouwantsome.play()
                }
            }
        }
        metamorphpufffellow() {
            if (this.que != 1) {
                if (this.faction.hotrock >= 5) {
                    if (this.pollinator == 1) {
                        this.faction.hotrock -= 5
                        this.puffing = 1
                        this.que = 1
                        this.timer = 25
                        this.maxtimer = this.timer
                    }
                }
            }
        }
        metamorph1() {
            //////////console.log(this.que, 1)
            if (this.que != 1) {
                //////////console.log(this.hotrock, 2)
                if (this.faction.hotrock >= 180) {
                    //////////console.log(this.nymph, 3)
                    if (this.nymph == 1) {
                        this.faction.hotrock -= 180
                        this.morphing = 1
                        this.que = 1
                        this.timer = 100
                        this.maxtimer = this.timer
                    }
                }
            }
            //////////console.log(this.timer, 4)
        }
        metamorph2() {
            if (this.que != 1) {
                if (this.faction.hotrock >= 240) {
                    if (this.nymph == 2) {
                        this.faction.hotrock -= 240
                        this.morphingagain = 1
                        this.que = 1
                        this.timer = 200
                        this.maxtimer = this.timer
                    }
                }
            }
        }
        metamorph3() {
            if (this.que != 1) {
                if (this.faction.hotrock >= 350) {
                    if (this.nymph == 2) {
                        this.faction.hotrock -= 350
                        this.morphinggamergate = 1
                        this.que = 1
                        this.timer = 200
                        this.maxtimer = this.timer
                    }
                }
            }
        }
        dataOutput() {
            if (dataflop == 0) {
                dataflop = 1
                canvas_context.fillStyle = this.faction.color
                // canvas_context.font = "18px arial"

                canvas_context.fillStyle = "black"
                canvas_context.strokeStyle = sandmap.players[sandmap.turn].color
                canvas_context.lineWidth = 1.5
                canvas_context.font = "18px arial"
                canvas_context.strokeText(this.name + " " + Math.round(this.health) + "/" + this.maxhealth, sandmap.window.body.x + sandmap.window.body.width + 10, 25)
                if (this.faction.type == 0) {
                    canvas_context.strokeText(((1 - this.decayingInTheWind) * 100) + "% Cover", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                    canvas_context.fillText(((1 - this.decayingInTheWind) * 100) + "% Cover", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                }
                if (this.faction.type == 2) {
                    canvas_context.strokeText(((1 - this.suffocating) * 100) + "%  Air Tolerance", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                    canvas_context.fillText(((1 - this.suffocating) * 100) + "%  Air Tolerance", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                }
                canvas_context.fillText(this.name + " " + Math.round(this.health) + "/" + this.maxhealth, sandmap.window.body.x + sandmap.window.body.width + 10, 25)


                canvas_context.strokeText("Attack " + Math.ceil(this.damage * 3) + ", " + "Defense " + Math.ceil(this.defense), sandmap.window.body.x + sandmap.window.body.width + 10, 85)
                canvas_context.fillText("Attack " + Math.ceil(this.damage * 3) + ", " + "Defense " + Math.ceil(this.defense), sandmap.window.body.x + sandmap.window.body.width + 10, 85)
                canvas_context.strokeText("Speed " + Math.floor((1 / this.movespeed) * 120) + ", Vision " + this.sight + ", Range " + this.attackrange + ", Fire rate " + Math.floor((1 / this.firerate) * 120), sandmap.window.body.x + sandmap.window.body.width + 10, 115)
                canvas_context.fillText("Speed " + Math.floor((1 / this.movespeed) * 120) + ", Vision " + this.sight + ", Range " + this.attackrange + ", Fire rate " + Math.floor((1 / this.firerate) * 120), sandmap.window.body.x + sandmap.window.body.width + 10, 115)
                if (this.imago == 1 || this.imago == 2) {
                    this.spawnsmall = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 10, 125, 90, 50, "black")
                    this.spawnsmall.draw()
                    canvas_context.drawImage(nymph, 0, 0, 10, 10, this.spawnsmall.x + 10, this.spawnsmall.y + 5, 30, 30)
                    canvas_context.fillStyle = "white"
                    canvas_context.font = "13px arial"
                    canvas_context.fillText("Nymph: 109", this.spawnsmall.x + 1, this.spawnsmall.y + 46)

                }
                if (this.pollinator == 1) {
                    this.morph = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 10, 125, 90, 50, "black")
                    this.morph.draw()
                    canvas_context.drawImage(librilbianpufffellow, 0, 0, 10, 10, this.morph.x + 10, this.morph.y + 5, 30, 30)
                    canvas_context.fillStyle = "white"
                    canvas_context.font = "13px arial"
                    canvas_context.fillText("Puff-Fellow: 5", this.morph.x + 1, this.morph.y + 46)
                }
                if (this.nymph == 1 || this.nymph == 2) {
                    if (this.nymph == 1) {
                        this.morph = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 10, 125, 90, 50, "black")
                        this.morph.draw()
                        canvas_context.drawImage(scuttler, 0, 0, 10, 10, this.morph.x + 10, this.morph.y + 5, 30, 30)
                        canvas_context.fillStyle = "white"
                        canvas_context.font = "13px arial"
                        canvas_context.fillText("Scurrier: 160", this.morph.x + 1, this.morph.y + 46)
                        // this.morph = {}
                        // this.morph.isPointInside = empty
                    } else {
                        // this.morph = {}
                        // this.morph.isPointInside = empty
                        this.morph2 = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 10, 125, 90, 50, "black")
                        this.morph2.draw()
                        canvas_context.drawImage(imago, 0, 0, 10, 10, this.morph2.x + 10, this.morph2.y + 5, 30, 30)
                        canvas_context.fillStyle = "white"
                        canvas_context.font = "13px arial"
                        canvas_context.fillText("Imago: 240", this.morph2.x + 1, this.morph2.y + 46)
                        this.morph3 = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 150, 125, 90, 50, "black")
                        this.morph3.draw()
                        canvas_context.drawImage(gamergate, 0, 0, 10, 10, this.morph3.x + 10, this.morph3.y + 5, 30, 30)
                        canvas_context.fillStyle = "white"
                        canvas_context.font = "12px arial"
                        canvas_context.fillText("Gamergate: 350", this.morph3.x + 1, this.morph3.y + 46)
                    }
                } else {
                    if (this.imago == 2) {
                        this.morph3 = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 150, 125, 90, 50, "black")
                        this.morph3.draw()
                        canvas_context.fillStyle = "white"
                        canvas_context.font = "22px arial"
                        if (this.submerged == 0) {
                            canvas_context.fillText("Tunnel", this.morph3.x + 10, this.morph3.y + 32)
                        } else {
                            if (this.tile.walkable == false || this.tile.ice == 1 || this.tile.builtOn == 1) {
                                canvas_context.fillStyle = "red"
                            }

                            canvas_context.fillText("Emerge", this.morph3.x + 5, this.morph3.y + 32)
                        }
                    }
                }

                let facex = sandmap.window.body.x + sandmap.window.body.width + 10
                let facey = 190

                this.facerect = new UiRectangle(facex, facey, 64, 64, "#003333")
                this.facerect.draw()

                if (this.hamartaninvader == 1) {
                    canvas_context.drawImage(hamartaninvaderface, facex, facey)
                }
                if (this.hamartanscout == 1) {
                    canvas_context.drawImage(hamartanscoutface, facex, facey)
                }
                if (this.hamartansoldier == 1) {
                    canvas_context.drawImage(hamartansoldierface, facex, facey)
                }
                if (this.hamartanworker == 1) {
                    canvas_context.drawImage(hamartanworkerface, facex, facey)
                }
                if (this.infantry == 1) {
                    canvas_context.drawImage(infantryface, facex, facey)
                }
                if (this.infantry == 2) {
                    canvas_context.drawImage(sniperface, facex, facey)
                }
                if (this.drone == 1) {
                    canvas_context.drawImage(droneface, facex, facey)
                }
                if (this.harvester == 1) {
                    canvas_context.drawImage(harvesterface, facex, facey)
                }
                if (this.nymph == 1) {
                    canvas_context.drawImage(nymphface, facex, facey)
                }
                if (this.pollinator == 1) {
                    canvas_context.drawImage(librilbianpollinatorface, facex, facey)
                }
                if (this.pufffellow == 1) {
                    canvas_context.drawImage(pufffellowface, facex, facey)
                }
                if (this.goliophyte == 1) {
                    canvas_context.drawImage(golophyteface, facex, facey)
                }
                if (this.podman == 1) {
                    canvas_context.drawImage(podmanface, facex, facey)
                }
                if (this.nymph == 2) {
                    canvas_context.drawImage(scurrierface, facex, facey)
                }
                if (this.imago == 1) {
                    canvas_context.drawImage(imagoface, facex, facey)
                }
                if (this.imago == 2) {
                    canvas_context.drawImage(gamergateface, facex, facey)
                }
            }

            if (this.timer > 0) {
                canvas_context.drawImage(progress, 0, (250 - (Math.round((this.timer / this.maxtimer) * 250))), progress.width, 10, sandmap.window.minibody.x, 185, 250, 10)
            }
        }

        attack() {
            if (this.attacktarget.health <= 0 || (Math.abs((this.attacktarget.tile.y - this.tile.y)) + Math.abs((this.attacktarget.tile.x - this.tile.x))) > (this.attackrange * 21)) {
                for (let t = -this.attackrange; t <= this.attackrange; t++) {
                    for (let k = -this.attackrange; k <= this.attackrange; k++) {
                        if (this.tile.t + t >= 0) {
                            if (this.tile.k + k >= 0) {
                                if (this.tile.t + t < 128) {
                                    if (this.tile.k + k < 128) {
                                        if (typeof (sandmap.blocks[this.tile.t + t] != undefined)) {
                                            if (typeof (sandmap.blocks[this.tile.t + t][this.tile.k + k] != undefined)) {



                                                for (let g = 0; g < sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units.length; g++) {
                                                    if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[g].tile == sandmap.blocks[this.tile.t + t][this.tile.k + k]) {

                                                        if (sandmap.players.indexOf(this.faction) == sandmap.turn) {
                                                            if (this.nymph == 1) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    if (Math.random() < .5) {
                                                                        itstheedgeofusfight.play()
                                                                    } else {
                                                                        seethemseetheme.play()
                                                                    }
                                                                }
                                                            }
                                                            if (this.imago == 1) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    if (Math.random() < .5) {
                                                                        ahhbarber.play()
                                                                    } else {
                                                                        slamdownmustard.play()
                                                                    }
                                                                }
                                                            }
                                                            if (this.imago == 2) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    youhurtme.play()
                                                                }
                                                            }
                                                            if (this.infantry == 2) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    if (Math.random() < .3) {
                                                                        isnipedyouaweekago2.play()
                                                                    } else if (Math.random() < .3) {
                                                                        isnipedyouaweekago.play()
                                                                    } else if (Math.random() < .3) {
                                                                        theresone.play()
                                                                    } else if (Math.random() < .3) {
                                                                        bossaroundhere.play()
                                                                    } else if (Math.random() < .3) {
                                                                        bossaroundhere2.play()
                                                                    } else {
                                                                        adjustingforwindspeed.play()
                                                                    }
                                                                }
                                                            }
                                                            if (this.nymph == 2) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    if (Math.random() < .3) {
                                                                        icannamethevillans.play()
                                                                    } else if (Math.random() < .3) {
                                                                        suresawwithvenom.play()
                                                                    } else {
                                                                        ohisthattheeyeofthesnake.play()
                                                                    }
                                                                }
                                                            }
                                                            if (this.hamartaninvader == 1) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    youhome.play()
                                                                }
                                                            }
                                                            if (this.hamartansoldier == 1) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    if (Math.random() < .3) {
                                                                        inthejetsarm.play()
                                                                    } else if (Math.random() < .3) {
                                                                        youareabuse.play()
                                                                    } else if (Math.random() < .3) {
                                                                        sorcery.play()
                                                                    } else if (Math.random() < .3) {
                                                                        arerats.play()
                                                                    } else if (Math.random() < .3) {
                                                                        enormoushead.play()
                                                                    } else {
                                                                        reallytacky.play()
                                                                    }
                                                                }
                                                            }
                                                            if (this.drone == 1) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    combatinit.play()
                                                                }
                                                            }
                                                            if (this.infantry == 1) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    lightemup.play()
                                                                }
                                                            }
                                                            if (this.harvester == 1) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    if (Math.random() < .3) {
                                                                        myfuneral.play()
                                                                    } else {
                                                                        hopeyouknow.play()
                                                                    }
                                                                }
                                                            }
                                                        }

                                                        if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[g].submerged != 1) {
                                                            this.attacktarget = sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[g]
                                                            this.attacktarget.faction.blocks[this.tile.t][this.tile.k].markdraw = 1
                                                            if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].isAI == 1) {
                                                                sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[g].pathTo(this.tile)
                                                                sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].attackedAt = this.tile

                                                                if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].defending < 0) {
                                                                    sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].defending = 1
                                                                } else {
                                                                    sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].defending += sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units.length
                                                                }



                                                            }
                                                            break
                                                        } else {
                                                            let wet = 0
                                                            for (let n = 0; n < sandmap.players[Math.abs(sandmap.players.indexOf(this.faction))].units.length; n++) {
                                                                let ct = sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[g].tile.t
                                                                let ck = sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[g].tile.k
                                                                let xt = sandmap.players[Math.abs(sandmap.players.indexOf(this.faction))].units[n].tile.t
                                                                let xk = sandmap.players[Math.abs(sandmap.players.indexOf(this.faction))].units[n].tile.k
                                                                let line = new Line(ct, ck, xt, xk)
                                                                if (line.hypotenuse() <= sandmap.players[Math.abs(sandmap.players.indexOf(this.faction))].units[n].sight) {
                                                                    if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction))].units[n].drone == 1 || sandmap.players[Math.abs(sandmap.players.indexOf(this.faction))].units[n].imago == 2 || sandmap.players[Math.abs(sandmap.players.indexOf(this.faction))].units[n].hamartanscout == 1 || sandmap.players[Math.abs(sandmap.players.indexOf(this.faction))].units[n].pufffellow == 1) {
                                                                        wet = 1
                                                                    }
                                                                }
                                                            }

                                                            if (wet == 1) {
                                                                this.attacktarget = sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[g]

                                                                this.attacktarget.faction.blocks[this.tile.t][this.tile.k].markdraw = 1
                                                                // //////console.log(this.attacktarget.faction.blocks[this.tile.t][this.tile.k])
                                                                if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].isAI == 1) {
                                                                    sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[g].pathTo(this.tile)
                                                                    sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].attackedAt = this.tile

                                                                    if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].defending < 0) {
                                                                        sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].defending = 1
                                                                    } else {
                                                                        sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].defending += sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units.length
                                                                    }



                                                                }
                                                                break
                                                            }
                                                        }
                                                    }
                                                }

                                                //snadwich
                                                //moved up?
                                                for (let g = 0; g < sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].buildings.length; g++) {
                                                    if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].buildings[g].tile == sandmap.blocks[this.tile.t + t][this.tile.k + k]) {
                                                        this.attacktarget = sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].buildings[g]
                                                        this.attacktarget.faction.blocks[this.tile.t][this.tile.k].markdraw = 1
                                                        this.attacktarget.isABuilding = 1

                                                        if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].isAI == 1) {
                                                            sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].attackedAt = this.tile

                                                            if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].defending < 0) {
                                                                sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].defending = 1
                                                            } else {
                                                                sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].defending += sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units.length
                                                            }

                                                        }
                                                        break
                                                    }
                                                }


                                                for (let g = 0; g < sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units.length; g++) {
                                                    if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[g].tile == sandmap.blocks[this.tile.t + t][this.tile.k + k]) {

                                                        if (sandmap.players.indexOf(this.faction) == sandmap.turn) {
                                                            if (this.nymph == 1) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    if (Math.random() < .5) {
                                                                        itstheedgeofusfight.play()
                                                                    } else {
                                                                        seethemseetheme.play()
                                                                    }
                                                                }
                                                            }
                                                            if (this.imago == 1) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    if (Math.random() < .5) {
                                                                        ahhbarber.play()
                                                                    } else {
                                                                        slamdownmustard.play()
                                                                    }
                                                                }
                                                            }
                                                            if (this.imago == 2) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    youhurtme.play()
                                                                }
                                                            }
                                                            if (this.infantry == 2) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    if (Math.random() < .3) {
                                                                        isnipedyouaweekago2.play()
                                                                    } else if (Math.random() < .3) {
                                                                        isnipedyouaweekago.play()
                                                                    } else if (Math.random() < .3) {
                                                                        theresone.play()
                                                                    } else if (Math.random() < .3) {
                                                                        bossaroundhere.play()
                                                                    } else if (Math.random() < .3) {
                                                                        bossaroundhere2.play()
                                                                    } else {
                                                                        adjustingforwindspeed.play()
                                                                    }
                                                                }
                                                            }
                                                            if (this.nymph == 2) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    if (Math.random() < .3) {
                                                                        icannamethevillans.play()
                                                                    } else if (Math.random() < .3) {
                                                                        suresawwithvenom.play()
                                                                    } else {
                                                                        ohisthattheeyeofthesnake.play()
                                                                    }
                                                                }
                                                            }
                                                            if (this.hamartaninvader == 1) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    youhome.play()
                                                                }
                                                            }
                                                            if (this.hamartansoldier == 1) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    if (Math.random() < .3) {
                                                                        inthejetsarm.play()
                                                                    } else if (Math.random() < .3) {
                                                                        youareabuse.play()
                                                                    } else if (Math.random() < .3) {
                                                                        sorcery.play()
                                                                    } else if (Math.random() < .3) {
                                                                        arerats.play()
                                                                    } else if (Math.random() < .3) {
                                                                        enormoushead.play()
                                                                    } else {
                                                                        reallytacky.play()
                                                                    }
                                                                }
                                                            }
                                                            if (this.drone == 1) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    combatinit.play()
                                                                }
                                                            }
                                                            if (this.podman == 1) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    if (Math.random() < .3) {
                                                                        seeyesineed.play()
                                                                    }else if (Math.random() < .3) {
                                                                        bombbuoy.play()
                                                                    }else{
                                                                        notinhere.play()
                                                                    }
                                                                }
                                                            }
                                                            if (this.infantry == 1) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    lightemup.play()
                                                                }
                                                            }
                                                            if (this.harvester == 1) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    if (Math.random() < .3) {
                                                                        myfuneral.play()
                                                                    } else {
                                                                        hopeyouknow.play()
                                                                    }
                                                                }
                                                            }
                                                        }

                                                        if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[g].submerged != 1) {
                                                            this.attacktarget = sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[g]
                                                            this.attacktarget.faction.blocks[this.tile.t][this.tile.k].markdraw = 1
                                                            if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].isAI == 1) {
                                                                sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[g].pathTo(this.tile)
                                                                sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].attackedAt = this.tile

                                                                if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].defending < 0) {
                                                                    sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].defending = 1
                                                                } else {
                                                                    sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].defending += sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units.length
                                                                }



                                                            }
                                                            break
                                                        } else {
                                                            let wet = 0
                                                            for (let n = 0; n < sandmap.players[Math.abs(sandmap.players.indexOf(this.faction))].units.length; n++) {
                                                                let ct = sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[g].tile.t
                                                                let ck = sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[g].tile.k
                                                                let xt = sandmap.players[Math.abs(sandmap.players.indexOf(this.faction))].units[n].tile.t
                                                                let xk = sandmap.players[Math.abs(sandmap.players.indexOf(this.faction))].units[n].tile.k
                                                                let line = new Line(ct, ck, xt, xk)
                                                                if (line.hypotenuse() <= sandmap.players[Math.abs(sandmap.players.indexOf(this.faction))].units[n].sight) {
                                                                    if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction))].units[n].drone == 1 || sandmap.players[Math.abs(sandmap.players.indexOf(this.faction))].units[n].imago == 2 || sandmap.players[Math.abs(sandmap.players.indexOf(this.faction))].units[n].hamartanscout == 1 || sandmap.players[Math.abs(sandmap.players.indexOf(this.faction))].units[n].pufffellow == 1) {
                                                                        wet = 1
                                                                    }
                                                                }
                                                            }

                                                            if (wet == 1) {
                                                                this.attacktarget = sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[g]

                                                                this.attacktarget.faction.blocks[this.tile.t][this.tile.k].markdraw = 1
                                                                // //////console.log(this.attacktarget.faction.blocks[this.tile.t][this.tile.k])
                                                                if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].isAI == 1) {
                                                                    sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[g].pathTo(this.tile)
                                                                    sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].attackedAt = this.tile

                                                                    if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].defending < 0) {
                                                                        sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].defending = 1
                                                                    } else {
                                                                        sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].defending += sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units.length
                                                                    }



                                                                }
                                                                break
                                                            }
                                                        }
                                                    }
                                                }
                                                //building was here, should be first?
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                if (Math.abs(this.attacktarget.tile.x - this.tile.x) + Math.abs((this.attacktarget.tile.y - this.tile.y)) > (this.attackrange * 21)) {
                    this.attacktarget = {}
                    this.attacktarget.health = 0
                    return
                }
                this.attackcounter++
                if (this.attackcounter % (this.firerate*3) == 0 && this.submerged != 1) { //3 because 0 strikeout
                    let shot = new UnitCircle(this.body.x, this.body.y, 2, this.faction.color)
                    shot.attacktarget = {}
                    shot.attacktarget.body = new UnitCircle(this.attacktarget.body.x, this.attacktarget.body.y, 1, "transparent")
                    shot.projectilespeed = this.projectilespeed
                    shot.refhealth = this.attacktarget
                    shot.attacktarget.defense = this.attacktarget.defense
                    shot.stage = 0
                    this.shots.push(shot)
                }
            }
        }
        attackmove() {
            if (this.attacktargetmove.health <= 0 || (Math.abs((this.attacktargetmove.tile.y - this.tile.y)) + Math.abs((this.attacktargetmove.tile.x - this.tile.x))) > (this.sight * 21)) {
                for (let t = -this.sight; t <= this.sight; t++) {
                    for (let k = -this.sight; k <= this.sight; k++) {
                        if (this.tile.t + t >= 0) {
                            if (this.tile.k + k >= 0) {
                                if (this.tile.t + t < 128) {
                                    if (this.tile.k + k < 128) {
                                        if (typeof (sandmap.blocks[this.tile.t + t] != undefined)) {
                                            if (typeof (sandmap.blocks[this.tile.t + t][this.tile.k + k] != undefined)) {
                                                for (let g = 0; g < sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units.length; g++) {
                                                    if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[g].tile == sandmap.blocks[this.tile.t + t][this.tile.k + k]) {
                                                        this.attacktargetmove = sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[g]
                                                        this.pathTo(this.attacktargetmove.tile)
                                                        if (this.tile.walkable == false || this.tile.ice == 1 || this.tile.builtOn == 1) {
                                                        } else {
                                                            this.submerged = 0
                                                        }
                                                        break
                                                    }
                                                }
                                                for (let g = 0; g < sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].buildings.length; g++) {
                                                    if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].buildings[g].tile == sandmap.blocks[this.tile.t + t][this.tile.k + k]) {
                                                        this.attacktargetmove = sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].buildings[g]
                                                        this.pathTo(this.attacktargetmove.tile)
                                                        if (this.tile.walkable == false || this.tile.ice == 1 || this.tile.builtOn == 1) {
                                                        } else {
                                                            this.submerged = 0
                                                        }
                                                        break
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                if (Math.abs(this.attacktargetmove.tile.x - this.tile.x) + Math.abs((this.attacktargetmove.tile.y - this.tile.y)) > (this.sight * 21)) {
                    this.attacktargetmove = {}
                    this.attacktargetmove.health = 0
                    return
                }
            }
        }
        pathTo(point) {
            if (this.stacksnap > 10) {
                return
            }
            if ((point.walkable == true || this.submerged == 1 || (this.mounted == 0 && point.occupied == false)) && point != this.tile) {
                // if(this.submerged == 1){
                //     ////console.log(point, this.tile)
                // }
                this.stepout = 1
                if (this.submerged == 1 || this.mounted == 0) {
                    this.pather = liarsastar
                } else {
                    this.pather = astar
                }
                this.pather.agent = this
                this.obvious = this.realPath[this.index]
                this.pathsto = []
                for (let t = 0; t < this.realPath.length; t++) {
                    this.pathsto.push(this.realPath[t])
                }
                this.stacksnap++
                this.realPath = [...this.pather.search(sandmap, this.tile, point, {})]
                ////console.log(this.realPath)
                if (this.obvious == this.realPath[0]) {
                    this.index = 0
                } else {
                    this.realPath = [...this.pathsto]
                    this.repath = 10 + Math.floor(Math.random() * 10)
                    this.snapto = point
                }
            } else {
                this.tempcheck = []
                let index = 0
                let wet = 0
                for (let t = point.t - this.stepout; t <= point.t + this.stepout; t++) {
                    for (let k = point.k - this.stepout; k <= point.k + this.stepout; k++) {
                        if (t > 0) {
                            if (t < 128) {
                                if (k > 0) {
                                    if (k < 128) {
                                        if (sandmap.blocks[t][k].walkable == true) {
                                            this.tempcheck.push(sandmap.blocks[t][k])
                                            wet = 1
                                            // break
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                if (wet == 0) {
                    this.stepout++
                    this.pathsto = []
                    for (let t = 0; t < this.realPath.length; t++) {
                        this.pathsto.push(this.realPath[t])
                    }
                    this.realPath = [...this.pathsto]
                    this.repath = 40 + Math.floor(Math.random() * 40)
                    this.snapto = point
                } else {
                    let max = 9999999999
                    for (let t = 0; t < this.tempcheck.length; t++) {
                        let link = (new LineOP(this.tile, this.tempcheck[t])).hypotenuse()
                        // ////////////console.log(link)
                        if (link < max) {
                            max = link
                            index = t
                        }
                    }
                    this.stacksnap++
                    this.pathTo(this.tempcheck[index])
                }
            }
        }
        see() {
            for (let t = -this.sight; t <= this.sight; t++) {
                for (let k = -this.sight; k <= this.sight; k++) {
                    if (this.tile.t + t >= 0) {
                        if (this.tile.k + k >= 0) {
                            if (this.tile.t + t < 128) {
                                if (this.tile.k + k < 128) {

                                    if (typeof (sandmap.blocks[this.tile.t + t] != undefined)) {
                                        if (typeof (sandmap.blocks[this.tile.t + t][this.tile.k + k] != undefined)) {
                                            this.faction.fog[this.tile.t + t][this.tile.k + k].color = "transparent"
                                            this.faction.fog[this.tile.t + t][this.tile.k + k].timer = 100
                                            this.faction.blocks[this.tile.t + t][this.tile.k + k].markdraw = 1
                                            if (!this.faction.seen.includes(sandmap.blocks[this.tile.t + t][this.tile.k + k])) {
                                                this.faction.seen.push(sandmap.blocks[this.tile.t + t][this.tile.k + k])
                                                if (sandmap.blocks[this.tile.t + t][this.tile.k + k].sourcerock >= 1) {
                                                    // this.faction.clickrate++
                                                    this.faction.seenrocks.push(sandmap.blocks[this.tile.t + t][this.tile.k + k])
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        heatwallcheck() {
            this.dirs1 = 0
            this.dirs2 = 0
            this.dirs3 = 0
            this.dirs4 = 0
            for (let t = 0; t < this.faction.buildings.length; t++) {
                if (this.dirs1 == 0) {// right
                    if (this.faction.buildings[t].tile.x >= this.tile.x) {
                        if (this.faction.buildings[t].tile.y == this.tile.y) {
                            this.dirs1 += 1
                        }
                    }
                }
                if (this.dirs2 == 0) {// down
                    if (this.faction.buildings[t].tile.y >= this.tile.y) {
                        if (this.faction.buildings[t].tile.x == this.tile.x) {
                            this.dirs2 += 1
                        }
                    }
                }
                if (this.dirs3 == 0) { // left
                    if (this.faction.buildings[t].tile.x <= this.tile.x) {
                        if (this.faction.buildings[t].tile.y == this.tile.y) {
                            this.dirs3 += 1
                        }
                    }
                }
                if (this.dirs4 == 0) {  // up
                    if (this.faction.buildings[t].tile.y <= this.tile.y) {
                        if (this.faction.buildings[t].tile.x == this.tile.x) {
                            this.dirs4 += 1
                        }
                    }
                }
            }

            this.decayingInTheWind = 1 - ((this.dirs1 + this.dirs2 + this.dirs3 + this.dirs4) / 4)
        }
        spirecheck() {
            this.dirs1 = 0
            this.dirs2 = 0
            for (let t = 0; t < this.faction.buildings.length; t++) {
                if (this.faction.buildings[t].spire == 1) {
                    let link = new LineOP(this.body, this.faction.buildings[t].body)
                    if (this.dirs1 == 0) {// right
                        if (link.hypotenuse() <= 119) {
                            this.dirs1 = 1
                        }
                    }

                    if (this.dirs2 == 0) {// right
                        if (link.hypotenuse() <= 179) {
                            this.dirs2 = 1
                        }
                    } else {
                        if (link.hypotenuse() <= 179) {
                            this.dirs1 = 1
                        }
                    }
                }
            }

            this.suffocating = 1 - ((this.dirs1 + this.dirs2) / 2)
        }
        move() {
            this.swing++
            if (this.swing % this.swingout == 0) {
                this.attack()
            }
            this.repath--
            if (this.repath == 0 && this.repathsnap < 3) {
                this.repathsnap += 1
                this.pathTo(this.snapto)
            }

            if (this.repathsnap >= 3) {
                this.repathsnap = 0
                this.repath = -1000
            }
            if (this.index < this.realPath.length - 1) {
                this.movespeedcount++
                if (this.movespeedcount % this.movespeed == 0) {
                    this.movespeedcount = 0
                    this.index += 1
                    if ((this.realPath[this.index].walkable == false && this.realPath[this.index].walkable == false && this.submerged !== 1 && this.mounted !== 0) || this.realPath[this.index].occupied == true) {
                        if (this.index == 0) {
                            let goal = 0
                            goal += this.tile.id
                            goal += (Math.sign(Math.random() - .5) * 127)
                            goal += (Math.sign(Math.random() - .5))
                            goal = Math.min(goal, sandmap.gridPoints.length)
                            goal = Math.max(goal, 0)
                            // let goal = Math.max(Math.min(this.tile.id+(Math.sign(Math.random()-.5)*127)+ Math.sign(Math.random()-.5), sandmap.gridPoints.length),0)
                            this.pathTo(sandmap.gridPoints[goal])
                        } else {
                            this.index--
                            this.movespeedcount = 0
                        }
                    }
                }
            } else {
                this.movespeedcount = 0
            }
            this.tile.drawish = 0
            this.tile.walkable = true
            this.tile.occupied = false
            this.tile = this.realPath[this.index]
            if (this.index == this.realPath.length - 1) {
                this.realPath = [this.tile]
                this.index = 0
                this.movespeedcount = 0
            }
            if (this.faction.type == 0) {
                this.heatwallcheck()
            } else if (this.faction.type == 2) {
                this.aircheck++
                if (this.aircheck % this.faction.buildings.length == 0) {
                    this.spirecheck()
                } else if (typeof this.suffocating == "undefined") {
                    this.spirecheck()
                }
            } else {
                this.decayingInTheWind = 0
            }
            //////////////////console.log( (this.decayingInTheWind*sandmap.windspeed))
            if (this.faction.type == 0) {
                this.health -= ((this.decayRate * this.decayingInTheWind * sandmap.windspeed))
            }
            if (this.faction.type == 2) {
                if (this.suffocating > 0) {
                    this.health -= ((this.decayRate * this.suffocating))
                } else {
                    this.health += (this.decayRate * .333)
                    if (this.health > this.maxhealth) {
                        this.health = this.maxhealth
                    }
                }
            }
            if (this.decayingInTheWind == 0 && this.faction.type == 0) {
                this.health += (this.decayRate * .5)
                if (this.health > this.maxhealth) {
                    this.health = this.maxhealth
                }
            }
            if (this.health <= 0) {
                this.marked = 1
            }
            if (this.tile.hotrock == 1) {
                if (this.drone == 1 || this.hamartanscout == 1 ) { //|| this.hamartaninvader == 1

                    this.faction.hotrock += this.movespeed * .005
                    this.tile.sourcerock -= this.movespeed * .005
                    this.faction.income += this.movespeed * .005
                } else {

                    this.faction.hotrock += this.movespeed * .01
                    this.tile.sourcerock -= this.movespeed * .01
                    if (this.nymph == 1 || this.harvester == 1 || this.hamartanworker == 1 || this.pollinator == 1) {
                        this.faction.hotrock += this.movespeed * .025
                        this.tile.sourcerock -= this.movespeed * .025
                        this.faction.income += this.movespeed * .025
                    }
                    if(this.infantry == 1){
                        // this.faction.hotrock += this.movespeed * .0125
                        // this.tile.sourcerock -= this.movespeed * .0125
                        this.faction.hotrock += this.movespeed * .005//625
                        this.tile.sourcerock -= this.movespeed * .005 //625
                        this.faction.income += this.movespeed * .005
                    }
                    if(this.hamartanworker == 1){
                        this.faction.hotrock += this.movespeed * .00625//625
                        this.tile.sourcerock -= this.movespeed * .00625 //625
                        this.faction.income += this.movespeed * .00625
                    }
                    if (this.nymph == 1 || this.harvester == 1 || this.pollinator == 1) { //  || this.pollinator == 1) { //harvester?
                        this.faction.hotrock += this.movespeed * .025
                        this.tile.sourcerock -= this.movespeed * .025
                        this.faction.income += this.movespeed * .025
                    }
                }
            }
            if (this.tile.hotrock == 2) {

                if (this.drone == 1 || this.hamartanscout == 1) { // || this.hamartaninvader == 1
                    this.faction.hotrock += this.movespeed * .01
                    this.tile.sourcerock -= this.movespeed * .01
                    this.faction.income += this.movespeed * .01
                } else {
                    this.faction.hotrock += this.movespeed * .02
                    this.tile.sourcerock -= this.movespeed * .02
                    this.faction.income += this.movespeed * .02
                    if (this.nymph == 1 || this.harvester == 1 || this.hamartanworker == 1 || this.pollinator == 1) {
                        this.faction.hotrock += this.movespeed * .05
                        this.tile.sourcerock -= this.movespeed * .05
                        this.faction.income += this.movespeed * .05
                    }
                    if(this.infantry == 1){
                        this.faction.hotrock += this.movespeed * .01//625
                        this.tile.sourcerock -= this.movespeed * .01 //625
                        this.faction.income += this.movespeed * .01
                    }
                    if(this.hamartanworker == 1){
                        this.faction.hotrock += this.movespeed * .0125 //125
                        this.tile.sourcerock -= this.movespeed * .0125 //125
                        this.faction.income += this.movespeed * .0125
                    }
                    if (this.nymph == 1 || this.harvester == 1  || this.pollinator == 1) { // || this.pollinator == 1) { //harvester?
                        this.faction.hotrock += this.movespeed * .05
                        this.tile.sourcerock -= this.movespeed * .05
                        this.faction.income += this.movespeed * .05
                    }
                }
            }

            this.tile.occupied = true
            if (this.submerged != 1) {
                this.tile.walkable = false
            }
            this.tile.drawish = 1
            // this.tile.draw()
        }
        draw() {
            this.stacksnap = 0
            if (this.tile.builtOn == 1 || this.tile.ice == 1) {
                if (this.mounted == 0) {
                    this.sight = 4 + this.movespeed
                    this.attackrange = this.sight
                }
            } else {
                if (this.mounted == 0) {
                    this.sight = this.movespeed
                    this.attackrange = this.sight
                }
            }


            if (this.submerged == 1) {
                if (this.imago == 2) {
                    this.movespeed = 10
                    this.sight = 3
                    this.attackrange = 0
                }
            } else {
                if (this.imago == 2) {
                    this.movespeed = 6
                    this.sight = 7
                    this.attackrange = 6
                }
            }


            if (this.imago == 1 || this.imago == 2 || this.nymph > 0) {
                this.timer--
                if (this.timer == 0) {
                    if (this.spawn == 1) {
                        this.que = 0
                        this.spawn = 0
                        this.spawnNymph()
                    }
                    if (this.morphing == 1) {
                        this.morphing = 0
                        this.que = 0
                        this.finishMorph1()
                    }
                    if (this.morphingagain == 1) {
                        this.morphingagain = 0
                        this.que = 0
                        this.finishMorph2()
                    }
                    if (this.morphinggamergate == 1) {
                        this.morphinggamergate = 0
                        this.que = 0
                        this.finishMorphgamergate()
                    }
                }
            }

            if (this.pollinator == 1) {
                this.timer--
                if (this.timer == 0) {
                    if (this.puffing == 1) {
                        this.puffing = 0
                        this.que = 0
                        this.isPufffellow()
                        this.pollinator = 0
                    }
                }
            }


            if (this.realPath.length - 1 > this.index) {
                if (((this.realPath[this.index + 1].walkable == true || (this.submerged == 1 || this.mounted == 0)) && this.realPath[this.index + 1].occupied == false)) { //?
                    let rat = (this.movespeedcount + 1) / this.movespeed
                    let invrat = 1 - rat

                    this.body.x = ((this.realPath[this.index].x + (this.tile.width * .5)) * invrat) + ((this.realPath[this.index + 1].x + (this.tile.width * .5)) * rat)
                    this.body.y = ((this.realPath[this.index].y + (this.tile.height * .5)) * invrat) + ((this.realPath[this.index + 1].y + (this.tile.height * .5)) * rat)

                } else {
                    this.body.x = this.tile.x + (this.tile.width * .5)
                    this.body.y = this.tile.y + (this.tile.height * .5)
                }

            } else {

                this.body.x = this.tile.x + (this.tile.width * .5)
                this.body.y = this.tile.y + (this.tile.height * .5)
                // this.body = new UnitCircle(this.tile.x + (this.tile.width * .5), this.tile.y + (this.tile.height * .5), 5, this.faction.color)
            }

            if (this.hamartanscout == 1) {
                map_context.drawImage(hamartanscout, Math.floor(this.body.x) - 5, Math.floor(this.body.y) - 5)
            } else if (this.hamartansoldier == 1) {
                map_context.drawImage(hamartansoldier, Math.floor(this.body.x) - 5, Math.floor(this.body.y) - 5)
            } else if (this.hamartaninvader == 1) {
                map_context.drawImage(hamartaninvader, Math.floor(this.body.x) - 5, Math.floor(this.body.y) - 5)
            } else if (this.hamartanworker == 1) {
                map_context.drawImage(hamartanworker, Math.floor(this.body.x) - 5, Math.floor(this.body.y) - 5)
            } else if (this.drone == 1) {
                map_context.drawImage(drone, Math.floor(this.body.x) - 5, Math.floor(this.body.y) - 5)
            } else if (this.infantry == 1) {
                map_context.drawImage(infantry, Math.floor(this.body.x) - 5, Math.floor(this.body.y) - 5)
            } else if (this.infantry == 2) {
                map_context.drawImage(sniper1, Math.floor(this.body.x) - 5, Math.floor(this.body.y) - 5)
            } else if (this.harvester == 1) {
                map_context.drawImage(harvester, Math.floor(this.body.x) - 5, Math.floor(this.body.y) - 5)
            } else if (this.nymph == 1) {
                map_context.drawImage(nymph, Math.floor(this.body.x) - 5, Math.floor(this.body.y) - 5)
            } else if (this.nymph == 2) {
                map_context.drawImage(scuttler, Math.floor(this.body.x) - 5, Math.floor(this.body.y) - 5)
            } else if (this.gamergate == 1) {
                if (this.submerged == 0) {
                    map_context.drawImage(gamergate, Math.floor(this.body.x) - 5, Math.floor(this.body.y) - 5)
                } else {
                    if (sandmap.players.indexOf(this.faction) == sandmap.turn) {
                        map_context.drawImage(gamergatedug, Math.floor(this.body.x) - 5, Math.floor(this.body.y) - 5)
                    } else {
                        let wet = 0
                        for (let k = 0; k < sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units.length; k++) {
                            if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[k].drone == 1 || sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[k].imago == 2 || sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[k].hamartanscout == 1 || sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[k].pufffellow == 1) {
                                let ct = sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[k].tile.t
                                let ck = sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[k].tile.k
                                let xt = this.tile.t
                                let xk = this.tile.k
                                let line = new Line(ct, ck, xt, xk)
                                if (line.hypotenuse() <= sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[k].sight) {
                                    wet = 1
                                }
                            }
                        }
                        if (wet == 1) {
                            map_context.drawImage(gamergatedug, Math.floor(this.body.x) - 5, Math.floor(this.body.y) - 5)
                        }
                    }
                }
            } else if (this.imago == 1) {
                map_context.drawImage(imago, Math.floor(this.body.x) - 5, Math.floor(this.body.y) - 5)
            } else if (this.pollinator == 1) {
                map_context.drawImage(librilbianpollinator, Math.floor(this.body.x) - 5, Math.floor(this.body.y) - 5)
            } else if (this.goliophyte == 1) {
                map_context.drawImage(librilbiangoliophyte, Math.floor(this.body.x) - 5, Math.floor(this.body.y) - 5)
            } else if (this.pufffellow == 1) {
                map_context.drawImage(librilbianpufffellow, Math.floor(this.body.x) - 5, Math.floor(this.body.y) - 5)
            } else if (this.podman == 1) {
                map_context.drawImage(librilbianpodman, Math.floor(this.body.x) - 5, Math.floor(this.body.y) - 5)
            } else {
                this.body.draw()
            }

            if (this.selected == 1 || this.selected == 2) {
                if (sandmap.turn == sandmap.players.indexOf(this.faction)) {
                    this.dataOutput()
                    this.healthbar = new Rectangle(this.body.x - 5.5, this.body.y + 2.5, 11, 3, "black")
                    this.healthbar.draw()
                    if (this.health / this.maxhealth > .5) {
                        this.healthbar = new Rectangle(this.body.x - 5, this.body.y + 3, (this.health / this.maxhealth) * 10, 2, `rgb(${(1 - ((this.health / this.maxhealth))) * 512},${255},  0)`)
                    } else {
                        this.healthbar = new Rectangle(this.body.x - 5, this.body.y + 3, (this.health / this.maxhealth) * 10, 2, `rgb(${255},${(((this.health / this.maxhealth) * 1)) * 512},  0)`)
                    }
                    this.healthbar.draw()
                }
            } else {
                this.spawnsmall = {}
                this.spawnsmall.isPointInside = empty
                this.morph = {}
                this.morph.isPointInside = empty
                this.morph2 = {}
                this.morph2.isPointInside = empty
                this.morph3 = {}
                this.morph3.isPointInside = empty
            }

            for (let t = 0; t < this.shots.length; t++) {
                this.shots[t].stage++
                this.shots[t].x = (this.body.x * (1 - (this.shots[t].stage / this.projectilespeed))) + (((this.shots[t].stage / this.projectilespeed)) * this.shots[t].refhealth.body.x)
                this.shots[t].y = (this.body.y * (1 - (this.shots[t].stage / this.projectilespeed))) + (((this.shots[t].stage / this.projectilespeed)) * this.shots[t].refhealth.body.y)
                this.shots[t].draw()
                if (this.shots[t].stage >= this.projectilespeed) {
                    if (this.shots[t].refhealth.submerged == 1) {
                        this.attacktarget = {}
                        this.attacktarget.tile = {}

                        //new
                        this.attacktarget.tile.x = -100000
                        this.attacktarget.tile.y = -100000
                        this.attacktarget.tile.t = 0
                        this.attacktarget.tile.k = 0
                        this.shots[t].marked = 1
                        continue
                    } else {
                        this.shots[t].refhealth.health -= Math.max((this.damage * 3) - this.shots[t].attacktarget.defense, 0) //5?
                        ////////////console.log(this.shots[t].refhealth)
                        this.shots[t].marked = 1
                    }
                }
            }
            for (let t = 0; t < this.shots.length; t++) {
                if (this.shots[t].marked == 1) {
                    this.shots.splice(t, 1)
                }
            }
        }
    }

    function startGame() {
        for (let t = 0; t < 3; t++) {
            let agent1 = new Agent(sandmap.blocks[10][t + 10], sandmap.players[0])
        }
        for (let t = 0; t < 3; t++) {
            let agent2 = new Agent(sandmap.blocks[117][117 - t], sandmap.players[1])
        }
    }

    startGame()
    // let pather = astar.search(sandmap, sandmap.blocks[10][10], sandmap.blocks[12][25])
    // for(let t = 0;t<10;t++){
    // pather.findPath()

    // }
    start = 1

    let endbutton = new UiRectangle(sandmap.window.minibody.x + 260, sandmap.window.minibody.y - 77, 100, 75, "#333333")
    let endgame = 0
    function main() {

        // if (keysPressed['l']) {
        //     endgame = 1
        // } else {
        //     endgame = 0
        // }
        canvas_context.clearRect(0, 0, canvas.width, canvas.height)  // refreshes the image
        map_context.clearRect(0, 0, map_canvas.width, map_canvas.height)  // refreshes the image
        if (endgame == 1) {
            score.draw()
        } else {
            score.add()

            soundspamdrop *= 1.009

            // if (keysPressed[' ']) {
            //     sandmap.players[sandmap.turn].isAI = 0
            // }

            // sandmap.players[1].units = []
            postwind.play()
            // if(Math.random()<.2){
            //     debreak = 0
            // }
            map_context.drawImage(snow, 0, 0, snow.width, snow.height, 0, 0, 1280, 1280)
            // gamepadAPI.update() //checks for button presses/stick movement on the connected controller)
            // // game code goes here
            dataflop = 0
            sandmap.draw()
            // if (keysPressed['h']) {
            //     sandmap.turn = 1
            // }
            // if (keysPressed['k']) {
            //     sandmap.turn = 0
            // }
            // if (keysPressed['q']) {
            //     //////////console.log(sandmap)
            // }
            ////////////////////console.log(selectrect)

            if (sandmap.players[0].units.length == 0 || sandmap.players[1].units.length == 0) {
                endbutton.draw()
                canvas_context.fillStyle = "white"
                canvas_context.font = "40px arial"
                canvas_context.fillText("End", endbutton.x + 15, endbutton.y + 52)
            }
        }
    }

})

