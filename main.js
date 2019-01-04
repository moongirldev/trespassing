const fs = require('fs');
const CLI = require('clui');
const clc = require('cli-color');

let pl = {"player": null};
//primary game functions
const game_continue = function () {
    let pl = load('save_data');
    refreshInfo(pl);
    
}

const load = function (save_file) {
    let rawdata_load = fs.readFileSync("./saves/" + save_file + '.json');
    let utf8_load = rawdata_load.toString('UTF8');
    let json_load = JSON.parse(utf8_load)
    let player = json_load.player;
    return player
}

const input = function () {
    
}
//graphics rendering functions
let outputBuffer = new CLI.LineBuffer({
    x: 0,
    y: 0,
    width: process.stdout.columns,
    height: process.stdout.rows
});
const refreshInfo = function (pg) {
    console.clear();
    let message = new CLI.Line(outputBuffer)
        .column('Title Placehole', 20, [clc.red])
        .column('Title Placehole', 20, [clc.cyan])
        .fill()
        .store();
    for (i = 0; i < process.stdout.rows -10; i++) {
        let blankLine = new CLI.Line(outputBuffer)
        .fill()
        .store();
    };

    let infoTitle = new CLI.Line(outputBuffer)
    .padding(10)
    .column(" Health ",30, [clc.white, clc.bgCyan])
    .column("Level: " + pg.info.level)
    .fill()
    .store();

    let infoGauge = new CLI.Line(outputBuffer)
    .column(CLI.Gauge(pg.info.health, pg.info.maxHealth, 30, 10, pg.info.health + "/" + pg.info.maxHealth + " HP"))
    .fill()
    .store();
    console.clear();
    outputBuffer.output();
};



console.log(console.width);
game_continue('dungeon.map');