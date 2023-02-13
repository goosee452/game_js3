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


class CircleHitbox{
    #base;//:Point
    #radius;

    constructor(){
        this.#base = new Point;
        this.#radius = 0;
    }

    set(base_x, base_y, radius){
        this.#base.set(base_x, base_y);
        this.#radius = radius;
    }

    set base(base){
        this.#base.set(base.x, base.y);
    }

    get base(){
        return this.#base;
    }

    set radius(radius){
        this.#radius = radius;
    }

    get radius(){
        return this.#radius;
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
    #hitbox;//:circle hitbox

    constructor(){
        this.#location = new Point;
        this.#hitbox = new CircleHitbox;
        this.#hitbox.base = this.#location;
    }

    set(x, y, radius){
        this.#location.set(x, y);
        this.#hitbox.base = this.#location;
        this.#hitbox.radius = radius;
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
    move(x_speed, y_speed, walls, plus_x, plus_y){
        //plus_x and plus_y can be explained as entitys ability to move aside if theres wall in its way
        //example: entity cannot move cuz of wall but if entity was 2px left/right it could, so i add plus_x to 
        //entitys location so it will be able to move further

        //i really dont know how to name these parameters  

        function checkCollision(round_hitbox, rect_hitbox){

            //console.log(round_hitbox.base.x);
            //console.log(rect_hitbox.base.x);
            
            if(Math.pow(round_hitbox.base.x - rect_hitbox.base.x, 2) + Math.pow(round_hitbox.base.y - rect_hitbox.base.y, 2)
             <= Math.pow(round_hitbox.radius, 2)){
               return true;
            }
            else if(Math.pow(round_hitbox.base.x - rect_hitbox.base.x - rect_hitbox.width, 2) + Math.pow(round_hitbox.base.y - rect_hitbox.base.y, 2)
             <= Math.pow(round_hitbox.radius, 2)){
               return true;
            }
            else if(Math.pow(round_hitbox.base.x - rect_hitbox.base.x, 2) + Math.pow(round_hitbox.base.y - rect_hitbox.base.y - rect_hitbox.height, 2)
             <= Math.pow(round_hitbox?.radius, 2)){
               return true;
            }
            else if(Math.pow(round_hitbox.base.x - rect_hitbox.base.x - rect_hitbox.width, 2)
             + Math.pow(round_hitbox.base.y - rect_hitbox.base.y - rect_hitbox.height, 2)
             <= Math.pow(round_hitbox.radius, 2)){
               return true;

            }
            //console.log(1);
            //---------------------------------------
            else if(round_hitbox.base.x <= rect_hitbox.base.x + rect_hitbox.width && round_hitbox.base.x >= rect_hitbox.base.x){ 
                if(round_hitbox.base.y + round_hitbox.radius >= rect_hitbox.base.y &&
                 round_hitbox.base.y + round_hitbox.radius <= rect_hitbox.base.y + rect_hitbox.height){
                   return true;
                }
                else if(round_hitbox.base.y - round_hitbox.radius >= rect_hitbox.base.y &&
                round_hitbox.base.y - round_hitbox.radius <= rect_hitbox.base.y + rect_hitbox.height){
                    return true;
                }
            }
            else if(round_hitbox.base.y <= rect_hitbox.base.y + rect_hitbox.height && round_hitbox.base.y >= rect_hitbox.base.y){
            
                if(round_hitbox.base.x + round_hitbox.radius >= rect_hitbox.base.x &&
                 round_hitbox.base.x + round_hitbox.radius <= rect_hitbox.base.x + rect_hitbox.width){
                   return true;
                }
                else if(round_hitbox.base.x - round_hitbox.radius >= rect_hitbox.base.x &&
                     round_hitbox.base.x - round_hitbox.radius<= rect_hitbox.base.x + rect_hitbox.width){
                    return true;
                }
            }
   
            return false;
        }

        let x_step = 1;
        let y_step = 1;
        if(x_speed < 0){
            x_step = -1;
        }
        if(y_speed < 0){
            y_step = -1;
        }

        for(let x_path = 0; x_path < mod(x_speed); x_path++){
            this.#hitbox.base.x += x_step;
            this.#location.x += x_step;
            for(let curr = 0; curr < walls.length; curr++){
                if(checkCollision(this.#hitbox, walls[curr].hitbox) == true){
                    this.#hitbox.base.y += plus_y;
                    this.#location.y += plus_y;
                    if(checkCollision(this.#hitbox, walls[curr].hitbox) == false){
                        continue;
                    }
                    this.#hitbox.base.y -= plus_y;
                    this.#location.y -= plus_y;
                    this.#hitbox.base.y-= plus_y;
                    this.#location.y -= plus_y;
                    if(checkCollision(this.#hitbox, walls[curr].hitbox) == false){
                        continue;
                    }
                    this.#hitbox.base.y += plus_y;
                    this.#location.y += plus_y;
                    this.#hitbox.base.x -= x_step;
                    this.#location.x -= x_step;

                    break;
                }
            }

        }
        for(let y_path = 0; y_path < mod(y_speed); y_path++){
            this.#location.y += y_step;
            this.#hitbox.base.y += y_step;
            for(let curr = 0; curr < walls.length; curr++){
                if(checkCollision(this.#hitbox, walls[curr].hitbox) == true){
                    this.#hitbox.base.x += plus_x;
                    this.#location.x += plus_x;
                    if(checkCollision(this.#hitbox, walls[curr].hitbox) == false){
                        continue;
                    }
                    this.#hitbox.base.x -= plus_x;
                    this.#location.x -= plus_x;
                    this.#hitbox.base.x-= plus_x;
                    this.#location.x -= plus_x;
                    if(checkCollision(this.#hitbox, walls[curr].hitbox) == false){
                        continue;
                    }
                    this.#hitbox.base.x += plus_x;
                    this.#location.x += plus_x;
                    this.#hitbox.base.y -= y_step;
                    this.#location.y -= y_step;
                    break;
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
    #hitbox;//:circle hitbox

    constructor(){
        super();
        this.#location = new Point;
        this.#hitbox = new CircleHitbox;
        this.#hitbox.base = this.location;
        this.#sprite = new Image;
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

class Bullet extends Entity{

    #location;
    #hitbox;
    damage;
    #sprite;

        constructor(){
        super();
        this.#location = new Point;
        this.#hitbox = new CircleHitbox;
        this.#hitbox.base = this.location;
        this.#sprite = new Image;
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

class Enemy extends Entity{

    #sprite;
    #location;//:Point
    #hitbox;//:circle hitbox

    constructor(){
        super();
        this.#location = new Point;
        this.#hitbox = new CircleHitbox;
        this.#hitbox.base = this.location;
        this.#sprite = new Image;
    }

    findPath(x, y){
        
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


// class CHECKER{
//     static checkCollision(round_hitbox, rect_hitbox){

//          if(Math.pow(round_hitbox.base.x - rect_hitbox.base.x, 2) + Math.pow(round_hitbox.base.y - rect_hitbox.base.y, 2)
//           <= Math.pow(round_hitbox.radius, 2)){
//             return true;
//          }
//          else if(Math.pow(round_hitbox.base.x - rect_hitbox.base.x - rect_hitbox.width, 2) + Math.pow(round_hitbox.base.y - rect_hitbox.base.y, 2)
//           <= Math.pow(round_hitbox.radius, 2)){
//             return true;
//          }
//          else if(Math.pow(round_hitbox.base.x - rect_hitbox.base.x, 2) + Math.pow(round_hitbox.base.y - rect_hitbox.base.y + rect_hitbox.height, 2)
//           <= Math.pow(round_hitbox.radius, 2)){
//             return true;
//          }
//          else if(Math.pow(round_hitbox.base.x - rect_hitbox.base.x - rect_hitbox.width, 2) + Math.pow(round_hitbox.base.y - rect_hitbox.base.y + rect_hitbox.height, 2)
//           <= Math.pow(round_hitbox.radius, 2)){
//             return true;
//          }
//          //---------------------------------------
//          else if(round_hitbox.base.x <= rect_hitbox.base.x + width && round_hitbox.base.x >= rect_hitbox.base.x){
//             if(round_hitbox.base.y + radius >= rect_hitbox.base.y && round_hitbox.base.y - radius <= rect_hitbox.base.y + height){
//                 return true;
//             }
//          }
//          else if(round_hitbox.base.y <= rect_hitbox.base.y + height && round_hitbox.base.y >= rect_hitbox.base.y){
//             if(round_hitbox.base.x + radius >= rect_hitbox.base.x && round_hitbox.base.x - radius <= rect_hitbox.base.x + width){
//                 return true;
//             }
//          }

//          return false;
//     }
// }

//navigation
Point;
RectHitbox;
//CHECKER;
CircleHitbox;
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

// function draw(){
//     const canvas = document.getElementById("canvas");
//     const contxt = canvas.getContext("2d");

//     contxt.fillRect(100, 100, 100, 100);
// }

let walls = new Array(1);
// walls[0] = new Wall;
// walls[0].set(100, 100, 100, 100);
let a = new Wall;
let b = new Wall;
b.set(150, 150, 100, 100);

a.set(100, 100, 100, 100);
b.setSprite(100, 100, 'wall.png');
a.setSprite(100, 100, 'wall.png');
walls[0] = a;
walls[1] = b;
console.log(walls[0].location.x);

let player = new Player;
//player.setAll(300, 300, 300, 300, 50, 100, 100, 'player.png');
player.set(300, 300, 50);
player.location.x = 250;
player.location.y = 250;
player.setSprite(100, 100, 'player.png');

const canvas = document.getElementById("canvas");
const contxt = canvas.getContext("2d");

draw('canvas', '2d', player, walls);
addEventListener("keydown", (event) =>{
    if(event.code === 'ArrowUp'){
        contxt.clearRect(0, 0, 500, 500);
        player.move(0, 10, walls, 1, 0);
        draw('canvas', '2d', player, walls);
    }
    else if(event.code === 'ArrowLeft'){
        contxt.clearRect(0, 0, 500, 500);
        player.move(-10, 0, walls, 0, 1);
        draw('canvas', '2d', player, walls);
    }
    else if(event.code === 'ArrowRight'){
        contxt.clearRect(0, 0, 500, 500);
        player.move(10, 0, walls, 0, 1);
        draw('canvas', '2d', player, walls);
    }
    else if(event.code === 'ArrowDown'){
        contxt.clearRect(0, 0, 500, 500);
        player.move(0, -1, walls, 1, 0);
        draw('canvas', '2d', player, walls);
    }
    else if(event.code === 'Enter'){
        console.log(player.location.x + ' ' + player.hitbox.base.x);
        console.log(player.location.y + ' ' + player.hitbox.base.y);
        console.log('-----');
        console.log(a.location.x+' '+ a.hitbox.base.x);
        console.log(a.location.y+' '+ a.hitbox.base.y);
    }
});