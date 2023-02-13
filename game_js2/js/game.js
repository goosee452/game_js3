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
    //#sprite;

    constructor(){
        this.#hitbox = new RectHitbox;
        this.#location = new Point;
    }

    set(x, y, height, width){
        this.#location.set(x, y);
        this.#hitbox.base = this.#location;
        this.#hitbox.height = height;
        this.#hitbox.width = width;
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

    move(x_speed, y_speed, walls){
        let x_step = 1;
        let y_step = 1;
        if(x_speed < 0){
            x_step = -1;
        }
        if(y_speed < 0){
            y_step = -1;
        }

        for(x_path = 0; x_path < mod(x_speed); x_path++){
            this.#hitbox.x += x_step;
            for(let curr = 0; curr < walls.length; curr++){
                if(CHECKER.checkCollision(this.#hitbox, walls[curr]) == true){
                    this.#hitbox.x -= x_step;
                    break;
                }
            }
        }
        for(y_path = 0; y_path < mod(y_speed); y_path++){
            this.#hitbox += y_step;
            for(let curr = 0; curr < walls.length; curr++){
                if(CHECKER.checkCollision(this.#hitbox, walls[curr]) == true){
                    this.#hitbox.x -= y_step;
                    break;
                }
            }
        }
    }
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


class CHECKER{
    static checkCollision(round_hitbox, rect_hitbox){

         if(Math.pow(round_hitbox.base.x - rect_hitbox.base.x, 2) + Math.pow(round_hitbox.base.y - rect_hitbox.base.y, 2)
          <= Math.pow(round_hitbox.radius, 2)){
            return true;
         }
         else if(Math.pow(round_hitbox.base.x - rect_hitbox.base.x - rect_hitbox.width, 2) + Math.pow(round_hitbox.base.y - rect_hitbox.base.y, 2)
          <= Math.pow(round_hitbox.radius, 2)){
            return true;
         }
         else if(Math.pow(round_hitbox.base.x - rect_hitbox.base.x, 2) + Math.pow(round_hitbox.base.y - rect_hitbox.base.y + rect_hitbox.height, 2)
          <= Math.pow(round_hitbox.radius, 2)){
            return true;
         }
         else if(Math.pow(round_hitbox.base.x - rect_hitbox.base.x - rect_hitbox.width, 2) + Math.pow(round_hitbox.base.y - rect_hitbox.base.y + rect_hitbox.height, 2)
          <= Math.pow(round_hitbox.radius, 2)){
            return true;
         }
         //---------------------------------------
         else if(round_hitbox.base.x <= rect_hitbox.base.x + width && round_hitbox.base.x >= rect_hitbox.base.x){
            if(round_hitbox.base.y + radius >= rect_hitbox.base.y && round_hitbox.base.y - radius <= rect_hitbox.base.y + height){
                return true;
            }
         }
         else if(round_hitbox.base.y <= rect_hitbox.base.y + height && round_hitbox.base.y >= rect_hitbox.base.y){
            if(round_hitbox.base.x + radius >= rect_hitbox.base.x && round_hitbox.base.x - radius <= rect_hitbox.base.x + width){
                return true;
            }
         }

         return false;
    }
}