import { Point } from "./point.js";
import { RectHitbox } from "./rectHitbox.js";
import { CircleHitbox } from "./circleHitbox.js";
import { CHECKER } from "./checker.js";


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

export {mod , Entity};