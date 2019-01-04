const fs = require('fs');
const CLI = require('clui');
const clc = require('cli-color');

let currentPlayer = {"player": null};

//primary game functions
const game_continue = function () {
    load('save_data');
    refresh();
}

const load = function (save_file) {
    let rawdata_load = fs.readFileSync("./saves/" + save_file + '.json');
    let utf8_load = rawdata_load.toString('UTF8');
    let json_load = JSON.parse(utf8_settings)
    let currentPlayer = json_load.player;
    console.log("Loaded")
}
//graphics rendering functions
let outputBuffer = new CLI.LineBuffer({
    x: 0,
    y: 0,
    width: console,
    height: console
});
const refresh = function () {
    let message = new CLI.Line(outputBuffer)
        .column('Title Placehole', 20, [clc.red])
        .column('Title Placehole', 20, [clc.cyan])
        .fill()
        .store();

    let blankLine = new CLI.Line(outputBuffer)
        .fill()
        .store();

    let healthDisplay = new CLI.Line(outputBuffer)
    .column(CLI.Gauge(currentPlayer.health, currentPlayer.maxHealth, 60))
    .fill()
    .store();
    console.log(currentPlayer.health)
    outputBuffer.output();
};



let rawdata_settings = fs.readFileSync('settings.json');
let utf8_settings = rawdata_settings.toString('UTF8');
let json_settings = JSON.parse(utf8_settings)
let player = json_settings.player

game_continue('dungeon.map');