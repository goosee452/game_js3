// import { Entity } from "./entity.js";
// import { Wall } from "./wall.js";
import { Point } from "./point.js";

function draw(){
    const canvas = document.getElementById("canvas");
    const contxt = canvas.getContext("2d");

    contxt.fillRect(100, 100, 100, 100);
}

let walls = new Array(1);
let a = new Wall;
a.set(100, 100, 100, 100);
walls[0] = a;
let player = new Entity;
player.set(300, 300, 50);
const canvas = document.getElementById("canvas");
const contxt = canvas.getContext("2d");

contxt.fillRect(100, 100, 100, 100);