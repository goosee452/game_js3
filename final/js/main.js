function checkPlatformUnder(player, walls) {
    let playerPosY = player.location.y;
    player.move(0, 1, walls, 0, 0);
    if (player.location.y === playerPosY) {
        return true;
    }
    else {
        player.move(0, -1, walls, 0, 0);
        return false;
    }

}

function checkPlatformAbove(player, walls) {
    let playerPosY = player.location.y;
    player.move(0, -1, walls, 0, 0);
    if (player.location.y === playerPosY) {
        return true;
    }
    else {
        player.move(0, 1, walls, 0, 0);
        return false;
    }
}

function setPlatformLarge(x, y){
    let newPlatform = new Wall;
    newPlatform.set(x, y, 150, 400);
    newPlatform.animations.setSprite('game_files/platform_large_10.png');
    newPlatform.animations.addAnimation(1, '1', 0, 0);
    newPlatform.animations.sHeight = 150;
    newPlatform.animations.sWidth = 400;
    newPlatform.animations.setCurrSxAndSy(0, 0);
    newPlatform.type = 'platform_large';
    return newPlatform;
}

function setPlatformMedium(x, y){
    let newPlatform = new Wall;
    newPlatform.set(x, y, 200, 200);
    newPlatform.animations.setSprite('game_files/platform_medium_10.png');
    newPlatform.animations.addAnimation(1, '1', 0, 0);
    newPlatform.animations.sHeight = 200;
    newPlatform.animations.sWidth = 200;
    newPlatform.animations.setCurrSxAndSy(0, 0);
    newPlatform.type = 'platform_medium';
    return newPlatform;
}

function setPlatformLarger(x, y){
    let newPlatform = new Wall;
    newPlatform.set(x, y, 500, 500);
    newPlatform.animations.setSprite('game_files/platform_larger_10.png');
    newPlatform.animations.addAnimation(1, '1', 0, 0);
    newPlatform.animations.sHeight = 500;
    newPlatform.animations.sWidth = 500;
    newPlatform.animations.setCurrSxAndSy(0, 0);
    newPlatform.type = 'platform_larger';
    return newPlatform;
}

function setSpike(x, y){
    newSpike = new Wall;
    newSpike.set(x, y, 50, 200);
    newSpike.animations.setSprite('game_files/spikes_10.png');
    newSpike.animations.addAnimation(1, '1', 0, 0);
    newSpike.animations.sHeight = 50;
    newSpike.animations.sWidth = 200;
    newSpike.animations.setCurrSxAndSy(0, 0);
    newSpike.type = 'spikes5_up';

    return newSpike;
}

function setSpikeDown(x, y){
    newSpike = new Wall;
    newSpike.set(x, y, 50, 200);
    newSpike.animations.setSprite('game_files/spikes_down_10.png');
    newSpike.animations.addAnimation(1, '1', 0, 0);
    newSpike.animations.sHeight = 50;
    newSpike.animations.sWidth = 200;
    newSpike.animations.setCurrSxAndSy(0, 0);
    newSpike.type = 'spikes5_down';

    return newSpike;
}

function setSpikeRight(x, y){
    newSpike = new Wall;
    newSpike.set(x, y, 200, 50);
    newSpike.animations.setSprite('game_files/spikes_right_10.png');
    newSpike.animations.addAnimation(1, '1', 0, 0);
    newSpike.animations.sHeight = 200;
    newSpike.animations.sWidth = 50;
    newSpike.animations.setCurrSxAndSy(0, 0);
    newSpike.type = 'spikes5_right';

    return newSpike;
}

function setSpikeLetf(x, y){
    newSpike = new Wall;
    newSpike.set(x, y, 200, 50);
    newSpike.animations.setSprite('game_files/spikes_left_10.png');
    newSpike.animations.addAnimation(1, '1', 0, 0);
    newSpike.animations.sHeight = 200;
    newSpike.animations.sWidth = 50;
    newSpike.animations.setCurrSxAndSy(0, 0);
    newSpike.type = 'spikes5_left';

    return newSpike;
}

let dash = new Ability;
dash.name = 'dash';
dash.duration = 3;
dash.ability = (player, spX, spY) => {
    player.speedX = spX;
    player.speedY = spY;
};
dash.isUsed = false;

let teleport = new Ability;
teleport.name = 'teleport';
teleport.duration = 1;
teleport.ability = (player, directions) => {
    let spX = 10000;
    let spY = 10000;
    if (directions.up > directions.down) {
        spY *= -1;
        spX = 0;
    }
    else if(directions.up < directions.down){
        spX = 0;
    }
    else if (directions.left > directions.right) {
        spX *= -1;
        spY = 0;
    }
    else if(directions.left < directions.right){
        spY = 0;
    }

    player.speedX = spX;
    player.speedY = spY;
};
teleport.isUsed = false;

let platform = new Ability;
platform.name = 'platform';
platform.duration = 1;
platform.ability = (player, walls) => {
    let new_wall = new Wall;
    new_wall.set(player.collider.base.x - 80, player.collider.base.y + player.collider.height + 10, 40, 240);
    new_wall.animations.setSprite('game_files/player_platform_10.png');
    new_wall.animations.dHeight = 100;
    new_wall.animations.dWidth = 600;
    new_wall.animations.sHeight = 40;
    new_wall.animations.sWidth = 240;
    new_wall.animations.addAnimation(1, 'idle', 0, 0);
    walls.push(new_wall);
};
platform.isUsed = false;

let hyperjump = new Ability;
hyperjump.name = 'hyperjump';
hyperjump.duration = 1;
hyperjump.ability = (player, walls) => {
    let playerPosY = player.location.y;
    player.move(0, 1, walls, 0, 0);
    if (player.location.y === playerPosY) {
        player.speedY = -150;
    }
    else {
    }

}
hyperjump.isUsed = false;

function setHyperjumpCrystal(x, y){
    let new_item = new Item;

    new_item.ability = hyperjump;
    new_item.animations.setSprite('game_files/hyperjump_crystal_10.png');
    new_item.location.set(x, y);
    new_item.collider.set(x, y, 100, 100);
    new_item.animations.addAnimation(1, 'idle', 0, 0);
    new_item.animations.addAnimation(3, 'termination', 500, 0, 600, 0, 700, 0);
    new_item.animations.sHeight = 100;
    new_item.animations.sWidth = 100;
    new_item.type = 'hyperjump_crystal';
    return new_item;
}

function setTeleportCrystal(x, y){
    let new_item = new Item;

    new_item.ability = teleport;
    new_item.animations.setSprite('game_files/teleport_crystal_10.png');
    new_item.location.set(x, y);
    new_item.collider.set(x, y, 100, 100);
    new_item.animations.addAnimation(1, 'idle', 0, 0);
    new_item.animations.addAnimation(3, 'termination', 500, 0, 600, 0, 700, 0);
    new_item.animations.sHeight = 100;
    new_item.animations.sWidth = 100;
    new_item.type = 'teleport_crystal';
    return new_item;
}

function setDashCrystal(x, y){
    let new_item = new Item;

    new_item.ability = dash;
    new_item.animations.setSprite('game_files/dash_crystal_10.png');
    new_item.location.set(x, y);
    new_item.collider.set(x, y, 100, 100);
    new_item.animations.addAnimation(1, 'idle', 0, 0);
    new_item.animations.addAnimation(3, 'termination', 500, 0, 600, 0, 700, 0);
    new_item.animations.sHeight = 100;
    new_item.animations.sWidth = 100;
    new_item.type = 'dash_crystal';
    return new_item;
}

function setPlatformCrystal(x, y){
    let new_item = new Item;

    new_item.ability = platform;
    new_item.animations.setSprite('game_files/platform_crystal_10.png');
    new_item.location.set(x, y);
    new_item.collider.set(x, y, 100, 100);
    new_item.animations.addAnimation(1, 'idle', 0, 0);
    new_item.animations.addAnimation(3, 'termination', 500, 0, 600, 0, 700, 0);
    new_item.animations.sHeight = 100;
    new_item.animations.sWidth = 100;
    new_item.type = 'platform_crystal';
    return new_item;
}

function setDoor(x, y){
    let door = new Wall;
    door.set(x, y, 200, 200);
    door.animations.setSprite('game_files/door_10.png');
    door.animations.addAnimation(1, '1', 0, 0);
    door.animations.sHeight = 200;
    door.animations.sWidth = 200;
    door.animations.setCurrSxAndSy(0, 0);
    door.type = 'door';
    return door;
}

let storage = new Array(5);
storage[0] = new Array(18);
// storage[0][0] = '{"player_pos":{"x":0,"y":0},"background_src":"","width":0,"height":0,"walls":[{"location":{"x":100,"y":300},"hitbox":{"base":{"x":100,"y":300},"height":100,"width":100},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":100,"sHeight":100,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v4/game_js2/wall.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":0,"y":1000},"hitbox":{"base":{"x":0,"y":1000},"height":0,"width":1000},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":100,"sHeight":100,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v4/game_js2/wall.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}}],"items":[{"location":{"x":750,"y":750},"collider":{"base":{"x":750,"y":750},"height":100,"width":100},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":100,"sHeight":100,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v4/game_js2/game_files/dash_crystal_10.png"},"animations":[[[0,0]],[[500,0],[600,0],[700,0]]],"animationsMap":[["idle",1],["termination",2]]},"ability":{"duration":3,"isGoing":false,"isUsed":false,"name":"dash"},"isTerminated":0},{"location":{"x":750,"y":500},"collider":{"base":{"x":750,"y":500},"height":100,"width":100},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":100,"sHeight":100,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v4/game_js2/game_files/platform_crystal_10.png"},"animations":[[[0,0]],[[500,0],[600,0],[700,0]]],"animationsMap":[["idle",1],["termination",2]]},"ability":{"duration":1,"isGoing":false,"isUsed":true,"name":"platform"},"isTerminated":0}],"spikes":[{"location":{"x":0,"y":400},"hitbox":{"base":{"x":0,"y":400},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":0,"y":950},"hitbox":{"base":{"x":0,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}}]}';
// storage[0][1] = '{"player_pos":{"x":180,"y":420},"background_src":"file:///C:/Users/User/js/gamejs/v6/v6/v5/v4/game_js2/game.html","width":2000,"height":1000,"walls":[{"type":"","location_x":0,"location_y":1000},{"type":"","location_x":2000,"location_y":0},{"type":"","location_x":0,"location_y":0},{"type":"","location_x":0,"location_y":0},{"type":"","location_x":50,"location_y":600},{"type":"","location_x":1550,"location_y":600}],"spikes":[{"type":"","location_x":0,"location_y":950},{"type":"","location_x":200,"location_y":950},{"type":"","location_x":400,"location_y":950},{"type":"","location_x":600,"location_y":950},{"type":"","location_x":800,"location_y":950},{"type":"","location_x":1000,"location_y":950},{"type":"","location_x":1200,"location_y":950},{"type":"","location_x":1400,"location_y":950},{"type":"","location_x":1600,"location_y":950},{"type":"","location_x":1800,"location_y":950}],"items":[{"type":"","location_x":950,"location_y":550}]}';
//storage[0][2] = '{"player_pos":{"x":180,"y":420},"background_src":"","width":2500,"height":1000,"walls":[{"location":{"x":0,"y":1000},"hitbox":{"base":{"x":0,"y":1000},"height":0,"width":2500},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":0,"sHeight":0,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/platform_large_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":2500,"y":0},"hitbox":{"base":{"x":2500,"y":0},"height":1000,"width":0},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":0,"sHeight":0,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/platform_large_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":0,"y":0},"hitbox":{"base":{"x":0,"y":0},"height":0,"width":2500},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":0,"sHeight":0,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/platform_large_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":0,"y":0},"hitbox":{"base":{"x":0,"y":0},"height":1000,"width":0},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":0,"sHeight":0,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/platform_large_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":50,"y":600},"hitbox":{"base":{"x":50,"y":600},"height":150,"width":400},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":400,"sHeight":150,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/platform_large_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":800,"y":750},"hitbox":{"base":{"x":800,"y":750},"height":150,"width":400},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":400,"sHeight":150,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/platform_large_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}}],"items":[{"location":{"x":950,"y":550},"collider":{"base":{"x":950,"y":550},"height":100,"width":100},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":100,"sHeight":100,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/dash_crystal_10.png"},"animations":[[[0,0]],[[500,0],[600,0],[700,0]]],"animationsMap":[["idle",1],["termination",2]]},"ability":{"duration":3,"isGoing":false,"isUsed":false,"name":"dash"},"isTerminated":0}],"spikes":[{"location":{"x":0,"y":950},"hitbox":{"base":{"x":0,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":200,"y":950},"hitbox":{"base":{"x":200,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":400,"y":950},"hitbox":{"base":{"x":400,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":600,"y":950},"hitbox":{"base":{"x":600,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":800,"y":950},"hitbox":{"base":{"x":800,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":1000,"y":950},"hitbox":{"base":{"x":1000,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":1200,"y":950},"hitbox":{"base":{"x":1200,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":1400,"y":950},"hitbox":{"base":{"x":1400,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":1600,"y":950},"hitbox":{"base":{"x":1600,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":1800,"y":950},"hitbox":{"base":{"x":1800,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}}]}'
storage[0][0] = '{"player_pos":{"x":100,"y":700},"door_pos":{"x":1600,"y":700},"background_src":"","width":2000,"height":1000,"walls":[{"type":"border","location_x":0,"location_y":1000},{"type":"border","location_x":2000,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"platform_large","location_x":100,"location_y":900},{"type":"platform_large","location_x":800,"location_y":900},{"type":"platform_large","location_x":1500,"location_y":900}],"spikes":[{"type":"spikes5_up","location_x":0,"location_y":950},{"type":"spikes5_up","location_x":500,"location_y":950},{"type":"spikes5_up","location_x":700,"location_y":950},{"type":"spikes5_up","location_x":1200,"location_y":950},{"type":"spikes5_up","location_x":1400,"location_y":950},{"type":"spikes5_up","location_x":1900,"location_y":950}],"items":[]}';
storage[0][1] = '{"player_pos":{"x":100,"y":700},"door_pos":{"x":1600,"y":700},"background_src":"","width":2000,"height":1000,"walls":[{"type":"border","location_x":0,"location_y":1000},{"type":"border","location_x":2000,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"platform_large","location_x":100,"location_y":900},{"type":"platform_large","location_x":1500,"location_y":900}],"spikes":[{"type":"spikes5_up","location_x":0,"location_y":950},{"type":"spikes5_up","location_x":500,"location_y":950},{"type":"spikes5_up","location_x":700,"location_y":950},{"type":"spikes5_up","location_x":1100,"location_y":950},{"type":"spikes5_up","location_x":1300,"location_y":950},{"type":"spikes5_up","location_x":1900,"location_y":950},{"type":"spikes5_up","location_x":900,"location_y":950}],"items":[{"type":"dash_crystal","location_x":950,"location_y":550}]}';
storage[0][2] = '{"player_pos":{"x":300,"y":900},"door_pos":{"x":0,"y":200},"background_src":"","width":1500,"height":1300,"walls":[{"type":"border","location_x":0,"location_y":1300},{"type":"border","location_x":1500,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"platform_large","location_x":200,"location_y":1200},{"type":"platform_large","location_x":1200,"location_y":1200},{"type":"platform_large","location_x":-100,"location_y":400}],"spikes":[{"type":"spikes5_up","location_x":0,"location_y":1250},{"type":"spikes5_up","location_x":600,"location_y":1250},{"type":"spikes5_up","location_x":800,"location_y":1250},{"type":"spikes5_up","location_x":1000,"location_y":1250}],"items":[{"type":"dash_crystal","location_x":1300,"location_y":1050}]}';
storage[0][3] = '{"player_pos":{"x":100,"y":700},"door_pos":{"x":1700,"y":700},"background_src":"","width":2000,"height":1000,"walls":[{"type":"border","location_x":0,"location_y":1000},{"type":"border","location_x":2000,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"platform_large","location_x":0,"location_y":900},{"type":"platform_large","location_x":1600,"location_y":900}],"spikes":[{"type":"spikes5_up","location_x":400,"location_y":950},{"type":"spikes5_up","location_x":600,"location_y":950},{"type":"spikes5_up","location_x":800,"location_y":950},{"type":"spikes5_up","location_x":1000,"location_y":950},{"type":"spikes5_up","location_x":1200,"location_y":950},{"type":"spikes5_up","location_x":1400,"location_y":950}],"items":[{"type":"platform_crystal","location_x":950,"location_y":700}]}';
storage[0][4] = '{"player_pos":{"x":100,"y":1200},"door_pos":{"x":100,"y":200},"background_src":"","width":1400,"height":1500,"walls":[{"type":"border","location_x":0,"location_y":1500},{"type":"border","location_x":1400,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"platform_large","location_x":0,"location_y":1400},{"type":"platform_large","location_x":0,"location_y":400}],"spikes":[{"type":"spikes5_up","location_x":400,"location_y":1450},{"type":"spikes5_up","location_x":600,"location_y":1450},{"type":"spikes5_up","location_x":800,"location_y":1450},{"type":"spikes5_up","location_x":1000,"location_y":1450},{"type":"spikes5_up","location_x":1200,"location_y":1450}],"items":[{"type":"platform_crystal","location_x":800,"location_y":1000},{"type":"dash_crystal","location_x":1100,"location_y":700}]}';
storage[0][5] = '{"player_pos":{"x":100,"y":1200},"door_pos":{"x":2200,"y":800},"background_src":"","width":2500,"height":1500,"walls":[{"type":"border","location_x":0,"location_y":1500},{"type":"border","location_x":2500,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"platform_large","location_x":0,"location_y":1400},{"type":"platform_large","location_x":2100,"location_y":1000},{"type":"platform_large","location_x":-100,"location_y":1050},{"type":"platform_large","location_x":-200,"location_y":700}],"spikes":[{"type":"spikes5_up","location_x":400,"location_y":1450},{"type":"spikes5_up","location_x":600,"location_y":1450},{"type":"spikes5_up","location_x":800,"location_y":1450},{"type":"spikes5_up","location_x":1000,"location_y":1450},{"type":"spikes5_up","location_x":1200,"location_y":1450},{"type":"spikes5_up","location_x":1400,"location_y":1450},{"type":"spikes5_up","location_x":1600,"location_y":1450},{"type":"spikes5_up","location_x":1800,"location_y":1450},{"type":"spikes5_up","location_x":2000,"location_y":1450},{"type":"spikes5_up","location_x":2200,"location_y":1450},{"type":"spikes5_up","location_x":2400,"location_y":1450}],"items":[{"type":"platform_crystal","location_x":50,"location_y":550},{"type":"dash_crystal","location_x":50,"location_y":900}]}';
storage[0][6] = '{"player_pos":{"x":250,"y":800},"door_pos":{"x":2150,"y":800},"background_src":"","width":2500,"height":1500,"walls":[{"type":"border","location_x":0,"location_y":1500},{"type":"border","location_x":2500,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"platform_larger","location_x":0,"location_y":1000},{"type":"platform_larger","location_x":2000,"location_y":1000},{"type":"platform_medium","location_x":1500,"location_y":1100},{"type":"platform_medium","location_x":800,"location_y":1100},{"type":"platform_medium","location_x":1150,"location_y":850}],"spikes":[{"type":"spikes5_up","location_x":500,"location_y":1450},{"type":"spikes5_up","location_x":700,"location_y":1450},{"type":"spikes5_up","location_x":900,"location_y":1450},{"type":"spikes5_up","location_x":1100,"location_y":1450},{"type":"spikes5_up","location_x":1300,"location_y":1450},{"type":"spikes5_up","location_x":1500,"location_y":1450},{"type":"spikes5_up","location_x":1700,"location_y":1450},{"type":"spikes5_up","location_x":1900,"location_y":1450},{"type":"spikes5_up","location_x":1150,"location_y":800},{"type":"spikes5_down","location_x":1150,"location_y":1050},{"type":"spikes5_right","location_x":1350,"location_y":850},{"type":"spikes5_left","location_x":1100,"location_y":850}],"items":[]}';
storage[0][7] = '{"player_pos":{"x":250,"y":950},"door_pos":{"x":2300,"y":300},"background_src":"","width":2500,"height":1300,"walls":[{"type":"border","location_x":0,"location_y":1300},{"type":"border","location_x":2500,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"platform_large","location_x":0,"location_y":1150},{"type":"platform_larger","location_x":1500,"location_y":1050},{"type":"platform_larger","location_x":2000,"location_y":1050},{"type":"platform_medium","location_x":1750,"location_y":500},{"type":"platform_medium","location_x":1750,"location_y":300},{"type":"platform_medium","location_x":400,"location_y":1200},{"type":"platform_medium","location_x":1300,"location_y":1100},{"type":"platform_large","location_x":2200,"location_y":500}],"spikes":[{"type":"spikes5_up","location_x":400,"location_y":1150},{"type":"spikes5_up","location_x":600,"location_y":1250},{"type":"spikes5_up","location_x":800,"location_y":1250},{"type":"spikes5_up","location_x":1000,"location_y":1250},{"type":"spikes5_up","location_x":1200,"location_y":1250},{"type":"spikes5_up","location_x":1300,"location_y":1050},{"type":"spikes5_up","location_x":1500,"location_y":1000},{"type":"spikes5_up","location_x":1700,"location_y":1000},{"type":"spikes5_up","location_x":1900,"location_y":1000},{"type":"spikes5_up","location_x":2100,"location_y":1000},{"type":"spikes5_up","location_x":2300,"location_y":1000},{"type":"spikes5_down","location_x":1750,"location_y":700}],"items":[{"type":"dash_crystal","location_x":1600,"location_y":800},{"type":"platform_crystal","location_x":50,"location_y":1000},{"type":"dash_crystal","location_x":2000,"location_y":800}]}';
storage[0][8] = '{"player_pos":{"x":250,"y":1700},"door_pos":{"x":250,"y":100},"background_src":"","width":1500,"height":2000,"walls":[{"type":"border","location_x":0,"location_y":2000},{"type":"border","location_x":1500,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"platform_large","location_x":0,"location_y":1900},{"type":"platform_large","location_x":1100,"location_y":1100},{"type":"platform_larger","location_x":150,"location_y":300},{"type":"platform_larger","location_x":450,"location_y":-200}],"spikes":[{"type":"spikes5_up","location_x":400,"location_y":1950},{"type":"spikes5_up","location_x":600,"location_y":1950},{"type":"spikes5_up","location_x":800,"location_y":1950},{"type":"spikes5_up","location_x":1000,"location_y":1950},{"type":"spikes5_up","location_x":1200,"location_y":1950},{"type":"spikes5_up","location_x":1400,"location_y":1950},{"type":"spikes5_left","location_x":100,"location_y":400},{"type":"spikes5_left","location_x":100,"location_y":600}],"items":[{"type":"platform_crystal","location_x":0,"location_y":1450},{"type":"platform_crystal","location_x":1350,"location_y":950},{"type":"dash_crystal","location_x":0,"location_y":1750}]}'
storage[0][9] = '{"player_pos":{"x":250,"y":1700},"door_pos":{"x":0,"y":200},"background_src":"","width":2000,"height":2000,"walls":[{"type":"border","location_x":0,"location_y":2000},{"type":"border","location_x":2000,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"platform_large","location_x":0,"location_y":1900},{"type":"platform_large","location_x":0,"location_y":1450},{"type":"platform_large","location_x":400,"location_y":1450},{"type":"platform_large","location_x":800,"location_y":1450},{"type":"platform_medium","location_x":1200,"location_y":1200},{"type":"platform_medium","location_x":1200,"location_y":1000},{"type":"platform_medium","location_x":1200,"location_y":1400},{"type":"platform_medium","location_x":1200,"location_y":800},{"type":"platform_medium","location_x":0,"location_y":400}],"spikes":[{"type":"spikes5_up","location_x":400,"location_y":1950},{"type":"spikes5_up","location_x":600,"location_y":1950},{"type":"spikes5_up","location_x":800,"location_y":1950},{"type":"spikes5_up","location_x":1000,"location_y":1950},{"type":"spikes5_up","location_x":1200,"location_y":1950},{"type":"spikes5_up","location_x":1400,"location_y":1950},{"type":"spikes5_up","location_x":1600,"location_y":1950},{"type":"spikes5_up","location_x":1800,"location_y":1950},{"type":"spikes5_down","location_x":400,"location_y":1600},{"type":"spikes5_down","location_x":600,"location_y":1600},{"type":"spikes5_down","location_x":800,"location_y":1600},{"type":"spikes5_down","location_x":1000,"location_y":1600},{"type":"spikes5_down","location_x":1200,"location_y":1600},{"type":"spikes5_down","location_x":0,"location_y":1600},{"type":"spikes5_down","location_x":200,"location_y":1600},{"type":"spikes5_up","location_x":400,"location_y":1400},{"type":"spikes5_up","location_x":600,"location_y":1400},{"type":"spikes5_up","location_x":800,"location_y":1400},{"type":"spikes5_up","location_x":1000,"location_y":1400},{"type":"spikes5_up","location_x":1200,"location_y":750},{"type":"spikes5_up","location_x":0,"location_y":1400},{"type":"spikes5_up","location_x":200,"location_y":1400}],"items":[{"type":"platform_crystal","location_x":400,"location_y":1200},{"type":"dash_crystal","location_x":900,"location_y":1200},{"type":"dash_crystal","location_x":300,"location_y":1750},{"type":"dash_crystal","location_x":700,"location_y":1750},{"type":"dash_crystal","location_x":1100,"location_y":1750},{"type":"dash_crystal","location_x":1500,"location_y":1750},{"type":"dash_crystal","location_x":1500,"location_y":1250},{"type":"dash_crystal","location_x":1500,"location_y":750},{"type":"dash_crystal","location_x":400,"location_y":700}]}'
storage[0][10] = '{"player_pos":{"x":250,"y":700},"door_pos":{"x":300,"y":200},"background_src":"","width":500,"height":1600,"walls":[{"type":"border","location_x":0,"location_y":1600},{"type":"border","location_x":500,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"platform_larger","location_x":0,"location_y":1500},{"type":"platform_large","location_x":200,"location_y":400}],"spikes":[],"items":[{"type":"hyperjump_crystal","location_x":200,"location_y":1000}]}'
storage[0][11] = '{"player_pos":{"x":250,"y":700},"door_pos":{"x":800,"y":1350},"background_src":"","width":1000,"height":1600,"walls":[{"type":"border","location_x":0,"location_y":1600},{"type":"border","location_x":1000,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"platform_large","location_x":-200,"location_y":1550},{"type":"platform_large","location_x":200,"location_y":1100},{"type":"platform_large","location_x":600,"location_y":1100},{"type":"platform_large","location_x":600,"location_y":1550}],"spikes":[{"type":"spikes5_up","location_x":200,"location_y":1550},{"type":"spikes5_down","location_x":200,"location_y":1250},{"type":"spikes5_up","location_x":400,"location_y":1550},{"type":"spikes5_down","location_x":400,"location_y":1250}],"items":[{"type":"hyperjump_crystal","location_x":800,"location_y":900},{"type":"dash_crystal","location_x":50,"location_y":50}]}'
storage[0][12] = '{"player_pos":{"x":200,"y":100},"door_pos":{"x":1600,"y":300},"background_src":"","width":1800,"height":1800,"walls":[{"type":"border","location_x":0,"location_y":1800},{"type":"border","location_x":1800,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"platform_large","location_x":-100,"location_y":500},{"type":"platform_large","location_x":1200,"location_y":500},{"type":"platform_medium","location_x":1600,"location_y":500},{"type":"platform_medium","location_x":1200,"location_y":300},{"type":"platform_larger","location_x":-200,"location_y":1500},{"type":"platform_larger","location_x":300,"location_y":1600},{"type":"platform_larger","location_x":700,"location_y":1500},{"type":"platform_larger","location_x":1200,"location_y":1700}],"spikes":[{"type":"spikes5_up","location_x":1200,"location_y":250},{"type":"spikes5_left","location_x":1150,"location_y":300}],"items":[{"type":"hyperjump_crystal","location_x":1500,"location_y":1550},{"type":"platform_crystal","location_x":50,"location_y":50},{"type":"dash_crystal","location_x":350,"location_y":800}]}'
storage[0][13] = '{"player_pos":{"x":0,"y":1300},"door_pos":{"x":500,"y":650},"background_src":"","width":700,"height":1500,"walls":[{"type":"border","location_x":0,"location_y":1500},{"type":"border","location_x":700,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"platform_large","location_x":400,"location_y":1350},{"type":"platform_larger","location_x":300,"location_y":850},{"type":"platform_medium","location_x":200,"location_y":700},{"type":"platform_medium","location_x":200,"location_y":200},{"type":"platform_larger","location_x":200,"location_y":-300}],"spikes":[{"type":"spikes5_up","location_x":200,"location_y":650},{"type":"spikes5_down","location_x":200,"location_y":400}],"items":[{"type":"hyperjump_crystal","location_x":250,"location_y":1350},{"type":"dash_crystal","location_x":50,"location_y":1200}]}'
storage[0][14] = '{"player_pos":{"x":0,"y":800},"door_pos":{"x":1800,"y":800},"background_src":"","width":2000,"height":1000,"walls":[{"type":"border","location_x":0,"location_y":1000},{"type":"border","location_x":2000,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"platform_medium","location_x":400,"location_y":900},{"type":"platform_medium","location_x":400,"location_y":700},{"type":"platform_medium","location_x":400,"location_y":500},{"type":"platform_medium","location_x":400,"location_y":0},{"type":"platform_medium","location_x":1000,"location_y":900},{"type":"platform_medium","location_x":1000,"location_y":700},{"type":"platform_medium","location_x":1000,"location_y":0},{"type":"platform_medium","location_x":1000,"location_y":200},{"type":"platform_medium","location_x":1600,"location_y":900},{"type":"platform_medium","location_x":1600,"location_y":700},{"type":"platform_medium","location_x":1600,"location_y":500},{"type":"platform_medium","location_x":1600,"location_y":300}],"spikes":[{"type":"spikes5_up","location_x":400,"location_y":450},{"type":"spikes5_up","location_x":1000,"location_y":650},{"type":"spikes5_up","location_x":1600,"location_y":250},{"type":"spikes5_down","location_x":400,"location_y":200},{"type":"spikes5_down","location_x":1000,"location_y":400},{"type":"spikes5_down","location_x":1600,"location_y":0}],"items":[{"type":"hyperjump_crystal","location_x":250,"location_y":850},{"type":"dash_crystal","location_x":250,"location_y":700},{"type":"hyperjump_crystal","location_x":850,"location_y":850},{"type":"dash_crystal","location_x":850,"location_y":700},{"type":"hyperjump_crystal","location_x":1450,"location_y":850},{"type":"dash_crystal","location_x":1450,"location_y":700}]}'
storage[0][15] = '{"player_pos":{"x":0,"y":50},"door_pos":{"x":1200,"y":100},"background_src":"","width":1400,"height":300,"walls":[{"type":"border","location_x":0,"location_y":300},{"type":"border","location_x":1400,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"platform_large","location_x":0,"location_y":250},{"type":"platform_large","location_x":0,"location_y":-100}],"spikes":[{"type":"spikes5_up","location_x":400,"location_y":250},{"type":"spikes5_up","location_x":600,"location_y":250},{"type":"spikes5_up","location_x":800,"location_y":250},{"type":"spikes5_up","location_x":1000,"location_y":250},{"type":"spikes5_down","location_x":400,"location_y":0},{"type":"spikes5_down","location_x":600,"location_y":0},{"type":"spikes5_down","location_x":800,"location_y":0},{"type":"spikes5_down","location_x":1000,"location_y":0}],"items":[{"type":"teleport_crystal","location_x":200,"location_y":100}]}'
storage[0][16] = '{"player_pos":{"x":400,"y":1300},"door_pos":{"x":1800,"y":100},"background_src":"","width":2000,"height":2000,"walls":[{"type":"border","location_x":0,"location_y":2000},{"type":"border","location_x":2000,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"platform_larger","location_x":0,"location_y":1500},{"type":"platform_large","location_x":1600,"location_y":300}],"spikes":[{"type":"spikes5_up","location_x":500,"location_y":1950},{"type":"spikes5_up","location_x":700,"location_y":1950},{"type":"spikes5_up","location_x":900,"location_y":1950},{"type":"spikes5_up","location_x":1100,"location_y":1950},{"type":"spikes5_up","location_x":1300,"location_y":1950},{"type":"spikes5_up","location_x":1500,"location_y":1950},{"type":"spikes5_up","location_x":1700,"location_y":1950},{"type":"spikes5_up","location_x":1900,"location_y":1950}],"items":[{"type":"teleport_crystal","location_x":50,"location_y":1350}]}'
storage[0][17] = '{"player_pos":{"x":400,"y":1300},"door_pos":{"x":2650,"y":50},"background_src":"","width":3000,"height":2000,"walls":[{"type":"border","location_x":0,"location_y":2000},{"type":"border","location_x":3000,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"border","location_x":0,"location_y":0},{"type":"platform_larger","location_x":0,"location_y":1900},{"type":"platform_large","location_x":2600,"location_y":1900},{"type":"platform_medium","location_x":200,"location_y":1500},{"type":"platform_medium","location_x":2650,"location_y":250}],"spikes":[{"type":"spikes5_up","location_x":500,"location_y":1950},{"type":"spikes5_up","location_x":700,"location_y":1950},{"type":"spikes5_up","location_x":900,"location_y":1950},{"type":"spikes5_up","location_x":1100,"location_y":1950},{"type":"spikes5_up","location_x":1300,"location_y":1950},{"type":"spikes5_up","location_x":1500,"location_y":1950},{"type":"spikes5_up","location_x":1700,"location_y":1950},{"type":"spikes5_up","location_x":1900,"location_y":1950},{"type":"spikes5_up","location_x":2100,"location_y":1950},{"type":"spikes5_up","location_x":2300,"location_y":1950},{"type":"spikes5_up","location_x":2500,"location_y":1950},{"type":"spikes5_left","location_x":2960,"location_y":0},{"type":"spikes5_left","location_x":2960,"location_y":200},{"type":"spikes5_left","location_x":2960,"location_y":400}],"items":[{"type":"teleport_crystal","location_x":50,"location_y":1750},{"type":"hyperjump_crystal","location_x":50,"location_y":1450},{"type":"teleport_crystal","location_x":50,"location_y":500},{"type":"platform_crystal","location_x":2800,"location_y":1550},{"type":"platform_crystal","location_x":200,"location_y":1750}]}';
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
{
    let room = new Room;
    let room1 = new Room;
    //----------------------------------------------------------------------------------------------------------
    //----------------------------------------------WALLS-------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------

    room1.player_pos.set(50,1300);
    room1.height = 2000;
    room1.width = 3000;
    room1.door = setDoor(2650, 50);
    room1.spikes = new Array(0);

    room1.items = new Array(0);

    room1.walls = new Array(4);

    room1.walls[0] = new Wall;
    room1.walls[0].set(0, room1.height, 0, room1.width);
    room1.walls[0].animations.setSprite('game_files/platform_large_10.png');
    room1.walls[0].animations.addAnimation(1, '1', 0, 0);
    room1.walls[0].animations.sHeight = 0;
    room1.walls[0].animations.sWidth = 0;
    room1.walls[0].animations.setCurrSxAndSy(0, 0);
    room1.walls[0].type = 'border';

    room1.walls[1] = new Wall;
    room1.walls[1].set(room1.width, 0, room1.height, 0);
    room1.walls[1].animations.setSprite('game_files/platform_large_10.png');
    room1.walls[1].animations.addAnimation(1, '1', 0, 0);
    room1.walls[1].animations.sHeight = 0;
    room1.walls[1].animations.sWidth = 0;
    room1.walls[1].animations.setCurrSxAndSy(0, 0);
    room1.walls[1].type = 'border';

    room1.walls[2] = new Wall;
    room1.walls[2].set(0, 0, 0, room1.width);
    room1.walls[2].animations.setSprite('game_files/platform_large_10.png');
    room1.walls[2].animations.addAnimation(1, '1', 0, 0);
    room1.walls[2].animations.sHeight = 0;
    room1.walls[2].animations.sWidth = 0;
    room1.walls[2].animations.setCurrSxAndSy(0, 0);
    room1.walls[2].type = 'border';

    room1.walls[3] = new Wall;
    room1.walls[3].set(0, 0, room1.height, 0);
    room1.walls[3].animations.setSprite('game_files/platform_large_10.png');
    room1.walls[3].animations.addAnimation(1, '1', 0, 0);
    room1.walls[3].animations.sHeight = 0;
    room1.walls[3].animations.sWidth = 0;
    room1.walls[3].animations.setCurrSxAndSy(0, 0);
    room1.walls[3].type = 'border';

    //----------------------------------------------------------------------------------------------------------
    //----------------------------------------------PLAYER------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------
    //start
    let currentRoom;
    let currentLocation;
    if(localStorage.getItem('current_room') != null){
        currentRoom = +(localStorage.getItem('current_room'));
    }
    else{
        currentRoom = 0;        
    }
    if(currentRoom == 18){
        window.location.href = 'UWON.html';
    }
    currentLocation = 0;
    let roomStr;
    roomStr = storage[0][currentRoom];
    //console.log(roomStr);
    room.deserialise_alt(roomStr);

    document.getElementById('canvas').height = room.height;
    document.getElementById('canvas').width = room.width;
    let player = new Player();
    player.set(room.player_pos.x, room.player_pos.y, 110, 150);
    player.collider.set(room.player_pos.x + 40, room.player_pos.y + 20, 150, 70);
    player.animations.setSprite('game_files/player_10.png');
    player.animations.addAnimation(1, 'idle_right', 10, 10);
    player.animations.addAnimation(1, 'idle_left', 1050, 190);
    player.animations.addAnimation(1, 'jump_right', 760, 10);
    player.animations.addAnimation(1, 'jump_left', 300, 190);
    player.animations.addAnimation(5, 'run_right', 160, 10, 310, 10, 460, 10, 610, 10, 760, 10);
    player.animations.addAnimation(5, 'run_left', 1050, 190, 900, 190, 750, 190, 600, 190, 450, 190);
    player.animations.addAnimation(1, 'dash_left', 10, 190);
    player.animations.addAnimation(1, 'dash_right', 1060, 10);

    player.animations.sHeight = 170;
    player.animations.sWidth = 140;
    player.animations.dHeight = 170;
    player.animations.dWidth = 140;
    player.animations.setCurrSxAndSy(0, 0);
    player.animations.curr_sx = 10;
    player.animations.curr_sy = 10;

    function resetPlayer(player, room){
        player.speedX = 0;
        player.speedY = 0;
        player.curr_ability = new Ability;
        player.next_ability = new Ability;
        player.set(room.player_pos.x, room.player_pos.y, 110, 150);
        player.collider.set(room.player_pos.x + 40, room.player_pos.y + 20, 150, 70);
    }
    const canvas = document.getElementById("canvas");
    const contxt = canvas.getContext("2d");
    //------------------------------------------------------------------------------------------------
    //------------------------------------IMPORTANT-VARIABLES-----------------------------------------
    //------------------------------------------------------------------------------------------------
    let speed = 30;
    player.speedX = speed;
    player.speedY = speed;
    player.jumpPower = -90;
    const GRAVITY = 10;//pxl/interval
    const ySpeedLimit = 40;//for gravity


    //----------------------------------------------------------------------------------------------------------
    //-------------------------------------------------UI-------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------

    let ui = new UI;
    let direction = 'right';
    let player_state = 'idle';
    let dash_spX = 120;
    let dash_spY = 120;
    let dash_afterSpX = 10;
    let dash_afterSpY = 30;
    addEventListener('keydown', (event) => {
        ui.setDirections('keydown', event);
    });
    addEventListener('keyup', (event) => {
        ui.setDirections('keyup', event);
    });
    addEventListener('keydown', (event) => {
        if (player.isTerminated == false) {
            if (event.code == 'Space' && checkPlatformUnder(player, room.walls) == true) {
                player.speedY = player.jumpPower;
                player_state = 'jump';
            }
            else if (event.code == 'KeyQ' && player.curr_ability.isGoing == false && player.next_ability.isUsed == false) {
                player.setCurrAbility();
                player.curr_ability.isGoing = true;
                if (player.curr_ability.name == 'dash') {
                    player_state = 'dash';
                    dash_spX = 120;
                    dash_spY = 120;
                    dash_afterSpX = 30;
                    dash_afterSpY = 50;
                    if (ui.directions.up != ui.directions.down && ui.directions.left != ui.directions.right) {
                        dash_spX = 100;
                        dash_spY = 100;
                        dash_afterSpY = 40;
                    }

                    if (ui.directions.left > ui.directions.right) {
                        dash_spX *= -1;
                        dash_afterSpX *= -1;
                    }
                    else if (ui.directions.left < ui.directions.right) {

                    }
                    else {
                        dash_spX = 0;
                        dash_afterSpX = 0;
                    }

                    if (ui.directions.up > ui.directions.down) {
                        dash_spY *= -1;
                        dash_afterSpY *= -1;
                    }
                    else if (ui.directions.up < ui.directions.down) {
                    }
                    else {
                        dash_spY = 0;
                        dash_afterSpY = 0;
                    }

                    if (ui.directions.up == ui.directions.down && ui.directions.left == ui.directions.right) {
                        dash_spY = -120;
                        dash_spX = 0;
                        dash_afterSpX = 0;
                        dash_afterSpY = -50;
                    }
                }
            }
            else if (event.code == 'KeyR') {
                player.isTerminated = true;
            }
            else if (event.code == 'KeyW') {
                //platform.ability(player, room.walls);
                if(player.checkCollision(player.collider, room.door.hitbox) == true){
                    currentRoom++;
                    //localStorage.removeItem('currentRoom');
                    localStorage.clear();
                    localStorage.setItem('current_room', currentRoom);
                    if(currentRoom == 18){
                        window.location.href = 'UWON.html';
                    }
                    if(storage[currentLocation].length <= currentRoom){
                        currentRoom = 0;
                        currentLocation ++;
                        if(currentLocation <= storage.length){
                            currentLocation = 0;
                        }
                    }
                    roomStr = storage[0][currentRoom];
                    room.deserialise_alt(storage[0][currentRoom]);
                    resetPlayer(player, room);
                    document.getElementById('canvas').height = room.height;
                    document.getElementById('canvas').width = room.width;
                }
            }
        }
    });

    //----------------------------------------------------------------------------------------------------------
    //------------------------------------------------MAIN------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------

    let actionsInterval = 50;
    let framesInterval = 33;
    
    setInterval(() => {
        if (player.isTerminated == false) {
            if (player.curr_ability.isUsed == true) {
                player_state = '';
            }
            if (player.speedX > 0) {
                direction = 'right';
            }
            else if (player.speedX < 0) {
                direction = 'left';
            }

            if (player_state == 'dash') {

            }
            else if (player_state == 'jump' && player.speedY < 0) {
            }
            else if (player.speedX != 0 && player.speedY == 0) {
                if (checkPlatformUnder(player, room.walls) == true) {
                    player_state = 'run';
                }
            }
            else {
                if (checkPlatformUnder(player, room.walls) == true) {
                    player_state = 'idle';
                }
                else {
                    player_state = 'jump';
                }
            }


            if (player.curr_ability.isGoing == true && player.curr_ability.duration > 0) {
                if (player.curr_ability.name == 'dash') {
                    player.curr_ability.ability(player, dash_spX, dash_spY);
                }
                else if (player.curr_ability.name == 'platform' || player.curr_ability.name == 'hyperjump') {
                    player.curr_ability.ability(player, room.walls);
                }
                else if(player.curr_ability.name == 'teleport'){
                    player.curr_ability.ability(player, ui.directions);
                }
                player.curr_ability.duration--;
            }
            else if (player.curr_ability.isGoing == true && player.curr_ability.duration <= 0) {
                player.curr_ability.isUsed = true;
                if (player.curr_ability.name == 'dash') {
                    player.speedX = dash_afterSpX;
                    player.speedY = dash_afterSpY;
                }
                player.curr_ability.isGoing = false;
            }

            player.move(player.speedX, player.speedY, room.walls, room.spikes, 0, 30);
            if (checkPlatformUnder(player, room.walls) == false) {
                player.speedY += GRAVITY;
                if (player.speedY > ySpeedLimit) {
                    player.speedY = ySpeedLimit;
                }
            }

            else {
                player.speedY = 0;
            }
            if (checkPlatformAbove(player, room.walls) == true) {
                player.speedY = GRAVITY;
            }
            if (ui.directions.left > ui.directions.right) {
                player.speedX = -speed;

            }
            else if (ui.directions.right > ui.directions.left) {
                player.speedX = speed;
            }
            else {
                player.speedX = 0;
            }

            for (let i = 0; i < room.items.length; i++) {
                if (player.next_ability.isGoing == true && player.next_ability.isUsed == false) {
                }
                else {
                    room.items[i].tryToBeUsed(player, 'termination');
                }

                if (room.items[i].isTerminated == true && room.items[i].animations.currFrame + 1 == room.items[i].animations.animations[room.items[i].animations.currAnimation].length) {
                    room.items.splice(i, 1);
                }
            }
        }
    }, actionsInterval);

    //-------------------------------------------------------------------------------------------------------
    //-----------------------------------------------FRAMES--------------------------------------------------
    //-------------------------------------------------------------------------------------------------------
    let backgroundImg = new Image;
    backgroundImg.src = 'game_files/background.png';
    function drawBackground(height, width, contxt, backgroundImg){
        let h = 0;
        let w = 0;
        while(h < height){
            while(w < width){
                contxt.drawImage(backgroundImg, 0, 0, 500, 500, w, h, 500, 500);
                w+= 500;         
            }
            h += 500;
            w = 0;

        }
    }

    
    let frameCounter = 0;
    let prevAnim = 0;
    setInterval(() => {
        contxt.clearRect(0, 0, room.width, room.height);
        player.animations.setCurrAnimation(player_state + '_' + direction);
        if(player.isTerminated == true){
            room.deserialise_alt(roomStr);
            resetPlayer(player, room);
            player.isTerminated = false;
        }
        prevAnim = player.animations.currAnimation;
        if (prevAnim == player.animations.currAnimation) {
            frameCounter++;
        }
        if (frameCounter === 2) {
            player.animations.setNextFrame();
            frameCounter = 0;
        }
        player.animations.setCurrSxAndSy();

        for (let i = 0; i < room.items.length; i++) {

            room.items[i].animations.setCurrSxAndSy();
            if (room.items[i].isTerminated == true) {
                if (room.items[i].animations.currFrame + 1 < room.items[i].animations.animations[room.items[i].animations.currAnimation].length) {
                    room.items[i].animations.setNextFrame();
                }
            }
            else {
                room.items[i].animations.setNextFrame();
            }
        }
        drawBackground(room.height, room.width, contxt, backgroundImg);
        draw('canvas', '2d', room.door, player, room.spikes, room.items, room.walls);
    },
        framesInterval);
}
