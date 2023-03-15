class Point{
    #x;
    #y;

    constructor(){
        this.#x = 0;
        this.#y = 0;
    }

    set(x, y){
        this.#x = x;            
        this.#y = y;
    }

    set x(x){
        this.#x = x;
    }

    get x(){
        return this.#x;
    }

    set y(y){
        this.#y = y;
    }

    get y(){
        return this.#y;
    }
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

class RectHitbox{//rectangular hitbox

    #base;
    #width;//x
    #height;//y
    //0--------------->x
    //|         width           
    //| base-------------------.
    //| |                      |height
    //| .----------------------.
    //\/y

    constructor(){
        this.#base = new Point;
        this.#height = 0;
        this.#width = 0;
    }

    set(x, y, height, width){
        this.#height = height;
        this.#width = width;
        this.#base.x = x;
        this.#base.y = y;
    }

    set base(base){
        this.#base.x = base.x;
        this.#base.y = base.y;
    }

    get base(){
        return this.#base;
    }

    set height(height){
        this.#height = height;
    }

    set width(width){
        this.#width = width;
    }

    get height(){
        return this.#height;
    }

    get width(){
        return this.#width;
    }
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

class Wall{
    #location;
    #hitbox;
    #sprite;

    constructor(){
        this.#hitbox = new RectHitbox;
        this.#location = new Point;
        this.#sprite = new Image;
    }

    set(x, y, height, width){
        this.#location.set(x, y);
        this.#hitbox.base = this.#location;
        this.#hitbox.height = height;
        this.#hitbox.width = width;
    }

    setSprite(height, width, src){
        this.#sprite.width = width;
        this.#sprite.height = height;
        this.#sprite.src = src;
    }

    get location(){
        return this.#location;
    }

    get hitbox(){
        return this.#hitbox;
    }

    set location(location){
        this.#location = location;
    }

    set hitbox(hitbox){
        this.#hitbox = hitbox;
    }

    set sprite(sprite){
        this.#sprite = sprite;
    }

    get sprite(){
        return this.#sprite;
    }
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let mod = function (num) {
    if(num < 0){
        num *= -1;
    }
    return num;
}

class Entity{
    #location;//:Point
    #collider;
    #accell;//accelleration:number:seconds/pixel;

    constructor(){
        this.#location = new Point;
        this.#collider = new RectHitbox;
        this.#collider.base = this.#location;
        this.#accell = 0;
    }

    set(x, y, width, height){
        this.#location.set(x, y);
        this.#collider.base = this.#location;
        this.#collider.height = height;
        this.#collider.width = width;
    }

    get location(){
        return this.#location;
    }

    set location(location){
        this.#location = location;
    }

    get collider(){
        return this.#collider;
    }

    set collider(collider){
        this.#collider = collider;
    }

    set accell(accell){
        this.#accell = accell;
    }

    get accell(){
        return this.#accell;
    }

    move(x_path, y_path, walls, plus_x, plus_y){
        //plus_x and plus_y can be explained as entitys ability to move aside if theres wall in its way
        //example: entity cannot move cuz of wall but if entity was 2px left/right it could, so i add plus_x to 
        //entitys location so it will be able to move further

        //i really dont know how to name these parameters  

        function checkCollision(entity_coll, wall_collider){
            if(entity_coll.base.x >= wall_collider.base.x && entity_coll.base.x <= wall_collider.base.x + wall_collider.width){
            }
            else if(entity_coll.base.x + entity_coll.width >= wall_collider.base.x && entity_coll.base.x + entity_coll.width <= wall_collider.base.x + wall_collider.width){
            }
            else if(entity_coll.base.x <= wall_collider.base.x && entity_coll.base.x + entity_coll.width >= wall_collider.base.x + wall_collider.width){
            }
            else{
                return false;
            }

            if(entity_coll.base.y >= wall_collider.base.y && entity_coll.base.y <= wall_collider.base.y + wall_collider.height){
            }
            else if(entity_coll.base.y + entity_coll.height >= wall_collider.base.y && entity_coll.base.y + entity_coll.height <= wall_collider.base.y + wall_collider.height){
            }
            else if(entity_coll.base.y <= wall_collider.base.y && entity_coll.base.y + entity_coll.height >= wall_collider.base.y + wall_collider.height){
            }
            else{
                return false;
            }

            return true;
        }

        let x_pathPart = 1;
        let y_pathPart = 1;
        if(x_path === 0){
            y_pathPart = y_path;
        }
        else if(y_path === 0){
            x_pathPart = x_path;
        }
        else if(mod(x_path) > mod(y_path)){
            x_pathPart = Math.round(x_path / mod(y_path));
            if(y_path < 0){
                y_pathPart = -1;
            }
        } 
        else {
            y_pathPart = Math.round(y_path / mod(x_path));
            if(x_path < 0){
                x_pathPart = -1;
            }
        }

        function step(path){
            if(path > 0){
                return 1;
            }
            else if(path < 0){
                return -1;
            }
            else{
                return 0;
            }
        }
        
        mainCycle:
        while(mod(x_path) > 0 || mod(y_path) > 0){
            //console.log(x_pathPart + '' + y_pathPart);
            //console.log('a');
            if(mod(x_path) > 0){
                let x_step = step(x_pathPart);
                mainCycleX:
                for(let x_stepPart = 0; x_stepPart < mod(x_pathPart); x_stepPart++){
                    this.#collider.base.x += x_step;
                    this.#location.x += x_step;
                    for(let curr = 0; curr < walls.length; curr++){
                        if(checkCollision(this.#collider, walls[curr].hitbox) == true){
                            this.#collider.base.y += plus_y;
                            this.#location.y += plus_y;
                            if(checkCollision(this.#collider, walls[curr].hitbox) == false){
                                continue;
                            }
                            this.#collider.base.y -= plus_y;
                            this.#collider.base.y -= plus_y;
                            this.#location.y -= plus_y;
                            this.#location.y -= plus_y;
                            if(checkCollision(this.#collider, walls[curr].hitbox) == false){
                                continue;
                            }
                            this.#collider.base.y += plus_y;
                            this.#location.y += plus_y;
                            this.#collider.base.x -= x_step;  
                            this.#location.x -= x_step;
    
                            break mainCycleX;
                        }
                    }
                }
                if(mod(x_path) <= mod(x_pathPart)){
                    x_path = 0;
                }
                else{
                    x_path -= x_pathPart;           
                }

            }

            if(mod(y_path) > 0){
                let y_step = step(y_pathPart);
                mainCycleY:
                for(let y_stepPart = 0; y_stepPart < mod(y_pathPart); y_stepPart++){
                    this.#location.y += y_step;
                    this.#collider.base.y += y_step;
                    for(let curr = 0; curr < walls.length; curr++){
                        if(checkCollision(this.#collider, walls[curr].hitbox) == true){
                            this.#collider.base.x += plus_x;
                            this.#location.x += plus_x;
                            if(checkCollision(this.#collider, walls[curr].hitbox) == false){
                                continue;
                            }
                            this.#location.x -= plus_x;
                            this.#collider.base.x -= plus_x;
                            this.#collider.base.x -= plus_x;
                            this.#location.x -= plus_x;
                            if(checkCollision(this.#collider, walls[curr].hitbox) == false){
                                continue;
                            }
                            this.#location.x += plus_x;
                            this.#collider.base.x += plus_x;
                            this.#collider.base.y -= y_step;
                            this.#location.y -= y_step;
                            break mainCycleY;
                        }
                    }
                }    
                if(mod(y_path) <= mod(y_pathPart)){
                    y_path = 0;
                }
                else{
                    y_path -= y_pathPart;                    
                }

            }
        }
    }
}


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

class Player extends Entity{

    #sprite;
    #location;//:Point
    #collider;
    #accell;//accelleration:number:seconds/pixel;
    speedX;
    speedY;

    constructor(){
        super();
        this.#location = new Point;
        this.#collider = new RectHitbox;
        this.#collider.base = this.#location;
        this.#sprite = new Image;
        this.#accell = 0;
    }

    setSprite(height, width, src){
        this.#sprite.width = width;
        this.#sprite.height = height;
        this.#sprite.src = src;
    }

    set sprite(sprite){
        this.#sprite = sprite;
    }

    getSprite(){
        return this.#sprite;
    }

    get sprite(){
        return this.#sprite;        
    }
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function draw(canvasID, context, ...objects){
    const canvas = document.getElementById(canvasID);
    const contxt = canvas.getContext(context);
    

    for(let curr = 0; curr < objects.length; curr++){
        if(objects[curr]?.length > 1){
            for(let curr_el = 0; curr_el < objects[curr].length; curr_el ++){
                objects[curr][curr_el].sprite.onload = function(){contxt.drawImage(objects[curr][curr_el].sprite,
                objects[curr][curr_el].location.x, objects[curr][curr_el].location.y,objects[curr][curr_el].sprite.height,
                objects[curr][curr_el].sprite.width);}
            
                contxt.drawImage(objects[curr][curr_el].sprite,
                objects[curr][curr_el].location.x, objects[curr][curr_el].location.y,
                objects[curr][curr_el].sprite.height, objects[curr][curr_el].sprite.width)
            }
        }
        else{
            objects[curr].sprite.onload = function(){contxt.drawImage(objects[curr].sprite, objects[curr].location.x, objects[curr].location.y,
            objects[curr].sprite.height, objects[curr].sprite.width);}

            contxt.drawImage(objects[curr].sprite,
            objects[curr].location.x, objects[curr].location.y,
            objects[curr].sprite.height, objects[curr].sprite.width);
        }
    }
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

class Room{
    player_pos;//:Point
    #walls;
    background;
    #width;
    #height;

    constructor(){
        this.player_pos = new Point;
        this.#walls = new Array;
        this.background = new Image;
        this.#height = 0;
        this.#width = 0;
    }

    set walls(walls){
        return this.#walls;
    }

    get walls(){
        return this.#walls;
    }

    setBackground(src){
        this.background.src = src;
        this.background.width = this.#width;
        this.background.height = this.#height;
    }

    set width(width){
        if(width < 0){
            width *= -1;
        }
        this.#width = width;
    }

    get width(){
        return this.#width;
    }

    set height(height){
        if(height < 0){
            height *= -1;
        }
        this.#height = height;
    }

    get height(){
        return this.#height;
    }
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

class Item extends Entity{

    #sprite;
    #collider;
    #location;
    #ability;

    constructor(){
        super();
        this.#location = new Point;
        this.#collider = new RectHitbox;
        this.#collider.base = this.#location;
        this.#sprite = new Image;
    }

    set ability(ability){
        this.#ability = ability;   
    }

    get ability(){
        return this.#ability;
    }
}

//-------------------------------------------------------------------------------------------------
class Ability{
    #duration;
    #ability;

    constructor(){
        this.#duration = 0;
        this.#ability = function(){};
    }

    get duration(){
        return this.#duration;
    }

    get ability(){
        return this.#ability;
    }

    set ability(ability){
        this.#ability = ability;
    }
}

function dash(player, spX, spY){
    player.speedX = spX;
    player.speedY = spY;
}  
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//navigation
Point;
RectHitbox;
//CHECKER;
Entity;
Wall;
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// M             M          A          I   N         N
// MM           MM         A A         I   NN        N
// M M         M M        A   A        I   N N       N
// M  M       M  M       A     A       I   N  NN     N
// M   M     M   M      AAAAAAAAA      I   N    NN   N
// M    M   M    M     A         A     I   N      N  N
// M     M M     M    A           A    I   N       N N
// M      M      M   A             A   I   N        NN
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
playerSpeedX = 0;
playerSpeedY = 0;

const GRAVITY = 4;//pxl/interval
const ySpeedLimit = 30;//for gravity

let arrowRightIsPressed = false;
let arrowLeftIsPressed = false;
addEventListener('keydown', (event)=>{

    if(event.code == 'ArrowRight'){
        arrowRightIsPressed = true;        
        playerSpeedX = speed;
    }
    else if(event.code == 'ArrowLeft'){
        arrowLeftIsPressed = true;
        playerSpeedX = speed * -1;
    }
});
addEventListener('keyup', (event)=>{
    if(event.code == 'ArrowRight'){
        arrowRightIsPressed = false;
        if(arrowLeftIsPressed == false){
            playerSpeedX = 0;
        }
        else{
            playerSpeedX = speed * -1;
        }
    }
    else if(event.code == 'ArrowLeft'){
        arrowLeftIsPressed = false;
        if(arrowRightIsPressed == false){
            playerSpeedX = 0;            
        }
        else{
            playerSpeedX = speed; 
        }

    }
})

let jumpPower = -30;
addEventListener('keydown', (event)=>{
    if(event.code == 'Space' && checkPlatformUnder(player, walls) == true){
        playerSpeedY = jumpPower;
    }
    else if(event.code == 'Enter'){
        player.move(0, 100, walls, 0, 0);
    }
});

let actionsInterval = 50;
setInterval(()=>{

    player.move(playerSpeedX, playerSpeedY, walls, 5, 0);
    if(checkPlatformUnder(player, walls) == false){
        playerSpeedY += GRAVITY;        
        if(playerSpeedY > ySpeedLimit){
            playerSpeedY = ySpeedLimit;
        }
    }
    else{
        playerSpeedY = 0;
    }
    if(checkPlatformAbove(player, walls) == true){
        playerSpeedY = GRAVITY;
    }
}, actionsInterval);

let framesInterval = 25;
setInterval(()=>{
    contxt.clearRect(0, 0, 500, 500);
    draw('canvas', '2d', player, walls);
},
framesInterval);

}