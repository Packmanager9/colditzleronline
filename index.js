'use strict';
// const mongoURLx = require("./mongo")
const express = require('express');
// const mongoose = require('mongoose');
const { Server, defaultMaxListeners } = require('ws');
var Extensions = require('websocket-extensions'),
    deflate = require('permessage-deflate'),
    zlib = require('zlib');
deflate = deflate.configure({
    level: zlib.constants.Z_BEST_COMPRESSION,
    maxWindowBits: 13
});
// let mongoURL = process.env.mongoURL //|| mongoURLx.mongoURL
// mongoose.connect(mongoURL)
// const playerdataSchema = new mongoose.Schema({
//         joulepopscoremax: Number,
//         masstargetscoremax: Number,
//         rhophosortscoremax: Number,
//         coreboywhackscoremax: Number,
//         joxwallscoremax: Number,
//         blastgirlclimbscoremax: Number,
//         funkyclimbscoremax: Number,
//         banandroidtimemax: Number,
//         sototimemax: Number,
//         smashoutmax: Number,
//         gegegegeedropmin: Number,
//         kesslerscoremax: Number,
//         survivalscore: Number,
//         campaigncomplete: Boolean,
//         gegegegeedropminstr: String,
//         runscore: Number,
//         playername: String
//     })
// mongoose.model('PlayerRecords', playerdataSchema)
var exts = new Extensions();
exts.add(deflate);
const PORT = process.env.PORT || 3000;
const INDEX = '/newmultiplayer.html';
const server = express()
    .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));
const wss = new Server({ server });


let boys = []
let games = []
let tournaments = []

class TournamentBracket {
    constructor(name, size, stock) {
        this.name = name
        this.id = Math.random()
        this.size = size
        this.stock = stock
        if (this.stock == 0 || typeof this.stock != "number") {
            this.stock = 1
        }
        this.players = []
        this.rooms = []
        this.unpaired = 0
        this.totalIn = 0
        for (let t = 535131 + (tournaments.length * 64); t < 535131 + (tournaments.length * 64) + Math.ceil(this.size * .5); t++) {
            this.rooms.push(t)
        }
        this.layer = 0
        this.layercap = Math.floor(Math.log(this.size) / Math.log(2))
        this.map = Math.floor(Math.random() * 20)
        this.roundOuts = 0
    }
    sort() {
        let wet = 0
        for (let t = 0; t < this.players.length; t++) {
            if (this.players[t].readyState == 1) {
                wet = 1
            } else {
                this.players.splice(t, 1)
                t--
            }
        }
        if (wet == 0) {
            tournaments.splice(this)
        }
    }
    pair() {
        let g = 0
        let index1 = Math.floor(Math.random() * this.players.length)
        while (this.players[index1].lockout == this.layer) {
            if (g > (this.players.length * this.players.length * this.players.length) + 10) {
                break
            }
            if (this.totalIn >= this.size) {
                break
            }
            index1 = Math.floor(Math.random() * this.players.length)
            g++
        }
        let index2 = Math.floor(Math.random() * this.players.length)
        let j = 0
        g = 0
        while (index2 == index1) {
            j++
            if (j > (this.players.length * this.players.length * this.players.length) + 10) {
                break
            }
            index2 = Math.floor(Math.random() * this.players.length)

            while (this.players[index2].lockout == this.layer) {
                if (g > (this.players.length * this.players.length * this.players.length) + 10) {
                    break
                }
                if (this.totalIn >= this.size) {
                    break
                }
                index2 = Math.floor(Math.random() * this.players.length)
                g++
            }
        }

        if (this.players[index1].lockout == this.layer) {
            return
        }
        if (this.players[index2].lockout == this.layer) {
            return
        }
        if (index1 == index2) {
            return
        }
        let room = this.rooms[Math.floor(Math.random() * this.rooms.length)]
        let r = 0
        while (games[room].occupied == 1) {
            room = this.rooms[Math.floor(Math.random() * this.rooms.length)]
            r++
            if (r > 100) {
                return
            }
        }
        games[this.players[index1].assigned].swapRoom(this.players[index1], room)
        games[this.players[index2].assigned].swapRoom(this.players[index2], room)
        games[room].occupied = 1


        let forceSwap = {}
        let map = this.map
        forceSwap.tournamentRoom = room
        forceSwap.map = map
        forceSwap.stock = this.stock
        forceSwap.id = this.id
        this.players[index1].send(JSON.stringify(forceSwap))
        this.players[index2].send(JSON.stringify(forceSwap))
        this.players[index1].lockout = this.layer
        this.players[index2].lockout = this.layer
            // this.unpaired-=2
        if (this.totalIn >= this.size) {
            this.layer++
                this.size = Math.floor(this.size * .5)
        }
    }

    addPlayer(player) {
        this.players.push(player)
        this.unpaired++
            this.totalIn++
    }
}
class Game {
    constructor() {
        this.players = []
        this.occupied = 0
    }
    removePlayer(player) {
        this.players.splice(this.players.indexOf(player), 1)
        if (this.players.length == 0) {
            this.occupied = 0
        }
    }
    addPlayer(player) {
        this.players.push(player)
        this.occupied = 1
    }
    swapRoom(player, room) {
        this.players.splice(this.players.indexOf(player), 1)
        player.assigned = room
        games[room].addPlayer(player)
        if (this.players.length == 0) {
            this.occupied = 0
        }
    }
}
for (let t = 0; t < 565131; t++) { //535131 ++ is tournies
    games.push(new Game())
}
wss.on("connection", ws => {

    ws.lockout = -1
    ws.assigned = Math.round(Math.random() * 0)
    ws.index = games[ws.assigned].players.length
    games[ws.assigned].addPlayer(ws)
    let pair = [games[ws.assigned].players.length, -1]
    ws.pair = pair
    ws.on("close", () => {
        let minarr = []
        for (let t = 0; t < games[ws.assigned].players.length; t++) {
            minarr.push(games[ws.assigned].players[t].pair[1])
        }
        if (Math.max(...minarr) == -1) {
            ws.pair[1] = 0
        } else {
            if (!minarr.includes(7)) {
                ws.pair[1] = 7
            }
            if (!minarr.includes(6)) {
                ws.pair[1] = 6
            }
            if (!minarr.includes(5)) {
                ws.pair[1] = 5
            }
            if (!minarr.includes(4)) {
                ws.pair[1] = 4
            }
            if (!minarr.includes(3)) {
                ws.pair[1] = 3
            }
            if (!minarr.includes(2)) {
                ws.pair[1] = 2
            }
            if (!minarr.includes(1)) {
                ws.pair[1] = 1
            }
            if (!minarr.includes(0)) {
                ws.pair[1] = 0
            }
        }
        for (let t = 0; t < games[ws.assigned].players.length; t++) {
            let sjon = {
                "delete": `${ws.pair[1]}`,
                "index": `${t}`,
                "length": `${games[ws.assigned].players.length}`
            }
            let ids = []
            for (let t = 0; t < games[ws.assigned].players.length; t++) {
                if (t != games[ws.assigned].players.indexOf(ws)) {
                    ids.push(games[ws.assigned].players[t].serverID)
                }
            }
            sjon.playerIDs = ids
            games[ws.assigned].players[t].send(JSON.stringify(sjon))
            ids = []
            sjon = {
                'clean': '1'
            }
            for (let t = 0; t < games[ws.assigned].players.length; t++) {
                if (t != games[ws.assigned].players.indexOf(ws)) {
                    ids.push(games[ws.assigned].players[t].serverID)
                }
            }
            sjon.playerIDs = ids
            let data = JSON.stringify(sjon)
            for (let t = 0; t < games[ws.assigned].players.length; t++) {
                games[ws.assigned].players[t].send(data)
            }
        }
        games[ws.assigned].removePlayer(ws)
    })
    ws.on("message", data => {
        if (JSON.parse(data).makeTournament == 1) {
            let tournament = new TournamentBracket(JSON.parse(data).name, JSON.parse(data).size, JSON.parse(data).stock)
            tournaments.push(tournament)
            tournament.addPlayer(ws)
        } else if (JSON.parse(data).tournamentWinner == 1) {

            for (let t = 0; t < tournaments.length; t++) {
                for (let k = 0; k < tournaments[t].players.length; k++) {
                    if (tournaments[t].players[k].serverID == JSON.parse(data).splicePlayer) {
                        games[tournaments[t].players[k].assigned].removePlayer(tournaments[t].players[k])
                        tournaments[t].players.splice(k, 1)
                        tournaments[t].unpaired++
                            // tournaments[t].layer++
                            if (tournaments[t].unpaired % 2 == 0) {
                                tournaments[t].pair()
                            }
                    }
                }
            }


        } else if (JSON.parse(data).queryTournament === 1) {

            let tson = {}
            tson.queryTournamentResponse = 1
            tson.names = []
            tson.sizes = []
            tson.members = []
            tson.stocks = []
            for (let t = 0; t < tournaments.length; t++) {
                tson.names.push(tournaments[t].name)
                tson.sizes.push(tournaments[t].size)
                tson.members.push(tournaments[t].players.length)
                tson.stocks.push(tournaments[t].stock)
            }

            ws.send(JSON.stringify(tson))
        } else if (JSON.parse(data).joinTournament === 1) {
            let tournament
            for (let t = 0; t < tournaments.length; t++) {
                if (tournaments[t].name == JSON.parse(data).name) {
                    tournament = tournaments[t]
                    break
                }
            }
            if (typeof tournament != "undefined") {
                tournament.addPlayer(ws)
                if (tournament.unpaired % 2 == 0) {
                    tournament.pair()
                }
            } else {}

        } else if (JSON.parse(data).dataScores === 1) {
            // let model = new mongoose.model("PlayerRecords")(JSON.parse(data).model) // JSON.parse(data).model
            // model.save()
            return
        } else if (JSON.parse(data).room > -1) {
            if (true === true) {
                let minarr = []
                for (let t = 0; t < games[ws.assigned].players.length; t++) {
                    minarr.push(games[ws.assigned].players[t].pair[1])
                }
                if (Math.max(...minarr) == -1) {
                    ws.pair[1] = 0
                } else {
                    if (!minarr.includes(7)) {
                        ws.pair[1] = 7
                    }
                    if (!minarr.includes(6)) {
                        ws.pair[1] = 6
                    }
                    if (!minarr.includes(5)) {
                        ws.pair[1] = 5
                    }
                    if (!minarr.includes(4)) {
                        ws.pair[1] = 4
                    }
                    if (!minarr.includes(3)) {
                        ws.pair[1] = 3
                    }
                    if (!minarr.includes(2)) {
                        ws.pair[1] = 2
                    }
                    if (!minarr.includes(1)) {
                        ws.pair[1] = 1
                    }
                    if (!minarr.includes(0)) {
                        ws.pair[1] = 0
                    }
                }
                for (let t = 0; t < games[ws.assigned].players.length; t++) {
                    let sjon = {
                        "delete": `${ws.pair[1]}`,
                        "index": `${t}`,
                        "length": `${games[ws.assigned].players.length}`
                    }
                    let ids = []
                    for (let t = 0; t < games[ws.assigned].players.length; t++) {
                        if (t != games[ws.assigned].players.indexOf(ws)) {
                            ids.push(games[ws.assigned].players[t].serverID)
                        }
                    }
                    sjon.playerIDs = ids
                    games[ws.assigned].players[t].send(JSON.stringify(sjon))
                    let djon = {
                        "delete": `${ws.pair[1]}`,
                        "index": `${t}`,
                        "length": `${games[ws.assigned].players.length}`
                    }
                    djon.playerIDs = [ws.serverID]
                    ws.send(JSON.stringify(djon))
                }
            }
            let ids = []
            let sjon = {
                'clean': '1'
            }
            for (let t = 0; t < games[ws.assigned].players.length; t++) {
                if (t != games[ws.assigned].players.indexOf(ws)) {
                    ids.push(games[ws.assigned].players[t].serverID)
                }
            }
            sjon.playerIDs = ids
            let cjon = JSON.stringify(sjon)
            cjon = JSON.parse(cjon)
            cjon.playerIDs = [ws.serverID]
            let datasend = JSON.stringify(sjon)
            let datasendC = JSON.stringify(cjon)
            for (let t = 0; t < games[ws.assigned].players.length; t++) {
                if (t != games[ws.assigned].players.indexOf(ws)) {
                    games[ws.assigned].players[t].send(datasend)
                }
            }
            games[ws.assigned].swapRoom(ws, parseInt(JSON.parse(data).room, 10))
        } else if (JSON.parse(data).counter == 1) {
            let sjon = {
                "counter": `1`,
                "ymom": `${JSON.parse(data).ymom}`,
                "xmom": `${JSON.parse(data).xmom}`,
                "damage": `${JSON.parse(data).damage}`
            }
            sjon.index = JSON.parse(data).striker
            for (let t = 0; t < games[ws.assigned].players.length; t++) {
                if (parseFloat(JSON.parse(data).striker) == games[ws.assigned].players[t].serverID) {
                    games[ws.assigned].players[t].send(JSON.stringify(sjon))
                }
            }
        } else if (JSON.parse(data).kill == 1) {
            let sjon = {
                "kill": `1`
            }
            sjon.index = JSON.parse(data).striker
            for (let t = 0; t < games[ws.assigned].players.length; t++) {
                games[ws.assigned].players[t].send(JSON.stringify(sjon))
            }
        } else if (JSON.parse(data).pinging == 1) {
            let sjon = {
                "pinging": `1`
            }
            sjon.ping = parseInt(JSON.parse(data).ping)
            sjon.serverID = JSON.parse(data).serverID
            for (let t = 0; t < games[ws.assigned].players.length; t++) {
                games[ws.assigned].players[t].send(JSON.stringify(sjon))
            }
        } else {
            if (data >= 0) {
                let minarr = []
                for (let t = 0; t < games[ws.assigned].players.length; t++) {
                    minarr.push(games[ws.assigned].players[t].pair[1])
                }
                if (Math.max(...minarr) == -1) {
                    ws.pair[1] = 0
                } else {
                    if (!minarr.includes(7)) {
                        ws.pair[1] = 7
                    }
                    if (!minarr.includes(6)) {
                        ws.pair[1] = 6
                    }
                    if (!minarr.includes(5)) {
                        ws.pair[1] = 5
                    }
                    if (!minarr.includes(4)) {
                        ws.pair[1] = 4
                    }
                    if (!minarr.includes(3)) {
                        ws.pair[1] = 3
                    }
                    if (!minarr.includes(2)) {
                        ws.pair[1] = 2
                    }
                    if (!minarr.includes(1)) {
                        ws.pair[1] = 1
                    }
                    if (!minarr.includes(0)) {
                        ws.pair[1] = 0
                    }
                }
                let sjon = {
                    "index": `${games[ws.assigned].players.indexOf(ws)}`,
                    "length": `${games[ws.assigned].players.length}`,
                    "slot": `${ws.pair[1]}`
                }
                let storage = []
                for (let t = 0; t < games[ws.assigned].players.length; t++) {
                    if (t != games[ws.assigned].players.indexOf(ws)) {
                        storage.push(games[ws.assigned].players[t].storage)
                    }
                }
                sjon.storage = storage
                ws.storage = storage
                ws.serverID = data
                ws.publicID = data
                let ids = []
                for (let t = 0; t < games[ws.assigned].players.length; t++) {
                    if (t != games[ws.assigned].players.indexOf(ws)) {
                        ids.push(games[ws.assigned].players[t].serverID)
                    }
                }
                sjon.playerIDs = ids
                ws.send(JSON.stringify(sjon))
            } else {
                data = JSON.parse(data)
                data.players = wss.clients.size
                    //ah geex this is gonna be a bad thing to fix gggeez
                data.usedslots = []
                let minarr = []
                for (let t = 0; t < games[ws.assigned].players.length; t++) {
                    minarr.push(games[ws.assigned].players[t].pair[1])
                }
                if (Math.max(...minarr) == -1) {
                    ws.pair[1] = 0
                } else {
                    if (!minarr.includes(7)) {
                        ws.pair[1] = 7
                    }
                    if (!minarr.includes(6)) {
                        ws.pair[1] = 6
                    }
                    if (!minarr.includes(5)) {
                        ws.pair[1] = 5
                    }
                    if (!minarr.includes(4)) {
                        ws.pair[1] = 4
                    }
                    if (!minarr.includes(3)) {
                        ws.pair[1] = 3
                    }
                    if (!minarr.includes(2)) {
                        ws.pair[1] = 2
                    }
                    if (!minarr.includes(1)) {
                        ws.pair[1] = 1
                    }
                    if (!minarr.includes(0)) {
                        ws.pair[1] = 0
                    }
                }
                let ids = []
                for (let t = 0; t < games[ws.assigned].players.length; t++) {
                    if (t != games[ws.assigned].players.indexOf(ws)) {
                        ids.push(parseFloat(games[ws.assigned].players[t].serverID))
                    }
                }
                data.playerIDs = ids
                for (let t = 0; t < games[ws.assigned].players.length; t++) {
                    if (ws != games[ws.assigned].players[t]) {
                        data.serverID = ws.serverID
                        let datapacket = JSON.stringify(data)
                        games[ws.assigned].players[t].send(datapacket)
                    } else {
                        games[ws.assigned].players[t].storage = (data)
                        games[ws.assigned].players[t].serverID = parseFloat((data).serverID)
                    }
                }
            }
        }
    })
})

setInterval(function() {
    for (let t = 0; t < tournaments.length; t++) {
        tournaments[t].sort()
    }
}, 10000);

setInterval(function() {
    for (let t = 0; t < tournaments.length; t++) {
        if (tournaments[t].unpaired % 2 == 0 && tournaments[t].unpaired != 0) {
            tournaments[t].pair()
        }
    }
}, 1000);