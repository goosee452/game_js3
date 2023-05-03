function checkPlatformUnder(player, walls) {
    playerPosY = player.location.y;
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
    playerPosY = player.location.y;
    player.move(0, -1, walls, 0, 0);
    if (player.location.y === playerPosY) {
        return true;
    }
    else {
        player.move(0, 1, walls, 0, 0);
        return false;
    }
}


let storage = new Array(5);
storage[0] = new Array(3);
storage[0][0] = '{"player_pos":{"x":0,"y":0},"background_src":"","width":0,"height":0,"walls":[{"location":{"x":100,"y":300},"hitbox":{"base":{"x":100,"y":300},"height":100,"width":100},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":100,"sHeight":100,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v4/game_js2/wall.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":0,"y":1000},"hitbox":{"base":{"x":0,"y":1000},"height":0,"width":1000},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":100,"sHeight":100,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v4/game_js2/wall.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}}],"items":[{"location":{"x":750,"y":750},"collider":{"base":{"x":750,"y":750},"height":100,"width":100},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":100,"sHeight":100,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v4/game_js2/game_files/dash_crystal_10.png"},"animations":[[[0,0]],[[500,0],[600,0],[700,0]]],"animationsMap":[["idle",1],["termination",2]]},"ability":{"duration":3,"isGoing":false,"isUsed":false,"name":"dash"},"isTerminated":0},{"location":{"x":750,"y":500},"collider":{"base":{"x":750,"y":500},"height":100,"width":100},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":100,"sHeight":100,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v4/game_js2/game_files/platform_crystal_10.png"},"animations":[[[0,0]],[[500,0],[600,0],[700,0]]],"animationsMap":[["idle",1],["termination",2]]},"ability":{"duration":1,"isGoing":false,"isUsed":true,"name":"platform"},"isTerminated":0}],"spikes":[{"location":{"x":0,"y":400},"hitbox":{"base":{"x":0,"y":400},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":0,"y":950},"hitbox":{"base":{"x":0,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}}]}';
storage[0][1] = '{"player_pos":{"x":180,"y":420},"background_src":"","width":2000,"height":1000,"walls":[{"location":{"x":0,"y":1000},"hitbox":{"base":{"x":0,"y":1000},"height":0,"width":2000},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":0,"sHeight":0,"sprites":{"src":"file:///D:/sluchanko_vladislav/game_js3/v4/game_js2/game_files/platform_large_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":2000,"y":0},"hitbox":{"base":{"x":2000,"y":0},"height":1000,"width":0},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":0,"sHeight":0,"sprites":{"src":"file:///D:/sluchanko_vladislav/game_js3/v4/game_js2/game_files/platform_large_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":0,"y":0},"hitbox":{"base":{"x":0,"y":0},"height":0,"width":2000},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":0,"sHeight":0,"sprites":{"src":"file:///D:/sluchanko_vladislav/game_js3/v4/game_js2/game_files/platform_large_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":0,"y":0},"hitbox":{"base":{"x":0,"y":0},"height":1000,"width":0},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":0,"sHeight":0,"sprites":{"src":"file:///D:/sluchanko_vladislav/game_js3/v4/game_js2/game_files/platform_large_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":50,"y":600},"hitbox":{"base":{"x":50,"y":600},"height":150,"width":400},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":400,"sHeight":150,"sprites":{"src":"file:///D:/sluchanko_vladislav/game_js3/v4/game_js2/game_files/platform_large_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":1550,"y":600},"hitbox":{"base":{"x":1550,"y":600},"height":150,"width":400},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":400,"sHeight":150,"sprites":{"src":"file:///D:/sluchanko_vladislav/game_js3/v4/game_js2/game_files/platform_large_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}}],"items":[{"location":{"x":950,"y":550},"collider":{"base":{"x":950,"y":550},"height":100,"width":100},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":100,"sHeight":100,"sprites":{"src":"file:///D:/sluchanko_vladislav/game_js3/v4/game_js2/game_files/dash_crystal_10.png"},"animations":[[[0,0]],[[500,0],[600,0],[700,0]]],"animationsMap":[["idle",1],["termination",2]]},"ability":{"duration":3,"isGoing":false,"isUsed":false,"name":"dash"},"isTerminated":0}],"spikes":[{"location":{"x":0,"y":950},"hitbox":{"base":{"x":0,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///D:/sluchanko_vladislav/game_js3/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":200,"y":950},"hitbox":{"base":{"x":200,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///D:/sluchanko_vladislav/game_js3/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":400,"y":950},"hitbox":{"base":{"x":400,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///D:/sluchanko_vladislav/game_js3/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":600,"y":950},"hitbox":{"base":{"x":600,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///D:/sluchanko_vladislav/game_js3/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":800,"y":950},"hitbox":{"base":{"x":800,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///D:/sluchanko_vladislav/game_js3/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":1000,"y":950},"hitbox":{"base":{"x":1000,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///D:/sluchanko_vladislav/game_js3/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":1200,"y":950},"hitbox":{"base":{"x":1200,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///D:/sluchanko_vladislav/game_js3/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":1400,"y":950},"hitbox":{"base":{"x":1400,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///D:/sluchanko_vladislav/game_js3/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":1600,"y":950},"hitbox":{"base":{"x":1600,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///D:/sluchanko_vladislav/game_js3/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":1800,"y":950},"hitbox":{"base":{"x":1800,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///D:/sluchanko_vladislav/game_js3/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}}]}'
storage[0][2] = '{"player_pos":{"x":180,"y":420},"background_src":"","width":2500,"height":1000,"walls":[{"location":{"x":0,"y":1000},"hitbox":{"base":{"x":0,"y":1000},"height":0,"width":2500},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":0,"sHeight":0,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/platform_large_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":2500,"y":0},"hitbox":{"base":{"x":2500,"y":0},"height":1000,"width":0},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":0,"sHeight":0,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/platform_large_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":0,"y":0},"hitbox":{"base":{"x":0,"y":0},"height":0,"width":2500},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":0,"sHeight":0,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/platform_large_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":0,"y":0},"hitbox":{"base":{"x":0,"y":0},"height":1000,"width":0},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":0,"sHeight":0,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/platform_large_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":50,"y":600},"hitbox":{"base":{"x":50,"y":600},"height":150,"width":400},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":400,"sHeight":150,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/platform_large_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":800,"y":750},"hitbox":{"base":{"x":800,"y":750},"height":150,"width":400},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":400,"sHeight":150,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/platform_large_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}}],"items":[{"location":{"x":950,"y":550},"collider":{"base":{"x":950,"y":550},"height":100,"width":100},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":100,"sHeight":100,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/dash_crystal_10.png"},"animations":[[[0,0]],[[500,0],[600,0],[700,0]]],"animationsMap":[["idle",1],["termination",2]]},"ability":{"duration":3,"isGoing":false,"isUsed":false,"name":"dash"},"isTerminated":0}],"spikes":[{"location":{"x":0,"y":950},"hitbox":{"base":{"x":0,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":200,"y":950},"hitbox":{"base":{"x":200,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":400,"y":950},"hitbox":{"base":{"x":400,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":600,"y":950},"hitbox":{"base":{"x":600,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":800,"y":950},"hitbox":{"base":{"x":800,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":1000,"y":950},"hitbox":{"base":{"x":1000,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":1200,"y":950},"hitbox":{"base":{"x":1200,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":1400,"y":950},"hitbox":{"base":{"x":1400,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":1600,"y":950},"hitbox":{"base":{"x":1600,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}},{"location":{"x":1800,"y":950},"hitbox":{"base":{"x":1800,"y":950},"height":50,"width":200},"animations":{"curr_sx":0,"curr_sy":0,"sWidth":200,"sHeight":50,"sprites":{"src":"file:///C:/Users/User/js/gamejs/v5/v4/game_js2/game_files/spikes_10.png"},"animations":[[[0,0]]],"animationsMap":[["1",1]]}}]}'
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
{
    let room = new Room;
    let room1 = new Room;
    //----------------------------------------------------------------------------------------------------------
    //----------------------------------------------WALLS-------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------

    room1.player_pos.set(180, 420);
    room1.height = 1000;
    room1.width = 2500;

    room1.walls = new Array(6);

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

    room1.walls[4] = setPlatformLarge(50, 600);
    room1.walls[5] = setPlatformLarge(800, 750);
    


    //----------------------------------------------------------------------------------------------------------
    //------------------------------------------------SPIKES----------------------------------------------------
    //----------------------------------------------------------------------------------------------------------

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

    room1.spikes = new Array(10);
    room1.spikes[0] = setSpike(0, 950);
    room1.spikes[1] = setSpike(200, 950);
    room1.spikes[2] = setSpike(400, 950);
    room1.spikes[3] = setSpike(600, 950);
    room1.spikes[4] = setSpike(800, 950);
    room1.spikes[5] = setSpike(1000, 950);
    room1.spikes[6] = setSpike(1200, 950);
    room1.spikes[7] = setSpike(1400, 950);
    room1.spikes[8] = setSpike(1600, 950);
    room1.spikes[9] = setSpike(1800, 950);
    //----------------------------------------------------------------------------------------------------------
    //---------------------------------------------ABILITIES----------------------------------------------------
    //----------------------------------------------------------------------------------------------------------

    let dash = new Ability;
    dash.name = 'dash';
    dash.duration = 3;
    dash.ability = (player, spX, spY) => {
        player.speedX = spX;
        player.speedY = spY;
    };
    dash.isUsed = false;

    let platform = new Ability;
    platform.name = 'platform';
    platform.duration = 1;
    platform.ability = (player, walls) => {
        let new_wall = new Wall;
        new_wall.set(player.collider.base.x + 60, player.collider.base.y + player.collider.height + 10, 40, 240);
        new_wall.animations.setSprite('game_files/player_platform_10.png');
        new_wall.animations.dHeight = 100;
        new_wall.animations.dWidth = 600;
        new_wall.animations.sHeight = 40;
        new_wall.animations.sWidth = 240;
        new_wall.animations.addAnimation(1, 'idle', 0, 0);
        walls.push(new_wall);
    };
    //----------------------------------------------------------------------------------------------------------
    //-----------------------------------------------ITEMS------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------

    room1.items = new Array(1);
    room1.items[0] = new Item;

    let new_item = new Item;
    new_item.ability = dash;
    new_item.animations.setSprite('game_files/dash_crystal_10.png');
    new_item.location.set(750, 750);
    new_item.collider.set(750, 750, 100, 100);
    new_item.animations.addAnimation(1, 'idle', 0, 0);
    new_item.animations.addAnimation(3, 'termination', 500, 0, 600, 0, 700, 0);
    new_item.animations.sHeight = 100;
    new_item.animations.sWidth = 100;

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

    room1.items[0] = setDashCrystal(950, 550);

    //----------------------------------------------------------------------------------------------------------
    //----------------------------------------------PLAYER------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------
    //start
    let roomStr = JSON.stringify(room1.serialise());
    console.log(room1.serialise_alt());
    roomStr = storage[0][2];
    room.deserialise(roomStr);
    //console.log(storage[0][1]);
    //console.log(roomStr);
    //roomStr = room1.serialise_alt();
    room1.deserialise_alt(room1.serialise_alt());
    console.log(room1.spikes[0]);
    console.log(JSON.stringify(room1.serialise()))
    //start
    document.getElementById('canvas').height = room.height;
    document.getElementById('canvas').width = room.width;
    console.log();
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
            else if (event.code == 'KeyQ' && player.curr_ability.isUsed == false && player.curr_ability.isGoing == false) {
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
            else if (event.code == 'KeyW') {
                platform.ability(player, room.walls);
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
                else if (player.curr_ability.name == 'platform') {
                    player.curr_ability.ability(player, room.walls);
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
                if (player.curr_ability.isGoing == true && player.curr_ability.isUsed == false) {
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
    let frameCounter = 0;
    let prevAnim = 0;
    let newImg = new Image;
    newImg.src = 'wall.png';
    setInterval(() => {
        contxt.clearRect(0, 0, room.height, room.width);

        player.animations.setCurrAnimation(player_state + '_' + direction);
        if(player.isTerminated == true){
            room.deserialise(roomStr);
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
        contxt.fillRect(0, 0, room.width,room.height);
        draw('canvas', '2d', player, room.walls, room.items, room.spikes);
    },
        framesInterval);
}
