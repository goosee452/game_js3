function checkPlatformUnder(player, walls){
    playerPosY = player.location.y;
    player.move(0, 1, walls, 0, 0);
    if(player.location.y === playerPosY){
        return true;
    }
    else{
        player.move(0, -1, walls, 0, 0);
        return false;
    }

}

function checkPlatformAbove(player, walls){
    playerPosY = player.location.y;
    player.move(0, -1, walls, 0, 0);
    if(player.location.y === playerPosY){
        return true;
    }
    else{
        player.move(0, 1, walls, 0, 0);
        return false;
    }
}
//----------------------------------------------------------------------------------------------------------
{
//walls
let dash = new Ability;
dash.duration = 3;
dash.ability = (player, spX, spY)=>{
    player.speedX = spX;
    player.speedY = spY;
};
dash.isUsed = false;
let walls = new Array(3);
let a = new Wall;
let b = new Wall;
b.set(150, 150, 100, 100);
a.set(100, 100, 100, 100);
b.setSprite(100, 100, 'wall.png');
a.setSprite(100, 100, 'wall.png');
walls[0] = a;
walls[1] = b;
walls[2] = new Wall;
walls[2].set(0 ,500, 1, 500);
//player
let player = new Player;
player.set(250, 250, 100, 100);
player.setSprite(100, 100, 'wall.png');
//--------
const canvas = document.getElementById("canvas");
const contxt = canvas.getContext("2d");
//--------
let speed = 10;
player.speedX = speed;
player.speedY = speed;
player.jumpPower = -50;
const GRAVITY = 4;//pxl/interval
const ySpeedLimit = 30;//for gravity

let arrowsPressed = {
    left: 0,
    right: 0,
    //---------------------------------------
    up: 0,
    down: 0


    //property = order in which arrow was pressed.
    //if arrow was not pressed, then prop. = 0, like: left is pressed first, then left = 0,
    //right pressed second, then right = 0, similar with up and down
}

function setPressedArrows(options, arrowsPressed, event){
    if(options == 'keydown'){
        if(event.code == 'ArrowRight'){
            arrowsPressed.right = arrowsPressed.left + 1;
        }
        if(event.code == 'ArrowLeft'){
            arrowsPressed.left = arrowsPressed.right + 1;
        }
        if(event.code == 'ArrowUp'){
            arrowsPressed.up = arrowsPressed.down + 1;
        }
        if(event.code == 'ArrowDown'){
            arrowsPressed.down = arrowsPressed.up + 1;
        }
    }
    else if(options == 'keyup'){
        if(event.code == 'ArrowRight'){
            arrowsPressed.right = 0;
        }
        if(event.code == 'ArrowLeft'){
            arrowsPressed.left = 0;
        }
        if(event.code == 'ArrowUp'){
            arrowsPressed.up = 0;
        }
        if(event.code == 'ArrowDown'){
            arrowsPressed.down = 0;
        }
    }
}

addEventListener('keydown', (event)=>{
    setPressedArrows('keydown', arrowsPressed, event);
});
addEventListener('keyup', (event)=>{
    setPressedArrows('keyup', arrowsPressed, event);
});
let dash_crystal = new Item;
dash_crystal.setSprite(50, 50, 'player.png');
dash_crystal.collider.set(400, 400, 50 ,50);
dash_crystal.location.set(400, 400);
dash_crystal.ability = dash;
player.curr_ability = dash_crystal.ability;
let ticksTillEnd = player.curr_ability.duration;
let spX = 0;
let spY = 0;
let anim2 = new Animations;
anim2.sHeight = 51;
anim2.sWidth = 50;
anim2.setSprite('eye.png');
anim2.setAnimations(10, 0, 0, 51, 0, 102, 0, 153, 0, 204, 0, 255, 0, 306, 0, 357, 0, 408, 0, 409, 0, 410, 0);
console.log(anim2.animations);
addEventListener('keydown', (event)=>{
    if(event.code == 'Space' && checkPlatformUnder(player, walls) == true){
        player.speedY = player.jumpPower;
    }  
    else if(event.code == 'KeyQ'){
        spX = 0;
        spY = 0;
        if(player.curr_ability.isUsed == 0){
            player.curr_ability.isGoing = true;
            ticksTillEnd = player.curr_ability.duration;

            if(arrowsPressed.left > arrowsPressed.right){
                spX = -50;
            }
            else if(arrowsPressed.right > arrowsPressed.left){
                spX = 50;
            }
            if(arrowsPressed.up > arrowsPressed.down){
                spY = -50;
            }
            else if(arrowsPressed.down > arrowsPressed.up){
                spY = 50;
            }
            if(arrowsPressed.down == 0 && arrowsPressed.up == 0 && arrowsPressed.left ==  0 && arrowsPressed.right == 0){
                spY = -50;
                spX = 0;
            }
        }

    }
}); 

let actionsInterval = 50;
let framesInterval = 25;
// function dash(player, spX, spY){
//     player.speedX = spX;
//     player.speedY = spY;
// }
setInterval(()=>{
    //console.log(arrowsPressed);

    player.move(player.speedX, player.speedY, walls, 0, 30);
    if(checkPlatformUnder(player, walls) == false){
        player.speedY += GRAVITY;        
        if(player.speedY > ySpeedLimit){
            player.speedY = ySpeedLimit;
        }
    }
    
    else{
        player.speedY = 0;
    }
    dash_crystal.tryToBeUsed(player);
    if(checkPlatformAbove(player, walls) == true){
        player.speedY = GRAVITY;
    }
    if(arrowsPressed.left > arrowsPressed.right){
        player.speedX = -5;
    }
    else if(arrowsPressed.right > arrowsPressed.left){
        player.speedX = 5;
    }
    else {
        player.speedX = 0;
    }
    if(player.curr_ability.isGoing && ticksTillEnd>0){
        player.curr_ability.ability(player, spX, spY);
        ticksTillEnd --;
    }
    else if(player.curr_ability.isGoing && player.curr_ability.isUsed == false){
        player.curr_ability.isUsed = true;
        player.curr_ability.isGoing = false;
        player.speedX = 0;
        player.speedY = 0;
    }
}, actionsInterval);

let anim1 = new Image;
anim1.src = 'eye.png';
let counter = 0;
anim2.onload = ()=>{    contxt.drawImage(anim2.sprite, counter * 52, 0, 51, 50, 250, 250, 51, 50)};
setInterval(()=>{
    contxt.clearRect(0, 0, 500, 500);
    draw('canvas', '2d', player, walls, dash_crystal);
    counter += 1;
    if(counter == 10){
        counter = 0;
    }
    contxt.drawImage(anim2.sprite, anim2.animations[counter][0], anim2.animations[counter][1], 51, 50, 250, 250, 51, 50);
},
framesInterval);
}